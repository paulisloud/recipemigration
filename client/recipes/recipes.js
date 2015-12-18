Template.Recipes.helpers({
  listRecipes: function () {
    return Recipes.find()
  }
})

Template.RecipeHTML.helpers({
  log: function () {
    console.log(this)
  }
})
