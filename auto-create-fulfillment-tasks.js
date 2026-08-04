/*
 * Business Rule
 * Name: Create Fulfillment Task on Approval
 * Table: sysapproval_approver [Approval - Approver]
 * When: after
 * Update: true
 * Condition: current.state == 'approved' && previous.state != 'approved'
 *
 * Purpose: When the approver record for a Network Request is approved,
 * automatically create an sc_task assigned to the Network Team and
 * update the parent request status to "In Progress".
 */
(function executeRule(current, previous) {

    var reqItemGr = new GlideRecord('sc_req_item');
    if (!reqItemGr.get(current.sysapproval)) {
        return;
    }

    // Only proceed for the Network Request catalog item
    if (reqItemGr.cat_item.getDisplayValue() !== 'Network Request') {
        return;
    }

    var taskGr = new GlideRecord('sc_task');
    taskGr.initialize();
    taskGr.request_item = reqItemGr.sys_id;
    taskGr.short_description = 'Fulfill Network Request: ' + reqItemGr.number;
    taskGr.description = reqItemGr.variables.business_justification.toString();
    taskGr.assignment_group = 'Network Team'; // sys_id or group name lookup recommended in prod
    taskGr.priority = reqItemGr.variables.priority.toString();
    taskGr.state = 1; // Open
    taskGr.insert();

    reqItemGr.state = 'in_progress';
    reqItemGr.update();

})(current, previous);
