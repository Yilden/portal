const wsc = extendContent(UnitType, "storage-cube", {
  load(){
    this.region = Core.atlas.find(this.name);
});

wsc.weapon = UnitTypes.draug.weapon;
wsc.create(prov(() => new JavaAdapter(GroundUnit, {
  behavior(){
    /**I didn't realize this exists*/
  },
                          
  getPowerCellRegion(){
    return Core.atlas.find(modName + "-storage-cube-cell")
  },
   
  drawStats(){
    if(this.drawCell){
      const health = unit.healthf();
    
      Draw.color(Color.valueOf("f5bfe1"), Color.valueOf("000000"), health + Mathf.absin(Time.time(), Math.max(health * 5, 1), 1 - health));
      Draw.rect(unit.getPowerCellRegion());
      Draw.color();
    }
  },
  
  draw(){
    Draw.mixcol(Color.white, this.hitTime / this.hitDuration);
    
    var floor = this.getFloorOn;
    
    if(floor.isLiquid){
      Draw.color(Color.white, floor.color, 0.5);
    }
    if(floor.isLiquid){
      Draw.color(Color.white, floor.color, this.drownTime * 0.4);
    } else {
        Draw.color(Color.white);
    }
    
    Draw.rect(this.region, this.x, this.y, this.rotation - 90);
    Draw.mixcol();
  },
  
  countsAsEnemy(){
    return false;
  },
   
  updateTargeting(){
    if(this.target != null){
      this.target = null;
    }
  },
    
  update(){
    //this.super$update();
    //BaseUnit
    if(this.isDead()){
    //dead enemies should get immediately removed
      this.remove();
      return;
    }
    this.hitTime -= Time.delta();
    if(Vars.net.client()){
      this.interpolate();
      this.status.update(this);
      return;
    }
    if(!this.isFlying() && (Vars.world.tileWorld(this.x, this.y) != null && !(Vars.world.tileWorld(this.x,this.y).block() instanceof BuildBlock) && Vars.world.tileWorld(this.x, this.y).solid())){
      //when it is stuck in a WALL
      //this.kill();
    }
    this.avoidOthers();
    if(this.spawner != this.noSpawner && (Vars.world.tile(this.spawner) == null || !(Vars.world.tile(this.spawner).entity instanceof UnitFactoryEntity))){
      //when its factory is in a COFFIN
      this.kill();
    }
    this.updateTargeting();
    //this.state.update(); //braindead
    this.updateVelocityStatus();
    //if(this.target != null) this.behavior();
    if(!this.isFlying()){
      this.clampPosition();
    }

    //GroundUnit
    this.stuckTime = !this.vec.set(this.x, this.y).sub(this.lastPosition()).isZero(0.0001) ? 0 : this.stuckTime + Time.delta();
    if(!this.velocity().isZero()){
      this.baseRotation = Mathf.slerpDelta(this.baseRotation, this.velocity().angle(), 0.05);
    }
    if(this.stuckTime < 1.0){
      this.walkTime += Time.delta();
    }
  }
})));
