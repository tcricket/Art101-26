let count = 0;

let buttonCreature = {
    name: "Duke",
    species: "horse",
    favoriteFood: "apples",
    moods: ["spooky", "lazy", "goofy", "dramatic", "naughty", "annoyed"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    let message = "<p>You patted Duke " + count + " times.</p>";
    message = message + "<p>Duke's current mood is " + currentMood + ".</p>";

    message = message + "<p>His name is " + buttonCreature.name + ".</p>";
    message = message + "<p>He is a " + buttonCreature.species + ".</p>";
    message = message + "<p>His favorite food is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});