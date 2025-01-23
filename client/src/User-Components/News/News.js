import React from "react";
import "./News.css";
import image1 from "../User-images/laptop29.webp";

function News() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize: "50px",
          marginTop: "25px",
        }}
      >
        <b>News</b>
      </h1>
      <h4 style={{ textAlign: "center" }}>
        Get the latest technology news and in-depth analysis from the expert
        analysts at Lappora.
      </h4>
      <hr style={{ marginLeft: "5%", marginRight: "5%" }} />
      <br />
      <div className="card-container-main">
        <div className="card-main h-100">
          <a href="">
            <img src={image1} alt="news image" className="card-img" />
          </a>
          <div className="card-bodySection">
            <h5 className="card-heading">It is the long established</h5>
            <p className="card-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 1min ago</small>
          </div>
        </div>
        <div className="card-main h-100">
          <a href="">
            <img src={image1} alt="news image" className="card-img" />
          </a>
          <div className="card-bodySection">
            <h5 className="card-heading">It is the long established</h5>
            <p className="card-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 1min ago</small>
          </div>
        </div>
        <div className="card-main h-100">
          <a href="">
            <img src={image1} alt="news image" className="card-img" />
          </a>
          <div className="card-bodySection">
            <h5 className="card-heading">It is the long established</h5>
            <p className="card-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 1min ago</small>
          </div>
        </div>
        <div className="card-main h-100">
          <a href="">
            <img src={image1} alt="news image" className="card-img" />
          </a>
          <div className="card-bodySection">
            <h5 className="card-heading">It is the long established</h5>
            <p className="card-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 1min ago</small>
          </div>
        </div>

        <div className="card-main h-100">
          <a href="">
            <img src={image1} alt="news image" className="card-img" />
          </a>
          <div className="card-bodySection">
            <h5 className="card-heading">It is the long established</h5>
            <p className="card-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 1min ago</small>
          </div>
        </div>

        <div className="card-main h-100">
          <a href="">
            <img src={image1} alt="news image" className="card-img" />
          </a>
          <div className="card-bodySection">
            <h5 className="card-heading">It is the long established</h5>
            <p className="card-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 1min ago</small>
          </div>
        </div>

        <div className="card-main h-100">
          <a href="">
            <img src={image1} alt="news image" className="card-img" />
          </a>
          <div className="card-bodySection">
            <h5 className="card-heading">It is the long established</h5>
            <p className="card-para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Last updated 1min ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
