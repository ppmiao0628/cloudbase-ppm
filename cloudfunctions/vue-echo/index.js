const cloud = require("@cloudbase/node-sdk");

exports.main = async (event, context) => {
  const app = cloud.init({
    env: cloud.SYMBOL_CURRENT_ENV,
  });
  console.log(app, context);
  // todo
  // your code here
  return {
    event,
  };
};
