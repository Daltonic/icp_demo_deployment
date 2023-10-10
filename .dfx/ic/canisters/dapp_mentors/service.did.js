export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getApproval' : IDL.Func([], [IDL.Bool], ['query']),
    'getProposal' : IDL.Func([], [IDL.Text], ['query']),
    'setApproval' : IDL.Func([IDL.Bool], [], []),
    'setProposal' : IDL.Func([IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
