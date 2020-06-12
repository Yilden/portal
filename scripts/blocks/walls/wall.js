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
