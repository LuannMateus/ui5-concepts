sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },

      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);

        // set data model
        const data = {
          recipient: {
            name: "World",
          },
        };

        const model = new JSONModel(data);

        this.setModel(model);

        this.getRouter().initialize();
      },

      destroy: function () {
        // call the init function of the parent
        UIComponent.prototype.destroy.apply(this, arguments);
      },
    });
  }
);
