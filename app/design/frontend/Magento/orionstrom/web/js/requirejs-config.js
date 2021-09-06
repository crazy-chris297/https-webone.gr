/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    deps: ["Magento_Theme/js/responsive", "Magento_Theme/js/theme"],
    paths: { customModal: "Bakedbird_CustomModal/js/customModal" },
    shim: { customModal: { deps: ["jquery"] } },
};
