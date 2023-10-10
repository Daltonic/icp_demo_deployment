import { Canister, query, text, bool, update, Void } from 'azle'

// This is a global variable that is stored on the heap
let proposal = '',
  approved = false

export default Canister({
  // Query calls complete quickly because they do not go through consensus
  getProposal: query([], text, () => {
    return proposal
  }),

  // Update calls take a few seconds to complete
  // This is because they persist state changes and go through consensus
  setProposal: update([text], Void, (newProposal) => {
    proposal = newProposal // This change will be persisted
  }),

  getApproval: query([], bool, () => {
    return approved
  }),

  setApproval: update([bool], Void, (newStatus) => {
    approved = newStatus // This change will be persisted
  }),
})
