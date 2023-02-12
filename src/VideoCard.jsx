function VideoCard() {
  return (
    <div className="video-card">
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
      <span className="material-icons-outlined comment">comment</span>
      <p className="username"></p>
      <p className="song"></p>
    </div>
  );
}

export default VideoCard;
