/*
 * Business Rule
 * Name: Route Network Request for Approval
 * Table: sc_req_item [Requested Item]
 * When: after
 * Insert: true
 * Condition: current.cat_item.name == 'Network Request'
 *
 * Purpose: Sets state to "Awaiting Approval" and determines approver group
 * based on access_level/priority. Actual approval record generation is
 * handled by the OOB catalog approval workflow / Flow Designer flow
 * (see workflow/flow-designer-steps.md) — this BR sets a routing field
 * the flow reads.
 */
(function executeRule(current, previous /*null when async*/) {

    var accessLevel = current.variables.access_level ? current.variables.access_level.toString() : '';
    var priority = current.variables.priority ? current.variables.priority.toString() : '';

    var approverGroup = 'Network Approvers'; // default

    if (accessLevel === 'admin' || priority === 'critical') {
        approverGroup = 'Network Approvers'; // could be a stricter senior group in a real org
        current.u_requires_dual_approval = true; // example custom field for elevated cases
    }

    current.u_approval_group = approverGroup; // custom field on sc_req_item
    current.state = 'awaiting_approval'; // or the closest OOB state value in your instance

    current.update();

})(current, previous);
