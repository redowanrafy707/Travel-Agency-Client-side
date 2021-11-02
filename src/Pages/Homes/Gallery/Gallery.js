import React from "react";
import "./Gallery.css";
import g1 from "./../../../Images/Gallery/g-1.jpg";
import g2 from "./../../../Images/Gallery/g-2.jpg";
import g13 from "./../../../Images/Gallery/g-13.jpg";
import g14 from "./../../../Images/Gallery/g-14.jpg";
import g15 from "./../../../Images/Gallery/g-15.jpg";
import g16 from "./../../../Images/Gallery/g-16.jpg";
import g7 from "./../../../Images/Gallery/g-7.jpg";
import g8 from "./../../../Images/Gallery/g-8.jpg";
import g12 from "./../../../Images/Gallery/g-9.jpg";
import g10 from "./../../../Images/Gallery/g-10.jpg";
import g11 from "./../../../Images/Gallery/g-11.jpg";

const Gallery = () => {
  return (
    <div className="gallery my-5">
      <div className="">
        <div className="title">
          <h1 className="sub-heading">Ours Gallery</h1>
          {/* <h3 class="heading">
            <span>g</span>
            <span>a</span>
            <span>l</span>
            <span>l</span>
            <span>e</span>
            <span>r</span>
            <span>y</span>
          </h3> */}
        </div>
        <div class="box-container">
          <div class="box">
            <img src={g1} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                For that reason, there is no tourism-related scam here, and people are generally surprised to see tourist
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g13} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                For that reason, there is no tourism-related scam here, and people are generally surprised to see tourist
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g12} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                For that reason, there is no tourism-related scam here, and people are generally surprised to see tourist</p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g14} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                For that reason, there is no tourism-related scam here, and people are generally surprised to see tourist
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g15} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                For that reason, there is no tourism-related scam here, and people are generally surprised to see tourist
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g16} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                For that reason, there is no tourism-related scam here, and people are generally surprised to see tourist
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g7} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                For that reason, there is no tourism-related scam here, and people are generally surprised to see tourist
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g11} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                For that reason, there is no tourism-related scam here, and people are generally surprised to see tourist
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
          <div class="box">
            <img src={g10} alt="" />
            <div class="content">
              <h3 className="color-pink text-uppercase">amazing places</h3>
              <p>
                For that reason, there is no tourism-related scam here, and people are generally surprised to see tourist
              </p>
              <a href="/" class="btn btn-travel">
                {" "}
                see more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
