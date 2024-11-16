import express, { json } from 'express';
import cors from 'cors';
import { mainRouter } from "./routes/routes";
import "express-async-errors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(json());
app.use(cors());
app.use(mainRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});