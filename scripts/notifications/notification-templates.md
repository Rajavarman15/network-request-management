# Email Notifications

Create these as Notification records (System Notification > Email > Notifications).

## 1. Request Submitted (to Requester)
- **Table:** sc_req_item
- **When to send:** Record inserted
- **Subject:** Your Network Request ${number} has been submitted
- **Body:**
  ```
  Hi ${requested_for.first_name},

  Your network request ${number} (${cat_item.name}) has been submitted and is
  pending approval. You will be notified once it is approved.

  Request Type: ${variables.request_type}
  Priority: ${variables.priority}

  View request: ${URI_REF}
  ```

## 2. Approval Required (to Approver)
- **Table:** sysapproval_approver
- **When to send:** Record inserted, state = requested
- **Subject:** Approval needed: Network Request ${sysapproval.number}
- **Body:**
  ```
  Hi ${approver.first_name},

  A network request requires your approval:

  Request: ${sysapproval.number}
  Type: ${sysapproval.variables.request_type}
  Priority: ${sysapproval.variables.priority}
  Justification: ${sysapproval.variables.business_justification}

  Approve/Reject: ${URI_REF}
  ```

## 3. Request Approved/Rejected (to Requester)
- **Table:** sc_req_item
- **When to send:** state changes to awaiting_approval → in_progress OR rejected
- **Subject:** Your Network Request ${number} has been ${state}
- **Body:** Notify requester of decision, and next steps if approved.

## 4. Task Assigned (to Network Team member)
- **Table:** sc_task
- **When to send:** assigned_to changes
- **Subject:** New Network Fulfillment Task: ${number}
- **Body:** Task details + link.

## 5. Request Completed (to Requester)
- **Table:** sc_req_item
- **When to send:** state changes to completed
- **Subject:** Your Network Request ${number} is complete
- **Body:** Closure summary + link to provide feedback/reopen if needed.
