(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{31:function(e,t,s){},32:function(e,t,s){},41:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),l=s(19),a=s.n(l),r=(s(31),s(32),s(7)),n=s(11),o=s.p+"static/media/FBW-Logo-WHITE.880b7446.svg",d=s(6),x=s(5),m=s(0),b=function(e){return Object(m.jsx)("div",{className:"block px-8 py-3 text-md font-medium text-white md:text-gray-700 hover:bg-gray-200 hover:text-gray-900 md:rounded-md",role:"menuitem",children:e.children})},h=function(e){var t=Object(i.useState)(!1),s=Object(r.a)(t,2),c=s[0],l=s[1];return Object(m.jsxs)("div",{className:"relative inline-block text-left ".concat(e.className),onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},children:[Object(m.jsxs)("button",{draggable:"false",type:"button",onClick:function(){return l((function(e){return!e}))},className:"inline-flex w-full px-4 py-2 text-xl text-white hover:text-blue-light transition-colors duration-200 focus:outline-none",id:"options-menu","aria-haspopup":"true","aria-expanded":"true",children:[e.titleName,Object(m.jsx)(d.a,{className:"h-5 w-5 self-center ml-1.5",icon:x.b,size:"xs"})]}),c&&Object(m.jsx)("div",{className:"block md:absolute mx-4 md:min-w-max rounded-lg bg-blue-dark-contrast md:bg-white md:ring-1 md:ring-gray-500 ring-opacity-5 ",children:Object(m.jsx)("div",{className:"divide-y divide-gray-500 md:divide-gray-200",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu",children:e.children})})]})},j=[{name:"Home",path:"/"},{name:"Projects",path:"projects"},{name:"Documentation",external:"https://docs.flybywiresim.com/"},{name:"Community",path:"#",sublinks:[{name:"Discord",external:"https://discord.gg/flybywire"},{name:"Twitter",external:"https://twitter.com/FlyByWireSim"},{name:"Facebook",external:"https://facebook.com/FlybywireSimulations/"},{name:"YouTube",external:"https://www.youtube.com/FlyByWireSimulations"},{name:"Coming Soon\u2122",path:"#"}]}];function u(e){return Object(m.jsx)("div",{className:"".concat(e.className," flex flex-col"),children:j.map((function(e){return e.sublinks?Object(m.jsx)(h,{className:"-ml-1.5",titleName:e.name,children:e.sublinks.map((function(e){return Object(m.jsx)("div",{children:e.path?Object(m.jsx)(n.b,{to:e.path,children:Object(m.jsx)(b,{children:e.name})}):Object(m.jsx)("a",{href:e.external,target:"_blank",rel:"noreferrer",children:Object(m.jsx)(b,{children:e.name})})},e.name)}))}):e.path?Object(m.jsx)(n.b,{className:"text-xl m-2 p-1 active:text-blue-light hover:text-gray-200 transition-colors duration-200 hover:text-blue-light",to:e.path,children:e.name},e.name):Object(m.jsx)("a",{href:e.external,target:"_blank",rel:"noreferrer",className:"text-xl m-2 p-1 active:text-blue-light hover:text-gray-200 transition-colors duration-200 hover:text-blue-light",children:e.name},e.name)}))})}function f(e){return Object(m.jsx)("a",{onClick:e.handleClick,className:"cursor-pointer",children:Object(m.jsx)(d.a,{icon:x.a,size:"2x"})})}function p(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),s=t[0],c=t[1];Object(i.useEffect)((function(){var e=function(){c(window.scrollY>2)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);var l=Object(i.useState)(!1),a=Object(r.a)(l,2),d=a[0],x=a[1];return Object(m.jsxs)("nav",{className:"fixed top-0 left-0 right-0 mx-auto py-2 z-50 ".concat(s||d?"transition bg-blue-dark-contrast shadow-lg-dark":"transition bg-transparent"),children:[Object(m.jsx)("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(m.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(m.jsx)(n.b,{to:"/",children:Object(m.jsx)("img",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"subpixel-antialiased h-11 cursor-pointer",src:o,alt:""})}),Object(m.jsx)("div",{className:"absolute inset-y-0 right-3 flex items-center md:hidden",children:Object(m.jsx)(f,{handleClick:function(){return x((function(e){return!e}))}})}),Object(m.jsx)("div",{className:"flex flex-row items-center",children:Object(m.jsx)(u,{className:"hidden md:block"})})]})}),Object(m.jsx)(u,{className:d?"md:hidden":"hidden"})]})}var O=s(3),g=s.p+"static/media/A32NX.27d64073.mp4";function y(e){return Object(m.jsx)("button",{onClick:e.onClick,type:"button",className:"focus:outline-none inline-flex justify-center rounded-full py-3 text-lg shadow-md-dark-contrast ".concat(e.className),children:e.children})}var v=function(e){return Object(m.jsxs)("header",{className:"h-screen",children:[Object(m.jsxs)("div",{className:"absolute max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 inset-x-2 inset-y-1/3 z-30 ",children:[Object(m.jsxs)("h1",{className:"text-7xl sm:text-8xl font-medium pb-3",children:[Object(m.jsx)("span",{className:"text-blue-light",children:"A32"}),Object(m.jsx)("span",{className:"text-blue",children:"N"}),"X"]}),Object(m.jsx)("p",{className:"text-lg max-w-lg",children:"A community built and maintained project aiming to provide high quality and detailed aircraft for Microsoft Flight Simulator."}),Object(m.jsxs)("div",{className:"flex max-w-md py-5",children:[Object(m.jsx)(y,{onClick:e.scrollToDownload,className:"w-40 text-xl font-bold bg-blue-light border-2 border-blue-light transition hover:bg-white hover:text-blue-light mr-3",children:"Download"}),Object(m.jsx)("a",{href:"https://docs.flybywiresim.com/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(y,{className:"w-44 text-xl font-bold border-2 border-blue-light text-blue-light transition hover:bg-white hover:text-blue-light",children:"Learn More"})})]})]}),Object(m.jsx)("video",{className:"absolute top-0 h-screen object-cover w-screen opacity-10",src:g,playsInline:!0,autoPlay:!0,muted:!0,loop:!0})]})},w=function(e){return Object(m.jsx)("h3",{className:"".concat(e.className," pb-3 text-xl text-blue-200 font-bold"),children:e.children})},N=function(e){return Object(m.jsx)("p",{className:e.className,children:e.children})},k=function(e){return Object(m.jsx)("div",{className:"pt-6",children:Object(m.jsxs)("div",{className:"h-full flow-root transform hover:scale-105 transition-transform duration-100 bg-gray-800 rounded-lg px-6 pb-8",children:[Object(m.jsx)("div",{className:"-mt-6",children:Object(m.jsx)("span",{className:"inline-flex items-center justify-center p-3 w-1/5 lg:w-1/6 bg-blue-light-contrast rounded-md shadow-lg",children:e.icon&&Object(m.jsx)(d.a,{icon:e.icon,size:"2x"})})}),Object(m.jsx)("div",{className:"mt-3",children:e.children})]})})},S=s.p+"static/media/feature.d97a7dfa.jpg",F=Object(i.forwardRef)((function(e,t){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"absolute w-screen",children:Object(m.jsx)("img",{className:"h-full object-cover",src:S,alt:""})}),Object(m.jsx)("div",{id:"features",className:"bg-blue-darker bg-opacity-95 relative py-14 shadow-inner",children:Object(m.jsxs)("div",{className:"rounded-lg mx-auto max-w-md px-4 py-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl",children:[Object(m.jsxs)("div",{className:"mx-auto divide-y divide-gray-500 w-1/2 2xl:w-1/4",children:[Object(m.jsx)("h2",{className:"text-base font-semibold tracking-wider text-blue-200 uppercase",children:"Some of our many"}),Object(m.jsx)("p",{className:"mt-3 pt-3 text-5xl font-medium text-blue-light",children:"Features"})]}),Object(m.jsx)("p",{className:"mt-5 max-w-prose mx-auto text-xl text-white",children:"The volunteers in the community work hard around the clock to consistently bring new features and improve the default A320. Let's take a look at some of the features the A32NX has to offer!"}),Object(m.jsx)("div",{className:"mt-12",children:Object(m.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:[Object(m.jsxs)(k,{icon:x.h,children:[Object(m.jsx)(w,{children:"Accurate System Functionality"}),Object(m.jsx)(N,{children:"The A32NX currently contains many system reworks that are true to life."})]}),Object(m.jsxs)(k,{icon:x.g,children:[Object(m.jsx)(w,{children:"Visual Reworks"}),Object(m.jsx)(N,{children:"The A32NX is packaged with multiple visual reworks including new lighting, reworked textures, and model additions."})]}),Object(m.jsxs)(k,{icon:x.f,children:[Object(m.jsx)(w,{children:"Electronic Flight Bag"}),Object(m.jsx)(N,{children:"The EFB is an integrated tablet with a handy toolkit, a settings page, performance tools, and more."})]}),Object(m.jsxs)(k,{icon:x.e,children:[Object(m.jsx)(w,{children:"Custom Soundpack"}),Object(m.jsx)(N,{children:"Enjoy sounds like never before, the A32NX includes a fully custom and highly accurate soundpack."})]}),Object(m.jsxs)(k,{icon:x.c,children:[Object(m.jsx)(w,{children:"Simbrief Integration"}),Object(m.jsx)(N,{children:"Make flight plan entry a breeze with the SimBrief integration, all it takes is one click and you are ready to go!"})]}),Object(m.jsxs)(k,{icon:x.i,children:[Object(m.jsx)(w,{children:"Product Installer"}),Object(m.jsx)(N,{children:"FlyByWire has a custom product installer, which makes the task of installing all FlyByWire products hassle free."})]}),Object(m.jsx)("div",{ref:t})]})})]})})]})})),I=function(){var e="https://flybywiresim-packages.b-cdn.net/stable/A32NX-stable.zip",t="https://flybywiresim-packages.b-cdn.net/vmaster/A32NX-master.zip",s="https://flybywiresim-packages.b-cdn.net/vmaster-cfbw-cap/A32NX-master-cfbw-cap.zip",i=function(e){return"https://api.flybywiresim.com/api/v1/download?url=".concat(e)};return Object(m.jsx)("section",{id:"download",className:"relative bg-blue-dark-contrast",children:Object(m.jsx)("div",{className:"w-full lg:w-11/12 2xl:w-4/6 m-auto px-10 py-14",children:Object(m.jsxs)("div",{className:"flex flex-col lg:flex-row",children:[Object(m.jsxs)("div",{className:"w-full lg:w-3/5 lg:pr-10",children:[Object(m.jsxs)("div",{className:"text-left divide-y divide-gray-500 w-1/2 2xl:w-1/4",children:[Object(m.jsx)("h2",{className:"text-base font-medium tracking-widest text-blue-200 uppercase",children:"READY TO FLY?"}),Object(m.jsx)("p",{className:"mt-3 pt-3 text-5xl font-medium text-blue-light",children:"Download"})]}),Object(m.jsx)("p",{className:"mt-5 max-w-prose text-xl text-white",children:"We have included many options to download our addons, you can use our custom and simple installer to always keep your products up to date, or you can download using standalone installations."}),Object(m.jsxs)("ul",{className:"list-disc -m-2 pt-5 pl-5 text-lg text-gray-200",children:[Object(m.jsx)("li",{className:"ml-2 pl-2",children:"Integrates seamlessly into Microsoft Flight Simulator - no external programs required."}),Object(m.jsx)("li",{className:"ml-2 pl-2",children:"Safe, trustworthy, and constantly updated to assure nothing is broken."}),Object(m.jsx)("li",{className:"ml-2 pl-2",children:"One click install, neatly organized into one compact folder."})]})]}),Object(m.jsxs)("div",{className:"w-full lg:w-2/5 flex flex-col divide-y divide-gray-500",children:[Object(m.jsxs)("div",{className:"pt-5 lg:pt-0 pb-5",children:[Object(m.jsx)("span",{className:"text-4xl text-blue-100",children:"Installer"}),Object(m.jsx)("p",{className:"mt-4 mb-6",children:"Our easy-to-use installer is the easiest way to get started with our addons. Simply launch and install any addon you want, with only two clicks."}),Object(m.jsx)("a",{href:"https://api.flybywiresim.com/installer",children:Object(m.jsx)(y,{className:"w-40 float-right bg-green-500 hover:bg-green-700 font-bold",children:"Download"})})]}),Object(m.jsxs)("div",{className:"pt-5",children:[Object(m.jsx)("span",{className:"text-2xl text-blue-100",children:"Direct Download"}),Object(m.jsx)("p",{className:"mt-4 mb-6",children:"If you prefer a direct download, the following links are available."}),Object(m.jsxs)("div",{className:"divide-y divide-gray-700",children:[Object(m.jsxs)("div",{className:"flex flex-row justify-between items-center mb-5",children:[Object(m.jsx)("span",{className:"text-xl text-gray-300",children:"Stable Release"}),Object(m.jsx)("a",{href:i(e),children:Object(m.jsx)(y,{className:"w-40 float-right bg-green-500 hover:bg-green-700 font-bold",children:"Download"})})]}),Object(m.jsxs)("div",{className:"flex flex-row justify-between items-center mb-5 pt-5",children:[Object(m.jsx)("span",{className:"text-xl text-gray-300",children:"Development Build"}),Object(m.jsx)("a",{href:i(t),children:Object(m.jsx)(y,{className:"w-40 float-right bg-blue-light-contrast hover:bg-blue-medium font-bold",children:"Download"})})]}),Object(m.jsxs)("div",{className:"flex flex-row justify-between items-center mb-8 pt-5",children:[Object(m.jsx)("span",{className:"text-xl text-gray-300",children:"Experimental Build"}),Object(m.jsx)("a",{href:i(s),children:Object(m.jsx)(y,{className:"w-40 float-right bg-blue-light-contrast hover:bg-blue-medium font-bold",children:"Download"})})]})]})]})]})]})})})},T=s(26),z=s(18),C=s.n(z);function D(){var e=Object(i.useState)("0"),t=Object(r.a)(e,2),s=t[0],c=t[1];Object(i.useEffect)((function(){fetch("https://api.flybywiresim.com/txcxn/_count").then((function(e){return e.text().then((function(e){return c(e)}))}))}),[]);return Object(m.jsxs)("div",{className:"py-12 lg:py-0 lg:px-20 2xl:px-32 text-center",children:[Object(m.jsx)(C.a,{to:Number(s),speed:3e3,children:function(e){return Object(m.jsx)("h1",{className:"text-6xl font-medium text-blue-dark-contrast mb-3",children:e})}}),Object(m.jsx)("span",{className:"text-xl text-gray-700",children:"Live Flights"})]})}function W(){var e=Object(i.useState)("0"),t=Object(r.a)(e,2),s=t[0],c=t[1];Object(i.useEffect)((function(){fetch("https://api.github.com/repos/flybywiresim/a32nx/commits?per_page=1").then((function(e){var t,s,i,l=null!==(t=null===(s=e.headers.get("Link"))||void 0===s||null===(i=s.match(/&page=(\d+)>; rel="last"/))||void 0===i?void 0:i[1])&&void 0!==t?t:"0";c(l)}))}),[]);return Object(m.jsxs)("div",{className:"py-12 lg:py-0 lg:px-20 2xl:px-32 text-center",children:[Object(m.jsx)(C.a,{to:Number(s),speed:3e3,children:function(e){return Object(m.jsx)("h1",{className:"text-6xl font-medium text-blue-dark-contrast mb-3",children:e})}}),Object(m.jsx)("span",{className:"text-xl text-gray-700",children:"Commits"})]})}function A(){var e=Object(i.useState)("0"),t=Object(r.a)(e,2),s=t[0],c=t[1];Object(i.useEffect)((function(){fetch("https://api.github.com/repos/flybywiresim/a32nx/contributors?per_page=1").then((function(e){var t,s,i,l=null!==(t=null===(s=e.headers.get("Link"))||void 0===s||null===(i=s.match(/&page=(\d+)>; rel="last"/))||void 0===i?void 0:i[1])&&void 0!==t?t:"0";c(l)}))}),[]);return Object(m.jsxs)("div",{className:"py-12 lg:py-0 lg:px-20 2xl:px-32 text-center",children:[Object(m.jsx)(C.a,{to:Number(s),speed:3e3,children:function(e){return Object(m.jsx)("h1",{className:"text-6xl font-medium text-blue-dark-contrast mb-3",children:e})}}),Object(m.jsx)("span",{className:"text-xl text-gray-700",children:"Contributors"})]})}function E(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),s=t[0],c=t[1],l=Object(i.useState)(""),a=Object(r.a)(l,2),n=a[0],o=a[1];Object(i.useEffect)((function(){fetch("https://api.github.com/repos/flybywiresim/a32nx/releases").then((function(e){e.json().then((function(e){var t=[];e.map((function(e){e.assets.map((function(e){t.push(e.download_count)}))})),fetch("https://api.flybywiresim.com/api/v1/download/_count").then((function(e){return e.text().then((function(e){var s=t.reduce((function(e,t){return e+t}));e&&(s+=Number(e)),s>=1e3&&(s=Math.floor(s/1e3),o("K")),s&&c(s)}))}))}))}))}),[]);return Object(m.jsxs)("div",{className:"py-12 lg:py-0 lg:px-20 2xl:px-32 text-center",children:[Object(m.jsx)(C.a,{to:Number(s),speed:3e3,children:function(e){return Object(m.jsxs)("h1",{className:"text-6xl font-medium text-blue-dark-contrast mb-3",children:[e,n]})}}),Object(m.jsx)("span",{className:"text-xl text-gray-700",children:"Downloads"})]})}function P(){var e=Object(i.useState)(5e3),t=Object(r.a)(e,2),s=t[0],c=t[1];return Object(i.useEffect)((function(){var e=setInterval((function(){c("visible"===document.visibilityState?1e4:1e5)}),100);return function(){return clearInterval(e)}}),[]),Object(m.jsxs)("div",{className:"bg-gray-50 relative",children:[Object(m.jsxs)("div",{className:"w-full mx-auto px-4 sm:px-6 lg:px-8 px-10 py-14",children:[Object(m.jsxs)("div",{className:"w-full sm:w-1/2 text-center mx-auto mb-11 divide-y divide-gray-400",children:[Object(m.jsx)("h2",{className:"text-base font-semibold tracking-wider text-gray-600 uppercase",children:"A GLANCE AT THE"}),Object(m.jsx)("p",{className:"mt-3 pt-3 text-5xl font-extrabold text-gray-700",children:"Community Insights"})]}),Object(m.jsxs)("div",{className:"mx-auto flex flex-col lg:flex-row lg:justify-center divide-y lg:divide-x lg:divide-y-0 divide-gray-500",children:[Object(m.jsx)(D,{}),Object(m.jsx)(W,{}),Object(m.jsx)(A,{}),Object(m.jsx)(E,{})]})]}),Object(m.jsx)("div",{className:"relative h-160 text-black z-20",children:Object(m.jsx)(T.a,{refreshInterval:s,disableMenu:!0,disableWeather:!1,disableScroll:!0,forceTileset:"carto-light"})})]})}var B=s.p+"static/media/discord.137dd396.jpg",_=s(12),L=function(){return Object(m.jsxs)("section",{className:"h-144 sm:h-120 bg-navy-800 flex items-center",children:[Object(m.jsx)("div",{className:"absolute z-20 w-full flex justify-center",children:Object(m.jsxs)("div",{className:"relative xl:w-2/3 justify-center xl:justify-start text-center sm:flex sm:divide-x sm:space-x-10",children:[Object(m.jsx)(d.a,{className:"self-center mb-3 sm:mb-0",icon:_.a,size:"9x"}),Object(m.jsxs)("div",{className:"sm:space-x-10 text-center mx-auto sm:text-left w-3/4 sm:w-1/2",children:[Object(m.jsxs)("div",{className:"w-full sm:w-2/3 md:1/3 2xl:w-1/5 divide-y divide-gray-400 sm:ml-10 space-y-2",children:[Object(m.jsx)("p",{className:"font-medium tracking-widest text-white uppercase ml-1",children:"JOIN US ON"}),Object(m.jsx)("h2",{className:"text-5xl pt-2.5 text-discord font-bold",children:"Discord"})]}),Object(m.jsx)("p",{className:"text-xl mt-3 justify-center",children:"Join our partnered community server with over 20,000 members to meet new people and share your interests."}),Object(m.jsx)("div",{className:"mt-6 flex justify-center sm:justify-start",children:Object(m.jsx)("a",{href:"https://discord.gg/flybywire",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(y,{className:"w-60 text-xl text-white font-bold bg-discord border-2 border-discord transition hover:bg-white hover:text-discord",children:"Join the Community"})})})]})]})}),Object(m.jsx)("img",{className:"relative z-0 h-144 sm:h-120 object-cover w-screen opacity-20",src:B,alt:""})]})},M=s.p+"static/media/flightsimto.15a3d435.png",R=s.p+"static/media/fsnews.8f8b550c.png",q=s.p+"static/media/yourcontrols.4d9ae9f0.png",X=s.p+"static/media/salty.bdd2e347.svg",J=s.p+"static/media/s4f.8022961f.png",U=function(e){return Object(m.jsx)("div",{className:"p-8 h-full ".concat(e.className),children:Object(m.jsx)("img",{className:"h-full w-full object-contain transform hover:scale-105 transition-transform duration-100 filter-grayscale hover:filter-none",src:e.src,alt:""})})},Y=function(e){return Object(m.jsx)("div",{id:e.name,className:"flex flex-col h-full justify-center ".concat(e.className),children:Object(m.jsx)("a",{href:e.path,target:"_blank",rel:"noreferrer",children:e.children})})};function H(){return Object(m.jsxs)("div",{className:"relative w-full px-10 py-14",children:[Object(m.jsxs)("div",{className:"w-1/2 2xl:w-1/4 text-center mx-auto divide-y divide-gray-400",children:[Object(m.jsx)("h2",{className:"text-base font-semibold tracking-wider text-blue-200 uppercase",children:"OUR AFFILIATED"}),Object(m.jsx)("p",{className:"mt-3 pt-3 text-5xl font-extrabold text-blue-light",children:"Partners"})]}),Object(m.jsxs)("div",{className:"w-1/2 sm:w-3/5 2xl:w-1/2 grid grid-cols-1 lg:grid-cols-3 mt-8 mx-auto",children:[Object(m.jsx)(Y,{name:"Flightsim.to",path:"https://flightsim.to/",children:Object(m.jsx)(U,{src:M})}),Object(m.jsx)(Y,{name:"FSNews",path:"https://fsnews.eu/",children:Object(m.jsx)(U,{src:R})}),Object(m.jsx)(Y,{name:"YourControls",path:"https://github.com/Sequal32/yourcontrols",children:Object(m.jsx)(U,{src:q})})]}),Object(m.jsxs)("div",{className:"w-1/2 sm:w-2/6 2xl:w-1/5 grid grid-cols-1 lg:grid-cols-2 mx-auto",children:[Object(m.jsx)(Y,{name:"SaltySimulations",path:"https://sim4flight.com/salty/",children:Object(m.jsx)(U,{className:"w-2/3 mx-auto",src:X})}),Object(m.jsx)(Y,{name:"sim4flight",path:"https://sim4flight.com/",children:Object(m.jsx)(U,{className:"mx-auto",src:J})})]})]})}var V=s.p+"static/media/donate.0f568da5.jpg",G=function(){return Object(m.jsxs)("section",{className:"h-160 sm:h-120 flex flex-row items-center",children:[Object(m.jsx)("div",{className:"absolute w-full z-10 flex flex-row justify-center",children:Object(m.jsxs)("div",{className:"w-3/4 xl:w-2/3 flex flex-col text-center xl:text-left",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"text-5xl text-teal font-extrabold",children:"Donate"}),Object(m.jsx)("p",{className:"xl:w-2/3 text-lg sm:text-xl mt-6",children:"Contributions allow FlyByWire Simulations to provide better services for our users, such as fast and reliable download networks and integrated online features to enrich your flight simulation experience."}),Object(m.jsx)("p",{className:"xl:w-2/3 text-lg sm:text-xl mt-6",children:"We use Open Collective to transparently manage our donations and expenses, which means you can see how we utilize donated funds at any time."})]}),Object(m.jsxs)("div",{className:"mt-6 xl:divide-x divide-gray-400 xl:space-x-7 flex flex-col-reverse xl:flex-row items-center",children:[Object(m.jsx)("a",{href:"https://opencollective.com/flybywire/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(y,{className:"w-40 text-xl font-bold bg-teal border-2 border-blue-light transition hover:bg-white hover:text-blue-light",children:"Donate"})}),Object(m.jsx)("h2",{className:"max-w-prose text-teal-50 h-14 mb-7 xl:mb-0 xl:pl-7 flex flex-row items-center",children:"No profit is generated from donations. Donating does not guarantee access to additional content nor its exclusivity if such content is ever given."})]})]})}),Object(m.jsx)("img",{className:"relative z-0 h-160 sm:h-120 object-cover w-screen opacity-10",src:V})]})},K=function(e){return Object(m.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer",children:Object(m.jsx)(d.a,{className:"mx-2 hover:text-blue-light duration-100",icon:e.icon,size:"lg"})})},Q=function(){window.scrollTo({top:0,behavior:"smooth"})},Z=function(){return Object(m.jsx)("div",{className:"bg-blue-dark w-full px-10 py-8",children:Object(m.jsx)("div",{className:"flex flex-row justify-center",children:Object(m.jsxs)("div",{className:"flex flex-col",children:[Object(m.jsxs)("div",{className:"flex flex-col-3 py-4 text-lg mx-auto",children:[Object(m.jsx)(K,{icon:_.c,href:"https://github.com/flybywiresim"}),Object(m.jsx)(K,{icon:_.e,href:"https://twitter.com/FlyByWireSim"}),Object(m.jsx)(K,{icon:_.b,href:"https://www.facebook.com/FlyByWireSimulations"}),Object(m.jsx)(K,{icon:_.a,href:"https://discord.gg/flybywire"}),Object(m.jsx)(K,{icon:_.d,href:"https://www.twitch.tv/flybywiresimulations"}),Object(m.jsx)(K,{icon:_.f,href:"https://www.youtube.com/c/FlyByWireSimulations"})]}),Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsxs)("div",{className:"flex flex-row justify-center mx-auto space-x-8",children:[Object(m.jsx)("a",{className:"hover:underline",href:"https://github.com/flybywiresim/flybywiresim-website/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("p",{children:"Source Code"})}),Object(m.jsx)("div",{className:"hover:underline",children:Object(m.jsx)(n.b,{to:"/tos",children:Object(m.jsx)("p",{onClick:Q,children:"Terms of Service"})})}),Object(m.jsx)("div",{className:"hover:underline",children:Object(m.jsx)(n.b,{to:"/privacy",children:Object(m.jsx)("p",{onClick:Q,children:"Privacy Policy"})})})]}),Object(m.jsx)("p",{className:"text-gray-400 pt-2",children:"\xa9 FlyByWire Simulations and its contributors 2020-2021"}),Object(m.jsx)("p",{className:"text-sm text-gray-400 pt-2",children:"v1.3"})]})]})})})},$=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"relative mx-auto px-2 my-80 max-w-md md:max-w-4xl text-center z-20",children:[Object(m.jsx)("h5",{className:"text-9xl text-blue-light font-bold",children:"404"}),Object(m.jsx)("h2",{className:"mt-8 text-4xl font-bold",children:"We don't know where the baggage is! It seems like the URL that you requested from us doesn't exist."}),Object(m.jsx)("h1",{className:"mt-4 text-xl text-grey-light font-medium",children:"If you believe this was a mistake, reach out to us through our Discord, or return to the homepage."})]}),Object(m.jsx)("video",{className:"absolute top-0 h-screen object-cover w-screen opacity-10",src:g,playsInline:!0,autoPlay:!0,muted:!0,loop:!0})]})},ee=function(){var e=Object(i.useRef)(null);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{className:"relative z-0 object-cover w-screen h-screen opacity-20 shadow-2xl",src:B,alt:""}),Object(m.jsxs)("div",{className:"absolute top-0 bottom-0 z-20 w-full flex justify-center",children:[Object(m.jsxs)("div",{className:"relative my-auto xl:w-2/3 justify-center xl:justify-start text-center sm:flex sm:item-center sm:divide-x sm:space-x-10",children:[Object(m.jsx)(d.a,{className:"mb-3 sm:mb-0 self-center",icon:x.d,size:"7x"}),Object(m.jsxs)("div",{className:"sm:space-x-10 mx-auto text-center md:text-left w-7/12",children:[Object(m.jsx)("div",{className:"w-full divide-y divide-gray-400 sm:ml-10 space-y-2",children:Object(m.jsx)("h1",{className:"text-4xl md:text-7xl text-blue-light sm:text-8xl font-medium",children:"Terms of Service"})}),Object(m.jsx)("p",{className:"text-xl mt-3",children:"Please take some time to review our terms of service. At flybywire simulations we make it a priority to ensure the legal and fair usage of software."})]})]}),Object(m.jsx)(d.a,{onClick:function(){var t;null===(t=e.current)||void 0===t||t.scrollIntoView()},className:"absolute animate-bounce bottom-5 cursor-pointer",icon:x.b,size:"3x"})]}),Object(m.jsx)("div",{ref:e}),Object(m.jsxs)("div",{className:"w-full md:mx-auto px-20 xl:px-0 my-40 max-w-6xl",children:[Object(m.jsx)("h1",{className:"mt-40 text-6xl text-blue-light font-bold",children:"Terms of Service"}),Object(m.jsxs)("div",{className:"mt-2",children:[Object(m.jsx)("p",{children:"Effective: 21/12/2020"}),Object(m.jsx)("p",{children:"Author: Nathan Innes"})]}),Object(m.jsx)("div",{className:"w-0",children:Object(m.jsx)("a",{className:"hover:text-blue-light underline",href:"https://github.com/flybywiresim/manuals/raw/master/pdf/Terms%20of%20Service.pdf",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("p",{children:"Download"})})}),Object(m.jsxs)("div",{className:"mt-10 ",children:[Object(m.jsx)("h1",{className:"text-4xl text-blue-light-contrast font-bold",children:"Minimum Age Requirement"}),Object(m.jsxs)("p",{className:"text-xl mt-4 leading-9 font-light",children:["To protect the privacy of younger people it is very important that we implement an age restriction of ",Object(m.jsx)("b",{children:"13 and over"})," to join Flybywire Simulation services such as this website and Discord or any other communication platform, other platforms may be subject to their own conditions. By using Flybywire Simulations services, you agree that you are 13 years of age and the minimum age of digital consent in your country. Flybywire Simulations reserve the right to remove users under the age of 13 and minimum age of digital consent in any given case from communication platforms."]}),Object(m.jsx)("h1",{className:"text-4xl mt-8 text-blue-light-contrast font-bold",children:"User Complaint"}),Object(m.jsxs)("p",{className:"text-xl mt-4 leading-9 font-light",children:["In the event of a user should feel the need to make a complaint against another member, with regards to violating our ",Object(m.jsx)("b",{children:"Terms of Service"})," or ",Object(m.jsx)("b",{children:"Communication Platform Rules (Discord)"}),", they can contact the Moderation team through Discord private message. When writing the report please state the members name and what they are violating. All complaints will be dealt with as professionally and as quickly as possible."]}),Object(m.jsx)("h1",{className:"text-4xl mt-8 text-blue-light-contrast font-bold",children:"Legal Requirements"}),Object(m.jsxs)("p",{className:"text-xl mt-4 leading-9 font-light",children:["All users of Flybywire Simulations who choose to fly our mod must own a ",Object(m.jsx)("b",{children:"legal"})," copy of Microsoft Flight Simulator (MSFS2020)"]})]})]})]})},te=function(){var e=Object(i.useRef)(null);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{className:"relative z-0 object-cover w-screen h-screen opacity-20 shadow-2xl",src:B,alt:""}),Object(m.jsxs)("div",{className:"absolute top-0 bottom-0 z-20 w-full flex justify-center",children:[Object(m.jsxs)("div",{className:"relative my-auto xl:w-3/4 md:w-4/5 justify-center xl:justify-start text-center sm:flex sm:item-center sm:divide-x sm:space-x-10",children:[Object(m.jsx)(d.a,{className:"mb-3 sm:mb-0 self-center",icon:x.j,size:"7x"}),Object(m.jsxs)("div",{className:"sm:space-x-10 mx-auto text-center md:text-left w-1/2",children:[Object(m.jsx)("div",{className:"w-full divide-y divide-gray-400 sm:ml-10 space-y-2",children:Object(m.jsx)("h1",{className:"text-4xl md:text-7xl text-blue-light sm:text-8xl font-medium",children:"Privacy Policy"})}),Object(m.jsx)("p",{className:"text-xl mt-3",children:"Please take some time to review our privacy policy. At flybywire simulations we make it a priority to be thoroughly transparent to our users about the data we collect and use."})]})]}),Object(m.jsx)(d.a,{onClick:function(){var t;null===(t=e.current)||void 0===t||t.scrollIntoView()},className:"absolute animate-bounce bottom-5 cursor-pointer",icon:x.b,size:"3x"})]}),Object(m.jsx)("div",{ref:e}),Object(m.jsxs)("div",{className:"w-full md:mx-auto px-20 xl:px-0 my-40 max-w-6xl",children:[Object(m.jsx)("h1",{className:"mt-40 text-6xl text-blue-light font-bold",children:"Privacy Policy"}),Object(m.jsxs)("div",{className:"mt-2",children:[Object(m.jsx)("p",{children:"Effective: 21/12/2020"}),Object(m.jsx)("p",{children:"Author: Nathan Innes"})]}),Object(m.jsx)("div",{className:"w-0",children:Object(m.jsx)("a",{className:"hover:text-blue-light underline",href:"https://github.com/flybywiresim/manuals/raw/master/pdf/Privacy%20Policy.pdf",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("p",{children:"Download"})})}),Object(m.jsxs)("div",{className:"mt-10 ",children:[Object(m.jsx)("h1",{className:"text-4xl text-blue-light-contrast font-bold",children:"What information do we collect?"}),Object(m.jsxs)("div",{className:"text-xl mt-4 leading-9 font-light",children:[Object(m.jsx)("p",{children:"We may collect, store and use the following kinds of personal data:"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("br",{}),"1. Information about your visits to and use of this website;"]}),Object(m.jsx)("p",{children:"2. Information about any transactions carried out between you and us on or in relation to this website or any of our services including but not limited to Flybywire GitHub repositories, Discord and the in-game mod;"}),Object(m.jsx)("p",{children:"3. Information that you provide to us for the purpose of registering with us, and/or subscribing to our website services and/or email notifications."})]}),Object(m.jsx)("h1",{className:"text-4xl mt-8 text-blue-light-contrast font-bold",children:"Information about website visits"}),Object(m.jsxs)("div",{className:"text-xl mt-4 leading-9 font-light",children:[Object(m.jsx)("p",{children:"We may collect information about your visits to this website such as your IP address, geographical location, browser type, referral source, length of visit and number of page views. We may use this information in the administration of this website, to improve the website's usability, and for marketing purposes."}),Object(m.jsxs)("p",{children:[Object(m.jsx)("br",{}),"We use cookies on this website. A cookie is a text file sent by a web server to a web browser, and stored by the browser. The text file is then sent back to the server each time the browser requests a page from the server. This enables the web server to identify and track the web browser."]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("br",{}),"We may send a cookie which may be stored by your browser on your computer's hard drive. We may use the information we obtain from the cookie in the administration of this website, to improve the website's usability and for marketing purposes. We may also use that information to recognise your computer when you visit our website, and to personalise our website for you."]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("br",{}),'Most browsers allow you to refuse to accept cookies. (For example, in Internet Explorer you can refuse all cookie by clicking "Tools", "Internet Options", "Privacy", and selecting "Block all cookies" using the sliding selector.) This will, however, have a negative impact upon the usability of many websites.']})]}),Object(m.jsx)("h1",{className:"text-4xl mt-8 text-blue-light-contrast font-bold",children:"Using your personal data"}),Object(m.jsxs)("div",{className:"text-xl mt-4 leading-9 font-light",children:[Object(m.jsx)("p",{children:"Personal data submitted to this website will be used for the purposes specified in this privacy policy or in relevant parts of the website. In addition to the uses identified elsewhere in this privacy policy, we may use your personal information to:"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("br",{}),"1. Improve your browsing experience by personalising the website;"]}),Object(m.jsx)("p",{children:"2. Provide other organisations with statistical information about our users - but this information will not be used to identify any individual user."}),Object(m.jsxs)("p",{children:[Object(m.jsx)("br",{}),"We will not without your express consent provide your personal information to any third parties for the purpose of direct marketing."]})]}),Object(m.jsx)("h1",{className:"text-4xl mt-8 text-blue-light-contrast font-bold",children:"Other disclosures"}),Object(m.jsxs)("div",{className:"text-xl mt-4 leading-9 font-light",children:[Object(m.jsx)("p",{children:"In addition to the disclosures reasonably necessary for the purposes identified elsewhere in this privacy policy, we may disclose information about you:"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("br",{}),"1. To the extent that we are required to do so by law;"]}),Object(m.jsx)("p",{children:"2. In connection with any legal proceedings or prospective legal proceedings;"}),Object(m.jsx)("p",{children:"3. In order to establish, exercise or defend our legal rights (including providing information to others for the purposes of fraud prevention and reducing credit risk);"}),Object(m.jsx)("p",{children:"4. Except as provided in this privacy policy, we will not provide your information to third parties."})]}),Object(m.jsx)("h1",{className:"text-4xl mt-8 text-blue-light-contrast font-bold",children:"Security of your personal data"}),Object(m.jsx)("div",{className:"text-xl mt-4 leading-9 font-light",children:Object(m.jsx)("p",{children:"We will take reasonable precautions to prevent the loss, misuse or alteration of your personal information. Of course, data transmission over the internet is inherently insecure, and we cannot guarantee the security of data sent over the internet."})}),Object(m.jsx)("h1",{className:"text-4xl mt-8 text-blue-light-contrast font-bold",children:"Third party websites"}),Object(m.jsx)("div",{className:"text-xl mt-4 leading-9 font-light",children:Object(m.jsx)("p",{children:"The website contains links to other websites. We are not responsible for the privacy policies of third party websites."})})]})]})]})},se=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"relative mx-auto px-2 my-80 max-w-md md:max-w-4xl text-center z-20",children:[Object(m.jsx)("h1",{className:"text-8xl text-blue-light font-bold",children:"Coming Soon"}),Object(m.jsx)("p",{className:"mt-4 pt-4 text-4xl font-bold",children:"Content is coming soon to this page, check back later."})]}),Object(m.jsx)("video",{className:"absolute top-0 h-screen object-cover w-screen opacity-10",src:g,playsInline:!0,autoPlay:!0,muted:!0,loop:!0})]})};var ie=function(){var e=Object(i.useRef)(null);return Object(m.jsxs)(n.a,{children:[Object(m.jsx)(p,{}),Object(m.jsxs)(O.c,{children:[Object(m.jsx)(O.a,{exact:!0,path:"/projects",children:Object(m.jsx)(se,{})}),Object(m.jsxs)(O.a,{exact:!0,path:"/",children:[Object(m.jsx)(v,{scrollToDownload:function(){e.current&&e.current.scrollIntoView()}}),Object(m.jsx)(F,{ref:e}),Object(m.jsx)(I,{}),Object(m.jsx)(L,{}),Object(m.jsx)(P,{}),Object(m.jsx)(H,{}),Object(m.jsx)(G,{}),Object(m.jsx)(Z,{})]}),Object(m.jsxs)(O.a,{exact:!0,path:"/tos",children:[Object(m.jsx)(ee,{}),Object(m.jsx)(Z,{})]}),Object(m.jsxs)(O.a,{exact:!0,path:"/privacy",children:[Object(m.jsx)(te,{}),Object(m.jsx)(Z,{})]}),Object(m.jsx)(O.a,{component:$})]})]})};a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(ie,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.00e91943.chunk.js.map