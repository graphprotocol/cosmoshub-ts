import { Writer, Reader, Protobuf } from "as-proto";
import { Header, Data, Commit } from "./types";
import { EvidenceList } from "./evidence";

export class Block {
  static encode(message: Block, writer: Writer): void {
    const header = message.header;
    if (header !== null) {
      writer.uint32(10);
      writer.fork();
      Header.encode(header, writer);
      writer.ldelim();
    }

    const data = message.data;
    if (data !== null) {
      writer.uint32(18);
      writer.fork();
      Data.encode(data, writer);
      writer.ldelim();
    }

    const evidence = message.evidence;
    if (evidence !== null) {
      writer.uint32(26);
      writer.fork();
      EvidenceList.encode(evidence, writer);
      writer.ldelim();
    }

    const last_commit = message.last_commit;
    if (last_commit !== null) {
      writer.uint32(34);
      writer.fork();
      Commit.encode(last_commit, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Block {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Block();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;

        case 2:
          message.data = Data.decode(reader, reader.uint32());
          break;

        case 3:
          message.evidence = EvidenceList.decode(reader, reader.uint32());
          break;

        case 4:
          message.last_commit = Commit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  header: Header | null;
  data: Data | null;
  evidence: EvidenceList | null;
  last_commit: Commit | null;

  constructor(
    header: Header | null = null,
    data: Data | null = null,
    evidence: EvidenceList | null = null,
    last_commit: Commit | null = null
  ) {
    this.header = header;
    this.data = data;
    this.evidence = evidence;
    this.last_commit = last_commit;
  }
}

export function decodeBlock(a: Uint8Array): Block {
  return Protobuf.decode<Block>(a, Block.decode);
}
