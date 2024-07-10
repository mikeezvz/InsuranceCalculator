const swaggerAutogen = require('swagger-autogen')();

const doc = {
  swagger: "2.0",
  info: {
    title: 'insurancecalculator-backend',
    description: 'API documentation for the React-App InsuranceCalculator',
    version: '1.0.0'
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Local server'
    }
  ],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);