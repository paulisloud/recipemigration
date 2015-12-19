// RecipeController = RouteController.extend({
//     layoutTemplate: "MasterLayout",
//     onBeforeAction: function () {
//       if ( !Meteor.user() && !Meteor.loggingIn() ) {
//   			this.layout( "Login" );
//   			this.next();
//   		} else {
//   			this.next();
//   		}
//     },
//     subscriptions: function () {
//       return Meteor.subscribe( "recipes" )
//     }
// })
