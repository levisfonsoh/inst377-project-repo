//Testing to see ticket data is loaded 

var host = window.location.origin;
console.log(host)

async function loadTicketData() {
    await fetch(`${host}/ticket_data`)
    .then(res => res.json())
    .then(res => {
        console.log(res)

    })
}

async function createTicket() {
    console.log("Creating ticket")
    await fetch(`${host}/ticket_input`,{
        method: 'POST',
        body: JSON.stringify({
            "name":`${document.getElementById('name').value}`,
            "date":`${document.getElementById('date').value}`,
            "description":`${document.getElementById('message').value}`,
        }),
        headers: {
            'Content-type': "application/json"
        }
    })
    .then((res) => res.json())
    .then((res) =>{
    })
    await loadTicketData();
}

window.onload = loadTicketData;