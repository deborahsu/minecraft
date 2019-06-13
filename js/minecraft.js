
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
                block.addClass=("tile tree");
            }else if((85<=i&& i<=90)||(103<=i&&110>=i) ||(123<=i&&131>=i)||(144<=i&&150>=i)){
                block.addClass("tile cloud");
            }else if((171<=i&& i<=176)|| (i==192||i==195) ||(151<=i&& i<=156)|| (132<=i&& i<=135)){
                block.addClass("tile greenery");
            }else if((222<=i&& i<=226)||(242<=i&& i<=246)|| (i==256||i==257) || (i==236||i==237)){
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
    buildMode:"off",

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
        if(game.buildMode=="off"){
            var materialType=this.classList[1];
            if(materialType=="soil"&& game.selectedTool=="shovel"){
                this.classList.remove(materialType);
                this.classList.add("sky");   
                game.addMaterial(materialType); 
            }else if((materialType=="tree"|| materialType=="greenery")&& game.selectedTool=="axe"){
                this.classList.remove(materialType);
                this.classList.add("sky");
                game.addMaterial(materialType);
            } else if(materialType=="rock"&& game.selectedTool=="pickaxe"){
                this.classList.remove(materialType);
                this.classList.add("sky");
                game.addMaterial(materialType);
            }else{
                game.wrongTool();
            }
        } else{
            game.build(this);
        }
    },
    addMaterial: function(material){
        document.getElementById("Material").className=material;

        return game.buildMaterial=material;
    },
    wrongTool:function(){
            $("#"+game.selectedTool).css("border-color","red");
            setTimeout(game.clearWrongTool,500);

    
    },
    // stickMaterial: function(material){
    //    document.getElementsByClassName(".tile") = document.getElementById("Material");
    
    // }
        

   // },
    clearWrongTool:function(){
            $("#"+game.selectedTool).css("border-color","white");
    },
    setBuildMode: function(){
        $("#Material").removeClass();
        game.buildMode="on";
        console.log(game.buildMode);
        
    },
    build :function(target){
        
        target.classList[1]=game.buildMaterial;
        console.log(target.classList[1]);
        game.buildMode="off";

game.start();


    }
}


game.start();
 $("#Material").click(function(){
             game.setBuildMode();
        });
