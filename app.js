axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then((res) => {
    //console.log(res.data)

    const randomEmail = res.data.response
    console.log(randomEmail)
})
.catch((err) => {
    console.log(err)
})


