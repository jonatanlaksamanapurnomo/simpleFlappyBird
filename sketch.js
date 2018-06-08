let burung;
let obs;
var holePos;
function setup() {

    createCanvas(200,400);
    burung = new Bird();
    obs = new Obst()
    burung.cons();
    holePos = obs.yHole + obs.HOLE_LENGTH;
    // print(burung.x , burung.y);
    // print(obs.x , obs.y);



}
function draw(){
    background(0);
    burung.show();
    burung.update();
    obs.pipe();
    this.gameOver();

}
function keyPressed(){
    if(key ==' '){
        // print("Space");
        burung.up();
    }
}
function gameOver() {
    // print(obs.startBottomPipe);
    if(burung.x == obs.xPos){
        if(burung.y > obs.edgeTopPipe && burung.y < obs.startBottomPipe){
             // print('yey');
        }
        else{
            burung.gameOver();
            obs.pipeDied();
        }

    }



    
}