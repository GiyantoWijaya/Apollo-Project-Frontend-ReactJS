import PanelNews from "../../panelNews/panelNews.components";
import "./section2.styles.css";

const Section2 = () => {
  return (
    <div className="bg2">
      <div id="news" className="container">
        <div className="row contentsection2">
          <div className="title-news col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="newsh1 text-center ">News</h1>
          </div>
          <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 panel-news">
            <PanelNews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
