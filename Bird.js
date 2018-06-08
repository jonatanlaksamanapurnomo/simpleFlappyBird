function Bird (){
    this.gravity = 0.5;
    this.velocity = 0;
    this.upForce = 10;
   this.cons = function () {
       this.x = 25;
       this.y = height/2;

   }

    this.show = function(){
       fill('white');
        ellipse(this.x , this.y , 16 , 16);

    }

    this.update = function () {

       // this.gameOver();
       this.velocity+=this.gravity;
       this.velocity *= 0.9;
       // print(this.velocity);
       this.y += this.velocity;
       this.y = constrain(this.y , 0 , height-10);

    }
    this.up = function () {
     this.velocity -= this.upForce;

    }
    this.gameOver= function () {

       if(this.y >= height-10){
           this.y = height/2;
           this.velocity = 0;
           this.gravity = 0;
       }

    }


}