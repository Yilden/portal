const inferior = extendContent(Floor, "black-tile", {
  load: function(){
    this.region = Core.atlas.find(this.name);
  },
  
  generateIcons(){
    return [
      Core.atlas.find(this.name)
    ];
  },
  
  draw(tile){
    Draw.rect(this.region, tile.worldx(), tile.worldy());
  }
});
