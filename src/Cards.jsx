import img1 from "./images/images/img1.jpg";
import img2 from "./images/images/img2.jpg";
import img3 from "./images/images/img3.jpg";

export default function Cards() {
  return (
    <div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  );
}
