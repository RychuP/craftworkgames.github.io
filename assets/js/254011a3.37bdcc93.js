"use strict";(self.webpackChunkmonogame_extended_website=self.webpackChunkmonogame_extended_website||[]).push([[9730],{9528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var o=t(4848),r=t(8453),i=t(1470),s=t(9365);const a={id:"installation-monogame",title:"Installation (MonoGame)",sidebar_label:"Installation (MonoGame)"},l=void 0,d={id:"getting-started/installation-monogame",title:"Installation (MonoGame)",description:"This page is up to date for MonoGame.Extended @mgeversion@.  If you find outdated information, please open an issue.",source:"@site/docs/getting-started/installation-monogame.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation-monogame",permalink:"/docs/getting-started/installation-monogame",draft:!1,unlisted:!1,editUrl:"https://github.com/craftworkgames/craftworkgames.github.io/tree/develop/docs/getting-started/installation-monogame.mdx",tags:[],version:"current",frontMatter:{id:"installation-monogame",title:"Installation (MonoGame)",sidebar_label:"Installation (MonoGame)"},sidebar:"docs",previous:{title:"Contributing",permalink:"/docs/about/contributing"},next:{title:"Installation (KNI)",permalink:"/docs/getting-started/installation-kni"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"(Optional) Setup MGCB Editor",id:"optional-setup-mgcb-editor",level:2},{value:"Download Pipeline Nuget",id:"download-pipeline-nuget",level:3},{value:"Add Reference to MGCB Editor",id:"add-reference-to-mgcb-editor",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"Up to date",type:"tip",children:(0,o.jsxs)(n.p,{children:["This page is ",(0,o.jsx)(n.strong,{children:"up to date"})," for MonoGame.Extended ",(0,o.jsx)(n.code,{children:"4.0.3"}),".  If you find outdated information, ",(0,o.jsx)(n.a,{href:"https://github.com/craftworkgames/craftworkgames.github.io/issues",children:"please open an issue"}),"."]})}),"\n",(0,o.jsxs)(n.p,{children:["The following article details the steps necessary to get ",(0,o.jsx)(n.strong,{children:"MonoGame.Extended"})," installed and setup in your project.  ",(0,o.jsx)(n.strong,{children:"MonoGame.Extended"})," can be used with either ",(0,o.jsx)(n.a,{href:"https://github.com/monogame/monogame",children:(0,o.jsx)(n.strong,{children:"MonoGame"})}),", ",(0,o.jsx)(n.a,{href:"https://github.com/kniEngine/kni",children:(0,o.jsx)(n.strong,{children:"KNI"})}),", or ",(0,o.jsx)(n.a,{href:"https://github.com/FNA-XNA/FNA",children:(0,o.jsx)(n.strong,{children:"FNA"})}),".  This article wil detail how to setup and install ",(0,o.jsx)(n.strong,{children:"MonoGame.Extended"})," with an existing ",(0,o.jsx)(n.strong,{children:"MonoGame"})," project."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If you are using FNA, please see the ",(0,o.jsx)(n.a,{href:"/docs/getting-started/installation-fna",children:"Installation (FNA)"})," document."]}),"\n",(0,o.jsxs)(n.li,{children:["If you are using KNI, please see the ",(0,o.jsx)(n.a,{href:"/docs/getting-started/installation-kni",children:"Installation (KNI)"})," document."]}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["The following prerequisites are required when using ",(0,o.jsx)(n.strong,{children:"MonoGame.Extended"})," with MonoGame."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Ensure your development environment is setup for MonoGame Development."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.monogame.net/articles/getting_started/1_setting_up_your_development_environment_windows.html",children:"Visual Studio 2022 Setup (Windows Only)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.monogame.net/articles/getting_started/1_setting_up_your_development_environment_vscode.html?tabs=windows",children:"Visual Studio Code Setup (Windows, Mac, and Linux)"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"A MonoGame project"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.monogame.net/articles/getting_started/2_creating_a_new_project_vs.html",children:"Visual Studio 2022 (Windows Only)"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.monogame.net/articles/getting_started/2_creating_a_new_project_netcore.html",children:"Visual Studio Code (Windows, Mac, and Linux)"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"MonoGame.Extended"})," is distributed via a NuGet package.  You can add the NuGet pacakge to your C# project through your IDE (Visual Studio, Rider, etc) or through the Command Line Interface (CLI) using the ",(0,o.jsx)(n.code,{children:"dotnet"})," commands"]}),"\n",(0,o.jsxs)(i.A,{children:[(0,o.jsx)(s.A,{value:"net-cli",label:".NET Cli",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"dotnet add package MonoGame.Extended --version 4.0.3\n"})})}),(0,o.jsxs)(s.A,{value:"package-manager",label:"Package Manager",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"NuGet\\Install-Package MonoGame.Extended -Version 4.0.3\n"})}),(0,o.jsx)("small",{children:(0,o.jsxs)(n.p,{children:["This command is intended to be used within the Package Manager Console in Visual Studio, as it uses NuGet module's version of ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/nuget/reference/ps-reference/ps-ref-install-package",children:"Install-Package"})]})})]}),(0,o.jsxs)(s.A,{value:"package-reference",label:"Package Reference",default:!0,children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<PackageReference Include="MonoGame.Extended" Version="4.0.3" />\n'})}),(0,o.jsx)("small",{children:(0,o.jsxs)(n.p,{children:["For projects that support ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/nuget/consume-packages/package-references-in-project-files",children:"PackageReference"}),", copy this XML node into the project file to reference the package."]})})]})]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"MonoGame.Extended"})," is currently being updated and prepped for version 4.0 release.  In the mean time, the current stable version is the ",(0,o.jsx)(n.strong,{children:"4.0.0"})," version shown above.   Please use this version for now even though it is marked prerelease until version 4.0 is released.  For more information, please see the ",(0,o.jsx)(n.a,{href:"/blog/mongame-extended-is-back",children:"MonoGame.Extended is Back"})," blog post."]})}),"\n",(0,o.jsx)(n.h2,{id:"optional-setup-mgcb-editor",children:"(Optional) Setup MGCB Editor"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"MonoGame.Extended"})," provides MonoGame Content Pipeline Extensions to extend the asset types that can be imported through the MonoGame Content Pipeline.  All asset preprocessing extensions provided as pipeline extensions can be used to load the assets at runtime from disk if you want, meaning that setting this up is optional and only needed if you are using the content pipeline for asset management in your game."]}),"\n",(0,o.jsx)(n.h3,{id:"download-pipeline-nuget",children:"Download Pipeline Nuget"}),"\n",(0,o.jsxs)(n.p,{children:["To get started first add the ",(0,o.jsx)(n.code,{children:"MonoGame.Extended.Content.Pipeline"})," NuGet package to your MonoGame project"]}),"\n",(0,o.jsxs)(i.A,{children:[(0,o.jsx)(s.A,{value:"net-cli",label:".NET Cli",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"dotnet add package MonoGame.Extended.Content.Pipeline --version 4.0.0\n"})})}),(0,o.jsxs)(s.A,{value:"package-manager",label:"Package Manager",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"NuGet\\Install-Package MonoGame.Extended.Content.Pipeline -Version 4.0.0\n"})}),(0,o.jsx)("small",{children:(0,o.jsxs)(n.p,{children:["This command is intended to be used within the Package Manager Console in Visual Studio, as it uses NuGet module's version of ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/nuget/reference/ps-reference/ps-ref-install-package",children:"Install-Package"})]})})]}),(0,o.jsxs)(s.A,{value:"package-reference",label:"Package Reference",default:!0,children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'<PackageReference Include="MonoGame.Extended.Content.Pipeline" Version="4.0.0" />\n'})}),(0,o.jsx)("small",{children:(0,o.jsxs)(n.p,{children:["For projects that support ",(0,o.jsx)(n.a,{href:"https://docs.microsoft.com/nuget/consume-packages/package-references-in-project-files",children:"PackageReference"}),", copy this XML node into the project file to reference the package."]})})]})]}),"\n",(0,o.jsx)(n.h3,{id:"add-reference-to-mgcb-editor",children:"Add Reference to MGCB Editor"}),"\n",(0,o.jsxs)(n.p,{children:["In order for the MonoGame Content Builder (MGCB) Editor to make use of the extension provided by ",(0,o.jsx)(n.strong,{children:"MonoGame.Extended.Content.Pipeline"})," you will need to add a reference to the ",(0,o.jsx)(n.code,{children:"MonoGame.Extended.Content.Pipeline.dll"})," assembly to the content project.  This assembly is downloaded as part of the ",(0,o.jsx)(n.strong,{children:"MonoGame.Extended.Content.Pipeline"})," NuGet you just installed, however the necessary files to reference do not get automatically copied to your project directory.  Additionally, when adding a reference to an assembly in the MGCB Editor, the path it creates in the Content.mgcb file is relative, meaning it will break if you move your project directory or change computers."]}),"\n",(0,o.jsxs)(n.p,{children:["To resolve this, ",(0,o.jsx)(n.strong,{children:"MonoGame.Extended.Content.Pipeline"})," provides a unique method for users to ensure that the needed assembly references are copied locally to your project directory for easier referencing and so that the relative path in the Content.mgcb file doesn't break."]}),"\n",(0,o.jsxs)(n.p,{children:["To set this up, first open your game project's ",(0,o.jsx)(n.code,{children:".csproj"})," file and add the following property group"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<PropertyGroup>\n    <MonoGameExtendedPipelineReferencePath>$(MSBuildThisFileDirectory)pipeline-references</MonoGameExtendedPipelineReferencePath>\n</PropertyGroup>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This is the default recommended setting.  The value of the ",(0,o.jsx)(n.code,{children:"MonoGameExtendedPipelineReferencePath"})," is the directory where the ",(0,o.jsx)(n.code,{children:"MonoGame.Extended.Content.Pipeline.dll"})," and its necessary references will be copied when you do a project build.  You can adjust this value if you would prefer it be in a different directory.  ",(0,o.jsx)(n.strong,{children:"However, it is strongly recommended that you keep within your overall project directory"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["After adding the property group, do a build of your project and you shoudl now see the ",(0,o.jsx)(n.code,{children:"MonoGame.Extended.Content.Pipeline.dll"})," inside the directory specified above.  Now we just need to add a reference to that dll in the MGCB Editor"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Open you ",(0,o.jsx)(n.strong,{children:"Content.mgcb"})," file in the ",(0,o.jsx)(n.strong,{children:"MGCB Editor"})]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["When using Visual Studio, double clicking the ",(0,o.jsx)(n.strong,{children:"Content.mgcb"})," file in your project should open it for you using the ",(0,o.jsx)(n.strong,{children:"MGCB Editor"})," automatically if you have the MonoGame Visual Studio Extension installed.  If, for some reason, it opens it as a plain text file instead, you can right-click the ",(0,o.jsx)(n.strong,{children:"Content.mgcb"})," file, choose ",(0,o.jsx)(n.strong,{children:"Open With"}),", then set the default default application to open with as the ",(0,o.jsx)(n.strong,{children:"MGCB Editor"}),"."]}),(0,o.jsxs)(n.p,{children:["Alternatively, if you're not using Visual Studio, you can open it by using the following ",(0,o.jsx)(n.code,{children:"dotnet"})," command in a command-line or terminal window from within your project directory"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"dotnet mgcb-editor ./Content/Content.mgcb\n"})})]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Content"})," node located in the ",(0,o.jsx)(n.strong,{children:"Project"})," panel on the left."]}),"\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.strong,{children:"Properties"})," panel below it, scroll down to the ",(0,o.jsx)(n.strong,{children:"References"})," field.  Click this field to open the ",(0,o.jsx)(n.strong,{children:"Reference Editor"})," dialog window."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Add"})," button in the ",(0,o.jsx)(n.strong,{children:"Reference Editor"})," dialog window."]}),"\n",(0,o.jsxs)(n.li,{children:["Find and add the ",(0,o.jsx)(n.strong,{children:"MonoGame.Extended.Content.Pipeline.dll"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Ok"})," to close the ",(0,o.jsx)(n.strong,{children:"Reference Editor"})," dialog window."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You should now see the ",(0,o.jsx)(n.strong,{children:"MonoGame.Extended.Content.Pipeline.dll"})," in the ",(0,o.jsx)(n.strong,{children:"References"})," field of the ",(0,o.jsx)(n.strong,{children:"Property"})," panel."]}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(n.p,{children:["Setting up ",(0,o.jsx)(n.strong,{children:"MonoGame.Extended"})," with an existing ",(0,o.jsx)(n.strong,{children:"MonoGame"})," project is straight forward and only requires that you add the NuGet reference.  Once added, you can immediately start taking advantage of what ",(0,o.jsx)(n.strong,{children:"MonoGame.Extended"})," has to offer."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var o=t(4164);const r={tabItem:"tabItem_Ymn6"};var i=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,s),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var o=t(6540),r=t(4164),i=t(3104),s=t(6347),a=t(205),l=t(7485),d=t(1682),c=t(679);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[d,u]=g({queryString:t,groupId:r}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Dv)(t);return[r,(0,o.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),f=(()=>{const e=d??m;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function b(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=a[t].value;r!==o&&(d(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);