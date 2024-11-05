const emailList = document.getElementById('email-list')
const refreshButton = document.getElementById('refresh-button')

//console.log(emailList)
//console.log(refreshButton)

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


refreshButton.addEventListener ('click', function(){
    
        

  
})

