import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeletePost } from "./types/blog/tx";
import { MsgUpdateSentPost } from "./types/blog/tx";
import { MsgCreateSentPost } from "./types/blog/tx";
import { MsgCreatePost } from "./types/blog/tx";
import { MsgUpdatePost } from "./types/blog/tx";
import { MsgDeleteSentPost } from "./types/blog/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeletePost: (data: MsgDeletePost) => EncodeObject;
    msgUpdateSentPost: (data: MsgUpdateSentPost) => EncodeObject;
    msgCreateSentPost: (data: MsgCreateSentPost) => EncodeObject;
    msgCreatePost: (data: MsgCreatePost) => EncodeObject;
    msgUpdatePost: (data: MsgUpdatePost) => EncodeObject;
    msgDeleteSentPost: (data: MsgDeleteSentPost) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
