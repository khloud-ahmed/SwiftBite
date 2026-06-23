import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>

        <div className={style.footerContent}>

          {/* Column 1 */}
          <div className={style.brand}>
            <h3 className={style.logo}>SwiftBite</h3>

            <p className={style.text}>
              Your premium partner for culinary
              explorations. Delivering excellence
              since 2024.
            </p>

            <div className={style.social}>
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h6 className={style.title}>COMPANY</h6>

            <ul className={style.links}>
              <li>About Us</li>
              <li>Careers</li>
              <li>Restaurant Partners</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h6 className={style.title}>SUPPORT</h6>

            <ul className={style.links}>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h6 className={style.title}>DOWNLOAD</h6>
          </div>

          {/* Column 5 */}
          <div>
            <div className={style.storeBtn}>
              <span>APPLE</span>
              <small>App Store</small>
            </div>

            <div className={style.storeBtn}>
              <span>GOOGLE_PLAY</span>
              <small>Google Play</small>
            </div>
          </div>

        </div>

        <hr className={style.line} />

        <p className={style.copyright}>
          © 2024 SwiftBite Inc. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;