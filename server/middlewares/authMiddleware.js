const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const auth_header = req.headers.authorization;

    if (!auth_header || !auth_header.startsWith("Bearer")) {
        return res.status(401).json({ error: "Unauthorized! No token provided." });
    }

    const token = auth_header.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id, role: decoded.role }; 
        next();
    } catch (error) {
        return res.status(401).json({ error: "Unauthorized! Invalid or expired token." });
    }
};

module.exports = authMiddleware;