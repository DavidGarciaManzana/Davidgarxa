const
    input = document.getElementById("email"),
    form = document.getElementById("form")


const validateEmail = (e) => {
    e.preventDefault()
    let email = input.value
    let regexp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i

    if(!email.length>0 || !regexp.test(email)){
        console.log("email invalido")
        console.log(email)
        console.log(email.length)

        console.log(!email.length>0)
        console.log(!regexp.test(email))


        document.querySelector(".error").style.display="block"
        document.querySelector(".span").style.display="block"
        return false
    } else {
        console.log("email valido")
        document.querySelector(".error").style.display="none"
        document.querySelector(".span").style.display="none"
        form.submit()
        input.value = ""
    }

}

form.addEventListener("submit", validateEmail)
console.log("RAMA DEVELOPMENT")