var game={
    start: function(){
<<<<<<< HEAD
        for(var i=0; i<400; i++){
            var game=document.getElementById("game");

            var block=document.createElement("div");
            if(i>=260){
                block.className="tile soil";
            }else if(i==213||i==193||i==194||i==233||i==234||i==214 ||i==253||i==254){
                block.className="tile tree";
            }else if((85<=i&& i<=90)||(103<=i&&110>=i) ||(123<=i&&131>=i)||(144<=i&&150>=i)){
                block.className="tile cloud";
            }else if((171<=i&& i<=176) || (i==256||i==257) || (i==236||i==237)|| (i==192||i==195) ||(151<=i&& i<=156)|| (132<=i&& i<=135)){
                block.className="tile greenery";
            }else if((222<=i&& i<=226)||(242<=i&& i<=246)){
                block.className="tile rock";
            }else{
                block.className="tile sky";
            }


            game.appendChild(block);
            block.addEventListener("click",this.toggle)
        }

        this.selectTools();
    },


    selectedTool:"shovel",

    selectTools: function(){
        var Tools = document.getElementsByClassName("tools");
        for (var i = 0; i < Tools.length; i++) {
            Tools[i].addEventListener("click", function (e) {
                var tool = e.target.id || e.target.parentElement.id;
                game.selectedTool=tool;
            })
        };
    },
    
    toggle: function(){

        this.classList.remove(this.classList[1]);
        this.classList.add("sky");
        console.log(this.classList[1]);
    }

}

game.start();