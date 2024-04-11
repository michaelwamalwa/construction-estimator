const HttpException = require("../utils/HttpException.utils");
const ManagerModel = require("../models/ManagerModel.js");
const jwt = require("jsonwebtoken");

const auth = (...roles) => {
  return async function (req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      const bearer = "Bearer";

      if (!authHeader || !authHeader.startsWith(bearer)) {
        throw new HttpException(401, "Access denied. No credentials sent");
      }
      const token = authHeader.replace(bearer, "");
      const secretKey = process.env.SECRET_JWT || "";

      const decoded = jwt.verify(token, secretKey);
      const user = await ManagerModel.findOne({ id: decoded.manager_id });

      if (!manager) {
        throw new HttpException(401, "Authentication failed");
      }

      const ownerAuthorized = req.params.id == manager.id;

      if (!ownerAuthorized && roles.length && !roles.includes(manager.role)) {
        throw new HttpException(401, "Unauthorized");
      }

      req.currentManager = manager;
      next();
    } catch (e) {
      e.status = 401;
      next(e);
    }
  };
};

module.exports = auth;
