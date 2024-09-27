import { useState } from 'react';
import '../styles/Menu.css';
import PropTypes from 'prop-types';

const MenuVertical = ({ logo, iconeMenu }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className="menu-vertical">
      <div className="menu-topo">
        <div className="logo-container">
          <img src={logo} alt="Logo da Marca" className="logo" />
          <span className="marca">Chouchou Crochet</span>
        </div>
        <img src={iconeMenu} alt="Ícone do Menu" className="icone-menu" onClick={alternarMenu} />
      </div>
      <ul className={`menu-itens ${menuAberto ? 'ativo' : ''}`}>
        <li className="item">Nossos Produtos</li>
        <li className="item">Tutoriais</li>
        <li className="item">Onde Comprar</li>
        <li className="item">Perfil</li>
        <li className="item">Postagens</li>
        <li className="item">Amigos</li>
        <li className="item">Fotos</li>
        <li className="item">Vídeos</li>
        <li className="item">Configurações</li>
      </ul>
    </nav>
  );
};

MenuVertical.propTypes = {
  logo: PropTypes.string.isRequired,
  iconeMenu: PropTypes.string.isRequired,
};

export default MenuVertical;