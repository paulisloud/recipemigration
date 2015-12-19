RecipesSub = new SubsManager()

Template.Recipes.onCreated(function () {
  var self = this
  self.ready = new ReactiveVar()
  self.autorun(function () {
    var handle = RecipesSub.subscribe("recipes")
    self.ready.set(handle.ready())
  })
})

Template.Recipes.helpers({
  listRecipes: function () {
    return Recipes.find()
  },
  pathForEdit: function () {
    var recipe = this
    var params = {
      _id: recipe._id
    }
    var routeName = "Edit Recipe"
    var path = FlowRouter.path(routeName, params)
    return path
  },
  pathForCode: function () {
    var recipe = this
    var params = {
      _id: recipe._id
    }
    var routeName = "Recipe HTML"
    var path = FlowRouter.path(routeName, params)
    return path
  }
})
