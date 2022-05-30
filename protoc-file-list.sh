# /bin/bash

ls -1 $(grep -slR 'message Msg' ./cosmos-sdk/proto | egrep '\.proto$') \
    $(grep -slR 'message Msg' ./ibc-go/proto | egrep '\.proto$') \
    | sort | uniq
