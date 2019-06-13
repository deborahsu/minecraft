
var game={
    start: function(){

        for(var i=0; i<400; i++){
      ;
            var block=$("<div/>");
           

            if(i>=260 && i<=279){
                block.addClass("tile soilgrass");
            }else if(i>=280){
                block.addClass("tile soil");
            }else if(i==213||i==193||i==194||i==233||i==234||i==214 ||i==253||i==254){
                block.addClass("tile tree");
            }else if((82<=i&& i<=88)||(101<=i&&109>=i) ||(121<=i&&129>=i)||(142<=i&&148>=i)){
                block.addClass("tile cloud");
            }else if((171<=i&& i<=176) || (i==256||i==257) || (i==236||i==237)|| (i==192||i==195) ||(151<=i&& i<=156)|| (132<=i&& i<=135)){
                block.addClass("tile greenery");
            }else if((222<=i&& i<=226)||(242<=i&& i<=246)){
                block.addClass("tile rock");
            }else{
                block.addClass("tile sky");
            }
            
            $("#game").append(block);
          
            block.on ("click",this.toggle)
        }

        this.selectTools();
    },


    selectedTool:"shovel",

    selectTools: function(){
        var Tools = $(".tools");
        for (var i = 0; i < Tools.length; i++) {
            Tools[i].on("click", function (e) {
                var tool = e.target.id || e.target.parentElement.id;
                game.selectedTool=tool;
            })
        };
    },
    
    toggle: function(){
        var materialType=this.classList[1];
        this.classList.remove(materialType);
        this.classList.add("sky");
        console.log(this.classList[1]);
        game.addMaterial(materialType);
    },
    addMaterial: function(material){
        document.getElementById("Material").className=material;
    
    },
    stickMaterial: function(material){
       document.getElementsByClassName(".tile") = document.getElementById("Material");
    
    }
        

    }

game.start();

