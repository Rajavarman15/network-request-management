# User Roles & Access Matrix

## Groups to Create
1. **Network Requesters** — all employees (or a subset for demo purposes)
2. **Network Approvers** — managers / network leads
3. **Network Team** — fulfillment engineers

## Roles
| Role | Base ServiceNow Role | Notes |
|---|---|---|
| Requester | `snc_internal` | Default, submits catalog item |
| Approver | custom role `network_approver` | Assigned to Network Approvers group |
| Network Engineer | custom role `network_fulfiller` | Assigned to Network Team group, works `sc_task` |
| Admin | `admin` | Configures catalog, groups, ACLs |

## Access Matrix
| Action | Requester | Approver | Network Team | Admin |
|---|:---:|:---:|:---:|:---:|
| Submit network request | ✅ | ✅ | ✅ | ✅ |
| View own request | ✅ | ✅ | ✅ | ✅ |
| View all requests | ❌ | Own team only | Own tasks only | ✅ |
| Approve/Reject request | ❌ | ✅ | ❌ | ✅ |
| Update fulfillment task | ❌ | ❌ | ✅ | ✅ |
| Close request | ❌ | ❌ | ✅ (via task completion) | ✅ |
| View SLA/reporting dashboard | ❌ | ✅ | ✅ | ✅ |

## ACL Notes
- Restrict `sc_request` read access to requester (caller_id = current user) OR member of
  Network Approvers/Network Team group OR admin
- Restrict `sc_task` write access to assignment group = Network Team OR admin
- Approval records (`sysapproval_approver`) visible only to the assigned approver and admin
