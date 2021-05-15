import { Router } from 'express';
import * as VideoController from '../controller/video.controller';

const router = Router();

router.route("/")
.get(VideoController.getVideos)
.post(VideoController.postVideo)
.delete(VideoController.deleteVideos);

router.route("/:id")
.get(VideoController.getVideo)
.put(VideoController.putVideo)
.delete(VideoController.deleteVideo);

export default router;