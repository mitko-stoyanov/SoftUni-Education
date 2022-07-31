import { getUserData } from "../util.js";

// закачаме за контекста user
export function addSession(ctx, next) {
    ctx.user = getUserData();

    next();
}