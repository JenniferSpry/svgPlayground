(function(t){function r(r){for(var c,n,l=r[0],s=r[1],i=r[2],h=0,p=[];h<l.length;h++)n=l[h],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);u&&u(r);while(p.length)p.shift()();return a.push.apply(a,i||[]),e()}function e(){for(var t,r=0;r<a.length;r++){for(var e=a[r],c=!0,l=1;l<e.length;l++){var s=e[l];0!==o[s]&&(c=!1)}c&&(a.splice(r--,1),t=n(n.s=e[0]))}return t}var c={},o={app:0},a=[];function n(r){if(c[r])return c[r].exports;var e=c[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=c,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var c in t)n.d(e,c,function(r){return t[r]}.bind(null,c));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=r,l=l.slice();for(var i=0;i<l.length;i++)r(l[i]);var u=s;a.push([0,"chunk-vendors"]),e()})({0:function(t,r,e){t.exports=e("56d7")},"56d7":function(t,r,e){"use strict";e.r(r);e("e260"),e("e6cf"),e("cca6"),e("a79d");var c=e("2b0e"),o=e("ce5b"),a=e.n(o);e("bf40");c["default"].use(a.a);var n={},l=new a.a(n),s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"app"}},[e("v-app",[e("v-app-bar",{attrs:{app:"",dense:""}},[e("v-toolbar-title",[t._v("SVG Playground")])],1),e("v-main",[e("v-container",[e("HomePage")],1)],1)],1)],1)},i=[],u=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ellipse-playground")},h=[],p=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("v-col",[e("v-card",[e("v-card-title",[t._v("Path - Elliptical Arc Curve")]),e("v-card-text",[e("blockquote",{staticClass:"blockquote"},[t._v(" Elliptical arc curves are curves defined as a portion of an ellipse. It is sometimes easier to draw highly regular curves with an elliptical arc than with a Bézier curve. ")]),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve"}},[t._v("https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#elliptical_arc_curve")])])])],1)],1)],1),e("v-row",{attrs:{justify:"center"}},[e("v-card",[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:600,height:320}},[e("path",{attrs:{d:t.pathArc,stroke:"rgba(0,0,0,.6)",fill:"none","stroke-width":"2"}}),e("path",{attrs:{d:t.pathEllipse1,stroke:"#6dcdd6",fill:"none"}}),e("path",{attrs:{d:t.pathEllipse2,stroke:"#6dcdd6",fill:"none"}}),e("path",{attrs:{d:t.pathEllipse3,stroke:"#6dcdd6",fill:"none"}}),e("circle",{attrs:{cx:t.startArcX,cy:t.startArcY,r:"4",fill:"red"}}),e("circle",{attrs:{cx:t.endArcX,cy:t.endArcY,r:"4",fill:"blue"}})])])],1),e("v-row",{attrs:{justify:"center"}},[e("v-card",{class:"explanation"},[e("v-card-text",t._l(t.arcDescription,(function(r,c){return e("div",{key:c},[e("p",{staticClass:"explanation-description"},[t._v(t._s(r.description))]),e("p",{staticClass:"large-text"},t._l(r.textParts,(function(r,c){return e("span",{key:c,style:{color:r.color}},[t._v(" "+t._s(r.text)+"  ")])})),0)])})),0)],1)],1),e("v-row",[e("v-col",[e("v-slider",{attrs:{label:"start x","thumb-label":"always",max:t.width,min:"0",color:t.startArcXColor},model:{value:t.startArcX,callback:function(r){t.startArcX=r},expression:"startArcX"}}),e("v-slider",{attrs:{label:"start y","thumb-label":"always",max:t.height,min:"0",color:t.startArcYColor},model:{value:t.startArcY,callback:function(r){t.startArcY=r},expression:"startArcY"}})],1),e("v-col",[e("v-slider",{attrs:{label:"end x","thumb-label":"always",max:t.width,min:"0",color:t.endArcXColor},model:{value:t.endArcX,callback:function(r){t.endArcX=r},expression:"endArcX"}}),e("v-slider",{attrs:{label:"end y","thumb-label":"always",max:t.height,min:"0",color:t.endArcYColor},model:{value:t.endArcY,callback:function(r){t.endArcY=r},expression:"endArcY"}})],1)],1),e("v-row",[e("v-col",[e("v-slider",{attrs:{label:"Ellipse Radius X","thumb-label":"always",max:t.height,min:"0",color:t.rxColor},model:{value:t.rx,callback:function(r){t.rx=r},expression:"rx"}}),e("v-slider",{attrs:{label:"Ellipse Radius Y","thumb-label":"always",max:t.height,min:"0",color:t.ryColor},model:{value:t.ry,callback:function(r){t.ry=r},expression:"ry"}}),e("v-slider",{attrs:{label:"Ellipse rotation","thumb-label":"always",max:180,min:"0",color:t.xAxisRotationColor},model:{value:t.xAxisRotation,callback:function(r){t.xAxisRotation=r},expression:"xAxisRotation"}})],1),e("v-col",[e("v-row",[e("v-col",[e("v-switch",{attrs:{label:"Large Arc?",color:t.largeArcColor},model:{value:t.largeArc,callback:function(r){t.largeArc=r},expression:"largeArc"}})],1),e("v-col",[e("v-switch",{attrs:{label:"Which ellipse?",color:t.sweepColor},model:{value:t.sweep,callback:function(r){t.sweep=r},expression:"sweep"}})],1)],1)],1)],1)],1)},d=[],x=(e("99af"),{name:"EllipsePlayground",data:function(){return{width:600,height:320,startArcX:260,startArcXColor:"#fc3d03",startArcY:180,startArcYColor:"#fc9403",rx:50,rxColor:"#58cf19",ry:60,ryColor:"#96ed68",xAxisRotation:20,xAxisRotationColor:"#609c40",largeArc:!1,largeArcColor:"#a330b0",sweep:!0,sweepColor:"#6c30b0",endArcX:340,endArcXColor:"#038cfc",endArcY:140,endArcYColor:"#031cfc"}},computed:{pathArc:function(){return"M 20 ".concat(this.height-20,"\n           L ").concat(this.startArcX," ").concat(this.startArcY,"\n           A ").concat(this.rx," ").concat(this.ry," ").concat(this.xAxisRotation,"\n           ").concat(this.largeArc?1:0," ").concat(this.sweep?1:0,"\n           ").concat(this.endArcX," ").concat(this.endArcY,"\n           L ").concat(this.width-20," 20")},arcDescription:function(){return[{description:"Move to x y",textParts:[{text:"M"},{text:"20"},{text:"".concat(this.height-20)}]},{description:"Line to x y",textParts:[{text:"L"},{text:this.startArcX,color:this.startArcXColor},{text:this.startArcY,color:this.startArcYColor}]},{description:"Arc radius-x radius-y x-axis-rotation large-arc-flag sweep-flag x y",textParts:[{text:"A"},{text:this.rx,color:this.rxColor},{text:this.ry,color:this.ryColor},{text:this.xAxisRotation,color:this.xAxisRotationColor},{text:"".concat(this.largeArc?1:0),color:this.largeArcColor},{text:"".concat(this.sweep?1:0),color:this.sweepColor},{text:this.endArcX,color:this.endArcXColor},{text:this.endArcY,color:this.endArcYColor}]},{description:"Line to x y",textParts:[{text:"L"},{text:this.width-20},{text:"20"}]}]},pathEllipse1:function(){return"M ".concat(this.startArcX," ").concat(this.startArcY,"\n          A ").concat(this.rx," ").concat(this.ry," ").concat(this.xAxisRotation,"\n          ").concat(this.largeArc?1:0," ").concat(this.sweep?0:1," ").concat(this.endArcX," ").concat(this.endArcY)},pathEllipse2:function(){return"M ".concat(this.startArcX," ").concat(this.startArcY,"\n          A ").concat(this.rx," ").concat(this.ry," ").concat(this.xAxisRotation,"\n          ").concat(this.largeArc?0:1," ").concat(this.sweep?1:0," ").concat(this.endArcX," ").concat(this.endArcY)},pathEllipse3:function(){return"M ".concat(this.startArcX," ").concat(this.startArcY,"\n          A ").concat(this.rx," ").concat(this.ry," ").concat(this.xAxisRotation,"\n          ").concat(this.largeArc?0:1," ").concat(this.sweep?0:1," ").concat(this.endArcX," ").concat(this.endArcY)}}}),f=x,A=(e("8585"),e("2877")),v=Object(A["a"])(f,p,d,!1,null,"0c23ab57",null),b=v.exports,y={name:"HomePage",components:{EllipsePlayground:b}},m=y,w=Object(A["a"])(m,u,h,!1,null,null,null),g=w.exports,C={name:"App",components:{HomePage:g}},X=C,Y=Object(A["a"])(X,s,i,!1,null,null,null),_=Y.exports;c["default"].config.productionTip=!1,new c["default"]({vuetify:l,render:function(t){return t(_)}}).$mount("#app")},8585:function(t,r,e){"use strict";e("bf34")},bf34:function(t,r,e){}});
//# sourceMappingURL=app.b0831ea9.js.map