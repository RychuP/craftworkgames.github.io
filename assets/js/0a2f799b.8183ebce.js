"use strict";(self.webpackChunkmonogame_extended_website=self.webpackChunkmonogame_extended_website||[]).push([[163],{1478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(4848),n=a(8453);const o={id:"cameras",title:"Cameras",sidebar_label:"Cameras"},i=void 0,s={id:"features/cameras/cameras",title:"Cameras",description:"Orthographic Camera",source:"@site/docs/features/cameras/cameras.md",sourceDirName:"features/cameras",slug:"/features/cameras/",permalink:"/docs/features/cameras/",draft:!1,unlisted:!1,editUrl:"https://github.com/craftworkgames/craftworkgames.github.io/tree/develop/docs/features/cameras/cameras.md",tags:[],version:"current",frontMatter:{id:"cameras",title:"Cameras",sidebar_label:"Cameras"},sidebar:"docs",previous:{title:"Bitmap Font",permalink:"/docs/features/bitmap-font/"},next:{title:"Animations",permalink:"/docs/features/animations/"}},c={},d=[{value:"Orthographic Camera",id:"orthographic-camera",level:2},{value:"Further Reading",id:"further-reading",level:2}];function m(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"orthographic-camera",children:"Orthographic Camera"}),"\n",(0,r.jsx)(t.p,{children:"The purpose of the camera is to create a transformation matrix that changes the way a sprite batch is rendered."}),"\n",(0,r.jsx)(t.p,{children:"To create a camera initialize an instance of it using one of the constructor overloads. It's recommended that you used a viewport adapter to scale the screen but you don't have to."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"private OrthographicCamera _camera;\n\nprotected override void Initialize()\n{\n    base.Initialize();\n\n    var viewportAdapter = new BoxingViewportAdapter(Window, GraphicsDevice, 800, 480);\n    _camera = new OrthographicCamera(viewportAdapter);\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Next you'll need to apply the camera's view matrix to one or more of the ",(0,r.jsx)(t.code,{children:"SpriteBatch.Begin"})," calls in your ",(0,r.jsx)(t.code,{children:"Draw"})," method."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"protected override void Draw(GameTime gameTime)\n{\n    var transformMatrix = _camera.GetViewMatrix();\n    _spriteBatch.Begin(transformMatrix: transformMatrix);\n    _spriteBatch.DrawRectangle(new RectangleF(250,250,50,50), Color.Black, 1f);\n    _spriteBatch.End();\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.code,{children:"TransformationMatrix"})," is one of the parameters of a ",(0,r.jsx)(t.code,{children:"SpriteBatch.Begin"})," call."]}),"\n",(0,r.jsx)(t.p,{children:"The transformation matrix is used for scale, rotate, and translate options.\nIn other words, we use the camera to transform the way a batch of sprites is rendered to the screen without actually modifying their positions, rotations, or scales directly. This creates the effect of having a camera looking at your scene that can move, rotate, and zoom in and out."}),"\n",(0,r.jsxs)(t.p,{children:["Once you've got a camera instance in your game you'll probably want to move it around in the ",(0,r.jsx)(t.code,{children:"Update"})," method somehow. For example, you could move the camera's position with the arrow keys."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"private Vector2 GetMovementDirection()\n{\n    var movementDirection = Vector2.Zero;\n    var state = Keyboard.GetState();\n    if (state.IsKeyDown(Keys.Down))\n    {\n        movementDirection += Vector2.UnitY;\n    }\n    if (state.IsKeyDown(Keys.Up))\n    {\n        movementDirection -= Vector2.UnitY;\n    }\n    if (state.IsKeyDown(Keys.Left))\n    {\n        movementDirection -= Vector2.UnitX;\n    }\n    if (state.IsKeyDown(Keys.Right))\n    {\n        movementDirection += Vector2.UnitX;\n    }\n    return movementDirection;\n}\n\nprotected override void Update(GameTime gameTime)\n{\n    const float movementSpeed = 200;\n    _camera.Move(GetMovementDirection() * movementSpeed * gameTime.GetElapsedSeconds());\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Last but not least, there'll be times when you want to convert from screen coordinates to world coordinates and vice-versa.  For example, if you want to know which sprite is under the mouse you'll need to convert the mouse position back into the world position that was used to position the sprite in the first place."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"var mouseState = Mouse.GetState();\n_worldPosition = _camera.ScreenToWorld(new Vector2(mouseState.X, mouseState.Y));\n"})}),"\n",(0,r.jsx)(t.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://stevehazen.wordpress.com/2010/02/15/matrix-basics-how-to-step-away-from-storing-an-orientation-as-3-angles/",children:"Matrix Basics"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>s});var r=a(6540);const n={},o=r.createContext(n);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);