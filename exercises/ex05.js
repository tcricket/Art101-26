let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"];
let colorCount = 0;

$("#needy-button").click(function () {
    $("#needy-button").html("Clicks: " + count + " Color: " + colors[count]);
    $("body").css("background-color", colors[count]);


    count = count + 1;


if (count<=6) {$("#needy-button").html("Did you just touch me " + count + " times?" + "? I'm so fresh and happy!")
    }

if (count>=6) {$("#needy-button").html("Did you just touch me " + count + " times?" + "? keep pushing")
    }

if (count>=11) {$("#needy-button").html("Did you just touch me " + count + " times?" + "? im tired")
    }

if (count>=21) {$("#needy-button").html("Did you just touch me " + count + " times?" + "? nah im done")
    }

if (count<=0) {$("#needy-button").html("Did you just touch me " + count + " times?" + "? nah im done")
    }

    colorCount = count - 1;

    if (count == 4) {
        ColorCount = 0;
        console.log("it happened")
    }


    if (colors[count] == "HotPink") {
        $("#needy-button").after(" HotPink ");
    }
    else if (colors[count] == "Orchid") {
        $("#needy-button").after("  hey Orchid ");
    }
    else {
        $("#needy-button").after(" all other colors ");
    }


});