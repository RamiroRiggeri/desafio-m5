export function initWelcome(goTo) {
  const div = document.createElement("div");
  div.className = "homepage";
  div.innerHTML = `
        <div class="inicio">
          <h1 class="titulo">Piedra Papel ó Tijera</h1>
          <div class="boton">
              <button-ppt>Empezar</button-ppt>
          </div>
          <div class="contenedor-manitos">
              <my-jugada item="piedra"></my-jugada>
              <my-jugada item="tijera"></my-jugada>
              <my-jugada item="papel"></my-jugada>
          </div>
        </div>
  `;
  const style = document.createElement("style");
  style.innerHTML = `
  .titulo{
    color: var(--titulo-home);
    font-size: 5em;
    font-weight: 800;
    width: 300px;
    margin: 20px auto 20px auto;
    text-align: center;
    height: 100%;
  }
  @media (min-width: 769px) {
    .titulo {
      font-size: 7em;
    }
  }
  .boton{
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  .contenedor-manitos{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0px;
    width: 100%;
    max-width: 800px;
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }
  `;
  div.appendChild(style);

  const button = div.querySelector(".boton");

  button.addEventListener("click", () => {
    goTo.goTo("/instrucciones");
  });

  return div;
}
