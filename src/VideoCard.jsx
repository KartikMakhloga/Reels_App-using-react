import { useState } from "react";

function VideoCard() {
  let [boxOpen, setBoxOpen] = useState(false);
  return (
    <div className="video-card">
      <video src="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"></video>
      <span
        className="material-icons-outlined like"
        onClick={(el) => {
          if (el.currentTarget.innerText === "favorite_border") {
            el.currentTarget.innerText = "favorite";
          } else {
            el.currentTarget.innerText = "favorite_border";
          }
        }}
      >
        favorite_border
      </span>
      <span
        className="material-icons-outlined comment"
        onClick={() => {
          if (boxOpen) {
            setBoxOpen(false);
          } else {
            setBoxOpen(true);
          }
        }}
      >
        comment
      </span>
      <p className="username">
        <b>@username</b>
      </p>
      <p className="song">
        <span className="material-icons-outlined">music_note</span>
        <marquee>Song_Name</marquee>
      </p>

      {boxOpen ? (
        <div className="comment-box">
          <span
            className="material-icons-outlined close"
            onClick={() => {
              setBoxOpen(false);
            }}
          >
            close
          </span>
          <div className="all-comments"></div>
          <div className="comment-form">
            <input
              type="text"
              placeholder="Write Comment"
              onClick={(e) => {
                if (e.code === "Enter") {
                  e.currentTarget.value = "";
                }
              }}
            />
            <button className="send">Post</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default VideoCard;
