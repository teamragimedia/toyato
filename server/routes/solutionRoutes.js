const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/solutionController");
const upload = require("../middleware/upload");

// CRUD
router.get("/", ctrl.getSolutions);
router.post("/", upload.single("image"), ctrl.createSolution);
router.put("/:id", upload.single("image"), ctrl.updateSolution);
router.delete("/:id", ctrl.deleteSolution);
router.get("/stats", ctrl.getStats);

// actions
router.patch("/:id/like", ctrl.likeSolution);
router.patch("/:id/dislike", ctrl.dislikeSolution);
router.patch("/:id/reset", ctrl.resetLikes);

router.patch("/:id/switch-to-like", ctrl.switchToLike);
router.patch("/:id/switch-to-dislike", ctrl.switchToDislike);

module.exports = router;
