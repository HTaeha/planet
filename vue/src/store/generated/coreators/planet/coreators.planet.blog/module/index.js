// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePost } from "./types/blog/tx";
import { MsgDeleteSentPost } from "./types/blog/tx";
import { MsgCreateTimedoutPost } from "./types/blog/tx";
import { MsgDeleteTimedoutPost } from "./types/blog/tx";
import { MsgUpdateSentPost } from "./types/blog/tx";
import { MsgUpdatePost } from "./types/blog/tx";
import { MsgCreateSentPost } from "./types/blog/tx";
import { MsgUpdateTimedoutPost } from "./types/blog/tx";
import { MsgDeletePost } from "./types/blog/tx";
const types = [
    ["/coreators.planet.blog.MsgCreatePost", MsgCreatePost],
    ["/coreators.planet.blog.MsgDeleteSentPost", MsgDeleteSentPost],
    ["/coreators.planet.blog.MsgCreateTimedoutPost", MsgCreateTimedoutPost],
    ["/coreators.planet.blog.MsgDeleteTimedoutPost", MsgDeleteTimedoutPost],
    ["/coreators.planet.blog.MsgUpdateSentPost", MsgUpdateSentPost],
    ["/coreators.planet.blog.MsgUpdatePost", MsgUpdatePost],
    ["/coreators.planet.blog.MsgCreateSentPost", MsgCreateSentPost],
    ["/coreators.planet.blog.MsgUpdateTimedoutPost", MsgUpdateTimedoutPost],
    ["/coreators.planet.blog.MsgDeletePost", MsgDeletePost],
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
        msgCreatePost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgCreatePost", value: data }),
        msgDeleteSentPost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgDeleteSentPost", value: data }),
        msgCreateTimedoutPost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgCreateTimedoutPost", value: data }),
        msgDeleteTimedoutPost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgDeleteTimedoutPost", value: data }),
        msgUpdateSentPost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgUpdateSentPost", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgUpdatePost", value: data }),
        msgCreateSentPost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgCreateSentPost", value: data }),
        msgUpdateTimedoutPost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgUpdateTimedoutPost", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/coreators.planet.blog.MsgDeletePost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
