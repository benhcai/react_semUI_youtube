import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onFormSubmit("youtube");
  }

  onFormSubmit = async (term) => {
    const response = await youtube.search(term);
    this.setState({ videos: response.data.items });
  };

  // When data has to be communicated up the chain, a callback is used
  // App.fn -> VideoList.prop -(all items)-> VideoItem.prop ->
  // onClick callback + clicked video's url -> App.setState ->
  // VideoDetail.prop
  onVideoSelect = (video) => {
    console.log("From the app", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui stackable">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
