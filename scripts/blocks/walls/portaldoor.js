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
    
  if(!entity.open){
   Draw.rect(this.region, tile.drawx(), tile.drawy(), e.rotation());
  } else {
     Draw.rect(this.openRegion, tile.drawx(), tile.drawy(), e.rotation());
    }
 },
 
 update(tile){
  var entity = tile.ent();
  if(entity.open && (!entity.cons.valid())){ 
   tile.block().tapped(tile, null);
  }
  else if((!entity.open) && entity.cons.valid()){
   tile.block().tapped(tile, null);
  }
 },
 
 tapped(tile, player){
  if(player != null){
   return;  
  }
  this.super$tapped(tile, player);
 }
});

//Thank you sk7725 again.
