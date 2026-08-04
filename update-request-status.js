/*
 * Business Rule
 * Name: Sync Request Status from Fulfillment Task
 * Table: sc_task [Catalog Task]
 * When: after
 * Update: true
 * Condition: current.state.changes()
 *
 * Purpose: Keep the parent Requested Item / Request status in sync as the
 * Network Team progresses the fulfillment task, and notify the requester
 * when work is completed.
 */
(function executeRule(current, previous) {

    var reqItemGr = new GlideRecord('sc_req_item');
    if (!reqItemGr.get(current.request_item)) {
        return;
    }

    if (current.state == 3) { // Closed Complete
        reqItemGr.state = 'completed';
        reqItemGr.stage = 'completed';
    } else if (current.state == 2) { // Work in Progress
        reqItemGr.state = 'in_progress';
    }

    reqItemGr.update();

    // Notification to requester is fired separately via a Notification record
    // scoped to sc_req_item state changes to 'completed' (see scripts/notifications/)

})(current, previous);
