import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer-logo">
          <Link to="/" className="logo footer-logo">
            QPICK
          </Link>
        </div>

        <div className="footer-links">
          <ul>
            <li>
              <Link to="#">Избранное</Link>
            </li>
            <li>
              <Link to="/cart">Корзина</Link>
            </li>
            <li>
              <Link to="#">Контакты</Link>
            </li>
          </ul>
        </div>

        <div className="footer-info">
          <div className="footer-info-conditions">Условия сервиса</div>
          <div className="language">
            <ul>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/pics/lang.svg"}
                  alt="Язык"
                />
              </li>
              <li className="language--active">Рус</li>
              <li>Eng</li>
            </ul>
          </div>
        </div>

        <div className="socials">
          <ul>
            <li>
              <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                <img
                  src={process.env.PUBLIC_URL + "/pics/vk.svg"}
                  alt="vk.com"
                />
              </a>
            </li>
            <li>
              <a
                href="https://web.telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/pics/telegram.svg"}
                  alt="telegram.com"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/pics/whatsapp.svg"}
                  alt="whatsapp.com"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;