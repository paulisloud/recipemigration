// SingleRecipeSub = new SubsManager()

Template.RecipeHTML.onCreated(function () {
  var self = this
  self.ready = new ReactiveVar()
  self.autorun(function () {
    var recipeId = FlowRouter.getParam('_id')
    var handle = SingleRecipeSub.subscribe("singleRecipe", recipeId)
    self.ready.set(handle.ready())
  })
})

Template.RecipeHTML.helpers({
  post: function () {
    var recipeId = FlowRouter.getParam('_id')
    var recipe = Recipes.findOne({_id: recipeId}) || {}
    return recipe
  },
  log: function () {
    console.log(this)
  }
})
