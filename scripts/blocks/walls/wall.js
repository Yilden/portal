const bwall = extendContent(Wall, "black-wall", {
  handleBulletHit(entity, b){
    entity.damage(0);
  }
});

const bwalllarge = extendContent(Wall, "black-wall-large", {
  handleBulletHit(entity, b){
    entity.damage(0);
  }
});
