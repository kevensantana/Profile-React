import './Styles/educacao.css'

function Educacao (){
  return (
    <section className="educacao">
      <div className="container-educacao">
       <h1>Educação</h1>
         <div className="ifba">
            <div className="image-campus-ifba"> </div>
            <div className="info-ifba">
              <h2>Instituto Federal de Educação Ciência e Tecnologia - IFBA</h2>
              <p className="ifba-local">Curso: Informática | Ensino médio técnico | Concluído em 2021</p>
              <p className="descricao-ifba recuo">
                No campus Santo Amaro - BA, estudei a base para todos os procedimentos na área, como: Manutenção de
                computadores, gerenciamento de projeto, planejamento e gerenciamento de redes, desenvolvimento desktop
                utilizando a linguagem Java para construir e exercitar conceito de Programação orientação a objeto (POO). Disciplina em
                desenvolvimento web com HTML, CSS, JavaScript e PHP, onde realizei projetos reais para a comunidade local.
                Tive
                experiências com banco de dados, SQL, AngularJS e NodeJS.
              </p>
              <div className="container-button-ifba">
                <a href="projetos.html" title="Currículo">
                  <div className="button projetos-ifba">
                    <img src="./src/assets/image/icon/gerenciamento-de-projetos.png" alt="Currículo" />
                    <p>Projetos</p>
                  </div>
                </a>
              </div>
            </div>
         </div>

        <div className="ufba">
          <div className="image-campus-ufba"> </div>
          <div className="info-ufba">
            <h2>Universidade Federal da Bahia - UFBA</h2>
            <p className="ufba-local">Curso: Ciências e Tecnologia | Graduação | Cursando 2023.1</p>
            <p className="descricao-ufba recuo">
              Cursar uma graduação em Ciências e Tecnologia na Universidade Federal da Bahia é uma excelente 
              oportunidade para adquirir conhecimentos sólidos e atualizados em áreas de alta demanda no mercado 
              de trabalho. Além disso, a UFBA oferece uma estrutura de ensino de excelência, contando com professores 
              altamente qualificados e um amplo leque de oportunidades para aprimoramento acadêmico e profissional. 
              Esta graduação é indicada para estudantes interessados em seguir carreira nas áreas de ciência e 
              tecnologia, tendo como base uma formação sólida e multidisciplinar
            </p>
            <div className="container-button-ufba">
              <a href="projetos.html" title="Currículo">
                <div className="button projetos-ufba">
                  <img src="./src/assets/image/icon/gerenciamento-de-projetos.png" alt="Currículo" />
                  <p>Projetos</p>
                </div>
              </a>
            </div>
          </div>
        </div>

     </div>      
    </section>

  );
}


export default Educacao;