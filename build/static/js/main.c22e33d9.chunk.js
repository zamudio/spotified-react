(this["webpackJsonpdance-dance-spotify"]=this["webpackJsonpdance-dance-spotify"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),r=n.n(o),s=(n(14),n(4)),c=n(5),l=n(1),u=n(8),d=n(7),m=n(6),p=["user-top-read","user-read-currently-playing","user-read-playback-state"],g=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var n=t.split("=");e[n[0]]=decodeURIComponent(n[1])}return e}),{});window.location.hash="";var h=g,f=(n(15),function(e){var t={backgroundImage:"url(".concat(e.item.album.images[0].url,")")},n={width:100*e.progress_ms/e.item.duration_ms+"%"};return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"main-wrapper"},i.a.createElement("div",{className:"now-playing__img"},i.a.createElement("img",{src:e.item.album.images[0].url})),i.a.createElement("div",{className:"now-playing__side"},i.a.createElement("div",{className:"now-playing__name"},e.item.name),i.a.createElement("div",{className:"now-playing__artist"},e.item.artists[0].name),i.a.createElement("div",{className:"now-playing__status"},e.is_playing?"Playing":"Paused"),i.a.createElement("div",{className:"progress"},i.a.createElement("div",{className:"progress__bar",style:n}))),i.a.createElement("div",{className:"background",style:t})," "))}),y=(n(16),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={token:null,item:{album:{images:[{url:""}]},name:"",artists:[{name:""}],duration_ms:0,id:""},is_playing:"Paused",progress_ms:0},e.getCurrentlyPlaying=e.getCurrentlyPlaying.bind(Object(l.a)(e)),e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=h.access_token;e&&(this.setState({token:e}),this.getCurrentlyPlaying(e))}},{key:"getCurrentlyPlaying",value:function(e){var t=this;m.ajax({url:"https://api.spotify.com/v1/me/player",type:"GET",beforeSend:function(t){t.setRequestHeader("Authorization","Bearer "+e)},success:function(e){t.setState({item:e.item,is_playing:e.is_playing,progress_ms:e.progress_ms,id:e.item.id})}})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h1",null,"Spotified React"),i.a.createElement("p",{className:"descrip"},"Spot what you're currently listening to... Because why not?"),!this.state.token&&i.a.createElement("a",{className:"btn btn--loginApp-link",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("f38787012cf04fbf9953ed6a3e1f2a9a","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(p.join("%20"),"&response_type=token&show_dialog=true")},"Log into Spotify"),this.state.token&&i.a.createElement(f,{item:this.state.item,is_playing:this.state.is_playing,progress_ms:this.progress_ms,id:this.state.id})))}}]),n}(a.Component)),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");v?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.c22e33d9.chunk.js.map