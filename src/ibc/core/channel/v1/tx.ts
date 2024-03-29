// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v0.4.0
//   protoc        v3.21.7

import { Writer, Reader, Protobuf } from "as-proto";
import { Channel, Packet } from "./channel";
import { client } from "../../client";

export class MsgChannelOpenInit {
  static encode(message: MsgChannelOpenInit, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.portId);

    const channel = message.channel;
    if (channel !== null) {
      writer.uint32(18);
      writer.fork();
      Channel.encode(channel, writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgChannelOpenInit {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenInit();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  portId: string;
  channel: Channel | null;
  signer: string;

  constructor(
    portId: string = "",
    channel: Channel | null = null,
    signer: string = ""
  ) {
    this.portId = portId;
    this.channel = channel;
    this.signer = signer;
  }
}

export function encodeMsgChannelOpenInit(
  message: MsgChannelOpenInit
): Uint8Array {
  return Protobuf.encode(message, MsgChannelOpenInit.encode);
}

export function decodeMsgChannelOpenInit(
  buffer: Uint8Array
): MsgChannelOpenInit {
  return Protobuf.decode<MsgChannelOpenInit>(buffer, MsgChannelOpenInit.decode);
}

export class MsgChannelOpenInitResponse {
  static encode(message: MsgChannelOpenInitResponse, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.channelId);
  }

  static decode(reader: Reader, length: i32): MsgChannelOpenInitResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenInitResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  channelId: string;

  constructor(channelId: string = "") {
    this.channelId = channelId;
  }
}

export function encodeMsgChannelOpenInitResponse(
  message: MsgChannelOpenInitResponse
): Uint8Array {
  return Protobuf.encode(message, MsgChannelOpenInitResponse.encode);
}

export function decodeMsgChannelOpenInitResponse(
  buffer: Uint8Array
): MsgChannelOpenInitResponse {
  return Protobuf.decode<MsgChannelOpenInitResponse>(
    buffer,
    MsgChannelOpenInitResponse.decode
  );
}

export class MsgChannelOpenTry {
  static encode(message: MsgChannelOpenTry, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.portId);

    writer.uint32(18);
    writer.string(message.previousChannelId);

    const channel = message.channel;
    if (channel !== null) {
      writer.uint32(26);
      writer.fork();
      Channel.encode(channel, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.counterpartyVersion);

    writer.uint32(42);
    writer.bytes(message.proofInit);

    const proofHeight = message.proofHeight;
    if (proofHeight !== null) {
      writer.uint32(50);
      writer.fork();
      client.v1.Height.encode(proofHeight, writer);
      writer.ldelim();
    }

    writer.uint32(58);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgChannelOpenTry {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenTry();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;

        case 2:
          message.previousChannelId = reader.string();
          break;

        case 3:
          message.channel = Channel.decode(reader, reader.uint32());
          break;

        case 4:
          message.counterpartyVersion = reader.string();
          break;

        case 5:
          message.proofInit = reader.bytes();
          break;

        case 6:
          message.proofHeight = client.v1.Height.decode(
            reader,
            reader.uint32()
          );
          break;

        case 7:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  portId: string;
  previousChannelId: string;
  channel: Channel | null;
  counterpartyVersion: string;
  proofInit: Uint8Array;
  proofHeight: client.v1.Height | null;
  signer: string;

  constructor(
    portId: string = "",
    previousChannelId: string = "",
    channel: Channel | null = null,
    counterpartyVersion: string = "",
    proofInit: Uint8Array = new Uint8Array(0),
    proofHeight: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.portId = portId;
    this.previousChannelId = previousChannelId;
    this.channel = channel;
    this.counterpartyVersion = counterpartyVersion;
    this.proofInit = proofInit;
    this.proofHeight = proofHeight;
    this.signer = signer;
  }
}

export function encodeMsgChannelOpenTry(
  message: MsgChannelOpenTry
): Uint8Array {
  return Protobuf.encode(message, MsgChannelOpenTry.encode);
}

export function decodeMsgChannelOpenTry(buffer: Uint8Array): MsgChannelOpenTry {
  return Protobuf.decode<MsgChannelOpenTry>(buffer, MsgChannelOpenTry.decode);
}

@unmanaged
export class MsgChannelOpenTryResponse {
  static encode(message: MsgChannelOpenTryResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgChannelOpenTryResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenTryResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeMsgChannelOpenTryResponse(
  message: MsgChannelOpenTryResponse
): Uint8Array {
  return Protobuf.encode(message, MsgChannelOpenTryResponse.encode);
}

export function decodeMsgChannelOpenTryResponse(
  buffer: Uint8Array
): MsgChannelOpenTryResponse {
  return Protobuf.decode<MsgChannelOpenTryResponse>(
    buffer,
    MsgChannelOpenTryResponse.decode
  );
}

export class MsgChannelOpenAck {
  static encode(message: MsgChannelOpenAck, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.portId);

    writer.uint32(18);
    writer.string(message.channelId);

    writer.uint32(26);
    writer.string(message.counterpartyChannelId);

    writer.uint32(34);
    writer.string(message.counterpartyVersion);

    writer.uint32(42);
    writer.bytes(message.proofTry);

    const proofHeight = message.proofHeight;
    if (proofHeight !== null) {
      writer.uint32(50);
      writer.fork();
      client.v1.Height.encode(proofHeight, writer);
      writer.ldelim();
    }

    writer.uint32(58);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgChannelOpenAck {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenAck();

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
          message.counterpartyChannelId = reader.string();
          break;

        case 4:
          message.counterpartyVersion = reader.string();
          break;

        case 5:
          message.proofTry = reader.bytes();
          break;

        case 6:
          message.proofHeight = client.v1.Height.decode(
            reader,
            reader.uint32()
          );
          break;

        case 7:
          message.signer = reader.string();
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
  counterpartyChannelId: string;
  counterpartyVersion: string;
  proofTry: Uint8Array;
  proofHeight: client.v1.Height | null;
  signer: string;

  constructor(
    portId: string = "",
    channelId: string = "",
    counterpartyChannelId: string = "",
    counterpartyVersion: string = "",
    proofTry: Uint8Array = new Uint8Array(0),
    proofHeight: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.portId = portId;
    this.channelId = channelId;
    this.counterpartyChannelId = counterpartyChannelId;
    this.counterpartyVersion = counterpartyVersion;
    this.proofTry = proofTry;
    this.proofHeight = proofHeight;
    this.signer = signer;
  }
}

export function encodeMsgChannelOpenAck(
  message: MsgChannelOpenAck
): Uint8Array {
  return Protobuf.encode(message, MsgChannelOpenAck.encode);
}

export function decodeMsgChannelOpenAck(buffer: Uint8Array): MsgChannelOpenAck {
  return Protobuf.decode<MsgChannelOpenAck>(buffer, MsgChannelOpenAck.decode);
}

@unmanaged
export class MsgChannelOpenAckResponse {
  static encode(message: MsgChannelOpenAckResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgChannelOpenAckResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenAckResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeMsgChannelOpenAckResponse(
  message: MsgChannelOpenAckResponse
): Uint8Array {
  return Protobuf.encode(message, MsgChannelOpenAckResponse.encode);
}

export function decodeMsgChannelOpenAckResponse(
  buffer: Uint8Array
): MsgChannelOpenAckResponse {
  return Protobuf.decode<MsgChannelOpenAckResponse>(
    buffer,
    MsgChannelOpenAckResponse.decode
  );
}

export class MsgChannelOpenConfirm {
  static encode(message: MsgChannelOpenConfirm, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.portId);

    writer.uint32(18);
    writer.string(message.channelId);

    writer.uint32(26);
    writer.bytes(message.proofAck);

    const proofHeight = message.proofHeight;
    if (proofHeight !== null) {
      writer.uint32(34);
      writer.fork();
      client.v1.Height.encode(proofHeight, writer);
      writer.ldelim();
    }

    writer.uint32(42);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgChannelOpenConfirm {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenConfirm();

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
          message.proofAck = reader.bytes();
          break;

        case 4:
          message.proofHeight = client.v1.Height.decode(
            reader,
            reader.uint32()
          );
          break;

        case 5:
          message.signer = reader.string();
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
  proofAck: Uint8Array;
  proofHeight: client.v1.Height | null;
  signer: string;

  constructor(
    portId: string = "",
    channelId: string = "",
    proofAck: Uint8Array = new Uint8Array(0),
    proofHeight: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.portId = portId;
    this.channelId = channelId;
    this.proofAck = proofAck;
    this.proofHeight = proofHeight;
    this.signer = signer;
  }
}

export function encodeMsgChannelOpenConfirm(
  message: MsgChannelOpenConfirm
): Uint8Array {
  return Protobuf.encode(message, MsgChannelOpenConfirm.encode);
}

export function decodeMsgChannelOpenConfirm(
  buffer: Uint8Array
): MsgChannelOpenConfirm {
  return Protobuf.decode<MsgChannelOpenConfirm>(
    buffer,
    MsgChannelOpenConfirm.decode
  );
}

@unmanaged
export class MsgChannelOpenConfirmResponse {
  static encode(message: MsgChannelOpenConfirmResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgChannelOpenConfirmResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelOpenConfirmResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeMsgChannelOpenConfirmResponse(
  message: MsgChannelOpenConfirmResponse
): Uint8Array {
  return Protobuf.encode(message, MsgChannelOpenConfirmResponse.encode);
}

export function decodeMsgChannelOpenConfirmResponse(
  buffer: Uint8Array
): MsgChannelOpenConfirmResponse {
  return Protobuf.decode<MsgChannelOpenConfirmResponse>(
    buffer,
    MsgChannelOpenConfirmResponse.decode
  );
}

export class MsgChannelCloseInit {
  static encode(message: MsgChannelCloseInit, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.portId);

    writer.uint32(18);
    writer.string(message.channelId);

    writer.uint32(26);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgChannelCloseInit {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelCloseInit();

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
          message.signer = reader.string();
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
  signer: string;

  constructor(
    portId: string = "",
    channelId: string = "",
    signer: string = ""
  ) {
    this.portId = portId;
    this.channelId = channelId;
    this.signer = signer;
  }
}

export function encodeMsgChannelCloseInit(
  message: MsgChannelCloseInit
): Uint8Array {
  return Protobuf.encode(message, MsgChannelCloseInit.encode);
}

export function decodeMsgChannelCloseInit(
  buffer: Uint8Array
): MsgChannelCloseInit {
  return Protobuf.decode<MsgChannelCloseInit>(
    buffer,
    MsgChannelCloseInit.decode
  );
}

@unmanaged
export class MsgChannelCloseInitResponse {
  static encode(message: MsgChannelCloseInitResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgChannelCloseInitResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelCloseInitResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeMsgChannelCloseInitResponse(
  message: MsgChannelCloseInitResponse
): Uint8Array {
  return Protobuf.encode(message, MsgChannelCloseInitResponse.encode);
}

export function decodeMsgChannelCloseInitResponse(
  buffer: Uint8Array
): MsgChannelCloseInitResponse {
  return Protobuf.decode<MsgChannelCloseInitResponse>(
    buffer,
    MsgChannelCloseInitResponse.decode
  );
}

export class MsgChannelCloseConfirm {
  static encode(message: MsgChannelCloseConfirm, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.portId);

    writer.uint32(18);
    writer.string(message.channelId);

    writer.uint32(26);
    writer.bytes(message.proofInit);

    const proofHeight = message.proofHeight;
    if (proofHeight !== null) {
      writer.uint32(34);
      writer.fork();
      client.v1.Height.encode(proofHeight, writer);
      writer.ldelim();
    }

    writer.uint32(42);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgChannelCloseConfirm {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelCloseConfirm();

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
          message.proofInit = reader.bytes();
          break;

        case 4:
          message.proofHeight = client.v1.Height.decode(
            reader,
            reader.uint32()
          );
          break;

        case 5:
          message.signer = reader.string();
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
  proofInit: Uint8Array;
  proofHeight: client.v1.Height | null;
  signer: string;

  constructor(
    portId: string = "",
    channelId: string = "",
    proofInit: Uint8Array = new Uint8Array(0),
    proofHeight: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.portId = portId;
    this.channelId = channelId;
    this.proofInit = proofInit;
    this.proofHeight = proofHeight;
    this.signer = signer;
  }
}

export function encodeMsgChannelCloseConfirm(
  message: MsgChannelCloseConfirm
): Uint8Array {
  return Protobuf.encode(message, MsgChannelCloseConfirm.encode);
}

export function decodeMsgChannelCloseConfirm(
  buffer: Uint8Array
): MsgChannelCloseConfirm {
  return Protobuf.decode<MsgChannelCloseConfirm>(
    buffer,
    MsgChannelCloseConfirm.decode
  );
}

@unmanaged
export class MsgChannelCloseConfirmResponse {
  static encode(
    message: MsgChannelCloseConfirmResponse,
    writer: Writer
  ): void {}

  static decode(reader: Reader, length: i32): MsgChannelCloseConfirmResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgChannelCloseConfirmResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeMsgChannelCloseConfirmResponse(
  message: MsgChannelCloseConfirmResponse
): Uint8Array {
  return Protobuf.encode(message, MsgChannelCloseConfirmResponse.encode);
}

export function decodeMsgChannelCloseConfirmResponse(
  buffer: Uint8Array
): MsgChannelCloseConfirmResponse {
  return Protobuf.decode<MsgChannelCloseConfirmResponse>(
    buffer,
    MsgChannelCloseConfirmResponse.decode
  );
}

export class MsgRecvPacket {
  static encode(message: MsgRecvPacket, writer: Writer): void {
    const packet = message.packet;
    if (packet !== null) {
      writer.uint32(10);
      writer.fork();
      Packet.encode(packet, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.bytes(message.proofCommitment);

    const proofHeight = message.proofHeight;
    if (proofHeight !== null) {
      writer.uint32(26);
      writer.fork();
      client.v1.Height.encode(proofHeight, writer);
      writer.ldelim();
    }

    writer.uint32(34);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgRecvPacket {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgRecvPacket();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.proofCommitment = reader.bytes();
          break;

        case 3:
          message.proofHeight = client.v1.Height.decode(
            reader,
            reader.uint32()
          );
          break;

        case 4:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  packet: Packet | null;
  proofCommitment: Uint8Array;
  proofHeight: client.v1.Height | null;
  signer: string;

  constructor(
    packet: Packet | null = null,
    proofCommitment: Uint8Array = new Uint8Array(0),
    proofHeight: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.packet = packet;
    this.proofCommitment = proofCommitment;
    this.proofHeight = proofHeight;
    this.signer = signer;
  }
}

export function encodeMsgRecvPacket(message: MsgRecvPacket): Uint8Array {
  return Protobuf.encode(message, MsgRecvPacket.encode);
}

export function decodeMsgRecvPacket(buffer: Uint8Array): MsgRecvPacket {
  return Protobuf.decode<MsgRecvPacket>(buffer, MsgRecvPacket.decode);
}

@unmanaged
export class MsgRecvPacketResponse {
  static encode(message: MsgRecvPacketResponse, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.result);
  }

  static decode(reader: Reader, length: i32): MsgRecvPacketResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgRecvPacketResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: ResponseResultType;

  constructor(result: ResponseResultType = 0) {
    this.result = result;
  }
}

export function encodeMsgRecvPacketResponse(
  message: MsgRecvPacketResponse
): Uint8Array {
  return Protobuf.encode(message, MsgRecvPacketResponse.encode);
}

export function decodeMsgRecvPacketResponse(
  buffer: Uint8Array
): MsgRecvPacketResponse {
  return Protobuf.decode<MsgRecvPacketResponse>(
    buffer,
    MsgRecvPacketResponse.decode
  );
}

export class MsgTimeout {
  static encode(message: MsgTimeout, writer: Writer): void {
    const packet = message.packet;
    if (packet !== null) {
      writer.uint32(10);
      writer.fork();
      Packet.encode(packet, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.bytes(message.proofUnreceived);

    const proofHeight = message.proofHeight;
    if (proofHeight !== null) {
      writer.uint32(26);
      writer.fork();
      client.v1.Height.encode(proofHeight, writer);
      writer.ldelim();
    }

    writer.uint32(32);
    writer.uint64(message.nextSequenceRecv);

    writer.uint32(42);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgTimeout {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgTimeout();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.proofUnreceived = reader.bytes();
          break;

        case 3:
          message.proofHeight = client.v1.Height.decode(
            reader,
            reader.uint32()
          );
          break;

        case 4:
          message.nextSequenceRecv = reader.uint64();
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  packet: Packet | null;
  proofUnreceived: Uint8Array;
  proofHeight: client.v1.Height | null;
  nextSequenceRecv: u64;
  signer: string;

  constructor(
    packet: Packet | null = null,
    proofUnreceived: Uint8Array = new Uint8Array(0),
    proofHeight: client.v1.Height | null = null,
    nextSequenceRecv: u64 = 0,
    signer: string = ""
  ) {
    this.packet = packet;
    this.proofUnreceived = proofUnreceived;
    this.proofHeight = proofHeight;
    this.nextSequenceRecv = nextSequenceRecv;
    this.signer = signer;
  }
}

export function encodeMsgTimeout(message: MsgTimeout): Uint8Array {
  return Protobuf.encode(message, MsgTimeout.encode);
}

export function decodeMsgTimeout(buffer: Uint8Array): MsgTimeout {
  return Protobuf.decode<MsgTimeout>(buffer, MsgTimeout.decode);
}

@unmanaged
export class MsgTimeoutResponse {
  static encode(message: MsgTimeoutResponse, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.result);
  }

  static decode(reader: Reader, length: i32): MsgTimeoutResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgTimeoutResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: ResponseResultType;

  constructor(result: ResponseResultType = 0) {
    this.result = result;
  }
}

export function encodeMsgTimeoutResponse(
  message: MsgTimeoutResponse
): Uint8Array {
  return Protobuf.encode(message, MsgTimeoutResponse.encode);
}

export function decodeMsgTimeoutResponse(
  buffer: Uint8Array
): MsgTimeoutResponse {
  return Protobuf.decode<MsgTimeoutResponse>(buffer, MsgTimeoutResponse.decode);
}

export class MsgTimeoutOnClose {
  static encode(message: MsgTimeoutOnClose, writer: Writer): void {
    const packet = message.packet;
    if (packet !== null) {
      writer.uint32(10);
      writer.fork();
      Packet.encode(packet, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.bytes(message.proofUnreceived);

    writer.uint32(26);
    writer.bytes(message.proofClose);

    const proofHeight = message.proofHeight;
    if (proofHeight !== null) {
      writer.uint32(34);
      writer.fork();
      client.v1.Height.encode(proofHeight, writer);
      writer.ldelim();
    }

    writer.uint32(40);
    writer.uint64(message.nextSequenceRecv);

    writer.uint32(50);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgTimeoutOnClose {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgTimeoutOnClose();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.proofUnreceived = reader.bytes();
          break;

        case 3:
          message.proofClose = reader.bytes();
          break;

        case 4:
          message.proofHeight = client.v1.Height.decode(
            reader,
            reader.uint32()
          );
          break;

        case 5:
          message.nextSequenceRecv = reader.uint64();
          break;

        case 6:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  packet: Packet | null;
  proofUnreceived: Uint8Array;
  proofClose: Uint8Array;
  proofHeight: client.v1.Height | null;
  nextSequenceRecv: u64;
  signer: string;

  constructor(
    packet: Packet | null = null,
    proofUnreceived: Uint8Array = new Uint8Array(0),
    proofClose: Uint8Array = new Uint8Array(0),
    proofHeight: client.v1.Height | null = null,
    nextSequenceRecv: u64 = 0,
    signer: string = ""
  ) {
    this.packet = packet;
    this.proofUnreceived = proofUnreceived;
    this.proofClose = proofClose;
    this.proofHeight = proofHeight;
    this.nextSequenceRecv = nextSequenceRecv;
    this.signer = signer;
  }
}

export function encodeMsgTimeoutOnClose(
  message: MsgTimeoutOnClose
): Uint8Array {
  return Protobuf.encode(message, MsgTimeoutOnClose.encode);
}

export function decodeMsgTimeoutOnClose(buffer: Uint8Array): MsgTimeoutOnClose {
  return Protobuf.decode<MsgTimeoutOnClose>(buffer, MsgTimeoutOnClose.decode);
}

@unmanaged
export class MsgTimeoutOnCloseResponse {
  static encode(message: MsgTimeoutOnCloseResponse, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.result);
  }

  static decode(reader: Reader, length: i32): MsgTimeoutOnCloseResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgTimeoutOnCloseResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: ResponseResultType;

  constructor(result: ResponseResultType = 0) {
    this.result = result;
  }
}

export function encodeMsgTimeoutOnCloseResponse(
  message: MsgTimeoutOnCloseResponse
): Uint8Array {
  return Protobuf.encode(message, MsgTimeoutOnCloseResponse.encode);
}

export function decodeMsgTimeoutOnCloseResponse(
  buffer: Uint8Array
): MsgTimeoutOnCloseResponse {
  return Protobuf.decode<MsgTimeoutOnCloseResponse>(
    buffer,
    MsgTimeoutOnCloseResponse.decode
  );
}

export class MsgAcknowledgement {
  static encode(message: MsgAcknowledgement, writer: Writer): void {
    const packet = message.packet;
    if (packet !== null) {
      writer.uint32(10);
      writer.fork();
      Packet.encode(packet, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.bytes(message.acknowledgement);

    writer.uint32(26);
    writer.bytes(message.proofAcked);

    const proofHeight = message.proofHeight;
    if (proofHeight !== null) {
      writer.uint32(34);
      writer.fork();
      client.v1.Height.encode(proofHeight, writer);
      writer.ldelim();
    }

    writer.uint32(42);
    writer.string(message.signer);
  }

  static decode(reader: Reader, length: i32): MsgAcknowledgement {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgAcknowledgement();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.acknowledgement = reader.bytes();
          break;

        case 3:
          message.proofAcked = reader.bytes();
          break;

        case 4:
          message.proofHeight = client.v1.Height.decode(
            reader,
            reader.uint32()
          );
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  packet: Packet | null;
  acknowledgement: Uint8Array;
  proofAcked: Uint8Array;
  proofHeight: client.v1.Height | null;
  signer: string;

  constructor(
    packet: Packet | null = null,
    acknowledgement: Uint8Array = new Uint8Array(0),
    proofAcked: Uint8Array = new Uint8Array(0),
    proofHeight: client.v1.Height | null = null,
    signer: string = ""
  ) {
    this.packet = packet;
    this.acknowledgement = acknowledgement;
    this.proofAcked = proofAcked;
    this.proofHeight = proofHeight;
    this.signer = signer;
  }
}

export function encodeMsgAcknowledgement(
  message: MsgAcknowledgement
): Uint8Array {
  return Protobuf.encode(message, MsgAcknowledgement.encode);
}

export function decodeMsgAcknowledgement(
  buffer: Uint8Array
): MsgAcknowledgement {
  return Protobuf.decode<MsgAcknowledgement>(buffer, MsgAcknowledgement.decode);
}

@unmanaged
export class MsgAcknowledgementResponse {
  static encode(message: MsgAcknowledgementResponse, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.result);
  }

  static decode(reader: Reader, length: i32): MsgAcknowledgementResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgAcknowledgementResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  result: ResponseResultType;

  constructor(result: ResponseResultType = 0) {
    this.result = result;
  }
}

export function encodeMsgAcknowledgementResponse(
  message: MsgAcknowledgementResponse
): Uint8Array {
  return Protobuf.encode(message, MsgAcknowledgementResponse.encode);
}

export function decodeMsgAcknowledgementResponse(
  buffer: Uint8Array
): MsgAcknowledgementResponse {
  return Protobuf.decode<MsgAcknowledgementResponse>(
    buffer,
    MsgAcknowledgementResponse.decode
  );
}

export enum ResponseResultType {
  RESPONSE_RESULT_UNSPECIFIED = 0,
  RESPONSE_RESULT_NOOP = 1,
  RESPONSE_RESULT_SUCCESS = 2,
}
