import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/service'; // Import the types generated from the .proto file
import { ExampleServiceHandlers } from './proto/example/ExampleService';

const PROTO_PATH = __dirname + '/proto/sim_server.proto';

// Load the .proto file
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const grpcObject = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;
const exampleService = grpcObject.example.ExampleService;

// Implement the service
const exampleServiceHandlers: ExampleServiceHandlers = {
  UnaryCall: (call, callback) => {
    const response = {
      reply: `Hello, ${call.request.message}`
    };
    callback(null, response);
  },
};

// Start the gRPC server
function startServer() {
  const server = new grpc.Server();
  server.addService(exampleService.service, exampleServiceHandlers);
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Server is running on port ${port}`);
    server.start();
  });
}

startServer();