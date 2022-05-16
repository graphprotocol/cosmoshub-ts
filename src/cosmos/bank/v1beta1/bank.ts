import { Writer, Reader, Protobuf } from "as-proto";
import { base } from "../../base";

export class Params {
  static encode(message: Params, writer: Writer): void {
    const send_enabled = message.send_enabled;
    for (let i = 0; i < send_enabled.length; ++i) {
      writer.uint32(10);
      writer.fork();
      SendEnabled.encode(send_enabled[i], writer);
      writer.ldelim();
    }

    writer.uint32(16);
    writer.bool(message.default_send_enabled);
  }

  static decode(reader: Reader, length: i32): Params {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Params();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.send_enabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;

        case 2:
          message.default_send_enabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  send_enabled: Array<SendEnabled>;
  default_send_enabled: bool;

  constructor(send_enabled: Array<SendEnabled> = [], default_send_enabled: bool = false) {
    this.send_enabled = send_enabled;
    this.default_send_enabled = default_send_enabled;
  }
}

export function decodeParams(a: Uint8Array): Params {
  return Protobuf.decode<Params>(a, Params.decode);
}

export class SendEnabled {
  static encode(message: SendEnabled, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.denom);

    writer.uint32(16);
    writer.bool(message.enabled);
  }

  static decode(reader: Reader, length: i32): SendEnabled {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SendEnabled();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.enabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  denom: string;
  enabled: bool;

  constructor(denom: string = "", enabled: bool = false) {
    this.denom = denom;
    this.enabled = enabled;
  }
}

export function decodeSendEnabled(a: Uint8Array): SendEnabled {
  return Protobuf.decode<SendEnabled>(a, SendEnabled.decode);
}

export class Input {
  static encode(message: Input, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.address);

    const coins = message.coins;
    for (let i = 0; i < coins.length; ++i) {
      writer.uint32(18);
      writer.fork();
      base.v1beta1.Coin.encode(coins[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Input {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Input();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.coins.push(base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: string;
  coins: Array<base.v1beta1.Coin>;

  constructor(address: string = "", coins: Array<base.v1beta1.Coin> = []) {
    this.address = address;
    this.coins = coins;
  }
}

export function decodeInput(a: Uint8Array): Input {
  return Protobuf.decode<Input>(a, Input.decode);
}

export class Output {
  static encode(message: Output, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.address);

    const coins = message.coins;
    for (let i = 0; i < coins.length; ++i) {
      writer.uint32(18);
      writer.fork();
      base.v1beta1.Coin.encode(coins[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Output {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Output();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.coins.push(base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: string;
  coins: Array<base.v1beta1.Coin>;

  constructor(address: string = "", coins: Array<base.v1beta1.Coin> = []) {
    this.address = address;
    this.coins = coins;
  }
}

export function decodeOutput(a: Uint8Array): Output {
  return Protobuf.decode<Output>(a, Output.decode);
}

export class Supply {
  static encode(message: Supply, writer: Writer): void {
    const total = message.total;
    for (let i = 0; i < total.length; ++i) {
      writer.uint32(10);
      writer.fork();
      base.v1beta1.Coin.encode(total[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Supply {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Supply();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total.push(base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  total: Array<base.v1beta1.Coin>;

  constructor(total: Array<base.v1beta1.Coin> = []) {
    this.total = total;
  }
}

export function decodeSupply(a: Uint8Array): Supply {
  return Protobuf.decode<Supply>(a, Supply.decode);
}

export class DenomUnit {
  static encode(message: DenomUnit, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.denom);

    writer.uint32(16);
    writer.uint32(message.exponent);

    const aliases = message.aliases;
    if (aliases.length !== 0) {
      for (let i = 0; i < aliases.length; ++i) {
        writer.uint32(26);
        writer.string(aliases[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): DenomUnit {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DenomUnit();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        case 2:
          message.exponent = reader.uint32();
          break;

        case 3:
          message.aliases.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  denom: string;
  exponent: u32;
  aliases: Array<string>;

  constructor(denom: string = "", exponent: u32 = 0, aliases: Array<string> = []) {
    this.denom = denom;
    this.exponent = exponent;
    this.aliases = aliases;
  }
}

export function decodeDenomUnit(a: Uint8Array): DenomUnit {
  return Protobuf.decode<DenomUnit>(a, DenomUnit.decode);
}

export class Metadata {
  static encode(message: Metadata, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.description);

    const denom_units = message.denom_units;
    for (let i = 0; i < denom_units.length; ++i) {
      writer.uint32(18);
      writer.fork();
      DenomUnit.encode(denom_units[i], writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.string(message.base);

    writer.uint32(34);
    writer.string(message.display);

    writer.uint32(42);
    writer.string(message.name);

    writer.uint32(50);
    writer.string(message.symbol);
  }

  static decode(reader: Reader, length: i32): Metadata {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Metadata();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;

        case 2:
          message.denom_units.push(DenomUnit.decode(reader, reader.uint32()));
          break;

        case 3:
          message.base = reader.string();
          break;

        case 4:
          message.display = reader.string();
          break;

        case 5:
          message.name = reader.string();
          break;

        case 6:
          message.symbol = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  description: string;
  denom_units: Array<DenomUnit>;
  base: string;
  display: string;
  name: string;
  symbol: string;

  constructor(
    description: string = "",
    denom_units: Array<DenomUnit> = [],
    base: string = "",
    display: string = "",
    name: string = "",
    symbol: string = ""
  ) {
    this.description = description;
    this.denom_units = denom_units;
    this.base = base;
    this.display = display;
    this.name = name;
    this.symbol = symbol;
  }
}

export function decodeMetadata(a: Uint8Array): Metadata {
  return Protobuf.decode<Metadata>(a, Metadata.decode);
}
