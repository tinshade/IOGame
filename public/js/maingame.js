var window_height = window.innerHeight;
var window_width = window.innerWidth;

var config={
    type:Phaser.AUTO,
    width:window_width,
    height:window_height,
    backgroundColor: '#000',
    physics: {
        default:'arcade',
        arcade:{
            gravity:{
                y:0
            },
            fps:60,
        }
    },
    scene:{
        preload: preload,
        create: create,
        update: update,
    }
}

var game = new Phaser.Game(config)

function preload(){

}
function create(){
    
}
function update(){
    
}