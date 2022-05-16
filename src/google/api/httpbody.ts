import { Writer, Reader, Protobuf } from "as-proto";
import { protobuf } from "../protobuf";

export class HttpBody {
  static encode(message: HttpBody, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.content_type);

    writer.uint32(18);
    writer.bytes(message.data);

    const extensions = message.extensions;
    for (let i = 0; i < extensions.length; ++i) {
      writer.uint32(26);
      writer.fork();
      protobuf.Any.encode(extensions[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): HttpBody {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new HttpBody();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content_type = reader.string();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.extensions.push(protobuf.Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  content_type: string;
  data: Uint8Array;
  extensions: Array<protobuf.Any>;

  constructor(content_type: string = "", data: Uint8Array = new Uint8Array(0), extensions: Array<protobuf.Any> = []) {
    this.content_type = content_type;
    this.data = data;
    this.extensions = extensions;
  }
}

export function decodeHttpBody(a: Uint8Array): HttpBody {
  return Protobuf.decode<HttpBody>(a, HttpBody.decode);
}
