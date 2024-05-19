var host = window.location.origin
    console.log(host)

async function loadContactData(){
    
    await fetch(`${host}/contacts`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)

            var table = document.getElementById('customersTable')
            var tableRow = document.createElement('tr')

            var tableHeading1 = document.createElement('th')
            tableHeading1.innerHTML = 'Name'
            tableRow.appendChild(tableHeading1)

            var tableHeading2 = document.createElement('th')
            tableHeading2.innerHTML = 'Email'
            tableRow.appendChild(tableHeading2)

            var tableHeading3 = document.createElement('th')
            tableHeading3.innerHTML = 'Phone Number'
            tableRow.appendChild(tableHeading3)

            table.appendChild(tableRow)

            res.forEach(element => {
                var customersRow = document.createElement('tr')
                var name = document.createElement('td')
                var email = document.createElement('td')
                var phone_number = document.createElement('td')

                name.innerHTML = element.name
                customersRow.appendChild(name)
                email.innerHTML = element.email
                customersRow.appendChild(email)
                phone_number.innerHTML = element.phone_number
                customersRow.appendChild(phone_number)
                table.appendChild(customersRow)


                
            });
            
        })

        const a = document.getElementById('m1')
        a.innerHTML = "Your submission was success"
        const b = document.getElementById('m2')
        b.innerHTML = "We will reach out to you when your issue has abeen resolved or we need more details."
        const c = document.getElementById('m3')
        c.innerHTML = "Reminder: You can also contact us using the information below"
}


async function createCustomer(){
    console.log('Creating Customer')
    await fetch(`${host}/customers`, {
        method: 'POST',
        body: JSON.stringify({
            "first_name": `${document.getElementById('first_name').value}`,
            "last_name": `${document.getElementById('last_name').value}`,
            "description": `${document.getElementById('description').value}`
        }),
        headers:{
            "Content-type": "application/json"
        }
    })
    //.then((res) => res.json())
    //.then((res) => {
       // await
    //})
    document.getElementById("form123").style.display="none";

}

//window.onload = loadContactData;