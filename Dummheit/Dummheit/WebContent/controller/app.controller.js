sap.ui.controller("sap.myApp.controller.app", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf view.App
	 */

	onClick : function() {
		alert("hello du huren");
	},
	onGo : function(){
		
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("S2");
		
		
	},

	onInit : function() {
		// 16 cell grid layout
	/*	var oLayout = new sap.ui.layout.form.GridLayout({
			singleColumn : true
		// 8 cell grid layout
		});

		var oForm = new sap.ui.layout.form.Form({
			title : new sap.ui.core.Title({
				text : "Grid Layout form"
			}),
			width : '100%',
			layout : oLayout,
			formContainers : [ new sap.ui.layout.form.FormContainer({
				formElements : [ new sap.ui.layout.form.FormElement({
					label : new sap.ui.m.Label({
						text : "Phone"
					}),
					fields : [ new sap.ui.m.TextField({
						layoutData : new sap.ui.layout.form.GridElementData({
							hCells : "2"
						})
					}), new sap.ui.m.TextField({
						layoutData : new sap.ui.layout.form.GridElementData({
							hCells : "2"
						})
					}), new sap.ui.m.TextField({
						layoutData : new sap.ui.layout.form.GridElementData({
							hCells : "2"
						})
					}) ]
				}) ]
			})

			]
		})
		return oForm;
*/
	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf view.App
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf view.App
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf view.App
 */
// onExit: function() {
//
// }
});