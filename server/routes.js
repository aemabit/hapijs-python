const checkmsg = require("./src/nltkmsg")

const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    },
  },

  {
    method: "POST",
    path: "/pyprocess",
    handler: (request, h) => {
      let payload = request.payload;
      if (typeof payload === "string") {
        payload = JSON.parse(payload);
      }
      return checkmsg(payload.tweet);
    },
  },
];

module.exports = routes;
