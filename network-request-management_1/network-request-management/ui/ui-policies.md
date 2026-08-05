# UI Policies (Phase 3 — UI/UX Development & Customization)

These are no-code alternatives/supplements to the client scripts, useful for simple
show/hide/mandatory behavior and to demonstrate both approaches in your project.

## UI Policy 1: Show Access Level
- **Catalog Item:** Network Request
- **Condition:** `request_type` is one of `New Access`, `Access Change`
- **Actions:**
  - `access_level` → Visible = true, Mandatory = true
- **Reverse if false:** true (auto hides when condition no longer met)

## UI Policy 2: Show Firewall Fields
- **Condition:** `request_type` is `Firewall Rule`
- **Actions:**
  - `device_name`, `firewall_source_ip`, `firewall_dest_ip`, `firewall_port` → Visible = true, Mandatory = true
- **Reverse if false:** true

## UI Policy 3: Show Device Field
- **Condition:** `request_type` is one of `Device Provisioning`, `Decommission`
- **Actions:**
  - `device_name` → Visible = true, Mandatory = true
- **Reverse if false:** true

## Form Layout / UX Notes
- Group `request_type` and `priority` at the top (always visible)
- Use a **Variable Set** named "Firewall Rule Details" to visually group the 3 firewall
  fields together with a section divider
- Use a **Container/Column** layout so `request_type` and `priority` sit side-by-side
  on desktop, stacking on mobile (Service Portal responsive behavior is automatic)
- Add helper text under `business_justification`: "Minimum 30 characters required for
  Elevated or Admin access requests."

## Portal Styling (Service Portal)
- Use the standard **Service Portal (sp)** theme; no custom CSS required for MVP
- Optional: add a custom icon for the Network Request catalog item (Catalog Item Icon
  field) — search "network" in the icon picker or upload a simple network/switch icon
