/*
 * Catalog Client Script
 * Name: Enforce Detailed Justification for Elevated Access
 * Type: onSubmit
 * Catalog Item: Network Request
 * Applies to a Catalog Item: true
 */
function onSubmit() {
    var accessLevel = g_form.getValue('access_level');
    var justification = g_form.getValue('business_justification');

    var restrictedLevels = ['elevated', 'admin'];

    if (restrictedLevels.indexOf(accessLevel) !== -1) {
        if (!justification || justification.trim().length < 30) {
            g_form.showFieldMsg('business_justification',
                'Elevated/Admin access requires a detailed business justification (min 30 characters).',
                'error');
            return false; // block submission
        }
    }
    return true;
}
