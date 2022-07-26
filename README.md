# cosmoshub-ts

TypeScript/AssemblyScript library for decoding Cosmos Hub messages.

## Usage

```typescript
import { cosmos, google } from "@graphprotocol/cosmoshub-ts";

function logDelegator(any: google.protobuf.Any) {
  if (any.type_url == '/cosmos.staking.v1beta1.MsgDelegate') {
    const message = cosmos.staking.v1beta1.decodeMsgDelegate(any.value);
    log.console(message.delegatorAddress)
  }
}
```

## Development

Install [Protocol Buffer Compiler](https://github.com/protocolbuffers/protobuf/releases) (`protoc`).

### Fetch dependencies

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

In order to update a dependency, change the value of the `branch` option in the corresponding section of the `.gitmodules` file.

> **Note**<br>
> A submodule should always point to a tag.

```bash
git -C <submodule_dir> checkout <new_tag>
yarn build
yarn test
git commit -m <submodule_dir>
```
