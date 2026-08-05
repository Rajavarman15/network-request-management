/*
 * Service Portal Widget: My Network Requests
 * Client Controller
 */
function($scope) {
    var c = this;

    c.priorityClass = function(priority) {
        var map = {
            'Critical': 'label-danger',
            'High': 'label-warning',
            'Medium': 'label-info',
            'Low': 'label-default'
        };
        return map[priority] || 'label-default';
    };

    c.statusClass = function(state) {
        var map = {
            'New': 'label-default',
            'Awaiting Approval': 'label-warning',
            'In Progress': 'label-info',
            'Completed': 'label-success',
            'Rejected': 'label-danger'
        };
        return map[state] || 'label-default';
    };
}
