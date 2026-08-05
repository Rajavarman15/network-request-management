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
├── docs/                       Requirement docs, roles matrix, workflow diagram
├── catalog-item/                Catalog item field & variable set definitions
├── scripts/
│   ├── client-scripts/          Catalog client scripts (dynamic field display)
│   ├── business-rules/          Server-side automation (routing, task creation, status updates)
│   ├── script-includes/         Reusable server-side validation logic
│   └── notifications/           Email notification templates
└── workflow/                    Flow Designer step-by-step design
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
3. Add the client script from `scripts/client-scripts/` to the catalog item
4. Add business rules from `scripts/business-rules/` on `sc_request`/`sc_req_item`
5. Build the Flow Designer flow per `workflow/flow-designer-steps.md`
6. Configure notifications using templates in `scripts/notifications/`
7. Test end-to-end via Service Portal

## Demo
[Add demo video/link here]

## Author
[Your Name] — ServiceNow Certified System Administrator (CSA), Certified Application Developer (in progress)
