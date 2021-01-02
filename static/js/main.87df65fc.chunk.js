(this.webpackJsonpcilantro=this.webpackJsonpcilantro||[]).push([[0],{21:function(e,t,c){},52:function(e,t){},89:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),i=c.n(a),r=c(43),n=c.n(r),j=(c(21),c(4)),l=c(20),d=c.n(l),o=c(30),b=c(11),p=c(31),h=c(32),u=c.n(h),m=c(7),O=c(3);function x(e){var t="/tags/"+e.text;return Object(s.jsx)(m.b,{to:t,children:e.text})}function f(e){var t=Object(O.f)().id,c=Number(t);return Object(s.jsx)(g,Object(j.a)({},e.recipes[c]))}function g(e){var t=e.tags.map((function(t,c){return Object(s.jsxs)("span",{className:"recipe-tag",children:[Object(s.jsx)(x,{text:t}),c+1!==e.tags.length?",":""," "]},c)})),c=e.ingredients.map((function(e){return Object(s.jsxs)("li",{className:"ingredient p-ingredient",children:[""!==e.amount&&Object(s.jsx)("span",{className:"ingredient-amount",children:e.amount}),Object(s.jsx)("span",{className:"ingredient-item",children:e.item})]})})),a=e.steps.map((function(e){return Object(s.jsx)("li",{className:"prep-step",children:Object(s.jsx)("p",{className:"prep-step-text",children:e})})})),i="/cilantro/recipes/images/"+e.imgUrl;return Object(s.jsxs)("article",{className:"recipe hRecipe h-recipe",children:[Object(s.jsx)("h1",{className:"recipe-title fn p-name",children:e.title}),Object(s.jsxs)("header",{className:"recipe-meta",children:[e.serves&&Object(s.jsxs)("span",{className:"recipe-serves yield",children:[Object(s.jsx)("b",{children:"Yield"})," ",e.serves]}),e.time&&Object(s.jsxs)("span",{className:"recipe-time",children:[Object(s.jsx)("b",{children:"Time"})," ",e.time]}),e.sourceURL&&Object(s.jsxs)("span",{children:[Object(s.jsx)("b",{children:"Source"})," ",Object(s.jsx)("a",{href:e.sourceURL,className:"recipe-source",children:"Link"})]}),e.sourceAuthor&&Object(s.jsxs)("span",{className:"recipe-author",children:[Object(s.jsx)("b",{children:"By"})," ",e.sourceAuthor," "]})]}),Object(s.jsxs)("div",{className:"recipe-info",children:[Object(s.jsx)("p",{className:"recipe-description p-summary summary",children:e.bodyText}),Object(s.jsx)("img",{className:"recipe-picture u-photo photo",src:i,alt:e.title})]}),Object(s.jsx)("div",{className:"recipe-tags",children:t}),Object(s.jsxs)("div",{className:"recipe-body",children:[Object(s.jsxs)("div",{className:"recipe-ingredients",children:[Object(s.jsx)("h2",{children:"Ingredients"}),Object(s.jsx)("ul",{className:"ingredients-list",children:c})]}),Object(s.jsxs)("div",{className:"recipe-steps",children:[Object(s.jsx)("h2",{children:"Preparation"}),Object(s.jsx)("ol",{className:"prep-steps instructions e-instructions",children:a})]})]}),Object(s.jsx)(v,{recipe:e})]})}function v(e){var t={"@context":"https://schema.org","@type":"Recipe",cookTime:e.recipe.time,description:e.recipe.bodyText,image:e.recipe.imgUrl,recipeIngredient:e.recipe.ingredients,name:e.recipe.title,recipeInstructions:e.recipe.steps.join(". "),recipeYield:e.recipe.serves};return Object(s.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})}function N(e){var t=e.recipes.map((function(e){var t="/r/"+e.id,c="/cilantro/recipes/images/"+e.imgUrl;return Object(s.jsxs)("div",{className:"collection-tile-wrapper",children:[Object(s.jsx)(m.b,{className:"collection-tile-text",to:t,children:e.title}),Object(s.jsx)("div",{className:"collection-tile",style:{backgroundImage:"url(".concat(c,")")}})]})}));return Object(s.jsxs)("div",{className:"collection-holder",children:[Object(s.jsx)("h1",{className:"collection-title",children:e.title}),Object(s.jsx)("pre",{className:"collection-description",children:e.body}),Object(s.jsx)("div",{className:"collection",children:t})]})}var y=i.a.createContext({dataRootURL:"http://localhost:3000/recipes/",indexFile:"README.md",theme:"light",sidebarCompact:!1});function k(e){var t=Object(a.useContext)(y),c=Object(a.useState)(t.theme),i=Object(b.a)(c,2),r=i[0],n=i[1],j=Object(a.useState)(t.sidebarCompact),l=Object(b.a)(j,2),d=l[0],o=l[1];return Object(a.useEffect)((function(){t.theme!==r&&e.onUpdate(r)}),[r,e,t]),Object(a.useEffect)((function(){t.sidebarCompact!==d&&e.updateCompact(d)}),[d,e,t]),Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Settings"}),Object(s.jsx)("h2",{children:"Theme"}),Object(s.jsxs)("form",{children:[Object(s.jsx)("div",{className:"theme-radio",children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"radio",name:"theme",value:"light",checked:"light"===r,onChange:function(){return n("light")},className:"theme-radio-input"}),"Light"]})}),Object(s.jsx)("div",{className:"theme-radio",children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"radio",name:"theme",value:"blue",checked:"blue"===r,onChange:function(){return n("blue")},className:"theme-radio-input"}),"Blue"]})}),Object(s.jsx)("div",{className:"theme-radio",children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"radio",name:"theme",value:"green",checked:"green"===r,onChange:function(){return n("green")},className:"theme-radio-input"}),"Green"]})}),Object(s.jsx)("div",{className:"theme-radio",children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"radio",name:"theme",value:"red",checked:"red"===r,onChange:function(){return n("red")},className:"theme-radio-input"}),"Red"]})}),Object(s.jsx)("div",{className:"theme-radio",children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"radio",name:"theme",value:"dark",checked:"dark"===r,onChange:function(){return n("dark")},className:"theme-radio-input"}),"Dark"]})})]}),Object(s.jsx)("h2",{children:"Compact Sidebar"}),Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"checkbox",checked:d,onChange:function(){return o(!d)}})," ","Compact sidebar"]})]})}var C=c(45),R={includeScore:!0,keys:[{name:"title",weight:.25},{name:"tags",weight:.35},{name:"ingredients",weight:.35},{name:"steps",weight:.05}]};function w(e){var t=Object(a.useState)(""),c=Object(b.a)(t,2),i=c[0],r=c[1],n=Object(a.useState)(e.recipes),l=Object(b.a)(n,2),d=l[0],o=l[1];Object(a.useEffect)((function(){var t=new C.a(e.recipes,R).search(i).map((function(e){return e.item}));o(t)}),[e,i]);var p={title:"Results",body:"",recipes:d};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Search"}),Object(s.jsx)("input",{type:"text",value:i,onChange:function(e){return r(e.target.value)}}),Object(s.jsx)(N,Object(j.a)({},p))]})}var S=c(91),U=c(92),L=c(93),E=c(94),T=c(25),A=c.n(T);function I(){var e=Object(a.useContext)(y),t=function(e){var t;switch(e.theme){case"red":t="\ud83c\udf4e";break;case"blue":t="\ud83e\uded0";break;case"green":t="\ud83c\udf48";break;case"dark":t="\ud83c\udf47";break;default:t="\ud83c\udf3f"}return t}(e),c=A()({"app-sidebar":!e.sidebarCompact,"app-sidebar-c":e.sidebarCompact}),i=A()({hidden:e.sidebarCompact});return Object(s.jsxs)("nav",{className:c,children:[Object(s.jsxs)("section",{className:"app-sidebar-body",children:[Object(s.jsxs)(m.b,{className:"app-sidebar-link",to:"/",children:[Object(s.jsx)(S.a,{})," ",Object(s.jsx)("span",{className:i,children:"Home"})]}),Object(s.jsxs)(m.b,{className:"app-sidebar-link",to:"/tags",children:[Object(s.jsx)(U.a,{})," ",Object(s.jsx)("span",{className:i,children:"Tags"})]}),Object(s.jsxs)(m.b,{className:"app-sidebar-link",to:"/search",children:[Object(s.jsx)(L.a,{})," ",Object(s.jsx)("span",{className:i,children:"Search"})]}),Object(s.jsxs)(m.b,{className:"app-sidebar-link",to:"/settings/",children:[Object(s.jsx)(E.a,{})," ",Object(s.jsx)("span",{className:i,children:"Settings"})]})]}),Object(s.jsxs)("footer",{className:A()("app-sidebar-footer",{hidden:e.sidebarCompact}),children:[Object(s.jsx)("i",{children:"Cilantro v0"})," \xb7 Made with ",t]})]})}function F(e){var t=[];for(var c in e.index)t.push(c);var a=t.map((function(e,c){var a="/tags/"+e;return Object(s.jsxs)("span",{className:"recipe-tags",children:[Object(s.jsx)(m.b,{to:a,children:e}),c+1!==t.length?",":""]},c)}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Tags"}),a]})}function M(e){var t=Object(O.f)().tag,c={title:"Tag: "+t,body:"",recipes:e.index[t]};return Object(s.jsx)(N,Object(j.a)({},c))}function B(e,t){var c=u()(t);console.log(c);var s=c.data.title,a=c.data.tags.split(",").map((function(e){return e.trim()})),i=c.data.image,r=c.data.directions,n=c.data.ingredients.map((function(e){return{amount:"",item:e}})),j=c.data.yield,l=c.data.time;return{id:e,title:s,tags:a,imgUrl:i,steps:r,serves:j,sourceURL:c.data.sourceURL,sourceAuthor:c.data.sourceAuthor,time:l,ingredients:n,bodyText:c.content}}function D(){var e=Object(a.useState)(),t=Object(b.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)({}),n=Object(b.a)(r,2),l=n[0],h=n[1],x=Object(a.useState)({dataRootURL:"/cilantro/recipes/",indexFile:"README.md?raw=true",theme:"light",sidebarCompact:!0}),g=Object(b.a)(x,2),v=g[0],C=g[1];if(Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(d.a.mark((function e(){var t,c,s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v.dataRootURL+v.indexFile);case 2:return t=e.sent,e.next=5,t.text();case 5:c=e.sent,s=u()(c),a=s.data.recipes.map(function(){var e=Object(o.a)(d.a.mark((function e(t,c){var s,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(v.dataRootURL+"recipes/"+t+".md?raw=true");case 2:return s=e.sent,e.next=5,s.text();case 5:return a=e.sent,e.abrupt("return",B(c,a));case 7:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()),Promise.all(a).then((function(e){var t={title:s.data.title,body:s.content,recipes:e};i(t)}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]),Object(a.useEffect)((function(){if(c){var e=function(e){var t,c={},s=Object(p.a)(e);try{for(s.s();!(t=s.n()).done;){var a,i=t.value,r=Object(p.a)(i.tags);try{for(r.s();!(a=r.n()).done;){var n=a.value;n in c||(c[n]=[]),c[n].push(i)}}catch(j){r.e(j)}finally{r.f()}}}catch(j){s.e(j)}finally{s.f()}return c}(c.recipes);h(e)}}),[c]),""===v.dataRootURL)return Object(s.jsx)("div",{});if(""===v.indexFile)return Object(s.jsx)("div",{});if(void 0===c)return Object(s.jsx)("div",{children:"Loading..."});return Object(s.jsx)(y.Provider,{value:v,children:Object(s.jsx)(m.a,{children:Object(s.jsxs)("div",{className:"app app-theme-"+v.theme,children:[Object(s.jsx)(I,{}),Object(s.jsx)("main",{className:"app-content",children:Object(s.jsxs)(O.c,{children:[Object(s.jsx)(O.a,{path:"/r/:id",children:Object(s.jsx)(f,{recipes:c.recipes})}),Object(s.jsx)(O.a,{path:"/tags/:tag",children:Object(s.jsx)(M,{index:l})}),Object(s.jsx)(O.a,{path:"/tags/",children:Object(s.jsx)(F,{index:l})}),Object(s.jsx)(O.a,{path:"/search/",children:Object(s.jsx)(w,{recipes:c.recipes})}),Object(s.jsx)(O.a,{path:"/settings/",children:Object(s.jsx)(k,{onUpdate:function(e){console.log(e),C(Object(j.a)(Object(j.a)({},v),{},{theme:e}))},updateCompact:function(e){C(Object(j.a)(Object(j.a)({},v),{},{sidebarCompact:e}))}})}),Object(s.jsx)(O.a,{path:"/",children:Object(s.jsx)(N,Object(j.a)({},c))})]})})]})})})}n.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(D,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.87df65fc.chunk.js.map