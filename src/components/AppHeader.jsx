import heroImg from "../assets/dc-comics-1/img/dc-logo.png";

export default function AppHeader() {
  //your logic here

  //your template here
  return (
    <header>
      <img src={heroImg} alt="dcLogo" />

      <nav>
        <a href="">characters</a>
        <a href="">comics</a>
        <a href="">movies</a>
        <a href="">tv</a>
        <a href="">games</a>
        <a href="">collectibles</a>
        <a href="">videos</a>
        <a href="">fans</a>
        <a href="">news</a>
        <a href="">shop</a>
      </nav>
    </header>
  );
}
