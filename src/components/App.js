import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
   state = { videos: [], selectedVideo: null };

   handleSearchTermSubmit = async (searchTerm) => {
      const res = await youtube.get('/search', {
         params: {
            q: searchTerm,
         },
      });
      this.setState({
         videos: res.data.items,
         selectedVideo: res.data.items[0],
      });
   };

   handleVideoSelect = (video) => {
      this.setState({ selectedVideo: video });
   };

   componentDidMount() {
      this.handleSearchTermSubmit('action trailers');
   }

   render() {
      return (
         <div style={{ paddingTop: '10px' }} className="ui container">
            <SearchBar handleSearchTermSubmit={this.handleSearchTermSubmit} />
            <div className="ui grid">
               <div className="ui row">
                  <div className="eleven wide column">
                     <VideoDetail video={this.state.selectedVideo} />
                  </div>
                  <div className="five wide column">
                     <VideoList
                        handleVideoSelect={this.handleVideoSelect}
                        videos={this.state.videos}
                     />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default App;
