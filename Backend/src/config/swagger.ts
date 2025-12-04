import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Behaviour Tracking API",
      version: "1.0.0",
      description: "API to log user actions (page visits, clicks)",
    },
    servers: [
      { url: process.env.BASE_URL || "http://localhost:5000", description: "Local server" }
    ]
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], // path to files with JSDoc comments
};

export const swaggerSpec = swaggerJSDoc(options);
