const fastify = require("fastify")();

fastify.addHook("onRequest", async function (req, reply) {
  //   console.log("in onRequest hook", req.raw.url);
  //   console.log("ip is:", req.socket.remoteAddress);
  if (req.raw.url == "/foo") {
    reply.send("We have blocked this url");
  }
});

fastify.addHook("onResponse", (req, reply) => {
  console.log("on response called");
  //   reply.send("hello");
});

fastify.get("/", async function (req, reply) {
  reply.send("in home");
  console.log("after response sent");
});
56;
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Server is running on port 3000");
  }
});
