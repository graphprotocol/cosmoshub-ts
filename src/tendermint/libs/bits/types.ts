import { Writer, Reader, Protobuf } from "as-proto";

export class BitArray {
  static encode(message: BitArray, writer: Writer): void {
    writer.uint32(8);
    writer.int64(message.bits);

    const elems = message.elems;
    if (elems.length !== 0) {
      for (let i = 0; i < elems.length; ++i) {
        writer.uint32(16);
        writer.uint64(elems[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): BitArray {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new BitArray();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bits = reader.int64();
          break;

        case 2:
          message.elems.push(reader.uint64());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  bits: i64;
  elems: Array<u64>;

  constructor(bits: i64 = 0, elems: Array<u64> = []) {
    this.bits = bits;
    this.elems = elems;
  }
}

export function decodeBitArray(a: Uint8Array): BitArray {
  return Protobuf.decode<BitArray>(a, BitArray.decode);
}
