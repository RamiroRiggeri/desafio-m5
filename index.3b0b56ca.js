function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},a=e.parcelRequire9bce;null==a&&((a=function(n){if(n in t)return t[n].exports;if(n in o){var e=o[n];delete o[n];var a={id:n,exports:{}};return t[n]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){o[n]=e},e.parcelRequire9bce=a),a.register("27Lyk",(function(e,t){var o,a;n(e.exports,"register",(()=>o),(n=>o=n)),n(e.exports,"resolve",(()=>a),(n=>a=n));var i={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)i[e[t]]=n[e[t]]},a=function(n){var e=i[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),a("27Lyk").register(JSON.parse('{"dZpbI":"index.3b0b56ca.js","QphNf":"piedra.c88f7ccf.svg","jEbsN":"tijera.6a2fdda1.svg","lcS8G":"papel.5f79bbf0.svg","bmCV9":"estrella.4b96d87d.svg","kLzJM":"estrella-roja.342a139d.svg"}'));const i={data:{currentGame:{cpuPlay:"",playerPlay:""},history:{player:0,cpu:0,draw:0}},listeners:[],getState(){return JSON.parse(localStorage.getItem("saved-games"))?(this.data.history=JSON.parse(localStorage.getItem("saved-games")),this.data):this.data},setState(n){this.data=n;for(const e of this.listeners)e(n);localStorage.setItem("saved-games",JSON.stringify(n.history))},subscribe(n){this.listeners.push(n)},setMove(n){const e=this.getState();e.currentGame.playerPlay=n,e.currentGame.cpuPlay=this.cpuRandomizer(Math.trunc(3*Math.random()))},cpuRandomizer:n=>({0:"tijera",1:"papel",2:"piedra"}[n]),whoWins(n,e){const t=this.getState();if(""!=n)return n==e?(t.history.draw++,this.setState(t),"draw"):"papel"==n&&"piedra"==e||"tijera"==n&&"papel"==e||"piedra"==n&&"tijera"==e?(t.history.player++,this.setState(t),"win"):(t.history.cpu++,this.setState(t),"lose");console.log("no se seleccionó opción")}};const r=[{path:/\/welcome/,component:function(n){const e=document.createElement("div");e.className="homepage",e.innerHTML='\n        <div class="inicio">\n          <h1 class="titulo">Piedra Papel ó Tijera</h1>\n          <div class="boton">\n              <button-ppt>Empezar</button-ppt>\n          </div>\n          <div class="contenedor-manitos">\n              <my-jugada item="piedra"></my-jugada>\n              <my-jugada item="tijera"></my-jugada>\n              <my-jugada item="papel"></my-jugada>\n          </div>\n        </div>\n  ';const t=document.createElement("style");return t.innerHTML="\n  .titulo{\n    color: var(--titulo-home);\n    font-size: 7em;\n    font-weight: 800;\n    min-width: 350px;\n    max-width: 400px;\n    margin: 50px auto 0 auto;\n    padding:0;\n    text-align: center;\n    height: 400px;\n  }\n  .boton{\n    width: 100%;\n    height: 85px;\n    margin: 30px auto 0 auto;\n    display: flex;\n    justify-content: center;\n  }\n  .contenedor-manitos{\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    bottom: 0px;\n    width: 100%;\n    max-width: 1000px;\n    height: 30%;\n    display: flex;\n    justify-content: space-around;\n    align-items: flex-end;\n  }\n  ",e.appendChild(t),e.querySelector(".boton").addEventListener("click",(()=>{n.goTo("/instrucciones")})),e}},{path:/\/instrucciones/,component:function(n){const e=document.createElement("div");e.className="homepage",e.innerHTML='\n          <div class="inicio">\n          <h1 class="titulo">Presioná jugar\n          y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h1>\n          <div class="boton"><button-ppt>¡Jugar!</button-ppt></div>\n          <div class="contenedor-manitos">  \n          <my-jugada item="piedra"></my-jugada>\n            <my-jugada item="tijera"></my-jugada>\n            <my-jugada item="papel"></my-jugada>\n            </div>\n        </div>\n  ';const t=document.createElement("style");return t.innerHTML="\n  .titulo{\n    color: var(--titulo-instrucciones);\n    font-size: 4em;\n    font-weight: 800;\n    min-width: 350px;\n    max-width: 400px;\n    margin: 50px auto 0 auto;\n    padding:0;\n    text-align: center;\n    height: 400px;\n  }\n  .boton{\n    width: 100%;\n    height: 85px;\n    margin: 30px auto 0 auto;\n    display: flex;\n    justify-content: center;\n  }\n  .contenedor-manitos{\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    bottom: 0px;\n    width: 100%;\n    max-width: 1000px;\n    height: 30%;\n    display: flex;\n    justify-content: space-around;\n    align-items: flex-end;\n  }\n  ",e.appendChild(t),e.querySelector(".boton").addEventListener("click",(()=>{n.goTo("/game")})),e}},{path:/\/game/,component:function(n){const e=document.createElement("div");e.innerHTML='\n          <div class="inicio">\n          <div class="contenedor-counter">\n          <div class="circle">3</div>\n          </div>\n          <div class="contenedor-manitos">\n            <my-jugada item="piedra" id="piedra"></my-jugada>\n            <my-jugada item="tijera" id="tijera" non-selected="false"></my-jugada>\n            <my-jugada item="papel" id="papel"></my-jugada>\n          </div>\n        </div>\n  ';const t=document.createElement("style");t.innerHTML="\n  .contenedor-counter{\n    margin: 150px auto 0 auto;\n    display: flex;\n    justify-content: center;\n  }\n  .contenedor-manitos{\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    bottom: 0px;\n    width: 100%;\n    max-width: 1000px;\n    height: 30%;\n    display: flex;\n    justify-content: space-around;\n    align-items: flex-end;\n  }\n  .circle{\n    border: 25px solid black;\n    border-radius: 50%;\n    width: 300px;\n    height: 300px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 150px;\n  }\n  ";const o=e.querySelector("#piedra"),a=e.querySelector("#tijera"),r=e.querySelector("#papel");var s,c,d;return e.appendChild(t),o.addEventListener("click",(()=>{i.setMove("piedra"),a.style.opacity="0.5",r.style.opacity="0.5"})),a.addEventListener("click",(()=>{i.setMove("tijera"),o.style.opacity="0.5",r.style.opacity="0.5"})),r.addEventListener("click",(()=>{i.setMove("papel"),o.style.opacity="0.5",a.style.opacity="0.5"})),s=e,c=3,d=setInterval((()=>{s.querySelector(".circle").innerHTML=c,--c<0&&(clearInterval(d),setTimeout((()=>{n.goTo("/result")}),800))}),1e3),e}},{path:/\/result/,component:function(n){const e=document.createElement("div"),t=i.getState(),o=t.currentGame.playerPlay,a=t.currentGame.cpuPlay;e.innerHTML=`\n          <div class="inicio">\n          <my-jugada item="${a} cpu-manito"></my-jugada>\n          <my-jugada item="${o} player-manito"></my-jugada>\n        </div>\n  `;const r=document.createElement("style");return r.innerHTML="\n  .titulo{\n    color: var(--titulo-instrucciones);\n    font-size: 4em;\n    font-weight: 800;\n    text-align: center;\n    position: absolute;\n    top: 40%;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n  }\n  ",e.appendChild(r),setTimeout((()=>{n.goTo("/scores-page")}),2e3),e}},{path:/\/scores-page/,component:function(n){const e=i.getState(),t=i.whoWins(e.currentGame.playerPlay,e.currentGame.cpuPlay),o=document.createElement("div");o.innerHTML=`\n      <div class="inicio ${t}">\n        <div class="contenedor-contenido">\n            <result-star variant="star ${t}"></result-star>\n            <my-scoreboard pp="${e.history.player}" cp="${e.history.cpu}"\n            dp="${e.history.draw}"></my-scoreboard>\n        </div>\n        <div class="boton">\n            <button-ppt>Volver a jugar</button-ppt>\n        </div>\n      </div>\n  `;const a=document.createElement("style");return a.innerHTML="\n  .inicio{\n   width: 100%;\n   height: 100vh;\n  }\n  .win{\n    background-color: rgba(136, 170, 73, 0.6);\n  }\n  .lose{\n    background-color: rgba(170, 73, 73, 0.6);\n  } \n  .draw{\n    background-color: rgba(208, 197, 48, 0.6);\n  } \n  .contenedor-contenido{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n  }\n  .star{\n    margin: 30px auto 0 auto;\n  }\n  .boton{\n    width: 100%;\n    height: 85px;\n    margin: 70px auto 0 auto;\n    display: flex;\n    justify-content: center;\n  }\n  ",o.appendChild(a),o.querySelector(".boton").addEventListener("click",(()=>{n.goTo("/game")})),o}}];function s(){return location.host.includes("github.io")}function c(n){function e(n){s();history.pushState({},"",n),t(n)}function t(t){s()&&t.replace("/desafio-m5","");for(const o of r)if(o.path.test(t)){const t=o.component({goTo:e});n.firstChild&&n.firstChild.remove(),n.appendChild(t)}}"/"==location.pathname?e("/welcome"):t(location.pathname),window.onpopstate=function(n){t(location.pathname)}}var d;d=new URL(a("27Lyk").resolve("QphNf"),import.meta.url).toString();var l;l=new URL(a("27Lyk").resolve("jEbsN"),import.meta.url).toString();var p;function u(){class n extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const n=this.getAttribute("item"),e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.className=n;const o=document.createElement("style");o.innerHTML=`\n      .piedra{\n        bottom: 0px;\n        left: 30px;\n        background-image: url(${d});\n        background-size: cover;\n        height: 13em;\n        width: 125px;\n        cursor: pointer;\n      }\n      .papel{\n        bottom: 0px;\n        right: 30px;\n        background-image: url(${p});\n        background-size: cover;\n        height: 13em;\n        width: 125px;\n        cursor: pointer;\n      }\n      .tijera{\n        bottom: 0px;\n        left: 180px;\n        background-image: url(${l});\n        background-size: cover;\n        height: 13em;\n        width: 125px;\n        cursor: pointer;\n      }\n      .cpu-manito{\n        position: absolute;\n        height: 35vh;\n        width: 180px;\n        top: 0px;\n        transform: rotate(180deg);\n        cursor: not-allowed;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n      }\n      .player-manito{\n        height: 35vh;\n        width: 180px;\n        cursor: not-allowed;\n        position: absolute;\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        bottom: 0px;\n      }\n      `,e.appendChild(t),e.appendChild(o)}}customElements.define("my-jugada",n)}function m(){class n extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const n=this.attachShadow({mode:"open"}),e=document.createElement("button"),t=document.createElement("style");e.className="btn-ppt",t.innerHTML='\n      .btn-ppt{\n        font-size: 45px;\n        color: white;\n        background-color: #006CFC;\n        border: 10px solid #001997;\n        border-radius: 8px;\n        padding: 10px;\n        width: 90vw;\n        max-width: 450px;\n        height: 90px;\n        font-family: "Odibee Sans", cursive;\n        cursor: pointer;\n      }\n      ',e.textContent=this.textContent,n.appendChild(e),n.appendChild(t)}}customElements.define("button-ppt",n)}p=new URL(a("27Lyk").resolve("lcS8G"),import.meta.url).toString();var h;h=new URL(a("27Lyk").resolve("bmCV9"),import.meta.url).toString();var g;function y(){class n extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){const n=this.getAttribute("variant"),e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.className=n,t.textContent="star win"==n?"¡Ganaste!":"star draw"==n?"Empate":"star lose"==n?"Perdiste":"Pasó algo raro";const o=document.createElement("style");o.innerHTML=`\n      .star{\n        font-size: 55px;\n        color: black;\n        height: 300px;\n        width: 300px;\n        margin: 30px auto 0 auto;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .lose{\n        background-image: url(${g});  \n        background-size: cover;\n        color: white;\n      }\n      .win{\n        background-image: url(${h});        \n        background-size: contain;\n        background-repeat: no-repeat;\n        color: white;\n      }\n      `,e.appendChild(t),e.appendChild(o)}}customElements.define("result-star",n)}g=new URL(a("27Lyk").resolve("kLzJM"),import.meta.url).toString(),customElements.define("my-scoreboard",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.playerPoints=this.getAttribute("pp"),this.cpuPoints=this.getAttribute("cp"),this.drawPoints=this.getAttribute("dp");const n=document.createElement("style");n.innerHTML="\n      .contenedor{\n        background-color: white;\n        height: 250px;\n        width: 50%;\n        margin: 0 auto;\n        border: solid 10px black;\n        border-radius: 10px;\n        max-width: 300px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        padding-top: 20px;\n      }\n      .score{\n        margin: 0;\n        font-size: 60px;\n      }\n      .puntajes{\n        font-size: 35px;\n        text-align: right;\n      }\n      .puntos{\n        margin: 10px auto;\n      }\n      ",this.shadow.appendChild(n),this.render()}render(){const n=document.createElement("div");n.innerHTML=`\n      <div class="contenedor">\n      <h2 class="score">Score</h2>\n      <div class="puntajes">\n        <p class="puntos">Vos: ${this.playerPoints}</p>\n        <p class="puntos">Máquina: ${this.cpuPoints}</p>\n        <p class="puntos">Empate: ${this.drawPoints}</p>\n      </div>\n      </div>\n      `,this.shadow.appendChild(n)}}),function(){const n=document.querySelector(".root");m(),u(),y(),c(n)}();
//# sourceMappingURL=index.3b0b56ca.js.map
