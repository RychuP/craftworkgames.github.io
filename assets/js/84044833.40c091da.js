"use strict";(self.webpackChunkmonogame_extended_website=self.webpackChunkmonogame_extended_website||[]).push([[4501],{1982:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=r(4848),o=r(8453);const i={id:"serialization",title:"Serialization",sidebar_label:"Serialization",description:"JSON serialization helpers"},t="Json Converters",l={id:"features/serialization/serialization",title:"Serialization",description:"JSON serialization helpers",source:"@site/docs/features/serialization/serialization.md",sourceDirName:"features/serialization",slug:"/features/serialization/",permalink:"/docs/features/serialization/",draft:!1,unlisted:!1,editUrl:"https://github.com/craftworkgames/craftworkgames.github.io/tree/develop/docs/features/serialization/serialization.md",tags:[],version:"current",frontMatter:{id:"serialization",title:"Serialization",sidebar_label:"Serialization",description:"JSON serialization helpers"},sidebar:"docs",previous:{title:"Screen Management",permalink:"/docs/features/screen-management/"},next:{title:"Tweening",permalink:"/docs/features/tweening/"}},c={},a=[{value:"JsonConverter Example",id:"jsonconverter-example",level:3},{value:"Color JsonConverter",id:"color-jsonconverter",level:2},{value:"Vector2 JsonConverter",id:"vector2-jsonconverter",level:2},{value:"NinePatchRegion2D JsonConverter",id:"ninepatchregion2d-jsonconverter",level:2},{value:"Size2 JsonConverter",id:"size2-jsonconverter",level:2},{value:"Range JsonConverter",id:"range-jsonconverter",level:2},{value:"TextureRegion2D JsonConverter",id:"textureregion2d-jsonconverter",level:2},{value:"Thickness JsonConverter",id:"thickness-jsonconverter",level:2},{value:"ReadAsMultiDimensional",id:"readasmultidimensional",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"Not up to date",type:"warning",children:(0,s.jsxs)(n.p,{children:["This page ",(0,s.jsx)(n.strong,{children:"is not"})," up to date for MonoGame.Extended ",(0,s.jsx)(n.code,{children:"4.0.3"}),".  If you would like to contribute to updating this document, please ",(0,s.jsx)(n.a,{href:"https://github.com/craftworkgames/craftworkgames.github.io/pulls",children:"create a new PR"})]})}),"\n",(0,s.jsxs)(n.p,{children:["MonoGame.Extended contains various serialization helpers that work with ",(0,s.jsx)(n.a,{href:"http://www.newtonsoft.com/json/help/html/SerializingJSON.htm",children:"Newtonsoft Json.NET"}),"."]}),"\n",(0,s.jsx)(n.h1,{id:"json-converters",children:"Json Converters"}),"\n",(0,s.jsx)(n.p,{children:"The following XNA/MonoGame types have converters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Color"})," via ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#color-jsonconverter",children:"ColorJsonConverter"})})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Vector2"})," via ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#vector2-jsonconverter",children:"Vector2JsonConverter"})})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The following MonoGame.Extended types have converters:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"NinePatchRegion2D"})," via ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#ninepatchregion2d-jsonconverter",children:"NinePatchRegion2DJsonConverter"})})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Size2"})," via ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#size2-jsonconverter",children:"Size2JsonConverter"})})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Range<T>"})," via ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#range-jsonconverter",children:"RangeJsonConverter"})})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"TextureRegion2D"})," via ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#textureregion2d-jsonconverter",children:"TextureRegion2DJsonConverter"})})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Thickness"})," via ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#thickness-jsonconverter",children:"ThicknessJsonConverter"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"jsonconverter-example",children:"JsonConverter Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"using Newtonsoft.Json;\nusing Microsoft.Xna.Framework;\nusing MonoGame.Extended.Serialization;\n\nstruct Thing {\n    public Color BootStrapBlue;\n    public Vector2 Position;\n}\nvar data = @\"{\n    'BootStrapBlue':'#428bca00',\n    'Position':'1.1 4',\n}\";\n\nvar thing = JsonConvert.DeserializeObject<Thing>(data,\n    new ColorJsonConverter(),\n    new Vector2JsonConverter()\n);\n\nthing.BootStrapBlue; // \"{R:66 G:139 B:202 A:0}\"\nthing.Posistion; // \"{X:1.1 Y:4}\"\n"})}),"\n",(0,s.jsx)(n.h2,{id:"color-jsonconverter",children:"Color JsonConverter"}),"\n",(0,s.jsxs)(n.p,{children:["ColorJsonConverter tells Newtonsoft Json.NET now to convert string hex values into XNA ",(0,s.jsx)(n.code,{children:"Color"})," objects."]}),"\n",(0,s.jsx)(n.p,{children:"Given the JSON string value"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"#10203040"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"Color"})," object is created."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"new Color(16, 32, 48, 64);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The format is a ",(0,s.jsx)(n.code,{children:"#"})," followed by byte hex codes for Red, Green, Blue, and Alpha channels."]}),"\n",(0,s.jsx)(n.h2,{id:"vector2-jsonconverter",children:"Vector2 JsonConverter"}),"\n",(0,s.jsxs)(n.p,{children:["Vector2JsonConverter tells Newtonsoft Json.NET how to serialize XNA ",(0,s.jsx)(n.code,{children:"Vector2"})," objects."]}),"\n",(0,s.jsx)(n.p,{children:"Given the JSON string value"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-JSON",children:'"1.2 33"\n'})}),"\n",(0,s.jsx)(n.p,{children:"A new Vector2 is created."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"new Vector2(1.2f, 33f);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The format is ",(0,s.jsx)(n.code,{children:"X Y"})," for the x and y components of a 2D vector."]}),"\n",(0,s.jsx)(n.h2,{id:"ninepatchregion2d-jsonconverter",children:"NinePatchRegion2D JsonConverter"}),"\n",(0,s.jsxs)(n.p,{children:["NinePatchRegion2DJsonConverter tells Newtonsoft Json.NET how to serialize MonoGame.Extended ",(0,s.jsx)(n.code,{children:"NinePatchRegion2D"})," objects."]}),"\n",(0,s.jsx)(n.p,{children:"Given the JSON object value"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "TextureRegion":"Center",\n    "Padding":"1 2 3 4"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A new ",(0,s.jsx)(n.code,{children:"NinePatchRegion2D"})," is created and the TextureRegion is looked up in the TextureRegionService."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"new NinePatchRegion2D(TextureRegion2D('Center',...), 1, 2, 3, 4)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The format is not a string value, but a nested JSON object where ",(0,s.jsx)(n.code,{children:"Padding"})," is a ",(0,s.jsx)(n.code,{children:"Thickness"})," value."]}),"\n",(0,s.jsx)(n.h2,{id:"size2-jsonconverter",children:"Size2 JsonConverter"}),"\n",(0,s.jsxs)(n.p,{children:["Size2JsonConverter tells Newtonsoft Json.NET how to serialize MonoGame.Extended ",(0,s.jsx)(n.code,{children:"Size2"})," objects."]}),"\n",(0,s.jsx)(n.p,{children:"Given the JSON string value"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"10 4"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A new ",(0,s.jsx)(n.code,{children:"Size2"})," object is created.  Understood, good buddy."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"new Size2(10f, 4f)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The format is a JSON string containing the Width, and Height values as decimal numbers."}),"\n",(0,s.jsx)(n.h2,{id:"range-jsonconverter",children:"Range JsonConverter"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"RangeJsonConverter<T>"})," tells Newtonsoft Json.NET how to serialize MonoGame.Extended ",(0,s.jsx)(n.code,{children:"Range<T>"})," objects."]}),"\n",(0,s.jsx)(n.p,{children:"Given the JSON string value"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"1 9000"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A new ",(0,s.jsx)(n.code,{children:"Range<T>"})," object is created."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"new Range<int>(1, 9000);\n"})}),"\n",(0,s.jsx)(n.p,{children:"The format is a JSON string containing one or two values."}),"\n",(0,s.jsx)(n.h2,{id:"textureregion2d-jsonconverter",children:"TextureRegion2D JsonConverter"}),"\n",(0,s.jsxs)(n.p,{children:["TextureRegion2DJsonConverter tells Newtonsoft Json.NET how to serialize MonoGame.Extended ",(0,s.jsx)(n.code,{children:"TextureRegion2D"})," objects."]}),"\n",(0,s.jsx)(n.p,{children:"Given the JSON string value"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"Center"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The TextureRegionService is queried with ",(0,s.jsx)(n.code,{children:'GetTextureRegion("Center")'})]}),"\n",(0,s.jsx)(n.p,{children:"The format is a JSON string with the name of the TextureRegion in a TextureAtlas."}),"\n",(0,s.jsx)(n.h2,{id:"thickness-jsonconverter",children:"Thickness JsonConverter"}),"\n",(0,s.jsxs)(n.p,{children:["ThicknessJsonConverter tells Newtonsoft Json.NET how to serialize a MonoGame.Extended ",(0,s.jsx)(n.code,{children:"Thickness"})," object."]}),"\n",(0,s.jsx)(n.p,{children:"Given the JSON string value"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"1 2 3 4"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A new ",(0,s.jsx)(n.code,{children:"Thickness"})," object is created."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Thickness.Parse("1 2 3 4")\n'})}),"\n",(0,s.jsx)(n.p,{children:"The format is a JSON string containing a value to be parsed by Thickness."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"1 2 3 4"'})," is left:1, top:2, right:3, bottom:4"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"2 4"'})," is left:2, top:4, right:2, bottom:4"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"8"'})," is left:8, top:8, right:8, bottom:8"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"1,2"'})," is left:1, top:2, right:1, top:2"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"extensions",children:"Extensions"}),"\n",(0,s.jsx)(n.h2,{id:"readasmultidimensional",children:"ReadAsMultiDimensional"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Newtonsoft.Json.JsonReader"})," is extended with ",(0,s.jsx)(n.code,{children:"T[] ReadAsMultiDimensional<T>()"})]}),"\n",(0,s.jsx)(n.p,{children:"This allows you to easily create a custom JsonConverter with a list of values."}),"\n",(0,s.jsx)(n.p,{children:"For example a list of floats"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"1.1 2.3 4.5 6.1"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Could be parsed into an array of floats using the following JsonConverter that uses ",(0,s.jsx)(n.code,{children:"ReadAsMultiDimensional"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'public class PathJsonConverter : JsonConverter\n{\n    public override object ReadJson(JsonReader reader, Type objectType, object value, JsonSerializer serializer)\n    {\n        float[] path = reader.ReadAsMultiDimensional<float>();\n        return path;\n    }\n\n    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)\n    {\n        var path = (float[]) value;\n        writer.WriteValue(string.Join(" ", path));\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(6540);const o={},i=s.createContext(o);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);