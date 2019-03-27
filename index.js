exports.generateSwaggerDocument = (projectName) => ({
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: projectName,
    description: 'Swagger Documentation'
  },
  host: 'localhost:8080',
  tags: [],
  basePath: '/',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {},
  definitions: {
    ExampleModel: {
      properties: {}
    }
  }
});

exports.fillTag = (tag, description) => ({
});

exports.createResponse = res => {
  "description": "",
  "schema": {},
  "headers": res.headers
}


exports.createPath = (res) => {
    const pathStructure = [res.request.req.path]: {
    [res.request.method]: {
      "tags": [],
      "summary": ,
      "description": "",
      "operationId": "",
      "produces": [res.type],
      "parameters": [],
      "responses:" {}
    }
  };
  pathStructure.responses.[res.statusCode] = createResponse(res);
};
