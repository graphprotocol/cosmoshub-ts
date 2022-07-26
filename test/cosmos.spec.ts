/// <reference types="@as-pect/assembly/types/as-pect" />

import { Protobuf } from 'as-proto';

import { Grant, decodeGrant } from '../src/cosmos/authz/v1beta1/authz';
import { Any } from '../src/google/protobuf/any';
import { Timestamp } from '../src/google/protobuf/timestamp';

describe('Cosmos SDK', () => {
  test('decodes a grant', () => {
    const grant = new Grant(
      new Any('/this.is.a.test', new Uint8Array(1024)),
      new Timestamp(123456, 654321)
    );

    const encodedGrant = Protobuf.encode<Grant>(grant, Grant.encode);
    const decodedGrant = decodeGrant(encodedGrant);

    const authorization = decodedGrant.authorization as Any;

    expect(authorization.type_url).toBe('/this.is.a.test');
    expect(authorization.value).toHaveLength(1024);

    const expiration = decodedGrant.expiration as Timestamp;

    expect(expiration.seconds).toBe(123456);
    expect(expiration.nanos).toBe(654321);
  });
});
