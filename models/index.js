const User = require("./user");
const Tech = require("./Tech");
const Workorder = require("./Workorder");

// Workorder.belongsTo(User, {
//   foreignKey: "user_id",
// });

// Workorder.belongsTo(Tech, {
//   foreignKey: "tech_id",
// });

module.exports = { Tech, User, Workorder };