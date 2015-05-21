var SpaceView = Backbone.View.extend({
    tagName: "div",
    className: "space",

    events: {
      "click": 'selectSpace'
    }
	initialize: function() {
		console.log("space view created");
		this.render()
	},
  render: function(){
    
  }
