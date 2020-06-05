const spawnEffect = newEffect(10, e => {
  Draw.color(Color.valueOf("ffffff");
  Lines.stroke(e.fout() * 5);
  Lines.circle(e.x, e.y, e.fout() * 9);
}

const cl = extendContent(UnitFactory, "cube-factory", {
  load(){
    this.region = Core.atlas.find(this.name);
  },
  
  generateIcons(){
    return [
      Core.atlas.find(this.name)
    ]
  },
  
  onUnitFactorySpawn(){
            if(!(tile.entity instanceof UnitFactoryEntity) || !(tile.block() instanceof UnitFactory)) return;

        entity = tile.ent();
        factory = tile.block();

        entity.buildTime = 0;
        entity.spawned = spawns;

        //Effects.shake(3f, 3f, entity);
        Effects.effect(spawnEffect, tile.drawx(), tile.drawy());

        if(!net.client()){
            BaseUnit unit = factory.unitType.create(tile.getTeam());
            unit.setSpawner(tile);
            unit.set(tile.drawx() + Mathf.range(4), tile.drawy() + Mathf.range(4));
            unit.add();
            unit.velocity().y = factory.launchVelocity;
            Events.fire(UnitCreateEvent(unit));
        }
  },
    
  draw(){
    Draw.rect(this.region, tile.drawx(), tile.drawy());
  }
   
});
