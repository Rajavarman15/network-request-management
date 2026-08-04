# Phase 1: Requirement Analysis & Planning

## 1. Business Objectives
- Eliminate manual, email-based network request handling
- Reduce request-to-fulfillment turnaround time
- Provide a single system of record with full audit trail for compliance
- Give management real-time visibility into SLA compliance and team workload

## 2. Functional Scope
**In scope**
- Service Catalog item to capture network requests (access, change, decommission)
- Dynamic form behavior based on request type
- Rule-based approval routing (by access type + priority)
- Auto-generated fulfillment tasks assigned to Network Team
- Lifecycle status tracking (New → Awaiting Approval → In Progress → Completed)
- Email notifications at each lifecycle stage
- Reports/dashboards for SLA and task performance

**Out of scope**
- Direct integration with physical network hardware/CMDB auto-discovery
- Custom mobile app UI (native Now Mobile app is used as-is)

## 3. Stakeholder Mapping
| Stakeholder | Role | Interest |
|---|---|---|
| Requester (any employee) | Submits requests | Fast, transparent fulfillment |
| Approver (Manager / Network Lead) | Approves/rejects | Control over access risk |
| Network Team | Fulfiller | Clear, actionable task queue |
| ServiceNow Admin | Platform owner | Roles, groups, ACL configuration |
| Developer | Builds solution | Catalog item, scripts, flows |
| Project Mentor | Reviewer | Evaluates delivery against requirements |

## 4. Execution Roadmap
| Phase | Key Deliverables | Est. Duration |
|---|---|---|
| Phase 1 – Requirement Analysis & Planning | Requirements doc, roles matrix, workflow diagram | 1h |
| Phase 2 – Backend Development & Configuration | Groups/roles, catalog item backend, business rules, flow | TBD |
| Phase 3 – UI/UX Development & Customization | Catalog form UI, client scripts, portal widget styling | TBD |
| Phase 4 – Data Migration, Testing & Security | ACLs, test cases, UAT, security review | TBD |
| Phase 5 – Deployment, Documentation & Final Presentation | Update set migration, docs, demo recording | TBD |

## 5. Non-Functional Requirements
- Role-based access control enforced via ACLs on `sc_request`/`sc_task`
- SLA targets: High priority → 4 business hrs to approve, 1 business day to fulfill;
  Standard → 1 business day to approve, 3 business days to fulfill
- All state transitions logged (audit trail via out-of-box ServiceNow history/audit)
- Solution must scale to multiple concurrent requests without manual queue management
