import Golf from "../models/golf.model.js";


export const golfController = {
    createRound: async (req, res) => {
        try {
            if (!req.body.userId) {
                return res.status(400).json({ error: "User ID is required" });
            }
            const newRound = await Golf.create({...req.body, createdBy: req.user._id});
            console.log(newRound);
            return res.status(201).json(newRound)
        }
        catch (err) {
            console.error("Error creating round:", err);
            return res.status(500).json(err)
        }
    },
    getAllRounds: async (req, res) => {
        try {
            const allRounds = await Golf.find({ createdBy: req.user._id })
            res.status(200).json(allRounds)
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    getRound: async (req, res) => {
        try {
            const id = req.params.id
            const oneRound = await Golf.findById({ id, createdBy: req.user._id })
            return res.status(200).json(oneRound)
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    updateRound: async (req, res) => {
        try {
            const id = req.params.id;
            const options = { new: true, runValidators: true };

            const updatedRound = await Golf.findByIdAndUpdate(id, req.body, options);

            if (!updatedRound) {
                return res.status(404).json({ message: "Round not found" });
            }

            return res.status(200).json(updatedRound);
        } catch (err) {
            console.error("Error updating round:", err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    },
    deleteRound: async (req, res) => {
        try {
            console.log("Received ID for deletion:", req.params.id);
            const id = req.params.id;

            if (!id.match(/^[0-9a-fA-F]{24}$/)) {
                return res.status(400).json({ message: "Invalid round ID" });
            }

            const deletedRound = await Golf.findByIdAndDelete(id);

            if (!deletedRound) {
                return res.status(404).json({ message: "Round not found" });
            }

            return res.status(204).send(); // Success with no content
        } catch (err) {
            console.error("Error deleting round:", err);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

}