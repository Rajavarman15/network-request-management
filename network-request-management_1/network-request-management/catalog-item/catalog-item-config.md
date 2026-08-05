# Catalog Item: Network Request

**Name:** Network Request
**Category:** Network Requests
**Table:** Requested Item [sc_req_item] (default)

## Variables (Catalog Item Fields)

| Variable Name | Type | Label | Mandatory | Notes |
|---|---|---|---|---|
| `request_type` | Choice | Request Type | Yes | Values: New Access, Access Change, Firewall Rule, Device Provisioning, Decommission |
| `priority` | Choice | Priority | Yes | Values: Low, Medium, High, Critical |
| `access_level` | Choice | Access Level | Conditional | Shown only when request_type = New Access / Access Change. Values: Read Only, Standard, Elevated, Admin |
| `device_name` | Single Line Text | Device / System Name | Conditional | Shown when request_type = Device Provisioning / Decommission / Firewall Rule |
| `firewall_source_ip` | Single Line Text | Source IP/Range | Conditional | Shown only when request_type = Firewall Rule |
| `firewall_dest_ip` | Single Line Text | Destination IP/Range | Conditional | Shown only when request_type = Firewall Rule |
| `firewall_port` | Single Line Text | Port(s) | Conditional | Shown only when request_type = Firewall Rule |
| `business_justification` | Multi Line Text | Business Justification | Yes | Required for all types; enforced stricter for Elevated/Admin access |
| `requested_for` | Reference (sys_user) | Requested For | Yes | Defaults to current user |

## Variable Set (optional, recommended)
Group `firewall_source_ip`, `firewall_dest_ip`, `firewall_port` into a variable set named
**Firewall Rule Details** so it can be reused on other catalog items later.

## UI Policy (no-code alternative to client script for simple show/hide)
Create UI Policies on the catalog item for each conditional field above, OR use the client
script in `scripts/client-scripts/` for more dynamic control (recommended, shown in demo).
