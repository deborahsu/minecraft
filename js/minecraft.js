
var game = {
    landing: function () {
        $("#buttonTutorial").on("click", this.instruct);
        $("#buttonstartGame").on("click", this.start);
    },
    instruct: function () {
        $("iframe").css("visibility", "visible");
    },
    start: function () {
        $(".landing").css("display", "none");
        $(".contain").css("display", "flex");

        for (var i = 0; i < 400; i++) {

            var block = $("<div/>");


            if (i >= 260 && i <= 279) {
                block.addClass("tile soilgrass");
            } else if (i >= 280) {
                block.addClass("tile soil");
            } else if (i == 213 || i == 193 || i == 194 || i == 233 || i == 234 || i == 214 || i == 253 || i == 254) {
                block.addClass("tile tree");
            } else if ((82 <= i && i <= 88) || (101 <= i && 109 >= i) || (121 <= i && 129 >= i) || (142 <= i && 148 >= i)) {
                block.addClass("tile cloud");
            } else if ((171 <= i && i <= 176) || (i == 256 || i == 257) || (i == 236 || i == 237) || (i == 192 || i == 195) || (151 <= i && i <= 156) || (132 <= i && i <= 135)) {
                block.addClass("tile greenery");
            } else if ((222 <= i && i <= 226) || (242 <= i && i <= 246)) {
                block.addClass("tile rock");
            } else {
                block.addClass("tile sky");
            }

            $("#game").append(block);

            block.on("click", game.toggle)
        }

        game.selectTools();
    },


    selectedTool: "shovel",
    buildMode: "off",

    selectTools: function () {
        var Tools = $(".tools");
        for (var i = 0; i < Tools.length; i++) {
            Tools[i].addEventListener("click", function (e) {
                var tool = e.target.id || e.target.parentElement.id;
                game.selectedTool = tool;
                game.goodTool();
            })

        };
    },

    toggle: function () {
        console.log("testing")
        if (game.buildMode == "off") {
            var materialType = this.classList[1];
            if ((materialType == "soil" || materialType == "soilgrass") && game.selectedTool == "shovel") {
                this.classList.remove(materialType);
                this.classList.add("sky");
                game.addMaterial(materialType);
            } else if ((materialType == "tree" || materialType == "greenery") && game.selectedTool == "axe") {
                this.classList.remove(materialType);
                this.classList.add("sky");
                game.addMaterial(materialType);
            } else if (materialType == "rock" && game.selectedTool == "pickaxe") {
                this.classList.remove(materialType);
                this.classList.add("sky");
                game.addMaterial(materialType);
            } else {
                game.wrongTool();
            }
        } else {
            game.build(this);
        }

    },
    addMaterial: function (material) {
        document.getElementById("Material").className = material;
        return game.buildMaterial = material;
    },

    wrongTool: function () {
        $("#" + game.selectedTool).css("border", "5px solid red");
        setTimeout(game.clearBorderTool, 500);


    },

    goodTool: function () {
        $("#" + game.selectedTool).css("border", "5px solid blue");
        setTimeout(game.clearBorderTool, 500);


    },

    clearBorderTool: function () {
        $("#" + game.selectedTool).css("border-color", "white");
    },




    setBuildMode: function () {
        $("#Material").removeClass();
        game.buildMode = "on";


    },
    build: function (target) {

        $(target).removeClass(target.classList[1]);
        $(target).addClass(game.buildMaterial);

        game.buildMode = "off";
    }



}

game.landing();
$("#Material").click(function () {
    game.setBuildMode();
});