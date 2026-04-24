import AFooterSection from "./FooterSection";
import heroImg from "../assets/dc-comics-1/img/dc-logo.png";
import FooterSection from "./FooterSection";
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
    "Privacy Policy )New)",
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

  const sitesIcons = [
    "DC",
    "MAD Magazine",
    "DC Kids",
    "DC Universe",
    "DC Power Visa",
  ];

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
          <FooterSection title="SITES" elements={sitesIcons} />
        </div>
        <div>
          <img className="rotatedLogo" src={heroImg} alt="dcLogo" />
        </div>
      </div>

      <div className="footer3">
        <button className="button">SIGN-UP NOW!</button>
        <div className="followUs">
          <p>Follow Us</p>
        </div>
      </div>
    </footer>
  );
}
