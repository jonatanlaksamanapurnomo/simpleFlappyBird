function Obst(){


     this.HOLE_LENGTH = 85; // it will always constain 85
      this.xPos = width;
      this.pipeWidth = 32;
      this.pipeHeight = height/2;
      this.status = true;




         //this is the function to call obstacle whenever the obs come the hole size will always constant

         this.pipe = function () {
            if(this.status){
                //top pipe edge y axis
                this.edgeTopPipe = this.pipeHeight; // cause top pipe always start from 0 in y axis
                //bottom pipe START << start y axis
                this.startBottomPipe = this.pipeHeight+ this.HOLE_LENGTH;
                //top obstacle we just use height hole as length
                this.updateX();
                fill('red');
                rect(this.xPos,0,this.pipeWidth,this.pipeHeight);
                //botom obs we use height+hole length  as satrting point
                fill('pink');
                rect(this.xPos,this.startBottomPipe, this.pipeWidth , height);
                //cek if the pipe is of screen
                this.offScreen();

            }
            else{
                // do nothing not show all its mean games end
            }



         }

         //function to update x axis so it can move
        this.updateX = function () {
             this.xPos--;
         }

         //function to update y axis so its randomly having a spot
         this.updateY = function () {
             this.pipeHeight = random(height/2);

         }

         //well i just messing with array so i decide to make offscreen so when the obs is offscreen
         //it generate new obs hehehe with little bit of cheat for sure
         this.offScreen = function () {
             if(this.xPos < -this.pipeWidth){
                 // print('offSetBos');
                 this.xPos = width;
                 this.updateY();
             }

         }

        this.pipeDied = function () {
            this.status = false;

        }


}