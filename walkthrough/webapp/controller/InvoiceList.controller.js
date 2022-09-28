sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/walkthrough/model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
      formatter,

      onInit: function () {
        const viewModel = new JSONModel({
          currency: "EUR",
        });

        this.getView().setModel(viewModel, "view");
      },

      onFilterInvoices: function (event) {
        const filter = [];

        const query = event.getParameter("query");

        if (query) {
          filter.push(
            new Filter("ProductName", FilterOperator.Contains, query)
          );
        }

        const list = this.byId("invoiceList");

        const biding = list.getBinding("items");

        biding.filter(filter);
      },

      onPress: function (event) {
        const item = event.getSource();

        const router = this.getOwnerComponent().getRouter();

        router.navTo("detail", {
          invoicePath: window.encodeURIComponent(
            item.getBindingContext("invoice").getPath().substr(1)
          ),
        });
      },
    });
  }
);
