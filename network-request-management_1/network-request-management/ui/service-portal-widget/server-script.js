/*
 * Service Portal Widget: My Network Requests
 * Server Script
 *
 * Fetches the current user's Network Request items and their live status
 * for display in the widget.
 */
(function() {
    data.requests = [];

    var gr = new GlideRecord('sc_req_item');
    gr.addQuery('cat_item.name', 'Network Request');
    gr.addQuery('request.requested_for', gs.getUserID());
    gr.orderByDesc('sys_created_on');
    gr.setLimit(20);
    gr.query();

    while (gr.next()) {
        data.requests.push({
            number: gr.getValue('number'),
            request_type: gr.variables.request_type ? gr.variables.request_type.getDisplayValue() : '',
            priority: gr.variables.priority ? gr.variables.priority.getDisplayValue() : '',
            state: gr.getDisplayValue('state'),
            opened_at: gr.getDisplayValue('opened_at')
        });
    }
})();
