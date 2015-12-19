Meteor.publish("recipes", function () {
  return Recipes.find()
})

Meteor.publish("singleRecipe", function (recipeId) {
  return Recipes.find({_id: recipeId})
})
