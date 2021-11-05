// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgDeletePost: (data: MsgDeletePost): EncodeObject => ({ typeUrl: "/coreators.planet.blog.MsgDeletePost", value: data }),
    msgUpdateSentPost: (data: MsgUpdateSentPost): EncodeObject => ({ typeUrl: "/coreators.planet.blog.MsgUpdateSentPost", value: data }),
    msgCreateSentPost: (data: MsgCreateSentPost): EncodeObject => ({ typeUrl: "/coreators.planet.blog.MsgCreateSentPost", value: data }),
    msgCreatePost: (data: MsgCreatePost): EncodeObject => ({ typeUrl: "/coreators.planet.blog.MsgCreatePost", value: data }),
    msgUpdatePost: (data: MsgUpdatePost): EncodeObject => ({ typeUrl: "/coreators.planet.blog.MsgUpdatePost", value: data }),
    msgDeleteSentPost: (data: MsgDeleteSentPost): EncodeObject => ({ typeUrl: "/coreators.planet.blog.MsgDeleteSentPost", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
