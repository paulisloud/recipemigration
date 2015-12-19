Recipes = new Mongo.Collection("recipes");

Schemas = {};

Schemas.Recipe = new SimpleSchema({
  title: {
    type: String,
    max: 200
  },
  summary: {
		type: String,
		optional: true
	},
  cuisine: {
    type: String,
    optional: true
  },
  course: {
    type: String,
    optional: true
  },
  skillLevel: {
    type: String,
    optional: true
  },
  yields: {
    type: String,
    optional: true
  },
  servings: {
    type: Number,
    optional: true
  },
  prepTime: {
    type: String,
    optional: true
  },
  cookTime: {
    type: String,
    optional: true
  },
  calories: {
    type: Number,
    optional: true
  },
  protein: {
    type: Number,
    optional: true
  },
  fat: {
    type: Number,
    optional: true
  },
  sodium: {
    type: Number,
    optional: true
  },
  carbohydrates: {
    type: Number,
    optional: true
  },
  fiber: {
    type: Number,
    optional: true
  },
  sugar: {
    type: Number,
    optional: true
  },
  cholesterol: {
    type: Number,
    optional: true
  },
  ingredients: {
    type: [String],
    optional: true
  },
  instructions: {
    type: [String],
    optional: true
  },
  owner: {
		type: String,
		index: true,
		autoform: {
			omit: true
		},
		autoValue: function(thing){
			if(this.isInsert) {
				return Meteor.userId();
			} else if(this.isUpsert) {
				return {$setOnInsert: Meteor.userId};
			} else {
				this.unset();
			}
		}
	},
})

Recipes.after.insert(function(userId, doc) {
	if(Meteor.isClient) {
		sAlert.success( "Recipe created.", { onRouteClose: false } );
		FlowRouter.go('Recipes');
	}
});

Recipes.after.update(function(userId, doc) {
	if(Meteor.isClient) {
		sAlert.success( "Recipe updated.", { timeout: 1500 } );
	}
});

Recipes.attachSchema(Schemas.Recipe)

Recipes.allow({
	insert: function(userId, doc) {
    return (userId && doc.owner === userId);
	},
	update: function(userId, doc) {
		return (userId && doc.owner === userId);
	},
	remove: function(userId, doc) {
		return (userId && doc.owner === userId);
	}
});
