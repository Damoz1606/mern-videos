import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Video } from '../../interface/video';
import * as VideoService from '../../services/video-service';


type InputChange =  HTMLInputElement | HTMLTextAreaElement;

interface Params {
    id: string
}

const Videoform = () => {

    const history = useHistory();
    const params = useParams<Params>();

    const [video, setvideo] = useState<Video>({title: '', description: '', url: ''});

    useEffect(() => {
        if(params.id){
            getVideo(params.id);
        }
    }, [params.id]);

    const getVideo = async (id:string) => {
        const res = await VideoService.getVideo(id);
        setvideo(res.data);
    }

    const handleInputChange = (e: ChangeEvent<InputChange>) => {
        setvideo({...video, [e.target.name]: e.target.value});
        console.log(video);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(params.id){
            await VideoService.putVideo(params.id, video);
            toast.success("New video added");
            setvideo({} as Video);
        } else {
            await VideoService.postVideo(video);
            toast.success("New video added");
            setvideo({} as Video);
        }
        history.push("/");
    }

    return (
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-header">
                        New Video
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input onChange={handleInputChange} type="text" name="title" placeholder="Title" className="form-control" autoFocus required/>
                            </div>
                            <div className="form-group">
                                <input onChange={handleInputChange} type="text" name="url" placeholder="https://somesite.com" className="form-control" required/>
                            </div>
                            <div className="form-group">
                                <textarea onChange={handleInputChange} name="description" rows={2} className="form-control" placeholder="Description" required></textarea>
                            </div>
                            {
                                params.id ?
                                <button className="btn btn-secondary btn-block"><span className="fa fa-save"></span> Update</button>
                                :
                                <button className="btn btn-secondary btn-block"><span className="fa fa-save"></span> Save</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videoform