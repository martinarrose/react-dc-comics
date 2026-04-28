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
      <img src={heroImg} alt="dcLogo" />

      {navbarItems.map((item) => {
        return <a href=""></a>;
      })}

      <nav className="navbar">
        <a href="">CHARACTERS</a>
        <a href="">COMICS</a>
        <a href="">MOVIES</a>
        <a href="">TV</a>
        <a href="">GAMES</a>
        <a href="">COLLECTIBLES</a>
        <a href="">VIDEOS</a>
        <a href="">FANS</a>
        <a href="">NEWS</a>
        <a href="">SHOP</a>
      </nav>
    </header>
  );
}
