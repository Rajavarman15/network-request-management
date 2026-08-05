# Reports & Dashboard (Phase 2 stretch)

## Report 1: Open Requests by Status
- **Type:** Bar chart / Pie chart
- **Table:** sc_req_item
- **Filter:** cat_item.name = Network Request
- **Group by:** state

## Report 2: SLA Compliance
- **Type:** Pie chart (Breached vs On Track)
- **Table:** task_sla (related to sc_req_item / sc_task)
- **Filter:** sla.name contains "Network"
- **Group by:** stage (breached/in progress/completed)

## Report 3: Fulfillment Task Volume by Team Member
- **Type:** Bar chart
- **Table:** sc_task
- **Filter:** assignment_group = Network Team
- **Group by:** assigned_to

## Report 4: Requests by Priority
- **Type:** Pie chart
- **Table:** sc_req_item
- **Filter:** cat_item.name = Network Request
- **Group by:** variables.priority

## Dashboard: Network Request Operations
1. Go to **Performance Analytics / Dashboards** (or **Reports > Dashboards** on
   instances without full PA license)
2. Create new dashboard: **Network Request Operations**
3. Add all 4 reports above as widgets
4. Set to auto-refresh (if available) and share with Network Approvers + Network Team + Admin
