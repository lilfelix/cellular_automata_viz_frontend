# Social-fabric
Social fabric neural network visualization 

`openssl rand -hex 16 | xxd -r -p | base64`
- openssl rand -hex 16: Generates a random 128-bit (16-byte) hex string.
- xxd -r -p: Converts hex string to raw binary.
-	base64: Encodes the raw binary to Base64.

## Proto

[See docs for unintuitive use of `js_out`](https://github.com/protocolbuffers/protobuf-javascript?tab=readme-ov-file#the---js_out-flag)
```bash
export PATH=$PATH:$PWD/node_modules/protoc-gen-js/bin
protoc --js_out=$PWD/src/proto/generated --proto_path=$PWD/src/proto/ $PWD/src/proto/sim_server.proto
``` 

Run the following command to generate the proto messages and the gRPC service client stub from your .proto definitions:
```bash
export PATH=$PATH:$PWD/node_modules/protoc-gen-js/bin
protoc -I=$PWD/src/proto/ \
  --js_out=import_style=commonjs:$PWD/src/proto/generated \
  --grpc-web_out=import_style=typescript,mode=grpcweb:$PWD/src/proto/generated \
  $PWD/src/proto/sim_server.proto
``` 

## gRPC

Use [grpc-web](https://github.com/grpc/grpc-web) via `npm i grpc-web`.
It's a JavaScript implementation of gRPC for browser clients. Intallstion instructions [here](https://github.com/grpc/grpc-web?tab=readme-ov-file#code-generator-plugins). It also has experimental [Typescript support](https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/echo/ts-example)


This is server side:
`@grpc/grpc-js` from https://github.com/grpc/grpc-node


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
# Generate a rule
RULE=$(echo -n 0123456789abcdef0123456789abcdef | xxd -r -p | base64);

## To read

### WebGL
- [ ] [MDN WebGL Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
- [ ] [An introduction to WebGL](https://dev.opera.com/articles/introduction-to-webgl-part-1/) : Written by Luz Caballero, published at dev.opera.com. This article addresses what WebGL is, explains how WebGL works (including the rendering pipeline concept), and introduces some WebGL libraries.   
- [ ] [WebGL Fundamentals](https://webglfundamentals.org/)
- [ ] [An intro to modern OpenGL](https://duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Table-of-Contents.html): A series of nice articles about OpenGL written by Joe Groff, providing a clear introduction to OpenGL from its history to the important graphics pipeline concept, and also includes some examples to demonstrate how OpenGL works. If you have no idea what OpenGL is, this is a good place to start.


### Three.js
- [x] [Level of Detail](https://threejs.org/examples/webgl_lod.html)
- [x] [Camera panning objects in space](https://threejs.org/examples/#webgl_camera)
- [ ] [Anvaka's very cool graph visualizations](https://anvaka.github.io/pm/#/?_k=rn1q6d)

### TensorSpace
- [x] [TensorSpace](https://github.com/tensorspace-team/tensorspace): TensorSpace is a neural network 3D visualization framework built using TensorFlow.js, Three.js and Tween.js. TensorSpace provides Keras-like APIs to build deep learning layers, load pre-trained models, and generate a 3D visualization in the browser.

### D3.js
- [ ] [Data-Driven Documents](https://d3js.org/) with a cool [Obama bugdet vizualization in 2D](https://archive.nytimes.com/www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html)


Visualizing the social fabric as the skin of the organism that is society.
Neural network with hot spots. How activity in a region is interpreted as a visualization depends on the sentiment analysis done on the data causing the 
excitatory or inhibitory activity.

By zooming into a hot spot, like `Level of Detail` and `Camera panning objects in space` examples above,
You could read the corresponding tweets, news articles, youtube clips, podcasts, radio announcements etc.
Defense (Försvar) intelligence system?
In a crisis, the defense ought to have a channel open in all different media,
and tap into what people are requesting. This could help people self-triage in
the event of a crisis.

1. Department sends clear instrutions via all its channels on how to contact them, allowing auto-triaging.
2. If a department can scan fb,twter,reddit etc for people responding using this format, the pre-triage would be complete, and the department can reach out/help people in a better order than random.
