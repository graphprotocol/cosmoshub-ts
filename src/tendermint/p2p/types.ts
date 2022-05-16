import { Writer, Reader, Protobuf } from "as-proto";

export class NetAddress {
  static encode(message: NetAddress, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.id);

    writer.uint32(18);
    writer.string(message.ip);

    writer.uint32(24);
    writer.uint32(message.port);
  }

  static decode(reader: Reader, length: i32): NetAddress {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new NetAddress();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.ip = reader.string();
          break;

        case 3:
          message.port = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  id: string;
  ip: string;
  port: u32;

  constructor(id: string = "", ip: string = "", port: u32 = 0) {
    this.id = id;
    this.ip = ip;
    this.port = port;
  }
}

export function decodeNetAddress(a: Uint8Array): NetAddress {
  return Protobuf.decode<NetAddress>(a, NetAddress.decode);
}

@unmanaged
export class ProtocolVersion {
  static encode(message: ProtocolVersion, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.p2p);

    writer.uint32(16);
    writer.uint64(message.block);

    writer.uint32(24);
    writer.uint64(message.app);
  }

  static decode(reader: Reader, length: i32): ProtocolVersion {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ProtocolVersion();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p2p = reader.uint64();
          break;

        case 2:
          message.block = reader.uint64();
          break;

        case 3:
          message.app = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  p2p: u64;
  block: u64;
  app: u64;

  constructor(p2p: u64 = 0, block: u64 = 0, app: u64 = 0) {
    this.p2p = p2p;
    this.block = block;
    this.app = app;
  }
}

export function decodeProtocolVersion(a: Uint8Array): ProtocolVersion {
  return Protobuf.decode<ProtocolVersion>(a, ProtocolVersion.decode);
}

export class DefaultNodeInfo {
  static encode(message: DefaultNodeInfo, writer: Writer): void {
    const protocol_version = message.protocol_version;
    if (protocol_version !== null) {
      writer.uint32(10);
      writer.fork();
      ProtocolVersion.encode(protocol_version, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.string(message.default_node_id);

    writer.uint32(26);
    writer.string(message.listen_addr);

    writer.uint32(34);
    writer.string(message.network);

    writer.uint32(42);
    writer.string(message.version);

    writer.uint32(50);
    writer.bytes(message.channels);

    writer.uint32(58);
    writer.string(message.moniker);

    const other = message.other;
    if (other !== null) {
      writer.uint32(66);
      writer.fork();
      DefaultNodeInfoOther.encode(other, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): DefaultNodeInfo {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DefaultNodeInfo();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protocol_version = ProtocolVersion.decode(reader, reader.uint32());
          break;

        case 2:
          message.default_node_id = reader.string();
          break;

        case 3:
          message.listen_addr = reader.string();
          break;

        case 4:
          message.network = reader.string();
          break;

        case 5:
          message.version = reader.string();
          break;

        case 6:
          message.channels = reader.bytes();
          break;

        case 7:
          message.moniker = reader.string();
          break;

        case 8:
          message.other = DefaultNodeInfoOther.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  protocol_version: ProtocolVersion | null;
  default_node_id: string;
  listen_addr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other: DefaultNodeInfoOther | null;

  constructor(
    protocol_version: ProtocolVersion | null = null,
    default_node_id: string = "",
    listen_addr: string = "",
    network: string = "",
    version: string = "",
    channels: Uint8Array = new Uint8Array(0),
    moniker: string = "",
    other: DefaultNodeInfoOther | null = null
  ) {
    this.protocol_version = protocol_version;
    this.default_node_id = default_node_id;
    this.listen_addr = listen_addr;
    this.network = network;
    this.version = version;
    this.channels = channels;
    this.moniker = moniker;
    this.other = other;
  }
}

export function decodeDefaultNodeInfo(a: Uint8Array): DefaultNodeInfo {
  return Protobuf.decode<DefaultNodeInfo>(a, DefaultNodeInfo.decode);
}

export class DefaultNodeInfoOther {
  static encode(message: DefaultNodeInfoOther, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.tx_index);

    writer.uint32(18);
    writer.string(message.rpc_address);
  }

  static decode(reader: Reader, length: i32): DefaultNodeInfoOther {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DefaultNodeInfoOther();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx_index = reader.string();
          break;

        case 2:
          message.rpc_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  tx_index: string;
  rpc_address: string;

  constructor(tx_index: string = "", rpc_address: string = "") {
    this.tx_index = tx_index;
    this.rpc_address = rpc_address;
  }
}

export function decodeDefaultNodeInfoOther(a: Uint8Array): DefaultNodeInfoOther {
  return Protobuf.decode<DefaultNodeInfoOther>(a, DefaultNodeInfoOther.decode);
}
