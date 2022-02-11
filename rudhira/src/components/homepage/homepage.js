import "./homepage.scss";

function Homepage() {
  return (
    <div>
      <div className="image2">
        <img src={require("./images/image2.png")} />
      </div>
      <div className="homepageDiv">
        <div className="leftSection">
          <div className="title">Rudhira</div>
          <div className="moto">Where lives are saved</div>
          <div className="findButton">Find your donor</div>
        </div>
        <div className="rightSection">
          <div className="image1">
            <img src={require("./images/homepageTitle.png")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
