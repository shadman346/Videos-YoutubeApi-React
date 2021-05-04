import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, handleVideoSelect }) => {
   return (
      <div onClick={() => handleVideoSelect(video)} className="video-item item">
         <img
            alt={video.snippet.title}
            className="ui image"
            src={video.snippet.thumbnails.medium.url}
         />
         <div className="content">
            <div className="ui">{video.snippet.title}</div>
         </div>
      </div>
   );
};

export default VideoItem;
