let environmentTitle = "The Sunlight Zone";

let environmentElements = ["water", "sunlight", "electric eel", "leafy sea dragon"];

let mainEntity = {
    name: "The Electric Eel",
    type: "monster",
    mood: "territorial",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

let count = 0;

let buttonCreature = {
    name: "Electric Eel",
    size: "200ft long",
    favoriteFood: "submarines",
    moods: ["territorial", "lazy", "accepting", "violent"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition % 4];

    let message = "<p>You studied " + count + " one time.</p>";

    message = message + "<p>The Electric Eeel's current mood is " + currentMood + ".</p>";
    message = message + "<p>He is an " + buttonCreature.name + ".</p>";
    message = message + "<p>He is " + buttonCreature.size + ".</p>";
    message = message + "<p>His favorite food is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});

let userLevel = ["1.jpg","2.jpg","3.jpg"];
let iterator = 0;

$("#what_level").click(function () {
    console.log("button click");
    $("#background").css("background-image", "url('" + userLevel[iterator%3] + "')");
    iterator++;
    console.log(iterator%3);
});

