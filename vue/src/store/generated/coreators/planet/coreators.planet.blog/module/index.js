// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeletePost } from "./types/blog/tx";
import { MsgUpdateSentPost } from "./types/blog/tx";
import { MsgCreateSentPost } from "./types/blog/tx";
import { MsgCreatePost } from "./types/blog/tx";
import { MsgUpdatePost } from "./types/blog/tx";
import { MsgDeleteSentPost } from "./types/blog/tx";
const types = [
    ["/coreators.planet.blog.MsgDeletePost", MsgDeletePost],
    ["/coreators.planet.blog.MsgUpdateSentPost", MsgUpdateSentPost],
    ["/coreators.planet.blog.MsgCreateSentPost", MsgCreateSentPost],
    ["/coreators.planet.blog.MsgCreatePost", MsgCreatePost],
    ["/coreators.planet.blog.MsgUpdatePost", MsgUpdatePost],
    ["/coreators.planet.blog.MsgDeleteSentPost", MsgDeleteSentPost],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgDeletePost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgDeletePost", value: data }),
        msgUpdateSentPost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgUpdateSentPost", value: data }),
        msgCreateSentPost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgCreateSentPost", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgCreatePost", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgUpdatePost", value: data }),
        msgDeleteSentPost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgDeleteSentPost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
