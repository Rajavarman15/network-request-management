/*
 * Script Include
 * Name: NetworkRequestValidator
 * Client callable: true (if used from a Catalog Client Script via GlideAjax)
 */
var NetworkRequestValidator = Class.create();
NetworkRequestValidator.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    /**
     * Validates that a firewall rule request does not duplicate an existing
     * open request for the same source/destination/port combination.
     * Called server-side (e.g. from a Business Rule) or via GlideAjax.
     */
    isDuplicateFirewallRequest: function() {
        var sourceIp = this.getParameter('sysparm_source_ip');
        var destIp = this.getParameter('sysparm_dest_ip');
        var port = this.getParameter('sysparm_port');

        var gr = new GlideRecord('sc_req_item');
        gr.addQuery('cat_item.name', 'Network Request');
        gr.addQuery('variables.firewall_source_ip', sourceIp);
        gr.addQuery('variables.firewall_dest_ip', destIp);
        gr.addQuery('variables.firewall_port', port);
        gr.addQuery('state', 'IN', 'new,awaiting_approval,in_progress');
        gr.query();

        return gr.hasNext() ? 'true' : 'false';
    },

    type: 'NetworkRequestValidator'
});
