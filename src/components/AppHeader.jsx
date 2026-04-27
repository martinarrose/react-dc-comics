import heroImg from "../assets/dc-comics-1/img/dc-logo.png";

export default function AppHeader() {
  const navbarItems = [
    " CHARACTERS",
    "COMICS",
    "MOVIES",
    "TV",
    "GAMES",
    "COLLECTIBLES",
    "VIDEOS",
    "FANS",
    "NEWS",
    "SHOP",
  ];
  //your logic here

  //your template here
  return (
    <header>
      <img className="headerImg" src={heroImg} alt="dcLogo" />

      <nav className="navbar">
        {navbarItems.map((item) => {
          return <a href="">{item}</a>;
        })}
      </nav>
    </header>
  );
}
