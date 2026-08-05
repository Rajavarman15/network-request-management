# Test Cases (Phase 4)

| ID | Test Case | Steps | Expected Result | Status |
|---|---|---|---|---|
| TC-01 | Submit standard access request | Login as Requester → submit New Access, Standard level | Request created, state = Awaiting Approval, confirmation email sent | ☐ |
| TC-02 | Dynamic field display — Firewall Rule | Select Request Type = Firewall Rule | Source IP, Dest IP, Port fields appear and become mandatory | ☐ |
| TC-03 | Dynamic field display — New Access | Select Request Type = New Access | Access Level field appears and becomes mandatory | ☐ |
| TC-04 | Justification length enforcement | Select Access Level = Admin, enter <30 char justification, submit | Form blocks submission with inline error | ☐ |
| TC-05 | Approval routing — standard | Submit Standard access request | Routed to Network Approvers group only | ☐ |
| TC-06 | Approval routing — elevated/critical | Submit Admin access or Critical priority request | Dual approval flag set / routed per decision table | ☐ |
| TC-07 | Approve request | Login as Approver → approve request | Fulfillment task auto-created, assigned to Network Team, requester notified | ☐ |
| TC-08 | Reject request | Login as Approver → reject request | Request state = Rejected, requester notified with reason | ☐ |
| TC-09 | Fulfillment task completion | Login as Network Team → close task as Complete | Parent request state = Completed, requester notified | ☐ |
| TC-10 | Duplicate firewall rule detection | Submit two firewall requests with identical source/dest/port while first is open | Script Include flags duplicate (validate manually or via GlideAjax call) | ☐ |
| TC-11 | Requester visibility (ACL) | Login as Requester A → attempt to view Requester B's request via URL | Access denied / record not found | ☐ |
| TC-12 | Network Team task visibility (ACL) | Login as Network Team member not in assignment group → attempt to edit task | Access denied | ☐ |
| TC-13 | SLA breach visibility | Leave a Critical request unapproved past 2 business hours | SLA shows breached on report/dashboard | ☐ |
| TC-14 | Notification delivery | Complete full lifecycle for one request | All 5 notification stages received by correct recipients | ☐ |
| TC-15 | Report accuracy | Submit 5 test requests across states | "Open Requests by Status" report reflects accurate counts | ☐ |

## How to Execute
1. Create 2–3 test users mapped to Requester, Approver, and Network Team roles
2. Run through each test case logging in as the relevant user (use Impersonate as admin, or separate browser profiles/incognito windows)
3. Mark ☐ as ✅ Pass or ❌ Fail, and note any deviations
4. Attach this file (with results filled in) to your repo before final submission
