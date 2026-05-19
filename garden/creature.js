let allCreatures=[];



    //creature creecher object from the form inputs
function getCreatureFromForm(){
 const freshCreature={

    name: $("#crName").val(),
    color: $("#crColor").val(),
    eyesNum: $("#crEyesNum").val(),
 }
return freshCreature;
}
 
// checks function
function isCreatureValid (creature){
if(creature.name==="") return false ;
if(creature.name.length >12) return false ;
if( isNaN(creature.eyesNum) || creature.eyesNum >5 ) return false ;
return true;
}


$("#crAdd").click( function(){

    const newCreature = getCreatureFromForm();
    console.log(newCreature)

    if ( isCreatureValid(newCreature)==false ) {
        return; }
});

// safety checks
    
    //stops the function which is "click" one



// // add creature to the garden
// $("#crAdd").click(function () {

//     let crName = $("#crName").val();
//     let crColor = $("#crColor").val();
//     let crEyesNum = $("#crEyesNum").val();

//     let crEyesHtml = "";
//     for (let i = 0; i < crEyesNum; i++) {
//             crEyesHtml=crEyesHtml+ "<div class='eye'>.</div>";

//     }

//     console.log(crName);
//     console.log(crColor);
//     console.log(crEyesNum);

//     if (crName.length > 2) {

//         $("#creature-list").append(`
//             <div class="creature">
//                 <div class="creature-body" style="background-color: ${crColor}"> ${crEyesHtml}</div>
//                 <div class="creature-info">${crName}</div>
//             </div>
//             `);
//     }

//     //  "<div>" + crName + crEyesNum + crColor+"</div>");

//     $("#crName").val("")
// });