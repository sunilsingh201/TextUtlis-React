(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(7),c=t.n(o),r=(t(13),t(2));t(14);function s(){var e=Object(l.useState)({color:"black",background:"white"}),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)("Enable Dark mode"),s=Object(r.a)(c,2),i=s[0],d=s[1];return n.a.createElement("div",{className:"accordion container my-5",id:"accordionExample",style:t},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:t},"Accordion Item #1")),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:t},"Accordion Item #2")),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:t},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:t},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"container my-2"},n.a.createElement("button",{className:"btn btn-primary",onClick:function(){"black"===t.color?(o({color:"white",background:"black"}),d("Enable Light mode")):(o({color:"black",background:"white"}),d("Enable Dark mode"))}},i)))}function i(e){var a=Object(l.useState)(""),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement("div",{className:"form-group",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("label",{for:"exampleFormControlTextarea1"},e.heading),n.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},value:o,onChange:function(e){console.log("on change"),c(e.target.value)},rows:"5"}),n.a.createElement("button",{className:"btn btn-primary my-2 mx-2",onClick:function(){console.log("Clicked to convert"+o);var a=o.toUpperCase();c(a),e.showAlert("Converted to uppercase","success")}},"Convert to uppercase"),n.a.createElement("button",{className:"btn btn-primary my-2",onClick:function(){var a=o.toLowerCase();c(a),e.showAlert("Converted to Lowercase","success")}},"Convert to lowercase"))),n.a.createElement("div",{className:"details",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h2",null,"Your Text Summary"),n.a.createElement("p",null,o.split(" ").length," words and ",o.length," characters"),n.a.createElement("p",null,.008*o.split(" ").length," minutes read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,o.length>0?o:"Enter something")))}var d=t(4);function m(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(d.b,{className:"navbar-brand",to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(d.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(d.b,{className:"nav-link",to:"/about"},"About"))),n.a.createElement("div",{class:"custom-control custom-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{type:"checkbox",class:"custom-control-input",id:"customSwitch1",onClick:e.toggleMode}),n.a.createElement("label",{className:"custom-control-label",htmlfor:"customSwitch1"},"Enable dark mode")))))}function u(e){return e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),":",e.alert.msg)}var h=t(1);var b=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(null),b=Object(r.a)(c,2),p=b[0],g=b[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},1e3)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,null,n.a.createElement(m,{title:"Textutlis",Action:"Amazing",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="grey",E("Dark mode has been enabled","success"),document.title="dark Mode"):(o("light"),document.body.style.backgroundColor="white",E("Light mode has been enabled","success"),document.title="Light Mode")}}),n.a.createElement(u,{alert:p}),n.a.createElement("div",{className:"container"},n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/About",element:n.a.createElement(s,null)}),n.a.createElement(h.a,{exact:!0,path:"/",element:n.a.createElement(i,{heading:"Enter your text here",mode:t,showAlert:E})})))))},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)})};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),p()},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a2ca292c.chunk.js.map