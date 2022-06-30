# cosmoshub-ts

This modules contains the typescript/assemblyscript binding for cosmos protobuf

## Usage

```typescript
import { cosmos, google } from "@graphprotocol/cosmos-ts";

function logDelegator(any: google.protobuf.Any) {
    if (any.type_url == '/cosmos.staking.v1beta1.MsgDelegate') {
        const message = cosmos.staking.v1beta1.decodeMsgDelegate(any.value);
        log.console(message.delegatorAddress)
    }
}
```

## Development

Install protoc: `https://github.com/protocolbuffers/protobuf/releases`

### Get proto-file

```bash
git submodule update --init --force
```

### Build and test

```bash
yarn
yarn build
yarn test
```

## Update dependencies

Update branch variable in .gitmodules to point to the new tag.

> **Submodule should always point to tag**

```bash
git -C <submodule_dir> checkout <new_tag>
yarn build
yarn test
git commit -m <submodule_dir>
```
