Router.configure({
	loadingTemplate: 'Loading',
});

AccountsTemplates.configureRoute('signIn', {
	layoutTemplate: "LoginLayout",
	redirect: "/recipes"
});

Router.route("/", function(){
	this.redirect("/recipes")
})

Router.route("/logout", function(){
	AccountsTemplates.logout();
});
