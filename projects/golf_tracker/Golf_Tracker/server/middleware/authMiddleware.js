import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.userToken || req.headers.authorization?.split(" ")[1];
    if (!token) 
        return res.status(401).json({ message: "Unauthorized - No token provided" });

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded; 
        next();
    } catch (error) {
        return res.status(403).json({ message: "Forbidden - Invalid token" });
    }
};
