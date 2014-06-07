PhotoWall.PhotoCollectionView = Backbone.View.extend({
  className: 'photos',
  initialize:function(){
    this.collection.on("add", function(photo){
      this.$el.append(new PhotoWall.PhotoView({model: photo}).render());
    }.bind(this));
  },
  render:function(){
    this.$el.children().detach();
    this.$el.append(
      this.collection.map(function(photo){
        return new PhotoWall.PhotoView({model: photo}).render();
      })
    );
    return this.$el;
  }
});