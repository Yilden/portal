//Replace the string according to the key you want
const bluePortal = "I"
const orangePortal = "O"

const key = Packages.arc.input.KeyCode;
const testSubject = extendContent(Mech, "test-subject", {
  canShoot(player){
    return false;
  },

  updateAlt(player){
    if(Core.input.keyDown(key[bluePortal])){
      print("blue portal")
    }

    else if(Core.input.keyDown(key[orangePortal])){
      print("orange portal")
    }
  }
})
