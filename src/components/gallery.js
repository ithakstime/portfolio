import React, { Component } from "react";
import InstagramEmbed from "react-instagram-embed";

class Gallery extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4">
        <InstagramEmbed
          url="https://www.instagram.com/p/CDQ9W7ZA16Z/%E2%80%9D"
          maxWidth={320}
          hideCaption={true}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    );
  }
}
export default Gallery;
