(this["webpackJsonpreact-ravenous"]=this["webpackJsonpreact-ravenous"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/kelp.062a796b.png"},function(e,t,n){e.exports=n.p+"static/media/favicon.83942fdc.ico"},,,,function(e,t,n){e.exports=n(39)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),s=(n(24),n(18)),i=n(1),l=n(14),u=n.n(l),m=(n(25),n(26),n(27),n(28),n(15)),d=n.n(m);function p(e){var t=e.business,n=e.clickOnBusiness,a=e.id;return c.a.createElement("div",{className:"Business",id:a},c.a.createElement("div",{className:"image-container"},c.a.createElement("img",{src:t.imageSrc?t.imageSrc:d.a,alt:[t.coordinates.longitude,t.coordinates.latitude],onClick:function(e){n(e.target.alt.split(","))}})),c.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"Business-name"},c.a.createElement("h2",null,t.name)),c.a.createElement("div",{className:"Business-information"},c.a.createElement("div",{className:"Business-address"},c.a.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=".concat(t.address,"+").concat(t.city),target:"_blank",rel:"noopener noreferrer"},c.a.createElement("p",null,t.address),c.a.createElement("p",null,t.city),c.a.createElement("p",null,"".concat(t.state," ").concat(t.zipCode)))),c.a.createElement("div",{className:"Business-reviews"},t.category?c.a.createElement("h3",null,t.category.toUpperCase()):null,c.a.createElement("h3",{className:"rating"},"".concat(t.rating," stars")),c.a.createElement("p",null,"".concat(t.reviewCount," reviews")))))}var f=function(e){var t=[];return e.businesses.map((function(e){return t.push(e)})),c.a.createElement("div",{className:"BusinessList",style:e.style},e.businesses.map((function(t){return c.a.createElement(p,{business:t,className:"biz",id:t.id,key:t.id,clickOnBusiness:e.clickOnBusiness})})))};n(29);function b(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),r=n[0],o=n[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),u=l[0],m=l[1],d=Object(a.useState)("best_match"),p=Object(i.a)(d,2),f=p[0],b=p[1],h={"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"},v=function(e){return f===e?"active":""},E=function(){if(r&&u)e.searchYelp(r,u,f);else{var t=document.createElement("div"),n=document.createElement("p"),a=document.querySelector(".SearchBar-submit");t.setAttribute("style","display: flex; justify-content: center; position: absolute; width: 100%; margin-top: 35px;"),n.textContent="Must fill in all fields! \ud83e\uddd0",n.style.cssText="color: white; background: red; width: 300px; padding: 7px; border-radius: 7px; opacity: 0.9; display: flex; justify-content: center; font-size: 1.1rem",t.append(n),a.append(t),setTimeout((function(){a.removeChild(t)}),5e3)}},g=function(e){e.preventDefault(),13===e.keyCode&&E()};return c.a.createElement("div",{className:"SearchBar"},c.a.createElement("div",{className:"SearchBar-sort-options"},c.a.createElement("ul",null,Object.keys(h).map((function(e){var t=h[e];return c.a.createElement("li",{key:t,className:v(t),onClick:function(){return function(e){b(e),r&&u&&(console.log("sort option changed to ".concat(e)),E())}(t)}},e)})))),c.a.createElement("div",{className:"SearchBar-fields"},c.a.createElement("input",{className:"termInput",onChange:function(e){o(e.target.value)},placeholder:"Search Businesses",onKeyUp:g}),c.a.createElement("input",{className:"locationInput",onChange:function(e){m(e.target.value)},placeholder:"Where?",onKeyUp:g,value:u||""})),c.a.createElement("div",{className:"SearchBar-submit"},c.a.createElement("button",{onClick:E},"Let's Go")))}var h=n(10),v=n.n(h),E=n(16),g={search:function(){var e=Object(E.a)(v.a.mark((function e(t,n,a){var c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(t,"&location=").concat(n,"&sort_by=").concat(a),{headers:{Authorization:"Bearer ".concat("pNUUtdTjrkfUQQ6oulCCXktMcftn4rR1VUc2uKWt0uxxqOeoHUUvzS_CorL4NtLvK_TDzR7xYaNYy7W8umfbNPPKdHexEmhvZs9mZl1blmePnovnY9AT2CirAR_tXnYx")}});case 2:return c=e.sent,e.next=5,c.json();case 5:if(!(r=e.sent).businesses){e.next=8;break}return e.abrupt("return",r.businesses.map((function(e){return{id:e.id,imageSrc:e.image_url,url:e.url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0]?e.categories[0].title:null,rating:e.rating,reviewCount:e.review_count,coordinates:e.coordinates}})));case 8:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},y=n(4),w=n.n(y),j=(n(31),n(2));function k(e){var t=e.onClick,n=e.businesses,r=e.clickedBusiness,o=Object(a.useState)(!1),s=Object(i.a)(o,2),l=s[0],u=s[1],m=Object(a.useState)(!1),d=Object(i.a)(m,2),p=d[0],f=d[1],b=Object(a.useState)(),h=Object(i.a)(b,2),v=h[0],E=h[1],g=Object(a.useState)([]),y=Object(i.a)(g,2),k=(y[0],y[1]),O=Object(a.useRef)([]),x=Object(j.b)(),N=Object(a.useCallback)((function(){!function(e){var t=window.document.getElementsByTagName("script")[0],n=window.document.createElement("script");n.src=e,t.parentNode.insertBefore(n,t)}("https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"),window.initMap=C,window.initMap()}),[]),C=function(){w.a.accessToken="pk.eyJ1Ijoic3Rhbi1kZXYiLCJhIjoiY2tlYm9leWpjMGFpMjJ0cndybWdpbmVwMSJ9.I0CXw1DFG7WYKgyVm7x07A";var e=new w.a.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[-96,37.8],zoom:3});e.on("load",(function(){E(e),e.resize()}))},B=Object(a.useCallback)((function(){var e={type:"FeatureCollection",features:n.map((function(e){return{type:"Feature",geometry:{type:"Point",coordinates:[e.coordinates.longitude,e.coordinates.latitude]},properties:{title:e.name,address:e.address,city:e.city,category:e.category,url:e.url,id:e.id}}}))};O.current!==n&&(O.current.forEach((function(e){return e.remove()})),O.current=[],console.log("remove existing markers!",O)),e.features.forEach((function(e){var t=document.createElement("div");t.className="marker";var n,a=new w.a.Marker(t);a.setLngLat(e.geometry.coordinates).setPopup(new w.a.Popup({offset:25}).setHTML("<h3>"+e.properties.title+"</h3><p>"+e.properties.city+"</p>"+e.properties.category+'<a href="'+e.properties.url+'" target="_blank"><p>Yelp Page</p><a>')).addTo(v),O.current.push(a),k([O.current]),n=e,v.flyTo({center:n.geometry.coordinates,zoom:10}),t.addEventListener("click",(function(t){!function(e){v.flyTo({center:e.geometry.coordinates,zoom:14})}(e),x({type:"MARKER_CLICKED",payload:e.properties.id})})),O.current.forEach((function(e){}))}))}),[n]);Object(a.useEffect)((function(){var e;n&&r&&(e={coordinates:[r[0],r[1]]},v.flyTo({center:e.coordinates,zoom:14}),O.current.forEach((function(e){e._lngLat.lng.toFixed(4),Number(r[0]).toFixed(4)})))}),[r]),Object(a.useEffect)((function(){N(),console.log("first rendermap() launched")}),[N]),Object(a.useEffect)((function(){B()}),[n]),Object(a.useEffect)((function(){var e=document.querySelector("#mapContainer");document.querySelector(".mapButton").addEventListener("click",(function(){"block"===e.style.display?e.style.display="none":e.style.display="block"}))}),[]);var S=l?"Hide Map":"Show Map";return c.a.createElement("div",{className:"mapBackground"},c.a.createElement("div",{className:"mapButtContainer"},c.a.createElement("button",{className:"mapButton",onClick:function(){p||f(!0),t(),u((function(e){return!e})),setTimeout((function(){window.dispatchEvent(new Event("resize"))}),0)}},S)),c.a.createElement("div",{id:"mapContainer"},c.a.createElement("div",{id:"map"})))}n(38);function O(){return c.a.createElement("svg",{className:"spinner",width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"}))}function x(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),m=l[0],d=l[1],p=Object(a.useState)(!1),h=Object(i.a)(p,2),v=h[0],E=h[1],y=Object(a.useState)(),w=Object(i.a)(y,2),x=w[0],N=w[1],C=Object(a.useState)(!1),B=Object(i.a)(C,2),S=B[0],z=B[1],M=Object(j.c)((function(e){return e}));Object(a.useEffect)((function(){n&&d(!1)}),[n,d]);var L=Object(a.useRef)();Object(a.useEffect)((function(){var e=document.getElementById(M.currentMarker);e&&(e.classList.add("activeBiz"),e.scrollIntoView({block:"start",inline:"start",behavior:"smooth"})),L.current&&L.current!==e&&L.current.classList.remove("activeBiz"),L.current=e}),[M.currentMarker]),Object(a.useEffect)((function(){window.addEventListener("resize",(function(){var e=window.innerWidth||document.documentElement.clientWidth;e<900&&z(!0),e>900&&z(!1)}))}),[S]);var T=v&&!S?{width:"50%"}:{width:"100%"};return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"logo-container"},c.a.createElement("a",{href:"/",className:"logo",style:{textDecoration:"none",color:"white"}},c.a.createElement("span",null,"kelp"),c.a.createElement("img",{src:u.a,alt:"kelp logo",height:"30px"}))),c.a.createElement(b,{searchYelp:function(e,t,n){d(!0),g.search(e,t,n).then((function(e){if(r([]),!e||e.length<1){var t=document.createElement("p"),n=document.querySelector(".noresults");t.textContent="No results found! \ud83d\ude31\ud83d\ude22",t.style.cssText="color: white; background: red; padding: 10px; border-radius: 4px; text-align: center; width: 300px; font-size: 1.3rem",n.append(t),console.log("NOTHING FOUND!"),setTimeout((function(){n.removeChild(t)}),5e3)}else r(Object(s.a)(e))}))}}),c.a.createElement("div",{className:"noresults",style:{width:"100%",display:"flex",justifyContent:"center",marginTop:"30px",position:"absolute"}}),c.a.createElement("div",{id:"mapComponent",className:"sticky"},c.a.createElement(k,{onClick:function(){E((function(e){return!e}))},businesses:n,clickedBusiness:x})),c.a.createElement("div",{style:T,className:"BizListContainer"},m?c.a.createElement("div",{className:"loader"},c.a.createElement(O,{style:{display:"flex",alignItems:"center",justifyContent:"center"}})):c.a.createElement(f,{businesses:n,clickOnBusiness:function(e){N(e)}})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(5),C=n(8),B={currentBiz:"bananas",currentMarker:"default marker!"},S=Object(C.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BUSINESS_CLICKED":return Object(N.a)(Object(N.a)({},e),{},{currentBiz:t.payload});case"MARKER_CLICKED":return Object(N.a)(Object(N.a)({},e),{},{currentMarker:t.payload});default:return e}}));o.a.render(c.a.createElement(j.a,{store:S},c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.613eb06f.chunk.js.map