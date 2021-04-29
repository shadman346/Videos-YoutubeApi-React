import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, handleVideoSelect }) => {
    const renderList = videos.map(video => {
        return (
            <VideoItem key={video.id.videoId}
                handleVideoSelect={handleVideoSelect}
                video={video} />
        )
    })

    return (
        <a href="#top">
            <div className="ui relaxed divided list">{renderList}</div>
        </a>
    )
}

export default VideoList;