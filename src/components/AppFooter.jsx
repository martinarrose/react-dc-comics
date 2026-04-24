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
        <div>DIGITAL COMICS</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="footer2">
        <div className="links">
          <div className="dcComicsEShop">
            <div className="dcComics">
              <h2>DC COMICS</h2>
              {dcComicsItems.map((item) => {
                return <p> {item}</p>;
              })}
            </div>

            <div className="shop">
              <h2> SHOP</h2>
              {shopItems.map((item) => {
                return <p> {item}</p>;
              })}
            </div>
          </div>

          <div className="dc">
            <h2>DC</h2>
            {dcItems.map((item) => {
              return <p>{item}</p>;
            })}
          </div>
          <div className="sites">
            <h2> SITES </h2>
            {sitesIcons.map((item) => {
              return <p>{item}</p>;
            })}
          </div>
        </div>
      </div>

      <div className="footer3">
        <button className="button">SIGN-UP NOW!</button>
      </div>
    </footer>
  );
}
