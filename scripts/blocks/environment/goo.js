const electric = newEffect(30, e => {
  /* Java version
  Angles.randLenVectors(e.id, 6, 2 + 19 * e.finpow(), (x, y) => {
    Fill.circle(e.x + x, e.y + y, e.fout() * 3 + 0.5);
    Fill.circle(e.x + x / 2, e.y + y / 2, e.fout() * 1);
  });
  */
             
  const hh = new Floatc2({get: function(x, y){
    Draw.color(Color.valueOf("#F7F7F7");
    Fill.circle(e.x + x, e.y + y, e.fout() * 3 + 0.5);
    Fill.circle(e.x + x / 2, e.y + y / 2, e.fout() * 1);
  }});
  Angles.randLenVectors(e.id, 6, 2 + 19, * e.finpow(), 30, hh);

  /* Java Version
  Angles.randLenVectors(e.id + 1, 8, 1 + 23 * e.finpow(), (x, y) => {
    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 3);
  });
  */

  const hhh = new Floatc2({get: function(x, y){
    Draw.color(Color.valueOf("#D4F2FB"), Color.valueOf("#A8E6F9"), Color.valueOf("#F7F7F7"), e.fin());
    Lines.stroke(1.5 * e.fout());
    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 3);
  }});
  Angles.randLenVectors(e.id + 1, 8, 1 + 23 * e.finpow(), 30, hhh);
});

const goo = extendContent(Floor, "goo", {
  load(){
    this.super$load();
    
    this.region = Core.atlas.find(this.name);
  },
  
  draw(tile){
    Mathf.random.setSeed(tile.pos());
    
    Draw.rect(this.region, tile.worldx(), tile.worldy();
  }
});

goo.drownUpdateEffect = electric;
