import './Styles/botao.css'
import './Styles/experiencias.css'
import { Link } from 'react-router-dom';

function Experiencia(){
  return(
    <section id="experiencia">
    <div id="experiencia" className="container-experiencia">
       <h1>Experiência</h1>
       <div className="container-wrapper">
         <div className='empresas'>
          <nav className='menuEmpresas'>
              <Link className='linkEmpresas' to="KingTech"> <span>KingTech</span> </Link> </nav>
            <nav className='menuEmpresas'>
              <Link className='linkEmpresas' to="TI.Net"> TI.Net </Link></nav>  
            <nav className='menuEmpresas'>
              <Link className='linkEmpresas' to="Freelancer"> Freelancer </Link></nav>    
            <nav className='menuEmpresas'>
              <Link className='linkEmpresas' to="SlikerTech"> SlikerTech </Link></nav>  
            <nav className='menuEmpresas'>  
              <Link className='linkEmpresas' to="AnjosCell"> AnjosCell </Link> </nav>
         </div>
       
    
   

         <div className="caixas" data-tab="content">

           <div id='KingTech' className="box-experiencia" data-anime="show-right" >
             <h2>Estagiário - Técnico em Informática</h2>
             <span className="ano" >12/2019 - 03/2020</span>
             <p className="exp-local">KingTech Informática, Santo Amaro</p>
             <p className="exp-info">
               Manutenção em computadores e notebooks, configuração de sistemas operacionais, manutenção preventiva, configuração em redes internas, substituição e manutenção de equipamentos em racks, manutenção especializada em placa mãe, além de realizar procedimentos de formatação e recuperação.
             </p>
           </div>
           
           <div className="box-experiencia" data-anime="show-right">
             <h2>Estagiário - Técnico em Informática</h2>
             <span className="ano">07/2020 - 01/2021</span>
             <p className="exp-local">TI.Net, Santo Amaro</p>
             <p className="exp-info">
               Configuração em equipamento de redes, manutenção preventiva em computadores, atendimento aos clientes, suporte remoto e manutenção em equipamentos internos. Entender a dificuldade de acesso dos clientes e solucionar os possíveis problemas
             </p>
           </div>

           <div className="box-experiencia" data-anime="show-right">
             <h2>Desenvolvedor Front-End</h2>
             <span className="ano">01/2021 - 04/2021</span>
             <p className="exp-local">Freelancer, Salvador</p>
             <p className="exp-info">
              Desenvolver e analisar funcionalidades de sistemas e identificar as possíveis melhorias. 
              Contribuir para a construção da documentação e efetuar análise corretiva de ferramentas.
             </p>
           </div>

           <div className="box-experiencia" data-anime="show-right">
             <h2>Desenvolvedor Web</h2>
             <span className="ano">05/2021 - Atual</span>
             <p className="exp-local">SlikerTech, Salvador</p>
             <p className="exp-info">
               Trabalhar como desenvolvedor web utilizando ferramentas como React, HTML, CSS, JavaScript e 
               Node era uma experiência enriquecedora e desafiadora. O uso dessas tecnologias permitia criar 
               soluções web dinâmicas e interativas, atendendo às necessidades do usuário e das empresas. 
               Além disso, o constante avanço e evolução dessas ferramentas tornava o trabalho de desenvolvimento 
               web muito interessante, pois sempre havia espaço para aprendizado e aperfeiçoamento. Trabalhar 
               nesta área requeria habilidades de programação, boa capacidade de resolução de problemas e 
               pensamento lógico, mas também oferecia muitas recompensas e satisfação profissional.
             </p>
           </div>
           
           <div className="box-experiencia" data-anime="show-right">
             <h2>Manuntenção mobile</h2>
             <span className="ano">09/2022 - Atual</span>
             <p className="exp-local">AnjosCell, Salvador</p>
             <p className="exp-info">
               Manutenção de celulares requer habilidade técnica, conhecimento dos aparelhos, 
               atualização sobre soluções para problemas, boa capacidade de diagnóstico e resolução de problemas. 
               É um desafio diário, mas gratificante por ajudar os clientes. Conseguir desenvolver uma boa 
               oportunidade na reparação e manuntenção de software tanto android como IOS.
             </p>
           </div>

         </div>
        </div>
    </div>
   </section>
  )
}

export default Experiencia;