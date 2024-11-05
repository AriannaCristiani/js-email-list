const emailList = document.getElementById('email-list')
//console.log(emailList)

for (i = 0; i < 10; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
            //console.log(res.data)

            const randomEmail = res.data.response
            console.log(randomEmail)

            emailList.innerHTML += `
            <ul class="list-group">
            <li class="list-group-item list-group-item-secondary">${randomEmail}</li>
            </ul>`
     
        })
        .catch((err) => {
            console.log(err)
        })

     
        
}

