import { app } from "./app";
import { runDB } from "./db/db";

const ready = runDB();
export default async function handler(req: any, res: any) {
    await ready;
    return app(req, res);
}