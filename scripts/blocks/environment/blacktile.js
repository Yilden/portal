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
    Mathf.random.setSeed(tile.pos());

      Draw.rect(variantRegions[Mathf.randomSeed(tile.pos(), 0, Math.max(0, variantRegions.length - 1))], tile.worldx(), tile.worldy());

      //drawEdges(tile);

      Floor floor = tile.overlay();
      if(floor != Blocks.air && floor != this){ //ore should never have itself on top, but it's possible, so prevent a crash in that case
        floor.draw(tile);
        }
  }
});
