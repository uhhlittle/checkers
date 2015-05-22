var SpaceListView = Backbone.View.extend ({
  el: '.game-board',

  initialize: function() {
    console.log("collection view");
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },

  renderOne: function(space) {
    var view = new SpaceView({model: space});
	this.$el.append(view.el);
},

  renderAll: function() {
    this.$el.empty();
	  this.collection.each(this.renderOne.bind(this));
  }
})
