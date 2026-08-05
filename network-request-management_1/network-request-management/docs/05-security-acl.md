# Security & ACL Configuration (Phase 4)

## 1. ACL: Restrict sc_req_item read access
**Table:** sc_req_item
**Operation:** read
**Type:** record

**Script (Advanced):**
```javascript
answer = false;

// Admins always allowed
if (gs.hasRole('admin')) {
    answer = true;
}
// Requester can see their own request
else if (current.request.requested_for == gs.getUserID()) {
    answer = true;
}
// Approvers/Network Team can see requests routed to their group
else if (gs.hasRole('network_approver') || gs.hasRole('network_fulfiller')) {
    answer = true;
}
```

## 2. ACL: Restrict sc_task write access
**Table:** sc_task
**Operation:** write
**Type:** record

**Script (Advanced):**
```javascript
answer = false;

if (gs.hasRole('admin')) {
    answer = true;
} else if (gs.hasRole('network_fulfiller') &&
           current.assignment_group.name == 'Network Team') {
    answer = true;
}
```

## 3. ACL: Restrict approval actions
**Table:** sysapproval_approver
**Operation:** write
**Type:** record

**Script (Advanced):**
```javascript
answer = false;

if (gs.hasRole('admin')) {
    answer = true;
} else if (current.approver == gs.getUserID() && gs.hasRole('network_approver')) {
    answer = true;
}
```

## 4. Field-level ACL: business_justification (write)
Restrict editing the justification field after submission to the original requester
or admin only, to preserve audit integrity.

```javascript
answer = false;

if (gs.hasRole('admin')) {
    answer = true;
} else if (current.request.requested_for == gs.getUserID() && current.state == 'new') {
    answer = true;
}
```

## Security Review Checklist
- [ ] Verify Requesters cannot view other users' requests
- [ ] Verify Approvers only see requests awaiting their approval
- [ ] Verify Network Team only sees/edits tasks assigned to their group
- [ ] Verify justification field becomes read-only after submission
- [ ] Verify non-admin users cannot bypass approval via direct task creation
- [ ] Confirm audit history is enabled on sc_req_item and sc_task (System audit
      is on by default; verify via System Definition > Audit Rules)
