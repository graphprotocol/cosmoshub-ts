// Code generated by protoc-gen-as. DO NOT EDIT.
// versions:
// 	 protoc-gen-as v0.3.0-alpha.3
// 	 protoc        v3.20.1
// source: cosmos/bank/v1beta1/tx.ts

import { Writer, Reader, Protobuf } from "as-proto";
import { base } from "../../base";
import { Input, Output } from "./bank";

export class MsgSend {
  static encode(message: MsgSend, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.from_address);

    writer.uint32(18);
    writer.string(message.to_address);

    const amount_ = message.amount;
    for (let i = 0; i < amount_.length; ++i) {
      writer.uint32(26);
      writer.fork();
      base.v1beta1.Coin.encode(amount_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgSend {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSend();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;

        case 2:
          message.to_address = reader.string();
          break;

        case 3:
          message.amount.push(base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  from_address: string;
  to_address: string;
  amount: Array<base.v1beta1.Coin>;

  constructor(from_address: string = "", to_address: string = "", amount: Array<base.v1beta1.Coin> = []) {
    this.from_address = from_address;
    this.to_address = to_address;
    this.amount = amount;
  }
}

export function decodeMsgSend(a: Uint8Array): MsgSend {
  return Protobuf.decode<MsgSend>(a, MsgSend.decode);
}

@unmanaged
export class MsgSendResponse {
  static encode(message: MsgSendResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgSendResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSendResponse();

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

export function decodeMsgSendResponse(a: Uint8Array): MsgSendResponse {
  return Protobuf.decode<MsgSendResponse>(a, MsgSendResponse.decode);
}

export class MsgMultiSend {
  static encode(message: MsgMultiSend, writer: Writer): void {
    const inputs_ = message.inputs;
    for (let i = 0; i < inputs_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      Input.encode(inputs_[i], writer);
      writer.ldelim();
    }

    const outputs_ = message.outputs;
    for (let i = 0; i < outputs_.length; ++i) {
      writer.uint32(18);
      writer.fork();
      Output.encode(outputs_[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgMultiSend {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgMultiSend();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;

        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  inputs: Array<Input>;
  outputs: Array<Output>;

  constructor(inputs: Array<Input> = [], outputs: Array<Output> = []) {
    this.inputs = inputs;
    this.outputs = outputs;
  }
}

export function decodeMsgMultiSend(a: Uint8Array): MsgMultiSend {
  return Protobuf.decode<MsgMultiSend>(a, MsgMultiSend.decode);
}

@unmanaged
export class MsgMultiSendResponse {
  static encode(message: MsgMultiSendResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgMultiSendResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgMultiSendResponse();

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

export function decodeMsgMultiSendResponse(a: Uint8Array): MsgMultiSendResponse {
  return Protobuf.decode<MsgMultiSendResponse>(a, MsgMultiSendResponse.decode);
}
