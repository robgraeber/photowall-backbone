
//pass in object with array of photo objects that have medium_url properties
//i.e. new PhotoWall({photos:[{medium_url:"asdf.com/img.png"}]})
var PhotoWall = Backbone.View.extend({
  className:"photoWall",
  initialize:function(options){
    var photoCollection = new PhotoWall.PhotoCollection(this.model.get("photos").slice(0,30));
    this.photoCollectionView = new PhotoWall.PhotoCollectionView({collection: photoCollection});

    $(window).scroll(function(){
      var topHeight = $("body").height() - window.innerHeight;
      if(topHeight - $(window).scrollTop() < 1000){
        var len = this.photoCollectionView.collection.length;
        this.photoCollectionView.collection.add(this.model.get("photos").slice(len, len+15));
      }
    }.bind(this));
  },
  render:function(){
    console.log("Photowall render");
    return this.$el.html(this.photoCollectionView.render());
  }
});

