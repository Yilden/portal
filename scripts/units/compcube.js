const wcc = new JavaAdapter(UnitType, {}, "companion-cube",  prov(() => new JavaAdapter(GroundUnit, {
	getPowerCellRegion(){
        return Core.atlas.find(modName + "-companion-cube-cell");
    },
  
  drawStats(unit){
    if(this.drawCell){
      const health = unit.healthf();
    
    Draw.color(Color.valueOf("f5bfe1"), Color.valueOf("000000"), health + Mathf.absin(Time.time(), Math.max(health * 5, 1), 1 - health));
    Draw.rect(unit.getPowerCellRegion());
    Draw.color();
    }
  }
})));