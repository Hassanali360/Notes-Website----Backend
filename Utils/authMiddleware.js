const jwt = require("jsonwebtoken");
const User = require("../Models/userModel"); // Import User model

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1]; // Extract token from Authorization header

    if (!token) {
      return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-password"); // Attach user to request

    if (!req.user) {
      return res.status(401).json({ message: "User not found. Unauthorized." });
    }

    next(); // Proceed to the next middleware/controller
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
