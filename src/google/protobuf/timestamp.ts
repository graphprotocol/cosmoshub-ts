import { Writer, Reader, Protobuf } from "as-proto";

@unmanaged
export class Timestamp {
  static encode(message: Timestamp, writer: Writer): void {
    writer.uint32(8);
    writer.int64(message.seconds);

    writer.uint32(16);
    writer.int32(message.nanos);
  }

  static decode(reader: Reader, length: i32): Timestamp {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Timestamp();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seconds = reader.int64();
          break;

        case 2:
          message.nanos = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  seconds: i64;
  nanos: i32;

  constructor(seconds: i64 = 0, nanos: i32 = 0) {
    this.seconds = seconds;
    this.nanos = nanos;
  }
}

export function decodeTimestamp(a: Uint8Array): Timestamp {
  return Protobuf.decode<Timestamp>(a, Timestamp.decode);
}