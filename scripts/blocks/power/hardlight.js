/*
const openD = newEffect(10, e => {
  Draw.color(Color.valueOf("ffde05"), Color.valueOf("ffe645"), e.fin());
  Lines.stroke(e.fout() * 2.6);
  Lines.square(e.x, e.y, 9 + e.fin() * 2);
});

const closeD = newEffect(10, e => {
  Draw.color(Color.valueOf("0083cf"), Color.valueOf("3da9e8"), e.fin());
  Lines.stroke(e.fout() * 2.6);
  Lines.square(e.x, e.y, 9 + e.fout() * 2);
});
*/

if(!Vars.headless){
	importPackage(Packages.arc.graphics.gl);
	const shader = new JavaAdapter(Shader, {
		apply(){
			this.setUniformf("u_time", Time.time() / Scl.scl(1.0));
		}
	},
    #ifdef GL_ES
precision mediump float;precision mediump int;
#endif
uniform sampler2D u_texture;uniform float u_time;varying vec4 v_color;varying vec2 v_texCoord;void main(){vec4 color = texture2D(u_texture, v_texCoord.xy);float t = clamp((sin(u_time * .01 + gl_FragCoord.x * .01 + gl_FragCoord.y * .005) + 1.) / 2., 0., 1.);gl_FragColor = vec4(color.rgb , mix(0., 1., t));}
  
}

const door = extendContent(Door, "hard-light", {
 load(){
  this.super$load();
   
  this.region = Core.atlas.find(this.name);
  this.onRegion = Core.atlas.find(this.name + "-on");
 }, 
 
 generateIcons(){
  return [
   Core.atlas.find(modName + "-hard-light-on")
  ]
 },
 
 draw(tile){
  entity = tile.ent();
   
  if(!entity.open){
   Draw.rect(this.region, tile.drawx(), tile.drawy(), tile.rotation() * 90);
  } else {
     Draw.blend(Blending.additive);
     Draw.shader(shader);
     Draw.alpha(0.5);
     Draw.rect(this.onRegion, tile.drawx(), tile.drawy(), tile.rotation() * 90);
    }
   
  Draw.blend();
  Draw.shader();
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

door.openfx = Fx.none;
door.closefx = Fx.none;

//Thank you sk7725 again.
