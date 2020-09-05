import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUsers, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import LogoWhite from '../../assets/img/png/logo-white.png';
import TweetModal from '../modals/TweetModal';
import '../../assets/scss/components/menus/leftMenu.scss';

const LeftMenu = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="left-menu">
            <img className="logo" src={LogoWhite} alt="White Logo" />
            <Link to="/"><FontAwesomeIcon icon={faHome} /> Inicio</Link>
            <Link to={`/perfil/`}><FontAwesomeIcon icon={faUser} /> Perfil</Link> {/* ../../assets/img/png/logo-white.png */}
            <Link to="/usuarios"><FontAwesomeIcon icon={faUsers} /> Usuarios</Link>
            <Link to="" /* onClick={logOut} */><FontAwesomeIcon icon={faPowerOff} /> Cerrar sesión</Link>

            <Button onClick={() => setShowModal(true)}>Publicar</Button>
            <TweetModal showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
}

export default LeftMenu;