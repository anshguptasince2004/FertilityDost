const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAdmin = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      console.log("No token");
      return res.status(401).json({ error: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);

    const user = await User.findById(decoded.userId);
    if (!user) {
      console.log("User not found");
      return res.status(403).json({ error: "Access denied" });
    }

    if (user.role !== "admin") {
      console.log("Not an admin:", user.role);
      return res.status(403).json({ error: "Access denied" });
    }

    req.user = user;
    console.log("Admin authenticated:", user.email);
    next();
  } catch (err) {
    console.error("Middleware error:", err.message);
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = requireAdmin;
