// Router.route( "/edit-recipe/:_id", {
//   name: "Edit Recipe",
//   controller: "RecipeController",
//   data: function () {
//     return Recipes.findOne( { _id: this.params._id } )
//   },
//   action: function() {
// 		if ( !this.ready() ) {
// 			this.render( "Loading", {
// 				data: "Recipe"
// 			});
// 		} else {
// 			this.render( "EditRecipe" )
// 		}
// 	}
// })
//
// Router.route( "/recipe-html/:_id", {
//   name: "Recipe HTML",
//   controller: "RecipeController",
//   data: function () {
//     return Recipes.findOne( { _id: this.params._id } )
//   },
//   action: function() {
// 		if ( !this.ready() ) {
// 			this.render( "Loading", {
// 				data: "Recipe"
// 			});
// 		} else {
// 			this.render( "RecipeHTML" )
// 		}
// 	}
// })
//
//
// Router.route( "/add-recipe/", {
//   name: "Add Recipe",
//   controller: "RecipeController",
//   action: function() {
// 		if ( !this.ready() ) {
// 			this.render( "Loading", {
// 				data: "Recipe"
// 			});
// 		} else {
// 			this.render( "AddRecipe" )
// 		}
// 	}
// })
//
// Router.route( "/recipes", {
//   name: "Recipes",
//   controller: "RecipeController",
//   data: function () {
//     return Recipes.find()
//   },
//   action: function() {
// 		if ( !this.ready() ) {
// 			this.render( "Loading", {
// 				data: "Recipe"
// 			});
// 		} else {
// 			this.render( "Recipes" )
// 		}
// 	}
// })



  FlowRouter.route( "/edit-recipe/:_id", {
    name: "Edit Recipe",
    action: function () {
      BlazeLayout.render( "MasterLayout", { content: "EditRecipe" } );
    }
  })

  FlowRouter.route( "/recipe-html/:_id", {
    name: "Recipe HTML",
    action: function () {
      BlazeLayout.render( "MasterLayout", { content: "RecipeHTML" } )
    }
  })

  FlowRouter.route( "/add-recipe", {
    name: "Add Recipe",
    action: function () {
      BlazeLayout.render( "MasterLayout", { content: "AddRecipe" } )
    }
  })

  FlowRouter.route( "/recipes", {
    name: "Recipes",
    action: function () {
      BlazeLayout.render( "MasterLayout", { content: "Recipes" } )
    }
  })
