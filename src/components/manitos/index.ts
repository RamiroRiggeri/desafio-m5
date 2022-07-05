import { state } from "../../state";

const imagePiedraURL = require("url:../../img/piedra.svg");
const imageTijeraURL = require("url:../../img/tijera.svg");
const imagePapelURL = require("url:../../img/papel.svg");

export function initManitos() {
  class MyJugada extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
    }

    render() {
      const variant = this.getAttribute("item");
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");

      div.className = variant;

      const style = document.createElement("style");
      style.innerHTML = `
      .piedra{
        bottom: 0px;
        left: 30px;
        background-image: url(${imagePiedraURL});
        background-size: cover;
        height: 170px;
        width: 100px;
        cursor: pointer;
      }

      .papel{
        bottom: 0px;
        right: 30px;
        background-image: url(${imagePapelURL});
        background-size: cover;
        height: 170px;
        width: 100px;
        cursor: pointer;
      }
      .tijera{
        bottom: 0px;
        left: 180px;
        background-image: url(${imageTijeraURL});
        background-size: cover;
        height: 170px;
        width: 100px;
        cursor: pointer;
      }

      @media (min-width: 769px) {
        .piedra {
          height: 250px;
          width: 150px;
        }
        .papel {
          height: 250px;
          width: 150px;
        }
        .tijera {
          height: 250px;
          width: 150px;
        }
      }

      .cpu-manito{
        position: absolute;
        height: 40vh;
        width: 150px;
        top: 0px;
        transform: rotate(180deg);
        cursor: not-allowed;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
      }
      .player-manito{
        height: 40vh;
        width: 150px;
        cursor: not-allowed;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        bottom: 0px;
      }
      @media (min-width: 769px) {
        .cpu-manito{
          height: 35vh;
          width: 180px;
        }
        .player-manito{
          height: 35vh;
          width: 180px;
        }
      }
      `;
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("my-jugada", MyJugada);
}
