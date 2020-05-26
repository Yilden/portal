const effectA = newEffect(40, e => {
  Draw.color(Color.valueOf("fafafa"), Color.valueOf("ffffff"), e.fin());
  Lines.swirl(e.x, e.y, e.fout() * 4, 40)
});

const elv = extendContent(CoreBlock, "elevator", {
  load(){
    this.super$load; 
		
    this.region = Core.atlas.find(this.name);
    this.topRegion = Core.atlas.find(this.name + "-top");
  },
  generateIcons(){
    return [
      Core.atlas.find(this.name)	
    ]
  },
  onUnitRespawn(tile, player){
    if(player == null || tile.entity == null) return;
       entity = tile.ent();
       Effects.effect(effectA, entity);
       entity.progress = 0;
       entity.spawnPlayer = player;
       entity.spawnPlayer.onRespawn(tile);
       entity.spawnPlayer.applyImpulse(0, 8);
       entity.spawnPlayer = null;
  },
  draw(tile){
    Draw.rect(this.region, tile.drawx(), tile.drawy());
    
    if(entity.progress <= 1){
      Draw.rect(this.topRegion, tile.drawx(), tile.drawy());
  }		
});

