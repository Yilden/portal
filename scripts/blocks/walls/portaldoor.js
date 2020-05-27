const door = extendContent(Door, "portal-door", {
 load(){
  this.super$load();
   
  this.region = Core.atlas.find(this.name);
  this.openRegion = Core.atlas.find(this.name + "-open");
 }, 
 generateIcons(){
  return [
   Core.atlas.find(this.name)
  ]
 },
 draw(tile){
  entity = tile.ent();
    
  Draw.rect(this.region, tile.drawx(), tile.drawy());
  
  if(entity.open){
   Draw.rect(this.openRegion, tile.drawx(), tile.drawy());
   }
 },
 update(tile){
  if(tile.entity.cons.valid()){
   Call.onDoorToggle(tile);
   
   tile.entity.cons.trigger();
  }
 }
});
