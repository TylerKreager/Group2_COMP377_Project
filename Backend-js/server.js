import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import classifyImage from "./routes/classify.js";

const app = express();
app.use(cors());
app.use(fileUpload());
app.use(express.json());

app.use('/classify', classifyImage);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

