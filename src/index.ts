import { initRouter } from "./router";
import { initManitos } from "./components/manitos/index";
import { initBtnPpt } from "./components/button/index";
import { initStar } from "./components/star";
import "./components/scoreboard";

(function () {
  const root = document.querySelector(".root");
  initBtnPpt();
  initManitos();
  initStar();
  initRouter(root);
})();
