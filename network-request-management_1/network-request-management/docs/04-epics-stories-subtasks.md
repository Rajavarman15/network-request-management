# Epics, Stories & Subtasks

Matches the workspace structure: 6 Epics / 27 Stories / 18 Subtasks

## Epic 1: Requirement Analysis & Planning (Phase 1)
**Stories**
1. Define Business Objectives
2. Define Functional Scope
3. Stakeholder Mapping
4. Build Execution Roadmap
**Subtasks**
- Document non-functional requirements (SLA targets, audit needs)
- Identify in-scope vs out-of-scope items

## Epic 2: Access & Group Configuration (Phase 2)
**Stories**
5. Create Network Requesters, Approvers, Network Team groups
6. Create custom roles (network_approver, network_fulfiller)
7. Assign roles to groups
8. Add and assign test users
**Subtasks**
- Verify group membership visibility
- Document access matrix

## Epic 3: Catalog Item & Client-Side Logic (Phase 2 & 3)
**Stories**
9. Create Network Requests catalog category
10. Create Network Request catalog item
11. Add all catalog variables (request_type, priority, access_level, etc.)
12. Build onChange client script for dynamic field display
13. Build onSubmit client script for justification validation
14. Style/organize form with variable sets
15. Test catalog item via Try It / Service Portal
**Subtasks**
- Add choice values for request_type, priority, access_level
- Configure mandatory field logic per request type
- Cross-browser/portal test of dynamic fields

## Epic 4: Backend Automation (Phase 2)
**Stories**
16. Build approval routing business rule
17. Build auto fulfillment task creation business rule
18. Build request status sync business rule
19. Build NetworkRequestValidator script include
20. Build Flow Designer approval + fulfillment flow
21. Configure lifecycle notifications (5 templates)
**Subtasks**
- Test approval routing for each access level
- Test duplicate firewall rule detection
- Verify notification delivery at each stage
- Verify SLA definitions applied correctly

## Epic 5: Security, Testing & Reporting (Phase 4)
**Stories**
22. Configure ACLs on sc_request/sc_req_item
23. Configure ACLs on sc_task
24. Write and execute test cases (happy path + edge cases)
25. Build reports (open requests, SLA compliance, task volume)
26. Build dashboard combining reports
**Subtasks**
- Test role-based visibility (Requester cannot see others' requests)
- Test rejected-request flow
- Test elevated-access justification enforcement
- Validate report data accuracy against test records

## Epic 6: Deployment & Final Presentation (Phase 5)
**Stories**
27. Export Update Set and document deployment steps
**Subtasks**
- Record demo video walkthrough
- Write final project README/summary
- Prepare presentation slides for mentor review
- Push final Update Set + docs to GitHub
