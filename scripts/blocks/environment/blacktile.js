const inferior = extendContent(Floor, "black-tile", {
  load: function(){
    this.region = Core.atlas.find(this.name);
  },
  
  generateIcons: function(){
    return [
      Core.atlas.find(this.name)
    ];
  },
  
  draw: function(tile){
    entity = tile.ent();
    
    Draw.rect(this.region, tile.drawx(), tile.drawy());
  }
});