import { Writer, Reader, Protobuf } from "as-proto";
import { Vote, LightBlock } from "./types";
import { google } from "../../google";
import { Validator } from "./validator";

export class Evidence {
  static encode(message: Evidence, writer: Writer): void {
    const duplicate_vote_evidence = message.duplicate_vote_evidence;
    if (duplicate_vote_evidence !== null) {
      writer.uint32(10);
      writer.fork();
      DuplicateVoteEvidence.encode(duplicate_vote_evidence, writer);
      writer.ldelim();
    }

    const light_client_attack_evidence = message.light_client_attack_evidence;
    if (light_client_attack_evidence !== null) {
      writer.uint32(18);
      writer.fork();
      LightClientAttackEvidence.encode(light_client_attack_evidence, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): Evidence {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Evidence();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duplicate_vote_evidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          break;

        case 2:
          message.light_client_attack_evidence = LightClientAttackEvidence.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  duplicate_vote_evidence: DuplicateVoteEvidence | null;
  light_client_attack_evidence: LightClientAttackEvidence | null;

  constructor(
    duplicate_vote_evidence: DuplicateVoteEvidence | null = null,
    light_client_attack_evidence: LightClientAttackEvidence | null = null
  ) {
    this.duplicate_vote_evidence = duplicate_vote_evidence;
    this.light_client_attack_evidence = light_client_attack_evidence;
  }
}

export function decodeEvidence(a: Uint8Array): Evidence {
  return Protobuf.decode<Evidence>(a, Evidence.decode);
}

export class DuplicateVoteEvidence {
  static encode(message: DuplicateVoteEvidence, writer: Writer): void {
    const vote_a = message.vote_a;
    if (vote_a !== null) {
      writer.uint32(10);
      writer.fork();
      Vote.encode(vote_a, writer);
      writer.ldelim();
    }

    const vote_b = message.vote_b;
    if (vote_b !== null) {
      writer.uint32(18);
      writer.fork();
      Vote.encode(vote_b, writer);
      writer.ldelim();
    }

    writer.uint32(24);
    writer.int64(message.total_voting_power);

    writer.uint32(32);
    writer.int64(message.validator_power);

    const timestamp = message.timestamp;
    if (timestamp !== null) {
      writer.uint32(42);
      writer.fork();
      google.protobuf.Timestamp.encode(timestamp, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): DuplicateVoteEvidence {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DuplicateVoteEvidence();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote_a = Vote.decode(reader, reader.uint32());
          break;

        case 2:
          message.vote_b = Vote.decode(reader, reader.uint32());
          break;

        case 3:
          message.total_voting_power = reader.int64();
          break;

        case 4:
          message.validator_power = reader.int64();
          break;

        case 5:
          message.timestamp = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  vote_a: Vote | null;
  vote_b: Vote | null;
  total_voting_power: i64;
  validator_power: i64;
  timestamp: google.protobuf.Timestamp | null;

  constructor(
    vote_a: Vote | null = null,
    vote_b: Vote | null = null,
    total_voting_power: i64 = 0,
    validator_power: i64 = 0,
    timestamp: google.protobuf.Timestamp | null = null
  ) {
    this.vote_a = vote_a;
    this.vote_b = vote_b;
    this.total_voting_power = total_voting_power;
    this.validator_power = validator_power;
    this.timestamp = timestamp;
  }
}

export function decodeDuplicateVoteEvidence(a: Uint8Array): DuplicateVoteEvidence {
  return Protobuf.decode<DuplicateVoteEvidence>(a, DuplicateVoteEvidence.decode);
}

export class LightClientAttackEvidence {
  static encode(message: LightClientAttackEvidence, writer: Writer): void {
    const conflicting_block = message.conflicting_block;
    if (conflicting_block !== null) {
      writer.uint32(10);
      writer.fork();
      LightBlock.encode(conflicting_block, writer);
      writer.ldelim();
    }

    writer.uint32(16);
    writer.int64(message.common_height);

    const byzantine_validators = message.byzantine_validators;
    for (let i = 0; i < byzantine_validators.length; ++i) {
      writer.uint32(26);
      writer.fork();
      Validator.encode(byzantine_validators[i], writer);
      writer.ldelim();
    }

    writer.uint32(32);
    writer.int64(message.total_voting_power);

    const timestamp = message.timestamp;
    if (timestamp !== null) {
      writer.uint32(42);
      writer.fork();
      google.protobuf.Timestamp.encode(timestamp, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): LightClientAttackEvidence {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new LightClientAttackEvidence();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflicting_block = LightBlock.decode(reader, reader.uint32());
          break;

        case 2:
          message.common_height = reader.int64();
          break;

        case 3:
          message.byzantine_validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 4:
          message.total_voting_power = reader.int64();
          break;

        case 5:
          message.timestamp = google.protobuf.Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  conflicting_block: LightBlock | null;
  common_height: i64;
  byzantine_validators: Array<Validator>;
  total_voting_power: i64;
  timestamp: google.protobuf.Timestamp | null;

  constructor(
    conflicting_block: LightBlock | null = null,
    common_height: i64 = 0,
    byzantine_validators: Array<Validator> = [],
    total_voting_power: i64 = 0,
    timestamp: google.protobuf.Timestamp | null = null
  ) {
    this.conflicting_block = conflicting_block;
    this.common_height = common_height;
    this.byzantine_validators = byzantine_validators;
    this.total_voting_power = total_voting_power;
    this.timestamp = timestamp;
  }
}

export function decodeLightClientAttackEvidence(a: Uint8Array): LightClientAttackEvidence {
  return Protobuf.decode<LightClientAttackEvidence>(a, LightClientAttackEvidence.decode);
}

export class EvidenceList {
  static encode(message: EvidenceList, writer: Writer): void {
    const evidence = message.evidence;
    for (let i = 0; i < evidence.length; ++i) {
      writer.uint32(10);
      writer.fork();
      Evidence.encode(evidence[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): EvidenceList {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EvidenceList();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  evidence: Array<Evidence>;

  constructor(evidence: Array<Evidence> = []) {
    this.evidence = evidence;
  }
}

export function decodeEvidenceList(a: Uint8Array): EvidenceList {
  return Protobuf.decode<EvidenceList>(a, EvidenceList.decode);
}
