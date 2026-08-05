# Automated Network Request Management in ServiceNow

Automating network request management in ServiceNow to streamline workflows, reduce manual
intervention, and provide real-time visibility into network access and change requests.

## Problem Statement
Network access/change requests (VPN access, firewall rules, device provisioning, decommissioning)
are typically handled through email/spreadsheets, causing delays, no audit trail, and poor SLA
visibility. This project implements a fully automated, scalable network change management process
in ServiceNow — from catalog submission through approval, fulfillment, and closure.

## Tech Stack
- ServiceNow Service Catalog (Catalog Item, Catalog Client Scripts, UI Policies)
- Business Rules / Script Includes (server-side logic)
- Flow Designer (approval + fulfillment automation)
- Notifications (Email)
- Performance Analytics / Reports & Dashboards

## Repo Structure
```
network-request-management/
├── docs/
│   ├── 01-requirements.md              Business objectives, functional scope (Phase 1)
│   ├── 02-user-roles-access-matrix.md  Stakeholder mapping, roles (Phase 1)
│   ├── 03-workflow-diagram.md          Execution roadmap, state diagram (Phase 1)
│   ├── 04-epics-stories-subtasks.md    Full 6 Epic / 27 Story / 18 Subtask breakdown
│   ├── 05-security-acl.md              ACL scripts & security review (Phase 4)
│   ├── 06-test-cases.md                15 test cases (Phase 4)
│   └── 07-final-presentation-outline.md Slide-by-slide presentation outline (Phase 5)
├── catalog-item/                       Catalog item field & variable set definitions
├── scripts/
│   ├── client-scripts/                 Catalog client scripts (dynamic field display)
│   ├── business-rules/                 Server-side automation (routing, task creation, status updates)
│   ├── script-includes/                Reusable server-side validation logic
│   └── notifications/                  Email notification templates
├── ui/
│   ├── ui-policies.md                  No-code UI policy alternative (Phase 3)
│   └── service-portal-widget/          Custom "My Network Requests" widget (HTML/CSS/JS)
├── reports/
│   └── dashboard-reports.md            Report & dashboard configuration (Phase 2 stretch)
├── deployment/
│   └── deployment-guide.md             Update Set export/import steps (Phase 5)
└── workflow/
    └── flow-designer-steps.md          Flow Designer step-by-step design (Phase 2)
```

## Project Phases
| Phase | Description | Status |
|---|---|---|
| Phase 1 | Requirement Analysis & Planning | ✅ |
| Phase 2 | Backend Development & Configuration | ✅ |
| Phase 3 | UI/UX Development & Customization | ✅ |
| Phase 4 | Data Migration, Testing & Security | ✅ |
| Phase 5 | Deployment, Documentation & Final Presentation | ✅ |

## Setup (on your own PDI)
1. Create Service Catalog → Category: **Network Requests**
2. Create Catalog Item using field spec in `catalog-item/catalog-item-config.md`
3. Add the client scripts from `scripts/client-scripts/` (or UI Policies from `ui/ui-policies.md`)
4. Add business rules from `scripts/business-rules/` on `sc_req_item`, `sysapproval_approver`, `sc_task`
5. Add the script include from `scripts/script-includes/`
6. Build the Flow Designer flow per `workflow/flow-designer-steps.md`
7. Configure notifications using templates in `scripts/notifications/`
8. Configure ACLs from `docs/05-security-acl.md`
9. (Optional) Build the Service Portal widget in `ui/service-portal-widget/`
10. Build reports/dashboard per `reports/dashboard-reports.md`
11. Test end-to-end using `docs/06-test-cases.md`
12. Export Update Set per `deployment/deployment-guide.md`

## Demo
[Add demo video/link here]

## Author
[Your Name] — ServiceNow Certified System Administrator (CSA), Certified Application Developer (in progress)
