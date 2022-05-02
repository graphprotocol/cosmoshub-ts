import { Writer, Reader, Protobuf } from "as-proto";

export class Http {
  static encode(message: Http, writer: Writer): void {
    const rules = message.rules;
    for (let i = 0; i < rules.length; ++i) {
      writer.uint32(10);
      writer.fork();
      HttpRule.encode(rules[i], writer);
      writer.ldelim();
    }

    writer.uint32(16);
    writer.bool(message.fully_decode_reserved_expansion);
  }

  static decode(reader: Reader, length: i32): Http {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Http();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(HttpRule.decode(reader, reader.uint32()));
          break;

        case 2:
          message.fully_decode_reserved_expansion = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  rules: Array<HttpRule>;
  fully_decode_reserved_expansion: bool;

  constructor(rules: Array<HttpRule> = [], fully_decode_reserved_expansion: bool = false) {
    this.rules = rules;
    this.fully_decode_reserved_expansion = fully_decode_reserved_expansion;
  }
}

export function decodeHttp(a: Uint8Array): Http {
  return Protobuf.decode<Http>(a, Http.decode);
}

export class HttpRule {
  static encode(message: HttpRule, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.selector);

    writer.uint32(18);
    writer.string(message.get);

    writer.uint32(26);
    writer.string(message.put);

    writer.uint32(34);
    writer.string(message.post);

    writer.uint32(42);
    writer.string(message.delete);

    writer.uint32(50);
    writer.string(message.patch);

    const custom = message.custom;
    if (custom !== null) {
      writer.uint32(66);
      writer.fork();
      CustomHttpPattern.encode(custom, writer);
      writer.ldelim();
    }

    writer.uint32(58);
    writer.string(message.body);

    writer.uint32(98);
    writer.string(message.response_body);

    const additional_bindings = message.additional_bindings;
    for (let i = 0; i < additional_bindings.length; ++i) {
      writer.uint32(90);
      writer.fork();
      HttpRule.encode(additional_bindings[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): HttpRule {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new HttpRule();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;

        case 2:
          message.get = reader.string();
          break;

        case 3:
          message.put = reader.string();
          break;

        case 4:
          message.post = reader.string();
          break;

        case 5:
          message.delete = reader.string();
          break;

        case 6:
          message.patch = reader.string();
          break;

        case 8:
          message.custom = CustomHttpPattern.decode(reader, reader.uint32());
          break;

        case 7:
          message.body = reader.string();
          break;

        case 12:
          message.response_body = reader.string();
          break;

        case 11:
          message.additional_bindings.push(HttpRule.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  selector: string;
  get: string;
  put: string;
  post: string;
  delete: string;
  patch: string;
  custom: CustomHttpPattern | null;
  body: string;
  response_body: string;
  additional_bindings: Array<HttpRule>;

  constructor(
    selector: string = "",
    get: string = "",
    put: string = "",
    post: string = "",
    delete_: string = "",
    patch: string = "",
    custom: CustomHttpPattern | null = null,
    body: string = "",
    response_body: string = "",
    additional_bindings: Array<HttpRule> = []
  ) {
    this.selector = selector;
    this.get = get;
    this.put = put;
    this.post = post;
    this.delete = delete_;
    this.patch = patch;
    this.custom = custom;
    this.body = body;
    this.response_body = response_body;
    this.additional_bindings = additional_bindings;
  }
}

export function decodeHttpRule(a: Uint8Array): HttpRule {
  return Protobuf.decode<HttpRule>(a, HttpRule.decode);
}

export class CustomHttpPattern {
  static encode(message: CustomHttpPattern, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.kind);

    writer.uint32(18);
    writer.string(message.path);
  }

  static decode(reader: Reader, length: i32): CustomHttpPattern {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CustomHttpPattern();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.string();
          break;

        case 2:
          message.path = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  kind: string;
  path: string;

  constructor(kind: string = "", path: string = "") {
    this.kind = kind;
    this.path = path;
  }
}

export function decodeCustomHttpPattern(a: Uint8Array): CustomHttpPattern {
  return Protobuf.decode<CustomHttpPattern>(a, CustomHttpPattern.decode);
}
