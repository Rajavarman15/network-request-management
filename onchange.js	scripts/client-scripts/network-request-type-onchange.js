/*
 * Catalog Client Script
 * Name: Show Fields Based on Request Type
 * Type: onChange
 * Catalog Item: Network Request
 * Variable: request_type
 * UI Type: All
 * Applies to a Catalog Item: true
 */
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue === '') {
        return;
    }

    // Reset all conditional sections first
    g_form.setDisplay('access_level', false);
    g_form.setDisplay('device_name', false);
    g_form.setDisplay('firewall_source_ip', false);
    g_form.setDisplay('firewall_dest_ip', false);
    g_form.setDisplay('firewall_port', false);

    switch (newValue) {
        case 'new_access':
        case 'access_change':
            g_form.setDisplay('access_level', true);
            g_form.setMandatory('access_level', true);
            break;

        case 'firewall_rule':
            g_form.setDisplay('device_name', true);
            g_form.setDisplay('firewall_source_ip', true);
            g_form.setDisplay('firewall_dest_ip', true);
            g_form.setDisplay('firewall_port', true);
            g_form.setMandatory('firewall_source_ip', true);
            g_form.setMandatory('firewall_dest_ip', true);
            g_form.setMandatory('firewall_port', true);
            break;

        case 'device_provisioning':
        case 'decommission':
            g_form.setDisplay('device_name', true);
            g_form.setMandatory('device_name', true);
            break;
    }
}
