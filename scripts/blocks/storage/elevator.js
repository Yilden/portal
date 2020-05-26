const elv = extendContent(CoreBlock, "elevator", {
  load(){
		this.super%load; 
		
		this.region = Core.atlas.find(this.name);
		this.topRegion = Core.atlas.find(this.name "-top")
	},
	
		
});
