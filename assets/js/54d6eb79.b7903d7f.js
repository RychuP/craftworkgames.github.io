"use strict";(self.webpackChunkmonogame_extended_website=self.webpackChunkmonogame_extended_website||[]).push([[9039],{6370:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=i(4848),o=i(8453);const a={id:"collision",sidebar_label:"Collision",title:"Collision",description:"2D grid-based collision system."},s=void 0,l={id:"features/collision/collision",title:"Collision",description:"2D grid-based collision system.",source:"@site/docs/features/collision/collision.md",sourceDirName:"features/collision",slug:"/features/collision/",permalink:"/docs/features/collision/",draft:!1,unlisted:!1,editUrl:"https://github.com/craftworkgames/craftworkgames.github.io/tree/develop/docs/features/collision/collision.md",tags:[],version:"current",frontMatter:{id:"collision",sidebar_label:"Collision",title:"Collision",description:"2D grid-based collision system."},sidebar:"docs",previous:{title:"Gum Forms",permalink:"/docs/features/ui/gum/gum-forms/"},next:{title:"ContentManager extensions",permalink:"/docs/features/contentmanager/contentManager-extensions"}},r={},c=[{value:"Usage",id:"usage",level:2},{value:"Setting up the game",id:"setting-up-the-game",level:3},{value:"Updating the game",id:"updating-the-game",level:3},{value:"Drawing the final result",id:"drawing-the-final-result",level:3},{value:"Result",id:"result",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"Not up to date",type:"warning",children:(0,t.jsxs)(n.p,{children:["This page ",(0,t.jsx)(n.strong,{children:"is not"})," up to date for MonoGame.Extended ",(0,t.jsx)(n.code,{children:"4.0.3"}),".  If you would like to contribute to updating this document, please ",(0,t.jsx)(n.a,{href:"https://github.com/craftworkgames/craftworkgames.github.io/pulls",children:"create a new PR"})]})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"In this example, we will make a simple sandbox where shapes can move and collide with each other."}),"\n",(0,t.jsxs)(n.p,{children:["We start by defining an ",(0,t.jsx)(n.code,{children:"IEntity"})," interface that inherits ",(0,t.jsx)(n.code,{children:"ICollisionActor"}),", so we can insert the entities into our ",(0,t.jsx)(n.code,{children:"CollisionComponent"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public interface IEntity : ICollisionActor\n{\n    public void Update(GameTime gameTime);\n    public void Draw(SpriteBatch spriteBatch);\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Next, we define our entity classes"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"OnCollision"})," method and the Bounds property come from the ",(0,t.jsx)(n.code,{children:"ICollisionActor"})," interface. These will be called by the ",(0,t.jsx)(n.code,{children:"CollisionComponent"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public class CubeEntity : IEntity\n{\n    private readonly Game1 _game;\n    public Vector2 Velocity;\n    public IShapeF Bounds { get; }\n\n    public CubeEntity(Game1 game, RectangleF rectangleF)\n    {\n        _game = game;\n        Bounds = rectangleF;\n        RandomizeVelocity();\n    }\n\n    public virtual void Draw(SpriteBatch spriteBatch)\n    {\n        spriteBatch.DrawRectangle((RectangleF) Bounds, Color.Red, 3);\n    }\n\n    public virtual void Update(GameTime gameTime)\n    {\n        Bounds.Position += Velocity * gameTime.GetElapsedSeconds() * 50;\n    }\n\n    public void OnCollision(CollisionEventArgs collisionInfo)\n    {\n        Velocity.X *= -1;\n        Velocity.Y *= -1;\n        Bounds.Position -= collisionInfo.PenetrationVector;\n    }\n\n    private void RandomizeVelocity()\n    {\n        Velocity.X = _game.Random.Next(-1, 2);\n        Velocity.Y = _game.Random.Next(-1, 2);\n    }\n}\n\npublic class BallEntity : IEntity\n{\n    private readonly Game1 _game;\n    public Vector2 Velocity;\n    public IShapeF Bounds { get; }\n\n    public BallEntity(Game1 game, CircleF circleF)\n    {\n        _game = game;\n        Bounds = circleF;\n        RandomizeVelocity();\n    }\n\n    public void Draw(SpriteBatch spriteBatch)\n    {\n        spriteBatch.DrawCircle((CircleF) Bounds, 8, Color.Red, 3f);\n    }\n\n    public void Update(GameTime gameTime)\n    {\n        Bounds.Position += Velocity * gameTime.GetElapsedSeconds() * 30;\n    }\n\n    public void OnCollision(CollisionEventArgs collisionInfo)\n    {\n        RandomizeVelocity();\n        Bounds.Position -= collisionInfo.PenetrationVector;\n    }\n\n\n    private void RandomizeVelocity()\n    {\n        Velocity.X = _game.Random.Next(-1, 2);\n        Velocity.Y = _game.Random.Next(-1, 2);\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"setting-up-the-game",children:"Setting up the game"}),"\n",(0,t.jsx)(n.p,{children:"First, we define our properties and fields"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"public readonly Random Random = new Random(Guid.NewGuid().GetHashCode());\nprivate readonly List<IEntity> _entities = new List<IEntity>();\nprivate readonly CollisionComponent _collisionComponent;\nconst int MapWidth = 500;\nconst int MapHeight = 500;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then we Initialize our game by creating entities and adding them to the ",(0,t.jsx)(n.code,{children:"CollisionComponent"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'\npublic Game1()\n{\n    _graphics = new GraphicsDeviceManager(this);\n    _collisionComponent = new CollisionComponent(new RectangleF(0,0, MapWidth, MapHeight));\n\n    Content.RootDirectory = "Content";\n    IsMouseVisible = true;\n}\n\nprotected override void Initialize()\n{\n    base.Initialize();\n    _graphics.PreferredBackBufferHeight = MapHeight;\n    _graphics.PreferredBackBufferWidth = MapWidth;\n    _graphics.ApplyChanges();\n\n    for (var i = 0; i < 50; i++)\n    {\n        var size = Random.Next(20, 40);\n        var position = new Point2(Random.Next(-MapWidth, MapWidth * 2), Random.Next(0, MapHeight));\n        if (i % 2 == 0)\n        {\n            _entities.Add(new BallEntity(this, new CircleF(position, size)));\n        }\n        else\n        {\n            _entities.Add(new CubeEntity(this, new RectangleF(position, new Size2(size, size))));\n        }\n    }\n\n    foreach (IEntity entity in _entities)\n    {\n        _collisionComponent.Insert(entity);\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"updating-the-game",children:"Updating the game"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Update"})," method, we update all entities and the ",(0,t.jsx)(n.code,{children:"CollisionComponent"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"protected override void Update(GameTime gameTime)\n{\n    foreach (IEntity entity in _entities)\n    {\n        entity.Update(gameTime);\n    }\n\n    _collisionComponent.Update(gameTime);\n\n    base.Update(gameTime);\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"drawing-the-final-result",children:"Drawing the final result"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"protected override void Draw(GameTime gameTime)\n{\n    GraphicsDevice.Clear(Color.CornflowerBlue);\n\n    _spriteBatch.Begin();\n    foreach (IEntity entity in _entities)\n    {\n        entity.Draw(_spriteBatch);\n    }\n\n    _spriteBatch.End();\n\n    base.Draw(gameTime);\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"result",children:"Result"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"collision",src:i(7906).A+"",width:"400",height:"400"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},7906:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/collision-78e68549d7bdcb5ca12061cd5761cb3a.gif"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);