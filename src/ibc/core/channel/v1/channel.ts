// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v0.4.0
//   protoc        v3.21.7

import { Writer, Reader, Protobuf } from "as-proto";
import { client } from "../../client";

export class Channel {
  static encode(message: Channel, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.state);

    writer.uint32(16);
    writer.int32(message.ordering);

    const counterparty = message.counterparty;
    if (counterparty !== null) {
      writer.uint32(26);
      writer.fork();
      Counterparty.encode(counterparty, writer);
      writer.ldelim();
    }

    const connectionHops = message.connectionHops;
    if (connectionHops.length !== 0) {
      for (let i = 0; i < connectionHops.length; ++i) {
        writer.uint32(34);
        writer.string(connectionHops[i]);
      }
    }

    writer.uint32(42);
    writer.string(message.version);
  }

  static decode(reader: Reader, length: i32): Channel {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Channel();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32();
          break;

        case 2:
          message.ordering = reader.int32();
          break;

        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 4:
          message.connectionHops.push(reader.string());
          break;

        case 5:
          message.version = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  state: State;
  ordering: Order;
  counterparty: Counterparty | null;
  connectionHops: Array<string>;
  version: string;

  constructor(
    state: State = 0,
    ordering: Order = 0,
    counterparty: Counterparty | null = null,
    connectionHops: Array<string> = [],
    version: string = ""
  ) {
    this.state = state;
    this.ordering = ordering;
    this.counterparty = counterparty;
    this.connectionHops = connectionHops;
    this.version = version;
  }
}

export function encodeChannel(message: Channel): Uint8Array {
  return Protobuf.encode(message, Channel.encode);
}

export function decodeChannel(buffer: Uint8Array): Channel {
  return Protobuf.decode<Channel>(buffer, Channel.decode);
}

export class IdentifiedChannel {
  static encode(message: IdentifiedChannel, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.state);

    writer.uint32(16);
    writer.int32(message.ordering);

    const counterparty = message.counterparty;
    if (counterparty !== null) {
      writer.uint32(26);
      writer.fork();
      Counterparty.encode(counterparty, writer);
      writer.ldelim();
    }

    const connectionHops = message.connectionHops;
    if (connectionHops.length !== 0) {
      for (let i = 0; i < connectionHops.length; ++i) {
        writer.uint32(34);
        writer.string(connectionHops[i]);
      }
    }

    writer.uint32(42);
    writer.string(message.version);

    writer.uint32(50);
    writer.string(message.portId);

    writer.uint32(58);
    writer.string(message.channelId);
  }

  static decode(reader: Reader, length: i32): IdentifiedChannel {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new IdentifiedChannel();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32();
          break;

        case 2:
          message.ordering = reader.int32();
          break;

        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 4:
          message.connectionHops.push(reader.string());
          break;

        case 5:
          message.version = reader.string();
          break;

        case 6:
          message.portId = reader.string();
          break;

        case 7:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  state: State;
  ordering: Order;
  counterparty: Counterparty | null;
  connectionHops: Array<string>;
  version: string;
  portId: string;
  channelId: string;

  constructor(
    state: State = 0,
    ordering: Order = 0,
    counterparty: Counterparty | null = null,
    connectionHops: Array<string> = [],
    version: string = "",
    portId: string = "",
    channelId: string = ""
  ) {
    this.state = state;
    this.ordering = ordering;
    this.counterparty = counterparty;
    this.connectionHops = connectionHops;
    this.version = version;
    this.portId = portId;
    this.channelId = channelId;
  }
}

export function encodeIdentifiedChannel(
  message: IdentifiedChannel
): Uint8Array {
  return Protobuf.encode(message, IdentifiedChannel.encode);
}

export function decodeIdentifiedChannel(buffer: Uint8Array): IdentifiedChannel {
  return Protobuf.decode<IdentifiedChannel>(buffer, IdentifiedChannel.decode);
}

export class Counterparty {
  static encode(message: Counterparty, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.portId);

    writer.uint32(18);
    writer.string(message.channelId);
  }

  static decode(reader: Reader, length: i32): Counterparty {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Counterparty();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  portId: string;
  channelId: string;

  constructor(portId: string = "", channelId: string = "") {
    this.portId = portId;
    this.channelId = channelId;
  }
}

export function encodeCounterparty(message: Counterparty): Uint8Array {
  return Protobuf.encode(message, Counterparty.encode);
}

export function decodeCounterparty(buffer: Uint8Array): Counterparty {
  return Protobuf.decode<Counterparty>(buffer, Counterparty.decode);
}

export class Packet {
  static encode(message: Packet, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.sequence);

