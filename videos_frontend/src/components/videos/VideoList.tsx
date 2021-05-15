import React, { useEffect } from 'react';
import { useState } from 'react';

import VideoItem from './VideoItem';
import { Video } from '../../interface/video';
import * as VideoService from '../../services/video-service';

const VideoList = () => {

    const [videos, setVideos] = useState<Video[]>([]);

    const loadVideos = async  () => {
        const res = await VideoService.getVideos();
        setVideos(res.data);
    }

    useEffect(() => {
        loadVideos();
        return () => {
        }
    }, []);

    const deleteAll = async () => {
        await VideoService.deleteVideos();
    }

    return (
        <div>
            <div className="container mb-4">
                <div className="ml-auto">
                    <button className="btn btn-danger" onClick={deleteAll}>
                        <span className="fa fa-trash"></span>
                    </button>
                </div>
            </div>
            <div className="row">
                {videos.map((item) => {
                    return (<VideoItem video={item} key={item._id} list={videos} setList={setVideos}/>);
                })}
            </div>
        </div>
    )
}

export default VideoList
