# Flow Designer: Network Request Approval & Fulfillment

Build this as a Flow (Flow Designer) triggered on **Requested Item Created**,
filtered to `cat_item = Network Request`.

## Trigger
- Table: Requested Item [sc_req_item]
- Condition: Catalog Item is Network Request

## Steps
1. **Ask for Approval**
   - Approver: determined by `access_level`/`priority` (use a Decision Table or
     If/Else: Admin/Critical → Network Approvers + Manager; else → Manager only)
   - Approval field: `variables.business_justification` shown in approval record

2. **If Approved**
   - Update Record (sc_req_item): state = In Progress
   - Create Record (sc_task): assignment_group = Network Team,
     short_description = "Fulfill Network Request: {number}"
   - Notify: send "Request Approved" notification to requester

3. **If Rejected**
   - Update Record (sc_req_item): state = Rejected
   - Notify: send "Request Rejected" notification to requester with rejection reason

4. **Wait for Condition** (sc_task state = Closed Complete)
   - Update Record (sc_req_item): state = Completed
   - Notify: send "Request Completed" notification to requester

## Decision Table (recommended, no-code)
| access_level | priority | Approver Group |
|---|---|---|
| Read Only / Standard | Any | Network Approvers |
| Elevated | Low/Medium | Network Approvers |
| Elevated | High/Critical | Network Approvers + Manager |
| Admin | Any | Network Approvers + Manager |

## SLA Definitions (Service Level Management)
| Priority | Approval SLA | Fulfillment SLA |
|---|---|---|
| Critical | 2 business hours | 4 business hours |
| High | 4 business hours | 1 business day |
| Medium | 1 business day | 2 business days |
| Low | 2 business days | 3 business days |
