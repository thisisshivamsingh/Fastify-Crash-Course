const fastify = require("fastify");
const app = fastify();

// mongodb+srv://thisisshivam06:<password>@cluster0.lz2pver.mongodb.net/
// 8qRDrnPqhj6UqaMh

const createUserSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "integer", minimum: 1 },
  },
  required: ["name", "age"],
};

app.register(require("@fastify/mongodb"), {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,

  url: "mongodb+srv://thisisshivam06:8qRDrnPqhj6UqaMh@cluster0.lz2pver.mongodb.net/",
});

app.post("/", {
  schema: {
    body: createUserSchema,
  },
  handler: async (request, reply) => {
    try {
      const { name, age } = request.body;

      // Process the request and create a new user

      // Create a new user document
      const newUser = {
        name,
        age,
      };

      reply.send({ message: "User created successfully" });
    } catch (error) {
      console.error("Error creating user:", error);
      reply.status(500).send("Error creating user");
    }
  },
});

app.listen(3000, function (err, address) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("server is running on:", address);
});
