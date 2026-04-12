import express from 'express';
import axios from 'axios';
import FormData from 'form-data';

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const file = req.files.image;

        const form = new FormData();
        form.append('image', file.data, file.name);

        const response = await axios.post('http://localhost:5001/predict', form, {
            headers: form.getHeaders()
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });


    }});
export default router;


