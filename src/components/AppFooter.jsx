import heroImg from "../assets/dc-comics-1/img/dc-logo.png";
import rotatedLogo from "../assets/dc-comics-1/img/dc-logo-bg.png";
import FooterSection from "./FooterSection";
import facebook from "../assets/dc-comics-1/img/footer-facebook.png";
import periscope from "../assets/dc-comics-1/img/footer-periscope.png";
import pinterest from "../assets/dc-comics-1/img/footer-pinterest.png";
import twitter from "../assets/dc-comics-1/img/footer-twitter.png";
import youtube from "../assets/dc-comics-1/img/footer-youtube.png";

export default function AppFooter() {
  const dcComicsItems = [
    "Characters",
    "Comics",
    "Movies",
    "TV",
    "Games",
    "Videos",
    "News",
  ];
  const shopItems = ["Shop DC", "Shop DC Collectibles"];

  const dcItems = [
    "Terms Of Use",
    "Privacy Policy (New)",
    "Ad Choices",
    "Advertising",
    "Jobs",
    "Subscriptions",
    "Talent Workhop",
    "CPSC Certificates",
    "Ratings",
    "Shop",
    "Help",
    "Contact Us",
  ];

  const sitesItems = [
    "DC",
    "MAD Magazine",
    "DC Kids",
    "DC Universe",
    "DC Power Visa",
  ];

  const icons = [facebook, periscope, pinterest, twitter, youtube];

  return (
    <footer>
      <div className="footer1">
        <div> DIGITAL COMICS</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="footer2">
        <div className="links">
          <div className="dcComicsEShop">
            <FooterSection title="DC COMICS" elements={dcComicsItems} />
            <FooterSection title="SHOP" elements={shopItems} />
          </div>
          <FooterSection title="DC" elements={dcItems} />
          <FooterSection title="SITES" elements={sitesItems} />
        </div>
        <div>
          <img className="rotatedLogo" src={rotatedLogo} alt="dcLogo" />
        </div>
      </div>

      <div className="footer3">
        <button className="button">SIGN-UP NOW!</button>
        <div>
          <div className="icons-follow-us">
            <div className="follow-us">
              <p>Follow Us</p>
            </div>
            <div className="icons">
              {icons.map((icon, index) => {
                return <img key={index} src={icon} alt="" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
