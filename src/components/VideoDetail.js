const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return "Loading...";
  }
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
