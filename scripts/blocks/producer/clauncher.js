/** const cl = extendContent (UnitFactory, "cube-factory", {
    buildConfiguration(tile, table){
        table.addImageButton(Icon.upOpen, Styles.clearTransi, run(() => {
            tile.configure(0);
        })).size(50).disabled(boolf(b => tile.entity !== null && !tile.entity.cons.valid()));
    }
    
}); */

//Already found a better solution
