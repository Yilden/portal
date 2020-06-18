const h = "portal";

const bWall = extendContent(Wall, "black-wall", {
  handleBulletHit(entity, b){
    entity.damage(0);
  }
});

const bWallLarge = extendContent(Wall, "black-wall-large", {
  handleBulletHit(entity, b){
    entity.damage(0);
  }
});

const wWall = extendContent(Wall, "white-wall", {
  handleBulletHit(entity, b){
    entity.damage(0);
  }
});

const wWallLarge = extendContent(Wall, "white-wall-large", {
  handleBulletHit(entity, b){
    entity.damage(0);
  }
});

const bWallP = extendContent(Wall, "black-wallp", {
  load(){
    this.region = Core.atlas.find(h + "-black-wall");
  },
  
  generateIcons(){
    return [
      Core.atlas.find(h + "-black-wall"),
      Core.atlas.find(h + "-pmark")
    ]
  },
  
  handleBulletHit(entity, b){
    entity.damage(0);
  }
});

const bWallLargeP = extendContent(Wall, "black-wall-largep", {
  load(){
    this.region = Core.atlas.find(h + "-black-wall-large");
  },
  
  generateIcons(){
    return [
      Core.atlas.find(h + "-black-wall-large"),
      Core.atlas.find(h + "-pmark-large")
    ]
  },
  
  handleBulletHit(entity, b){
    entity.damage(0);
  }
});

const wWallP = extendContent(Wall, "white-wallp", {
  load(){
    this.region = Core.atlas.find(h + "-white-wall");
  },
  
  generateIcons(){
    return [
      Core.atlas.find(h + "-white-wall"),
      Core.atlas.find(h + "-pmark")
    ]
  },
  
  handleBulletHit(entity, b){
    entity.damage(0);
  }
});

const wWallLargeP = extendContent(Wall, "white-wall-largep", {
  load(){
    this.region = Core.atlas.find(h + "-white-wall-large");
  },
  
  generateIcons(){
    return [
      Core.atlas.find(h + "-white-wall-large"),
      Core.atlas.find(h + "-pmark-large")
    ]
  },
  
  handleBulletHit(entity, b){
    entity.damage(0);
  }
});


