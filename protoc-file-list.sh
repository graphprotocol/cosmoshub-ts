# /bin/bash

ls -1 $(grep -slR 'message Msg' ./cosmos-sdk/proto | egrep '\.proto$') \
    $(egrep -slR 'enum|message' ./cosmos-sdk/third_party/proto/tendermint/ | egrep '\.proto$') \
    $(egrep -slR 'enum|message' ./cosmos-sdk/third_party/proto/google/ | egrep '\.proto$') \
    $(grep -slR 'message Msg' ./ibc-go/proto | egrep '\.proto$') \
    ./cosmos-sdk/proto/cosmos/bank/v1beta1/bank.proto \
    ./cosmos-sdk/proto/cosmos/base/v1beta1/coin.proto \
    ./cosmos-sdk/proto/cosmos/gov/v1beta1/gov.proto \
    ./cosmos-sdk/proto/cosmos/staking/v1beta1/staking.proto \
    ./cosmos-sdk/third_party/proto/confio/proofs.proto \
    ./ibc-go/proto/ibc/core/client/v1/client.proto \
    ./ibc-go/proto/ibc/core/channel/v1/channel.proto \
    ./ibc-go/proto/ibc/core/connection/v1/connection.proto \
    ./ibc-go/proto/ibc/core/commitment/v1/commitment.proto \
    | sort | uniq
