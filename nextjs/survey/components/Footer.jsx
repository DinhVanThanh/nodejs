import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnapchat, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div class="footer-basic">
        <footer>
            <div class="social">
                <a href="#">
                    <FontAwesomeIcon
                        icon={faSnapchat}
                        style={{ color: "blue" }}
                    />
                </a>
                <a href="#">
                    <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: "blue" }}
                    />
                </a>
                <a href="#">
                    <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ color: "blue" }}
                    />
                </a>
                <a href="#">
                    <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ color: "blue" }}
                    />
                </a>
            </div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Home</a></li>
                <li class="list-inline-item"><a href="#">Services</a></li>
                <li class="list-inline-item"><a href="#">About</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Company Name © 2018</p>
        </footer>
    </div>
  );
};
export default Footer;
