const User = require("./user");
const Tech = require("./tech");
const Workorder = require("./workorder");

Workorder.belongsTo(User, {
  foreignKey: "user_id",
});

Workorder.belongsTo(Tech, {
  foreignKey: "tech_id",
});

module.exports = { Tech, User, Workorder };
