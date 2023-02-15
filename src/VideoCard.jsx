import { useState } from "react";

function VideoCard(props) {
  let [boxOpen, setBoxOpen] = useState(false);
  let [playing, setPlaying] = useState(false);
  return (
    <div className="video-card">
      <video
        onClick={(e) => {
          if (playing) {
            setPlaying(false);
            e.currentTarget.pause();
          } else {
            setPlaying(true);
            e.currentTarget.play();
          }
        }}
        src={props.post.url}
      ></video>
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
              onKeyDown={(el) => {
                if (el.code === "Enter") {
                  el.currentTarget.value = "";
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
