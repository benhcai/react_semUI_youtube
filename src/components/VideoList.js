import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => (
    <VideoItem
      key={video.id.videoId ?? video.id.channelId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
