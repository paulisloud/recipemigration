// Router.configure({
// 	loadingTemplate: 'Loading',
// });

AccountsTemplates.configureRoute('signIn', {
	layoutTemplate: "LoginLayout",
	redirect: "/recipes"
});

// Accounts.validateNewUser(function() {
//     return false;
// });

FlowRouter.route("/", {
	action: function () {
		FlowRouter.go("Recipes")
	}
})
//
// Router.route("/logout", function(){
// 	AccountsTemplates.logout();
// });
