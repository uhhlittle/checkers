var SpacesCollection = Backbone.Collection.extend({
  initialize: function() {
    console.log('New Spaces Collection');
  },
  model: SpaceModel,
  url: '/spaces'
});
