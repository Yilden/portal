const electric = newEffect(30, e => {
  e.scaled(7, i -> {
    Lines.stroke(3 * i.fout());
    Lines.circle(e.x, e.y, 3 + i.fin() * 10);
  });

  Draw.color(Color.valueOf("#F7F7F7");

  /* Java version
  Angles.randLenVectors(e.id, 6, 2 + 19 * e.finpow(), (x, y) => {
    Fill.circle(e.x + x, e.y + y, e.fout() * 3 + 0.5);
    Fill.circle(e.x + x / 2, e.y + y / 2, e.fout() * 1);
  });
  */

  Draw.color(Color.valueOf("#D4F2FB"), Color.valueOf("#A8E6F9"), Color.valueOf("#F7F7F7"), e.fin());
  Lines.stroke(1.5 * e.fout());

  /* Java Version
  Angles.randLenVectors(e.id + 1, 8, 1 + 23 * e.finpow(), (x, y) => {
    Lines.lineAngle(e.x + x, e.y + y, Mathf.angle(x, y), 1 + e.fout() * 3);
  });
  */
});

const goo = extendContent(Floor, "goo", {});

goo.drownUpdateEffect = electric;
h
