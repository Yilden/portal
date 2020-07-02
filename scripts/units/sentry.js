const sentry = new JavaAdapter(UnitType, {}, "sentry",  prov(() => new JavaAdapter(GroundUnit, {
	getPowerCellRegion(){
        return Core.atlas.find("portal-sentry-cell");
    },

  drawStats(unit){
    if(this.drawCell){
      const health = unit.healthf();

    Draw.color(Color.valueOf("ffea2b"), Color.black, health + Mathf.absin(Time.time(), Math.max(health * 5, 1), 1 - health));
    Draw.rect(unit.getPowerCellRegion());
    Draw.color();
    }
  }
})));
