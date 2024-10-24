---
id: animatedsprite
sidebar_label: AnimatedSprite
title: AnimatedSprite
description: An AnimatedSprite encapsulates a SpriteSheet with methods to set the current animation and control the playback. 
---

import AdventurerSpriteSheet from './adventurer.png'
import IdleAnimation from './idle_animation.gif'
import AttackNoIdle from './attack_no_idle.gif'
import EventTrigger from './event_trigger.gif'

:::tip[Up to date]
This page is **up to date** for MonoGame.Extended `@mgeversion@`.  If you find outdated information, [please open an issue](https://github.com/craftworkgames/craftworkgames.github.io/issues).
:::

In the [previous document](/docs/features/2d-animations/spritesheet/spritesheet.md) about `SpriteSheets` we went over how to create a `SpriteSheet`, define animations, and retrieve the animations from it.  Doing this only gives use the `SpriteSheetAnimation` instance for that animation, which we then have to create an `AnimationController` with to manage that single animation.

However, typically a `SpriteSheet` is going to contain several animations related to a single concept, like all of the animations for a player.  To better manage controlling the animations from the `SpriteSheet` we can use the `AnimatedSprite` class.

Let's use the same example adventurer character from the `SpriteSheet` document.

<figure>
    <img src={AdventurerSpriteSheet} style={{width: '100%', imageRendering: 'pixelated'}}/>
    <figcaption>
        <small>
            <a href="https://rvros.itch.io/animated-pixel-hero">Animated Pixel Adventurer</a> by <a href="https://rvros.itch.io/">rvros</a>; Licensed for free and commercial use.
        </small>
    </figcaption>
</figure>

## Creating an `AnimatedSprite`
To create an `AnimatedSprite` first a `SpriteSheet` needs to be created with the animations defined.  Building off of our previous example, it would look like this

```cs
protected override void LoadContent()
{
    _spriteBatch = new SpriteBatch(GraphicsDevice);

    //highlight-next-line
    Texture2D adventurerTexture = Content.Load<Texture2D>("adventurer");
    //highlight-next-line
    Texture2DAtlas atlas = Texture2DAtlas.Create("Atlas/adventurer", adventurerTexture, 50, 37);
    //highlight-next-line
    SpriteSheet spriteSheet = new SpriteSheet("SpriteSheet/adventurer", atlas);

    //highlight-next-line
    spriteSheet.DefineAnimation("attack", builder =>
    //highlight-next-line
    {
        //highlight-next-line
        builder.IsLooping(false)
                //highlight-next-line
               .AddFrame(regionIndex: 0, duration: TimeSpan.FromSeconds(0.1))
               //highlight-next-line
               .AddFrame(1, TimeSpan.FromSeconds(0.1))
               //highlight-next-line
               .AddFrame(2, TimeSpan.FromSeconds(0.1))
               //highlight-next-line
               .AddFrame(3, TimeSpan.FromSeconds(0.1))
               //highlight-next-line
               .AddFrame(4, TimeSpan.FromSeconds(0.1))
               //highlight-next-line
               .AddFrame(5, TimeSpan.FromSeconds(0.1));
    //highlight-next-line
    });

    //highlight-next-line
    spriteSheet.DefineAnimation("idle", builder =>
    //highlight-next-line
    {
        //highlight-next-line
        builder.IsLooping(true)
                //highlight-next-line
               .AddFrame(6, TimeSpan.FromSeconds(0.1))
               //highlight-next-line
               .AddFrame(7, TimeSpan.FromSeconds(0.1))
               //highlight-next-line
               .AddFrame(8, TimeSpan.FromSeconds(0.1))
               //highlight-next-line
               .AddFrame(9, TimeSpan.FromSeconds(0.1));
    //highlight-next-line
    });

    //highlight-next-line
    spriteSheet.DefineAnimation("run", builder =>
    //highlight-next-line
    {
        //highlight-next-line
        builder.IsLooping(true)
                //highlight-next-line
               .AddFrame(10, TimeSpan.FromSeconds(0.1))
               //highlight-next-line
               .AddFrame(11, TimeSpan.FromSeconds(0.1))
               //highlight-next-line
               .AddFrame(12, TimeSpan.FromSeconds(0.1))
               //highlight-next-line
               .AddFrame(13, TimeSpan.FromSeconds(0.1))
               //highlight-next-line
               .AddFrame(14, TimeSpan.FromSeconds(0.1))
               //highlight-next-line
               .AddFrame(15, TimeSpan.FromSeconds(0.1));
    //highlight-next-line
    });
}
```

This creates the `Texture2DAtlas` using the `Texture2DAtlas.Create` method to automatically generate the regions, creates a `SpriteSheet` using the atlas, then defines the animations for the `attack`, `idle`, and `run` animations.  **Note that the `attack` animation is set to `false` for looping.  This will be important later.**

Now that we have the `SpriteSheet` defined, let's use it to create an `AnimatedSprite`



```cs
// highlight-next-line
private AnimatedSprite _adventurer;

protected override void LoadContent()
{
    _spriteBatch = new SpriteBatch(GraphicsDevice);

    Texture2D adventurerTexture = Content.Load<Texture2D>("adventurer");
    Texture2DAtlas atlas = Texture2DAtlas.Create("Atlas/adventurer", adventurerTexture, 50, 37);
    SpriteSheet spriteSheet = new SpriteSheet("SpriteSheet/adventurer", atlas);

    spriteSheet.DefineAnimation("attack", builder =>
    {
        builder.IsLooping(true)
               .AddFrame(regionIndex: 0, duration: TimeSpan.FromSeconds(0.1))
               .AddFrame(1, TimeSpan.FromSeconds(0.1))
               .AddFrame(2, TimeSpan.FromSeconds(0.1))
               .AddFrame(3, TimeSpan.FromSeconds(0.1))
               .AddFrame(4, TimeSpan.FromSeconds(0.1))
               .AddFrame(5, TimeSpan.FromSeconds(0.1));
    });

    spriteSheet.DefineAnimation("idle", builder =>
    {
        builder.IsLooping(true)
               .AddFrame(6, TimeSpan.FromSeconds(0.1))
               .AddFrame(7, TimeSpan.FromSeconds(0.1))
               .AddFrame(8, TimeSpan.FromSeconds(0.1))
               .AddFrame(9, TimeSpan.FromSeconds(0.1));
    });

    spriteSheet.DefineAnimation("run", builder =>
    {
        builder.IsLooping(true)
               .AddFrame(10, TimeSpan.FromSeconds(0.1))
               .AddFrame(11, TimeSpan.FromSeconds(0.1))
               .AddFrame(12, TimeSpan.FromSeconds(0.1))
               .AddFrame(13, TimeSpan.FromSeconds(0.1))
               .AddFrame(14, TimeSpan.FromSeconds(0.1))
               .AddFrame(15, TimeSpan.FromSeconds(0.1));
    });

    // highlight-next-line
    _adventurer = new AnimatedSprite(spriteSheet, "idle");
}
```

## Updating the `AnimatedSprite`
The `AnimatedSprite` needs to be updated each frame so it can track the progressof the animation and change frames when the duration for the current frame has passed

```cs
protected override void Update(GameTime gameTime)
{
    // highlight-next-line
    _adventurer.Update(gameTime);
}
```

## Drawing the `AnimatedSprite`
The `AnimatedSprite` class is a child class of the `Sprite` class, so drawing it is done the same way, by just passing it to the `SpriteBatch.Draw` overload.

```cs
protected override void Draw(GameTime gameTime)
{
    GraphicsDevice.Clear(Color.CornflowerBlue);

    _spriteBatch.Begin(samplerState: SamplerState.PointClamp);
    // highlight-next-line
    int scale = 3;
    // highlight-next-line
    _spriteBatch.Draw(_adventurer, _adventurer.Origin * scale, 0, new Vector2(scale));
    _spriteBatch.End();

    base.Draw(gameTime);
}
```

<figure>
    <img src={IdleAnimation} style={{width: '100%', imageRendering: 'pixelated'}}/>
    <figcaption>
        <small>
            The result of drawing the `AnimatedSprite` from the example code above.
        </small>
    </figcaption>
</figure>

## Using Animation Event Triggers
Internally the `AnimatedSprite` uses the `IAnimationController` to control and manage the playback of the current animation.  The `IAnimationController` interface provides an event that can be subscribed to that will trigger on various events.

For instance, in our example above, we set the `attack` animation to non looping. So let's update our code so that when we press the enter key, it performs the `attack` animation.

```cs
// highlight-next-line
private KeyboardListener _keyboardListener;

protected override void Initialize()
{
    // highlight-next-line
    _keyboardListener = new KeyboardListener();
    // highlight-next-line
    _keyboardListener.KeyPressed += (sender, eventArgs) =>
    // highlight-next-line
    {
        // highlight-next-line
        if (eventArgs.Key == Keys.Enter && _adventurer.CurrentAnimation == "idle")
        // highlight-next-line
        {
            // highlight-next-line
            _adventurer.SetAnimation("attack");
        // highlight-next-line
        }
    // highlight-next-line
    };
}

protected override void Update(GameTime gameTime)
{
    // highlight-next-line
    _keyboardListener.Update(gameTime);
    _adventurer.Update(gameTime);
}
```

Now, if we run our sample and press the `Enter` key, the attack animation will play, but then when it ends, nothing happens.  This is because we told it to be a non-looping animation when we defined it.

<figure>
    <img src={AttackNoIdle} style={{width: '100%', imageRendering: 'pixelated'}}/>
    <figcaption>
        <small>
            When we hit enter to set the attack animation, the attack animation plays, but since it's non-looping, it stops and does nothing after.
        </small>
    </figcaption>
</figure>

Instead, we would like to tell it that when the animation completes, it should go back to the `idle` animation.  We can do this using the `IAnimationController.OnAnimationEvent` event.

Modify the code to the following

```cs
protected override void Initialize()
{
    _keyboardListener = new KeyboardListener();
    _keyboardListener.KeyPressed += (sender, eventArgs) =>
    {
        if (eventArgs.Key == Keys.Enter && _adventurer.CurrentAnimation == "idle")
        {
            // highlight-next-line
            _adventurer.SetAnimation("attack").OnAnimationEvent += (sender, trigger) =>
            // highlight-next-line
            {
                // highlight-next-line
                if (trigger == AnimationEventTrigger.AnimationCompleted)
                // highlight-next-line
                {
                    // highlight-next-line
                    _adventurer.SetAnimation("idle");
                // highlight-next-line
                }
            // highlight-next-line
            };
        }
    };
    base.Initialize();
}
```

If we run the sample now, when we press `Enter`, the attack animation will play.  Once the animation completes, it will trigger the animation event, which we're now checking for and change it back to using the `idle` animation.

<figure>
    <img src={EventTrigger} style={{width: '100%', imageRendering: 'pixelated'}}/>
    <figcaption>
        <small>
            The result of the code change to detect the animation completed event and switch from attack to idle animation from that.
        </small>
    </figcaption>
</figure>

## Conclusion
The `AnimatedSprite` class provides a way to manage multiple animations from a single `SpriteSheet`. By encapsulating the animation logic within the `AnimatedSprite`, it simplifies the process of updating, drawing, and controlling animations. This makes it easier to handle transitions and events within your animations. Using the `IAnimationController` interface and its event triggers, you can create animations that react to game events and user inputs.
