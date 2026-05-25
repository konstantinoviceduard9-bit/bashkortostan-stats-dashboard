import cors from "cors";
import express from "express";
import { api } from "./api";

const app = express();
const port = Number(process.env.PORT ?? 4100);

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use("/api", api);

app.listen(port, "127.0.0.1", () => {
  console.log(`API статистики Башкортостана запущен: http://127.0.0.1:${port}/api/health`);
});
