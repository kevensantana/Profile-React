import './Styles/botao.css'
import './Styles/sobre.css'

function Sobre(){
  return(
    <section id="sobre">
      <div className="container-sobre">
        <h1>Sobre mim</h1>
       <div className="container-perfil">
        <div className="image-perfil">
          {/* <!-- https://avatars.githubusercontent.com/u/44447313?v=4 --> */}
          <img src="./src/assets/image/Perfil.jpg" alt="Perfil - keven Santana" />
        </div>
        <div className="descricao">
          <p className="descricao-perfil recuo">
            Olá! Meu nome é Keven Santana, tenho 22 anos e sou dedicado a aperfeiçoar minha carreira como desenvolvedor fullstack. 
            Venho trabalhando nesse objetivo há mais de 5 anos, buscando constantemente melhorar minhas habilidades técnicas e pessoais. 
            Meu caminho é linear e construtivo, visando sempre o avanço profissional.</p>

              <p className="descricao-perfil recuo">
                Sou formado pelo Instituto de Ciências e Tecnologia - IFBA em Tecnologia em Informática e atuo no mercado como freelancer, 
                oferecendo soluções completas e eficientes para a web. Acredito na importância de estar sempre em constante 
                evolução e aprendizado, o que me permite oferecer soluções inovadoras e de qualidade superior.
                Adicionalmente, gostaria de destacar que meu compromisso com a excelência é prioridade, 
                e busco sempre entender suas necessidades e expectativas para oferecer soluções personalizadas. Estou sempre 
                aberto a novos desafios e oportunidades de crescimento profissional.
              </p>
            <div className="container-button">
            <a href="./src/assets/docs/Keven Santana - SSA.pdf" download="" >
              <div className="button">
                <img src="./src/assets/image/icon/download-cloud.png" alt="Currículo" />
                <p>Currículo</p>
              </div>
            </a>
            <a href="mailto: kevensantana40@gmail.com?subject=Keven, vim pelo seu portfólio! :" target="_blank">
              <div className="button">
                <img src="./src/assets/image/icon/mail.png" alt="E-mail" />
                <p>E-mail</p>
              </div>
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre;