sap.ui.define(
  ["sap/ui/core/util/MockServer", "sap/base/util/UriParameters"],
  function (MockServer, UriParameters) {
    "use strict";

    return {
      init: function () {
        // create
        const mockServer = new MockServer({
          rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/",
        });

        const uriParameters = new UriParameters(window.location.href);

        // configure mock server with a delay
        MockServer.config({
          autoRespond: true,
          autoRespondAfter: uriParameters.get("serverDelay") || 500,
        });

        // simulate
        const path = sap.ui.require.toUrl(
          "sap/ui/demo/walkthrough/localService"
        );
        mockServer.simulate(
          path + "/metadata.xml",
          path + "/mockdata/invoices.json"
        );

        // start
        mockServer.start();
      },
    };
  }
);
