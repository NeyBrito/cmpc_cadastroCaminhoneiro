sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("cmpc.migracion.controller.CadastroCaminhoneiro", {
      onInit: function () {
        // debugger;
      },
      onSalvar: function (oEvent) {
        //Pega os valores da tela
        // createEntry and related APIs

        //Pegar modelo global
        let oModel = this.getOwnerComponent().getModel();

        let sCaminho = "/Caminhoneiros";

        let oNovasInformacoes = {
          // @ts-ignore
          CompaniaEenvios: this.byId("nome").getValue(),
          // @ts-ignore
          Placa: this.byId("placa").getValue(),
          // @ts-ignore
          NombreConductor: this.byId("trans").getValue(),
        };

        //Habilita chamadas update e creates
        // @ts-ignore
        oModel.setHeaders({
          "X-Requested-With": "X",
          Cookies: "FwZ2NdYhtzVkUIuDMWZinSWuP7ezHxHusdHV7jABwZg%3D",
          "X-CSRF-Token": "XKAfJ4Yr-hMysOQARrL2Lg==",
        });
        //Habilita chamadas update e creates
        // @ts-ignore
        // @ts-ignore
        oModel.create(sCaminho, oNovasInformacoes, {
          // @ts-ignore
          success: (oResult) => {
                MessageToast.show("Dados cadastrados com sucesso!");
            // MessageBox.success("Dados inseridos com sucesso!", {
            //   title: "Sucesso", // default
            //   onClose: null, // default
            //   styleClass: "", // default
            //   actions: sap.m.MessageBox.Action.OK, // default
            //   emphasizedAction: sap.m.MessageBox.Action.OK, // default
            //   initialFocus: null, // default
            //   textDirection: sap.ui.core.TextDirection.Inherit, // default
            // });

            // this._configuraVisibilidade(false, true);
            // this._configuraEdicao(false);
          },

          error: (oError) => {
            // MessageToast.show(JSON.parse(oError.responseText).error.innererror.errordetails[0].message);
            MessageBox.error(
              JSON.parse(oError.responseText).error.innererror.errordetails[0]
                .message
            );
            // @ts-ignore
          },
        });
      },
    });
  }
);
