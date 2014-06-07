PhotoWall.PhotoView = Backbone.View.extend({
  className: 'photoImg',
  tagName: "img",
  attributes: function() {
    return {
      src: this.model.get('medium_url'),
    };
  },
  events:{
    "error": "imgError",
  },
  initialize:function(){
    PhotoWall.animateCheck(this);
  },
  imgError:function(e){
    e.target.style.display = 'none';
  },
  render:function(){
    return this.$el;
  },
});
PhotoWall.isScrolledIntoView = function(el){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(el).offset().top;
    var elemBottom = elemTop + $(el).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};
PhotoWall.animateCheck = function(view){
  if(PhotoWall.isScrolledIntoView(view.el) && !view.model.get("alreadyAnimated")){
    view.model.set("alreadyAnimated", true);
    TweenMax.from(view.el, 1.2, {rotationY:500, scale:0.1, ease:Power1.easeOut});
  }
};