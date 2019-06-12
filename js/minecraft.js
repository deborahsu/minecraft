var game={
    start: function(){
        for(var i=0; i<100; i++){
            var game=document.getElementById("game");

            var block=document.createElement("div");
            if(i>=60){
                block.className="tile soil";
            }else if(i==57||i==47){
                block.className="tile tree";
            }else if(21<=i&& i<=25){
                block.className="tile cloud";
            }else if((36<=i&& i<=38) || (i==46||i==48)){
                block.className="tile greenery";
            }else if(i==41||i==51){
                block.className="tile rock";
            }else{
                block.className="tile sky";
            }
            block.innerText=i;

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