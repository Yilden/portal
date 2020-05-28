const wsc = new JavaAdapter(UnitType, {}, "storage-cube",  prov(() => new JavaAdapter(GroundUnit, {
	getPowerCellRegion(){
        return Core.atlas.find(modName + "-storage-cube-cell");
    },
    
  drawStats(unit){
    if(this.drawCell){
      const health = unit.healthf();
    
    Draw.color(Color.valueOf("fafafa"), Color.valueOf("fafafa"), health + Mathf.absin(Time.time(), Math.max(health * 5, 1), 1 - health));
    Draw.rect(unit.getPowerCellRegion());
    Draw.color();
    }
  }
})));