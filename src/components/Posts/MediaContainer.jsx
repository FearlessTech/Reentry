import { SharedMedia } from "../../styles/stylesMain";
import ReactPlayer from "react-player";
import React from "react";
import { useRef } from "react";

const MediaContainer = ({ article }) => {
  const media = useRef();
  {
    article.video && console.log(article);
  }
  return (
    <SharedMedia>
      <div ref={media}>
        {!article.sharedImg && article.video ? (
          <ReactPlayer
            width={"100%"}
            // controls
            url={article.video}
            onClick={() => {
              const video = media.current.children[0].children[0];
              video.paused ? video.play() : video.pause();
            }}
          />
        ) : (
          article.sharedImg && <img src={article.sharedImg} alt="" />
        )}
      </div>
    </SharedMedia>
  );
};

export default MediaContainer;
