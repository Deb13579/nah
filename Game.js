class Game {
  constructor(){
  //  this.drivequestion = createElement('h1');
    this.drive1 = createElement('h2');
  /*  this.button1 = createButton('turn right');
    this.button2 = createButton('turn left');
    this.button3 = createButton('take u turn');
    this.button4 = createButton('no u turn');
    this.button5 = createButton('one way');
    this.button6 = createButton('no one way');
    this.button7 = createButton('no going back');
    this.button8 = createButton('Fun');
    this.button9 = createButton('60 limit')
    this.button10 = createButton('Faster than 50')
    this.button11 = createButton('50 limit')
    this.button12 = createButton('This is confusing')
    this.button13 = createButton('Moooooo')
    this.button14 = createButton('No carts allowed')
    this.button15 = createButton('Bullock carts not allowed')
    this.button16 = createButton('No horse carts allowed')
    this.button17 = createButton('No carts allowed')
    this.button18 = createButton('No human carts allowed')
    this.button19 = createButton('Wheel carts not allowed')
    this.button20 = createButton('No hand carts allowed')
    this.button21 = createButton('More restrictions')
    this.button22 = createButton('No restrictions')
    this.button23 = createButton('End of all restrictions')
    this.button24 = createButton('All restrictions')
    this.button25 = createButton('Go ahead of me')
    this.button26 = createButton('You are cheating')
    this.button27 = createButton('No overtaking')
    this.button28 = createButton('Endgame')*/
    
  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  show(){

   /* this.drivequestion.style('font-weight', '10px');
          this.drivequestion.html("See the Image carefully,<br>choose the correct option below,<br>Click to select answer");
          this.drivequestion.position(650,80)*/

          
      /*    this.button1.style('font-weight', '40px');
          this.button1.style('border-radius', '10px');
          this.button1.style('background', 'skyblue');
          this.button1.position(650,300);

         
          this.button2.style('font-weight', '20px');
          this.button2.style('border-radius', '10px');
          this.button2.style('background', 'skyblue');
          this.button2.position(850,300);

         
          this.button3.style('font-weight', '20px');
          this.button3.style('border-radius', '10px');
          this.button3.style('background', 'skyblue');
          this.button3.position(650,350);

         
          this.button4.style('font-weight', '20px');
          this.button4.style('border-radius', '10px');
          this.button4.style('background', 'skyblue');
          this.button4.position(850,350);*/



  }
    

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerageRef = await database.ref('playerage').once("value");
      if(playerageRef.exists()){
        playerage = playerageRef.val();
        player.getage();

      }

      form = new Form()
      form.display();
    }

   
   
  }

  


  play(){
      form.hide();
      Player.getPlayerInfo();
      //question = new Question();
          

      background(173,133,133);      

      if(allPlayers !== undefined){
        for(var plr in allPlayers){
          fill(77,105,157);
          textSize(30);
          text("Welcome "+ allPlayers[plr].name,20,35);
          fill("black");
          textSize(20);
         // this.button1.show();
         // this.button2.show();
         // this.button3.show();
         // this.button4.show();
         
         // traffic1 = createSprite(350,280,50,50);
         // traffic1.addImage("traffic",trafficimg);
         // traffic1.scale = 1.5;
        //  traffic1.visible = false;

     /*     this.button4.mousePressed(()=>{
            //button1.html('No way ahead');
            // button2.html('Two way');
             //button3.html('One way');
             //button4.html('Go straight');
 
            this.button1.remove();
            this.button2.remove();
            this.button3.remove();
            this.button4.remove();
            this.button5.show();
            this.button6.show();
            this.button7.show();
            this.button8.show();
            this.button5.style('font-weight', '40px');
            this.button5.style('border-radius', '10px');
            this.button5.style('background', 'skyblue');
            this.button5.position(650,300);
  
           
            this.button6.style('font-weight', '20px');
            this.button6.style('border-radius', '10px');
            this.button6.style('background', 'skyblue');
            this.button6.position(850,300);
  
           
            this.button7.style('font-weight', '20px');
            this.button7.style('border-radius', '10px');
            this.button7.style('background', 'skyblue');
            this.button7.position(650,350);
  
           
            this.button8.style('font-weight', '20px');
            this.button8.style('border-radius', '10px');
            this.button8.style('background', 'skyblue');
            this.button8.position(850,350);
  
            traffic1.destroy();
            traffic2 = createSprite(350,280,50,50);
            traffic2.addImage("traffic",traffic2img);
            traffic2.scale = 0.5;
             
           })
          ,
           this.button5.mousePressed(()=>{
            //button1.html('No way ahead');
            // button2.html('Two way');
             //button3.html('One way');
             //button4.html('Go straight');
            
            this.button5.remove();
            this.button6.remove();
            this.button7.remove();
            this.button8.remove();
            this.button9.show();
            this.button10.show();
            this.button11.show();
            this.button12.show();
            this.button9.style('font-weight', '40px');
            this.button9.style('border-radius', '10px');
            this.button9.style('background', 'skyblue');
            this.button9.position(650,300);
  
           
            this.button10.style('font-weight', '20px');
            this.button10.style('border-radius', '10px');
            this.button10.style('background', 'skyblue');
            this.button10.position(850,300);
  
           
            this.button11.style('font-weight', '20px');
            this.button11.style('border-radius', '10px');
            this.button11.style('background', 'skyblue');
            this.button11.position(650,350);
  
           
            this.button12.style('font-weight', '20px');
            this.button12.style('border-radius', '10px');
            this.button12.style('background', 'skyblue');
            this.button12.position(850,350);
  
             traffic2.visible = false;
             limit50 = createSprite(350,280,50,50);
             limit50.addImage("traffic",i1_img);
             limit50.scale = 5;
             
           }),
           this.button11.mousePressed(()=>{
            //button1.html('No way ahead');
            // button2.html('Two way');
             //button3.html('One way');
             //button4.html('Go straight');
 
            this.button9.remove();
            this.button10.remove();
            this.button11.remove();
            this.button12.remove();
            this.button13.show();
            this.button14.show();
            this.button15.show();
            this.button16.show();
            this.button13.style('font-weight', '40px');
            this.button13.style('border-radius', '10px');
            this.button13.style('background', 'skyblue');
            this.button13.position(650,300);
  
           
            this.button14.style('font-weight', '20px');
            this.button14.style('border-radius', '10px');
            this.button14.style('background', 'skyblue');
            this.button14.position(850,300);
  
           
            this.button15.style('font-weight', '20px');
            this.button15.style('border-radius', '10px');
            this.button15.style('background', 'skyblue');
            this.button15.position(650,350);
  
           
            this.button16.style('font-weight', '20px');
            this.button16.style('border-radius', '10px');
            this.button16.style('background', 'skyblue');
            this.button16.position(850,350);
  
             limit50.visible = false;
             cows = createSprite(350,280,50,50);
             cows.addImage("mooooo",i20_img);
             cows.scale = 5;
             
           }),

           this.button15.mousePressed(()=>{
            //button1.html('No way ahead');
            // button2.html('Two way');
             //button3.html('One way');
             //button4.html('Go straight');
 
            this.button13.remove();
            this.button14.remove();
            this.button15.remove();
            this.button16.remove();
            this.button17.show();
            this.button18.show();
            this.button19.show();
            this.button20.show();
            this.button17.style('font-weight', '40px');
            this.button17.style('border-radius', '10px');
            this.button17.style('background', 'skyblue');
            this.button17.position(650,300);
  
           
            this.button18.style('font-weight', '20px');
            this.button18.style('border-radius', '10px');
            this.button18.style('background', 'skyblue');
            this.button18.position(850,300);
  
           
            this.button19.style('font-weight', '20px');
            this.button19.style('border-radius', '10px');
            this.button19.style('background', 'skyblue');
            this.button19.position(650,350);
  
           
            this.button20.style('font-weight', '20px');
            this.button20.style('border-radius', '10px');
            this.button20.style('background', 'skyblue');
            this.button20.position(850,350);

             cows.visible = false;
             humans = createSprite(350,280,50,50);
             humans.addImage("shoooo",i21_img);
             humans.scale = 5;
             
           }),
           this.button20.mousePressed(()=>{
            //button1.html('No way ahead');
            // button2.html('Two way');
             //button3.html('One way');
             //button4.html('Go straight');
 
            this.button17.remove();
            this.button18.remove();
            this.button19.remove();
            this.button20.remove();
            this.button21.show();
            this.button22.show();
            this.button23.show();
            this.button24.show();
            this.button21.style('font-weight', '40px');
            this.button21.style('border-radius', '10px');
            this.button21.style('background', 'skyblue');
            this.button21.position(650,300);
  
           
            this.button22.style('font-weight', '20px');
            this.button22.style('border-radius', '10px');
            this.button22.style('background', 'skyblue');
            this.button22.position(850,300);
  
           
            this.button23.style('font-weight', '20px');
            this.button23.style('border-radius', '10px');
            this.button23.style('background', 'skyblue');
            this.button23.position(650,350);
  
           
            this.button24.style('font-weight', '20px');
            this.button24.style('border-radius', '10px');
            this.button24.style('background', 'skyblue');
            this.button24.position(850,350);

             humans.visible = false;
             free = createSprite(350,280,50,50);
             free.addImage("YIPPEE",i35_img);
             free.scale = 5;
             
           }),
           this.button23.mousePressed(()=>{
            //button1.html('No way ahead');
            // button2.html('Two way');
             //button3.html('One way');
             //button4.html('Go straight');
 
            this.button21.remove();
            this.button22.remove();
            this.button23.remove();
            this.button24.remove();
            this.button25.show();
            this.button26.show();
            this.button27.show();
            this.button28.show();
            this.button25.style('font-weight', '40px');
            this.button25.style('border-radius', '10px');
            this.button25.style('background', 'skyblue');
            this.button25.position(650,300);
  
           
            this.button26.style('font-weight', '20px');
            this.button26.style('border-radius', '10px');
            this.button26.style('background', 'skyblue');
            this.button26.position(850,300);
  
           
            this.button27.style('font-weight', '20px');
            this.button27.style('border-radius', '10px');
            this.button27.style('background', 'skyblue');
            this.button27.position(650,350);
  
           
            this.button28.style('font-weight', '20px');
            this.button28.style('border-radius', '10px');
            this.button28.style('background', 'skyblue');
            this.button28.position(850,350);

             free.visible = false;
             deb = createSprite(350,280,50,50);
             deb.addImage("sahiti",i19_img);
             deb.scale = 5;
            
           }),
           this.button27.mousePressed(()=>{
            this.button25.remove();
            this.button26.remove();
            this.button27.remove();
            this.button28.remove();
          //  this.drivequestion.remove();
            deb.visible = false;
            this.endbutton.show();
            this.endbutton.style('font-weight', '20px');
            this.endbutton.style('border-radius', '10px');
            this.endbutton.style('background', 'skyblue');
            this.endbutton.position(500,350);
            
            
           })*/
          
        }
    
      drawSprites();
    }

  } 

}
