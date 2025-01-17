import { Router } from 'express'
import { golfController } from '../controllers/golf.controller.js' 
import { authMiddleware } from '../middleware/authMiddleware.js'

const router = Router()

router.route('/rounds')
    .post(authMiddleware, golfController.createRound)
    .get(authMiddleware, golfController.getAllRounds)
router.route('/rounds/:id')
    .get(authMiddleware, golfController.getRound)
    .delete(authMiddleware, golfController.deleteRound)
    .put(authMiddleware, golfController.updateRound)


export default router;