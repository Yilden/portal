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
  }
})));
