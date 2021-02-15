scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(7, 11), false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(14, 6), false)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile0`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile1`)
    info.changeScoreBy(10)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(10)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(28)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f 5 f f . . . . . . 
    . . . . f f 5 2 5 f f . . . . . 
    . . . f f 2 2 2 2 2 f f . . . . 
    . . . f f d d d d d f f . . . . 
    . . . f f d e d e d f f . . . . 
    . . f f f d d d d d f f f . . . 
    . f f f f f d d d f f f f f . . 
    . f f f f d 2 2 2 d f f f f . . 
    . . . f f 5 2 5 2 5 f f . . . . 
    . . . . f d 8 8 8 d f . . . . . 
    . . . . . . 8 8 8 . . . . . . . 
    . . . . . . d . d . . . . . . . 
    . . . . . . 2 . 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 75, 75)
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level2`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairWest)
scene.cameraFollowSprite(mySprite)
