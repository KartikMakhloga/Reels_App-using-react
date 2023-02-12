function VideoCard() {
  return (
    <div className="video-card">
      <span class="material-icons-outlined like">favorite_border</span>
      <span class="material-icons-outlined comment">comment</span>
      <p className="username"></p>
      <p className="song"></p>
    </div>
  );
}

export default VideoCard;
