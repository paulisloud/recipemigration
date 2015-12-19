if ( Meteor.isClient ) {
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
}
