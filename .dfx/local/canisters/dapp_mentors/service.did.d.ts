import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'getApproval' : ActorMethod<[], boolean>,
  'getProposal' : ActorMethod<[], string>,
  'setApproval' : ActorMethod<[boolean], undefined>,
  'setProposal' : ActorMethod<[string], undefined>,
}
