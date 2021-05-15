import { Request, Response, RequestHandler } from 'express';
import Video from '../model/video.model';

export const getVideos: RequestHandler = async (req: Request, res: Response) => {
    try {
        const videos = await Video.find();
        return res.status(200).json(videos);
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error",
                error: error.message
            }
        );
    }
}

export const getVideo: RequestHandler = async (req: Request, res: Response) => {
    try {
        const video = await Video.findById(req.params.id);
        if(!video){
            throw new Error("Video not found");
        }
        return res.status(200).json(video);
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error",
                error: error.message
            }
        );
    }
}

export const postVideo: RequestHandler = async (req: Request, res: Response) => {
    try {
        const videoFound = await Video.findOne({ url: req.body.url });
        if(videoFound){
            throw new Error("The video already exists");
        }
        const video = await Video.create(req.body);
        return res.status(200).json(video);
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error",
                error: error.message
            }
        );
    }
}

export const putVideo: RequestHandler = async (req: Request, res: Response) => {
    try {
        const video = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.status(200).json(video);
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error",
                error: error.message
            }
        );
    }
}

export const deleteVideo: RequestHandler = async (req: Request, res: Response) => {
    try {
        const video = await Video.findByIdAndRemove(req.params.id);
        return res.status(200).json(video);
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error",
                error: error.message
            }
        );
    }
}

export const deleteVideos: RequestHandler = async (req: Request, res: Response) => {
    try {
        const video = await Video.deleteMany({});
        return res.status(200).json(video);
    } catch (error) {
        return res.status(500).json(
            {
                message: "Error",
                error: error.message
            }
        );
    }
}