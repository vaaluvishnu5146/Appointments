const UserModel = require("../Models/User.model");

const NAMESPACE = {
  DASHBOARD: "dashboard",
  WEBSITE: "website",
  MOBILE_APPLICATION: "mobileApp",
};

async function signinWithNamespace(req, res, next) {
  const originNamespace = req.headers.namespace;
  let data = null;

  try {
    data = await handleCheckUser(req?.body?.email);
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error,
    });
  }

  if (originNamespace === NAMESPACE.DASHBOARD) {
    if (data?.roles && data?.roles?.length > 1) {
      next();
    } else {
      return res.status(401).json({
        success: false,
        message: "You are not authorized to access this resource",
      });
    }
  } else {
    next();
  }
}

async function handleCheckUser(email = "") {
  try {
    const result = await UserModel.findOne({ email: email });
    return result;
  } catch (error) {
    return error;
  }
}

module.exports = {
  signinWithNamespace,
};
