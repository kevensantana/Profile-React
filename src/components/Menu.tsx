import './Styles/menu.css'


function Menu() {
  return (
    <header id="header">
    <div className="container-header">
      <a id="logo" href="#home">&lsaquo;KS/&rsaquo;</a>
      
      <button id="btn-mobile"></button>
      <nav id="nav">
        <ul id="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
  );
}

export default Menu;