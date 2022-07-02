import Logo from "../resource/Logo-web.svg"

function Header() {
    return (
      <header className="menu">
          <div>
            <img src={Logo}></img>
          </div>
          <ul className="menu-option subtitle-2">
            <a href="#" className="a-reset subtitle-2"><li>Generador</li></a>
            <a href="#" className="a-reset subtitle-2"><li>Contactanos</li></a>
          </ul>
      </header>
    );
  }
  
  export default Header;
  