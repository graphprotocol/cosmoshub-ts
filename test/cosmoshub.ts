import { Grant, decodeGrant } from "../src/cosmos/authz/v1beta1/authz"
import { MsgTransfer, decodeMsgTransfer } from "../src/ibc/applications/transfer/v1/tx"
import { google } from "../src/google"
import { Protobuf } from "as-proto"
import { Coin } from "../src/cosmos/base/v1beta1/coin";
import { Height } from "../src/ibc/core/client/v1/client";

export function testCosmos(): void {
    const grant: Grant = new Grant(
        new google.protobuf.Any("/this.is.a.test", new Uint8Array(1024)),
        new google.protobuf.Timestamp(123456, 654321)
    );

    const encoded: Uint8Array = Protobuf.encode<Grant>(grant, Grant.encode);
    const decoded_grant = decodeGrant(encoded);
}

export function testIbc(): void {
    const msg: MsgTransfer = new MsgTransfer(
        "source_port",
        "source_channel",
        new Coin("denom", "amount"),
        "sender",
        "receiver",
        new Height(12345, 12345),
        12345);

    const encoded: Uint8Array = Protobuf.encode<MsgTransfer>(msg, MsgTransfer.encode);
    const decoded_msg = decodeMsgTransfer(encoded)
}
