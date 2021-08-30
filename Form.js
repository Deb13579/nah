class Form {

  constructor() {
    this.input = createInput("Name");
    this.input1 = createInput("Age");
    this.button = createButton('Submit');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.resetbutton = createButton('Reset')
    //this.button2 = createImg("Today.png")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.input1.hide();
    this.title.hide();
   // this.button2.hide();
  }

  display(){
    background(124,196,125);
  
    this.input1.position(540,400);
    this.input1.style('width', '250px');
    this.input1.style('height', '20px');
    this.input1.style('background', 'lavender');

    this.input.position(540,370);
    this.input.style('width', '250px');
    this.input.style('height', '20px');
    this.input.style('background', 'lavender');

    this.button.position(630,450);
    this.button.style('font-size', '15px');
    this.button.style('background', 'skyblue');
    this.resetbutton.style('font-weight', '20px');
    this.resetbutton.style('border-radius', '10px');
    this.resetbutton.style('background', 'skyblue');
    this.resetbutton.position(1200,550);
  //  this.button2.position(605,320)
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.input1.hide();
        test.visible = true;
        playerage  =this.input1.value();
        player.name = this.input.value();
        if(playerage>=18){
          this.greeting.html("Hello "+player.name);
          this.greeting.position(605,320);    
          mybutton = createButton('Next');
          mybutton.position(640,380);
          mybutton.style('background', 'transparent');
          mybutton.style('color', 'transparent')
          mybutton.style('border', 'transparent')
         mybutton.mousePressed(()=>{
            mybutton.hide();
            game.update(1);
            background2.visible = true;
            car1.visible = true;
            invisibleGround.visible = false;
            invisibleGround2.visible = false;
          })

          
        
        //var num = "swz"+player.age+1;
        //player.age= num;
          player.update();
          player.updateage(playerage);
        }
        else{
          this.greeting.html("Your are not eligible<br>to take the test");
          this.greeting.position(595,320);    
        }
        if(playerage == '∞'){
          this.greeting.html("Hahahahaha nice try!<br>No one is ∞ years old ;)");
          this.greeting.position(605,320);   
        }
    });
    this.resetbutton.mousePressed(()=>{
      game.update(0)
      player.updateage(0)
})

  }
}
