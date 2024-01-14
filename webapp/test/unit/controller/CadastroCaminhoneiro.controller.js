/*global QUnit*/

sap.ui.define([
	"cmpc/migracion/controller/CadastroCaminhoneiro.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CadastroCaminhoneiro Controller");

	QUnit.test("I should test the CadastroCaminhoneiro controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
