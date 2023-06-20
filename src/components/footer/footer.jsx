import "./style.css";
function Footer() {
  return (
    <>
      <div className="container-fluid footer_pink">
        <div className="container footer_pink">
          <div className="row pt-4">
            <div className="col-lg-3 col-md-6 col-sm-12  foot">
              <ul>
                <li>
                  <h5>HELP</h5>
                </li>
                <li>12345678</li>
                <li>
                  <a href="#">Customer Service</a>
                </li>
                <li>
                  <a href="#">Shipping &amp; REturns</a>
                </li>
                <li>socials</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12  foot">
              <ul>
                <li>
                  <h5>ACCOUNT</h5>
                </li>
                <li>Your Order</li>
                <li>Status</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 foot">
              <ul>
                <li>
                  <h5>ABOUT</h5>
                </li>
                <li>
                  <a href="AboutUs.html">About Us</a>
                </li>
                <li>
                  <a href="Contact.html" />
                  Contact
                </li>
                <li>
                  <a href="team.html" />
                  Team
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12  foot">
              <ul>
                <li>
                  <h5>Stay Updated</h5>
                </li>
                <li>
                  <span>info@makeupmania.com</span>
                </li>
                <li>xyz street road one lahore</li>
              </ul>
            </div>
            <hr />
          </div>
          <div className="row mt-2">
            <div className="col-lg-12">
              <p>
                Copyright © 2022 Makeup Mania Corporation Limited . All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
