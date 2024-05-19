
function voice(){
if (annyang) {
    console.log("Annyang works!");
 
    
 
    var commands = {
        'about page': aboutpage,
       'help page': helppage,
       'mission': missionbtn,
       'values': valuesbtn
    };
 
    
    function homepage(){
        //document.getElementById('377-final-aboutPage.html').click();
        window.location=document.getElementById('hpage').href;
    };

    function helppage(){
        window.location=document.getElementById('hppage').href;
    };

    function missionbtn(){
        document.getElementById('missionBTN').click();
    };

    function valuesbtn(){
        document.getElementById('valuesBTN').click();
    };

 
    annyang.addCommands(commands);
 
}

}


async function mission(){
    const a = await fetch('http://127.0.0.1:3000/mission');
    const b = await a.json();
    const c = b.mission;
    const d = document.getElementById("missiontext");
    d.innerHTML = b.mission
    console.log(c)
}

async function values(){
    const a = await fetch('http://127.0.0.1:3000/values');
    const b = await a.json();
    const c = b.Accessibility;
    const d = document.getElementById("missiontext");
    d.innerHTML = c;
    console.log(c)
}




window.onload = mission();
window.onload = voice();

