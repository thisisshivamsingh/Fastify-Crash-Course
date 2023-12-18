const fastify = require("fastify");
const app = fastify();

app.get("/", function (request, reply) {
  reply.send("Our first route");
});

app.get("/about", function (request, reply) {
  reply.send("in about page");
});

app.get("/user/:id", function (request, reply) {
  const id = request.params.id;
  reply.send("User id is" + id);
});

app.listen(3000, function (err, address) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("server is running on:", address);
});
