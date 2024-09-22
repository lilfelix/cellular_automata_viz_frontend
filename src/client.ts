import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/service';
import { ExampleServiceClient } from './proto/example/ExampleService';

const PROTO_PATH = __dirname + '/proto/service.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const grpcObject = (grpc.loadPackageDefinition(packageDefinition) as unknown) as ProtoGrpcType;
const client = new grpcObject.example.ExampleService(
  'localhost:50051',
  grpc.credentials.createInsecure()
) as ExampleServiceClient;

client.UnaryCall({ message: 'world' }, (err, response) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(response.reply);
});