import React, { Component } from "react";
import Masonry from "masonry-layout";

class Gallery extends Component {
  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-md-12">
            <div
              class="grid js-masonry"
              data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'
            >
              <div class="grid-item">
                <img src="img/slide1.jpg" alt="hakstime" />
              </div>
              <div class="grid-item ">
                <img src="img/slide2.jpg" alt="hakstime" />
              </div>
              <div class="grid-item ">
                <img src="img/slide3.jpg" alt="hakstime" />
              </div>
              <div class="grid-item">
                <img src="img/slide4.jpg" alt="hakstime" />
              </div>
              <div class="grid-item ">
                <img src="img/slide5.jpg" alt="hakstime" />
              </div>
              <div class="grid-item ">
                <img src="img/slide6.jpg" alt="hakstime" />
              </div>
              <div class="grid-item">
                <img src="img/slide7.jpg" alt="hakstime" />
              </div>
              <div class="grid-item ">
                <img src="img/slide8.jpg" alt="hakstime" />
              </div>
              <div class="grid-item ">
                <img src="img/slide9.jpg" alt="hakstime" />
              </div>
              <div class="grid-item">
                <img src="img/slide1.jpg" alt="hakstime" />
              </div>
              <div class="grid-item ">
                <img src="img/battery1.jpeg" alt="hakstime" />
              </div>
              <div class="grid-item ">
                <img src="img/slide2.jpg" alt="hakstime" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
