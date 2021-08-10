import "./VideoItem.css";

const VideoItem = (props) => {
  const video = props.video.snippet;
  const thumbnail = props.video.snippet.thumbnails.medium.url;
  const title = props.video.snippet.title;
  const channel = props.video.snippet.channelTitle;
  const onVideoSelect = props.onVideoSelect;
  return (
    <div className="video-item item" onClick={() => onVideoSelect(props.video)}>
      <img className="ui image" src={thumbnail} alt={title} />
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">{channel}</div>
      </div>
    </div>
  );
};

export default VideoItem;
