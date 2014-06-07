
var AppView = Backbone.View.extend({
  className:"appView",
  initialize: function(){
    var photoWallModel = new Backbone.Model({
      photos: this.model.get("photos")
    });
    this.photoWall = new PhotoWall({model:photoWallModel});
  },
  render:function(){
    return this.$el.html(this.photoWall.render());
  }
});

$(function(){
  var appModel = new Backbone.Model({ photos:photos.data });
  var appView = new AppView({model:appModel});
  $('#main_region').append(appView.render());
});