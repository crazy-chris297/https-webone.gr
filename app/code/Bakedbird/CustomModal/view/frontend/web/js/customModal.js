require(["jquery", "Magento_Ui/js/modal/modal"], function ($, modal) {
    var options = {
        type: "popup",
        responsive: true,
        buttons: [],
        modalClass: "product-video-modal",
    };

    var popup = modal(options, $("#layers-video-modal"));
    $("#layers-video-modal-button").on("click", function () {
        $("#layers-video-modal").modal("openModal");
    });
});
