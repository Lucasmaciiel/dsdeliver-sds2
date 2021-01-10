import './styles.css';
import { ReactComponent as YouTubeIcon} from './Youtube.svg';
import { ReactComponent as LinkedinIcon} from './Linkedin.svg';
import { ReactComponent as InstagramIcon} from './Instagram.svg';

import React from "react";

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/lucasmacielgois/" target="_new">
                <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/lucasmacielgois/" target="_new">
                <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;