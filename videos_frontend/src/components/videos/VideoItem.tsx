import React from 'react';
import { Video } from '../../interface/video';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router-dom';

import * as VideoService from '../../services/video-service'

interface Props {
    video: Video,
    list: Video[],
    setList: (React.Dispatch<React.SetStateAction<Video[]>>);
}

const VideoItem = ({video, list, setList}: Props) => {

    const history = useHistory();

    const editVideo = () => {
        history.push(`/update/${video._id}`);
    }

    const handleDelete = async (id:string) => {
        await VideoService.deleteVideo(id);
        list = list.filter(item => item._id !== id );
        setList(list);
    }

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 onClick={editVideo} style={{cursor: "pointer"}}>{video.title}</h5>
                        <span className="fa fa-times text-danger" onClick={() => video._id && handleDelete(video._id)}></span>
                    </div>
                    <hr/>
                        <div className="embed-responsive embed-responsive-16by9">
                            <ReactPlayer url={video.url}/>
                        </div>
                    <hr/>
                    <p>{video.description}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoItem
