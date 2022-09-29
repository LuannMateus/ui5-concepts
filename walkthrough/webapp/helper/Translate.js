sap.ui.define(
  ["sap/ui/model/resource/ResourceModel"],
  function (ResourceModel) {
    "use strict";

    return {
      getTranslateText: function (key, args = []) {
        const i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        });

        const bundle = i18nModel.getResourceBundle();

        return bundle.getText(key, args);
      },
    };
  }
);
