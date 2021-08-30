class Player {
  constructor(){
    this.name = null;
    this.age = 0;
    this.reset = null;
  }

  getage(){
    var playerageRef = database.ref('playerage');
    playerageRef.on("value",(data)=>{
      playerage = data.val();
    })
  }

  updateage(age){
    database.ref('/').update({
      playerage: age
    });
  }

  update(){
    var playerIndex = "players/player :" + this.name;
    database.ref(playerIndex).set({
      name:this.name,
      age:this.age
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
