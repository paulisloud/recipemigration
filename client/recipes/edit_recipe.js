Template.EditRecipe.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var recipeId = FlowRouter.getParam('_id')
    self.subscribe('singleRecipe', recipeId)
  })
})

Template.EditRecipe.helpers({
  post: function () {
    var recipeId = FlowRouter.getParam('_id')
    var recipe = Recipes.findOne({_id: recipeId}) || {}
    return recipe
  }
})
