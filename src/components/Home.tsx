import './Styles/home.css'
import './Styles/botao.css'

function Home(){
  return(
    <section className="home" id="home">
      <div className="container-home">
        <div className="home-left">
          <h1>Olá, eu sou</h1>
          <span className="nome">Keven Santana</span>
          <h1>Desenvolvedor Web</h1>

          <div className="container-button">
            <a href="https://www.linkedin.com/in/keven-santana-2aaa50165" target="_blank">
              <div className="button">
                <img src="./src/assets/image/icon/linkedin.png" alt="LinkedIn" />
                <p>LinkedIn</p>
              </div>
            </a>
            <a href="https://github.com/kevensantana" target="_blank">
              <div className="button">
                <img src="./src/assets/image/icon/github.png" alt="GitHub" />
                <p>Github</p>
              </div>
            </a>
          </div>
        </div>

        <div className="home-right">
          <img src="./src/assets/image/Looper BG.svg" alt="Ilustração" />
        </div>

        <div className="scroll">
          <a href="#sobre">
            <p> scroll down </p>
            <img src="./src/assets/image/icon/scroll.png" alt="Rolar para baixo" />
          </a>
        </div>
      </div>
    </section> 
  )
}

export default Home;