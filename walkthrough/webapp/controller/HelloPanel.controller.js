sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/syncStyleClass",
  ],
  function (Controller, MessageToast, syncStyleClass) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      onShowHello: function () {
        // read msg from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg", [sRecipient]);

        // show message
        MessageToast.show(sMsg);
      },

      onOpenDialog: function () {
        if (!this.dialog) {
          this.dialog = this.loadFragment({
            name: "sap.ui.demo.walkthrough.view.HelloDialog",
          }).then(
            function (dialog) {
              syncStyleClass(
                this.getOwnerComponent().getContentDensityClass(),
                this.getView(),
                dialog
              );

              return dialog;
            }.bind(this)
          );
        }

        this.dialog.then(function (dialog) {
          dialog.open();
        });
      },
      onCloseDialog: function () {
        this.byId("helloDialog").close();
      },
    });
  }
);
