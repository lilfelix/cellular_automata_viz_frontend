<file name=2 path=/Users/felix/Code/cellular_automata_viz_frontend/README.md># Cellular Automata visualized in 3D space 
with fly controls!

The frontend defined by this repo is intended to be used together with the backend in this repo:
https://github.com/lilfelix/cellular_automata_viz_backend/tree/main/src

## Get started
- Execute `npm i` to install project dependencies
- Clone the [backend repo](https://github.com/lilfelix/cellular_automata_viz_backend/tree/main/src) which hosts the protobuf files used by this frontend
    - Create symbolic link: `ln -s /path/to/cellular_automata_viz_backend/proto $PWD/src/proto`
    - Compile the protobuf message definitions into .js classes as descrined in [Proto section](#proto) below
- Install [envoy proxy](https://www.envoyproxy.io/) to allow gRPC communication btw frontend and backend
- Start an [envoy proxy](https://www.envoyproxy.io/) server from the root of this repo: `envoy -c $PWD/envoy.yaml`
- Start automatic transpilation of .ts frontend changes: `npm run start`. Equivalent to `webpack --watch`
- Open a browser and paste `$PWD/index.html`, where `index.html` is at the root of this repo

Now the frontend should be up!🚀 Navigation controls:  

- `<Space>` toggles freezing of GUI. Frozen mode allows using buttons like "Start", "Reset" etc
- Use WASD + EQ controls to navigate in flight mode

### Generating rules
`openssl rand -hex 16 | xxd -r -p | base64`
- openssl rand -hex 16: Generates a random 128-bit (16-byte) hex string.
- xxd -r -p: Converts hex string to raw binary.
-	base64: Encodes the raw binary to Base64.

## Proto

Run the following command to generate the protobuf classes from message definitions, as well as the gRPC service client stub:
```bash
export PATH=$PATH:$PWD/node_modules/protoc-gen-js/bin
protoc --js_out=$PWD/src/proto/generated --proto_path=$PWD/src/proto/ $PWD/src/proto/sim_server.proto
``` 
[See docs for unintuitive use of `js_out`](https://github.com/protocolbuffers/protobuf-javascript?tab=readme-ov-file#the---js_out-flag)

## gRPC

Use [grpc-web](https://github.com/grpc/grpc-web) via `npm i grpc-web`.
It's a JavaScript implementation of gRPC for browser clients. Intallstion instructions [here](https://github.com/grpc/grpc-web?tab=readme-ov-file#code-generator-plugins). It also has experimental [Typescript support](https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/echo/ts-example)


## envoy

A proxy is needed to convert browser's HTTP1.1 request to gRPC servers HTTP2.0 request

- Install [envoy](https://www.envoyproxy.io/docs/envoy/latest/start/install) using brew: `brew install envoy`
- Start proxy: `envoy -c $PWD/envoy.yaml`
- Ensure client uses the port configured e.g. `8080`

*Why Envoy?*

-	gRPC-Web Translation: Browsers can’t make native gRPC calls due to HTTP/2 restrictions. grpc-web works by translating the gRPC calls into HTTP/1.1, which Envoy understands and forwards to your gRPC server.
-	CORS Handling: Envoy can handle the required CORS headers that the browser enforces, making cross-origin requests possible.

## Start a simulation

```
1. Start proxy service `envoy -c $PWD/envoy.yaml`
2. Start grpc server 
    - `./build/debug/bin/bin/CellularAutomata3D` or corresponding release binary
3. Initialize a rowld state
```
grpcurl -d '{"dimensions":{"y_max":"10","z_max":"10","x_max":"10"}}' -plaintext localhost:50051 sim_server.StateService/InitWorldState | head -n 20
```
4. Generate a rule
```
RULE=$(echo -n 0123456789abcdef0123456789abcdef | xxd -r -p | base64);
```

</file>
