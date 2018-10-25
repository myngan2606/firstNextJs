const routes = (module.exports = require("next-routes")());
routes
  .add("home", "/home")
  .add("about", "/home/about")
  .add("/home/product", "product")
  .add("contact", "/home/contact", "contact");
