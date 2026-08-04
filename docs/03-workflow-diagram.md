# Workflow / State Diagram

```mermaid
flowchart TD
    A[Requester submits Network Request via Service Portal] --> B{Validation passes?}
    B -- No --> A
    B -- Yes --> C[Status: New]
    C --> D{Route approval by\naccess type + priority}
    D --> E[Status: Awaiting Approval]
    E --> F{Approver decision}
    F -- Rejected --> G[Status: Rejected\nNotify Requester]
    F -- Approved --> H[Auto-create Fulfillment Task\nAssign to Network Team]
    H --> I[Status: In Progress]
    I --> J[Network Engineer updates work notes\ncompletes configuration]
    J --> K[Status: Completed\nNotify Requester]
```

## Notification Points
1. Request submitted → confirmation to Requester
2. Awaiting approval → email to Approver with approve/reject links
3. Approved/Rejected → notify Requester
4. Task assigned → notify Network Team member
5. Task completed → notify Requester with closure summary

## State Model (sc_request / sc_req_item)
`New → Awaiting Approval → In Progress → Completed`
(with `Rejected` and `Cancelled` as terminal side-states)
