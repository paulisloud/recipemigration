// FlowRouter.route('/edit-recipe/:id', {
//   name: "Edit Recipe",
//   subscriptions: function (params) {
//     this.register("Recipes", Meteor.subscribe("recipes"))
//   },
//   action: function () {
//     BlazeLayout.render("MasterLayout", { area: "EditRecipe"})
//   }
// })
//
// FlowRouter.route('/add-recipe', {
//   name: "Add Recipe",
//   action: function () {
//     BlazeLayout.render( "MasterLayout", { area: "AddRecipe" } )
//   }
// })
//
// FlowRouter.route('/recipes', {
//   name: "Recipes",
//   subscriptions: function(params) {
//     // console.log("subscribe and register this subscription as 'myPost'");
//     this.register('Recipes', Meteor.subscribe('recipes'));
//     },
//   action: function () {
//     BlazeLayout.render('MasterLayout', { area: "Recipes" });
//   }
// })
