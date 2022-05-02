# /bin/bash

ls -1 $(grep -slR 'message Msg' ./third_party | egrep '\.proto$') \
    $(egrep -slR 'enum|message' ./third_party/tendermint/ | egrep '\.proto$') \
    $(egrep -slR 'enum|message' ./third_party/google/ | egrep '\.proto$') \
    ./third_party/cosmos/authz/v1beta1/authz.proto \
    ./third_party/cosmos/bank/v1beta1/bank.proto \
    ./third_party/cosmos/base/v1beta1/coin.proto \
    ./third_party/cosmos/gov/v1beta1/gov.proto \
    ./third_party/cosmos/staking/v1beta1/staking.proto \
    ./third_party/ibc/core/client/v1/client.proto \
    ./third_party/ibc/core/channel/v1/channel.proto \
    ./third_party/ibc/core/connection/v1/connection.proto \
    ./third_party/ibc/core/commitment/v1/commitment.proto \
    ./third_party/confio/proofs.proto \
    | sort | uniq