    writer.uint32(18);
    writer.string(message.sourcePort);

    writer.uint32(26);
    writer.string(message.sourceChannel);

    writer.uint32(34);
    writer.string(message.destinationPort);

    writer.uint32(42);
    writer.string(message.destinationChannel);

    writer.uint32(50);
    writer.bytes(message.data);

    const timeoutHeight = message.timeoutHeight;
    if (timeoutHeight !== null) {
      writer.uint32(58);
      writer.fork();
      client.v1.Height.encode(timeoutHeight, writer);
      writer.ldelim();
    }

    writer.uint32(64);
    writer.uint64(message.timeoutTimestamp);
  }

  static decode(reader: Reader, length: i32): Packet {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Packet();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;

        case 2:
          message.sourcePort = reader.string();
          break;

        case 3:
          message.sourceChannel = reader.string();
          break;

        case 4:
          message.destinationPort = reader.string();
          break;

        case 5:
          message.destinationChannel = reader.string();
          break;

        case 6:
          message.data = reader.bytes();
          break;

        case 7:
          message.timeoutHeight = client.v1.Height.decode(
            reader,
            reader.uint32()
          );
          break;

        case 8:
          message.timeoutTimestamp = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  sequence: u64;
  sourcePort: string;
  sourceChannel: string;
  destinationPort: string;
  destinationChannel: string;
  data: Uint8Array;
  timeoutHeight: client.v1.Height | null;
  timeoutTimestamp: u64;

  constructor(
    sequence: u64 = 0,
    sourcePort: string = "",
    sourceChannel: string = "",
    destinationPort: string = "",
    destinationChannel: string = "",
    data: Uint8Array = new Uint8Array(0),
    timeoutHeight: client.v1.Height | null = null,
    timeoutTimestamp: u64 = 0
  ) {
    this.sequence = sequence;
    this.sourcePort = sourcePort;
    this.sourceChannel = sourceChannel;
    this.destinationPort = destinationPort;
    this.destinationChannel = destinationChannel;
    this.data = data;
    this.timeoutHeight = timeoutHeight;
    this.timeoutTimestamp = timeoutTimestamp;
  }
}

export function encodePacket(message: Packet): Uint8Array {
  return Protobuf.encode(message, Packet.encode);
}

export function decodePacket(buffer: Uint8Array): Packet {
  return Protobuf.decode<Packet>(buffer, Packet.decode);
}

export class PacketState {
  static encode(message: PacketState, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.portId);

    writer.uint32(18);
    writer.string(message.channelId);

    writer.uint32(24);
    writer.uint64(message.sequence);

    writer.uint32(34);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): PacketState {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PacketState();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channelId = reader.string();
          break;

        case 3:
          message.sequence = reader.uint64();
          break;

        case 4:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  portId: string;
  channelId: string;
  sequence: u64;
  data: Uint8Array;

  constructor(
    portId: string = "",
    channelId: string = "",
    sequence: u64 = 0,
    data: Uint8Array = new Uint8Array(0)
  ) {
    this.portId = portId;
    this.channelId = channelId;
    this.sequence = sequence;
    this.data = data;
  }
}

export function encodePacketState(message: PacketState): Uint8Array {
  return Protobuf.encode(message, PacketState.encode);
}

export function decodePacketState(buffer: Uint8Array): PacketState {
  return Protobuf.decode<PacketState>(buffer, PacketState.decode);
}

export class Acknowledgement {
  static encode(message: Acknowledgement, writer: Writer): void {
    writer.uint32(170);
    writer.bytes(message.result);

    writer.uint32(178);
    writer.string(message.error);
  }

  static decode(reader: Reader, length: i32): Acknowledgement {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Acknowledgement();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 21:
          message.result = reader.bytes();
          break;

        case 22:
          message.error = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: Uint8Array;
  error: string;

  constructor(result: Uint8Array = new Uint8Array(0), error: string = "") {
    this.result = result;
    this.error = error;
  }
}

export function encodeAcknowledgement(message: Acknowledgement): Uint8Array {
  return Protobuf.encode(message, Acknowledgement.encode);
}

export function decodeAcknowledgement(buffer: Uint8Array): Acknowledgement {
  return Protobuf.decode<Acknowledgement>(buffer, Acknowledgement.decode);
}

export enum State {
  STATE_UNINITIALIZED_UNSPECIFIED = 0,
  STATE_INIT = 1,
  STATE_TRYOPEN = 2,
  STATE_OPEN = 3,
  STATE_CLOSED = 4,
}

export enum Order {
  ORDER_NONE_UNSPECIFIED = 0,
  ORDER_UNORDERED = 1,
  ORDER_ORDERED = 2,
}
