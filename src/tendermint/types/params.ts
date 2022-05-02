import { Writer, Reader, Protobuf } from "as-proto";
import { google } from "../../google";

export class ConsensusParams {
  static encode(message: ConsensusParams, writer: Writer): void {
    const block = message.block;
    if (block !== null) {
      writer.uint32(10);
      writer.fork();
      BlockParams.encode(block, writer);
      writer.ldelim();
    }

    const evidence = message.evidence;
    if (evidence !== null) {
      writer.uint32(18);
      writer.fork();
      EvidenceParams.encode(evidence, writer);
      writer.ldelim();
    }

    const validator = message.validator;
    if (validator !== null) {
      writer.uint32(26);
      writer.fork();
      ValidatorParams.encode(validator, writer);
      writer.ldelim();
    }

    const version = message.version;
    if (version !== null) {
      writer.uint32(34);
      writer.fork();
      VersionParams.encode(version, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ConsensusParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ConsensusParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  block: BlockParams | null;
  evidence: EvidenceParams | null;
  validator: ValidatorParams | null;
  version: VersionParams | null;

  constructor(
    block: BlockParams | null = null,
    evidence: EvidenceParams | null = null,
    validator: ValidatorParams | null = null,
    version: VersionParams | null = null
  ) {
    this.block = block;
    this.evidence = evidence;
    this.validator = validator;
    this.version = version;
  }
}

export function decodeConsensusParams(a: Uint8Array): ConsensusParams {
  return Protobuf.decode<ConsensusParams>(a, ConsensusParams.decode);
}

@unmanaged
export class BlockParams {
  static encode(message: BlockParams, writer: Writer): void {
    writer.uint32(8);
    writer.int64(message.max_bytes);

    writer.uint32(16);
    writer.int64(message.max_gas);

    writer.uint32(24);
    writer.int64(message.time_iota_ms);
  }

  static decode(reader: Reader, length: i32): BlockParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new BlockParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_bytes = reader.int64();
          break;

        case 2:
          message.max_gas = reader.int64();
          break;

        case 3:
          message.time_iota_ms = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  max_bytes: i64;
  max_gas: i64;
  time_iota_ms: i64;

  constructor(max_bytes: i64 = 0, max_gas: i64 = 0, time_iota_ms: i64 = 0) {
    this.max_bytes = max_bytes;
    this.max_gas = max_gas;
    this.time_iota_ms = time_iota_ms;
  }
}

export function decodeBlockParams(a: Uint8Array): BlockParams {
  return Protobuf.decode<BlockParams>(a, BlockParams.decode);
}

@unmanaged
export class EvidenceParams {
  static encode(message: EvidenceParams, writer: Writer): void {
    writer.uint32(8);
    writer.int64(message.max_age_num_blocks);

    const max_age_duration = message.max_age_duration;
    if (max_age_duration !== null) {
      writer.uint32(18);
      writer.fork();
      google.protobuf.Duration.encode(max_age_duration, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.int64(message.max_bytes);
  }

  static decode(reader: Reader, length: i32): EvidenceParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EvidenceParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max_age_num_blocks = reader.int64();
          break;

        case 2:
          message.max_age_duration = google.protobuf.Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.max_bytes = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  max_age_num_blocks: i64;
  max_age_duration: google.protobuf.Duration | null;
  max_bytes: i64;

  constructor(max_age_num_blocks: i64 = 0, max_age_duration: google.protobuf.Duration | null = null, max_bytes: i64 = 0) {
    this.max_age_num_blocks = max_age_num_blocks;
    this.max_age_duration = max_age_duration;
    this.max_bytes = max_bytes;
  }
}

export function decodeEvidenceParams(a: Uint8Array): EvidenceParams {
  return Protobuf.decode<EvidenceParams>(a, EvidenceParams.decode);
}

export class ValidatorParams {
  static encode(message: ValidatorParams, writer: Writer): void {
    const pub_key_types = message.pub_key_types;
    if (pub_key_types.length !== 0) {
      for (let i = 0; i < pub_key_types.length; ++i) {
        writer.uint32(10);
        writer.string(pub_key_types[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): ValidatorParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ValidatorParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pub_key_types.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  pub_key_types: Array<string>;

  constructor(pub_key_types: Array<string> = []) {
    this.pub_key_types = pub_key_types;
  }
}

export function decodeValidatorParams(a: Uint8Array): ValidatorParams {
  return Protobuf.decode<ValidatorParams>(a, ValidatorParams.decode);
}

@unmanaged
export class VersionParams {
  static encode(message: VersionParams, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.app_version);
  }

  static decode(reader: Reader, length: i32): VersionParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new VersionParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.app_version = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  app_version: u64;

  constructor(app_version: u64 = 0) {
    this.app_version = app_version;
  }
}

export function decodeVersionParams(a: Uint8Array): VersionParams {
  return Protobuf.decode<VersionParams>(a, VersionParams.decode);
}

@unmanaged
export class HashedParams {
  static encode(message: HashedParams, writer: Writer): void {
    writer.uint32(8);
    writer.int64(message.block_max_bytes);

    writer.uint32(16);
    writer.int64(message.block_max_gas);
  }

  static decode(reader: Reader, length: i32): HashedParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new HashedParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_max_bytes = reader.int64();
          break;

        case 2:
          message.block_max_gas = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  block_max_bytes: i64;
  block_max_gas: i64;

  constructor(block_max_bytes: i64 = 0, block_max_gas: i64 = 0) {
    this.block_max_bytes = block_max_bytes;
    this.block_max_gas = block_max_gas;
  }
}

export function decodeHashedParams(a: Uint8Array): HashedParams {
  return Protobuf.decode<HashedParams>(a, HashedParams.decode);
}