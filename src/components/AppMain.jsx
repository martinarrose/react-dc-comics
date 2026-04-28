import ThumbWithTitle from "./ThumbWithTitle";
import comics from "../assets/dc-comics-2/comics";
import imgMain from "../assets/dc-comics-1/img/images.jpeg";
export default function AppMain() {
  //your logic here

  //your template here
  return (
    <main>
      <div className="main">
        <div className="img-main">
          <img className="imgMain" src={imgMain} alt="" />
        </div>
        <div className="cards">
          {comics.map((item) => {
            return <ThumbWithTitle title={item.title} thumb={item.thumb} />;
          })}
        </div>
      </div>
    </main>
  );
}
