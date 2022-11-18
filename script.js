function calculate() {
    var date = new Date()
    var year = date.getFullYear()
    var formsage = document.getElementById("age")
    var res = document.querySelector("div#res")
    var birth = Number(formsage.value)
    var age = (year - birth)
    if (formsage.value.length < 4 || birth > year) {
        alert("[ERRO] Verifique os dados e tente novamente")
        pause
    }
    var fsex = document.getElementsByName("radsex")
    var sex = ''
    var img = document.getElementById("image")

    if (fsex[0].checked) {
        sex = 'homem'
        //Baby
        if (age >= 0 && age <= 2) {
            img.src = './assets/babyboy.png'
        }
        //Child
        else if (age >= 3 && age < 13) {
            img.src = './assets/childboy.png'
        }
        //Teen
        else if (age < 25) {
            img.src = './assets/teenboy.png'
        }
        //Young adult
        else if (age < 35) {
            img.src = './assets/youngadultman.png'
        }
        //Adult
        else if (age < 60) {
            img.src = './assets/adultman.png'
        }
        //Elder
        else {
            img.src = './assets/elderman.png'
        }
    }
    if (fsex[1].checked) {
        sex = 'mulher'
        //Baby
        if (age >= 0 && age < 2) {
            img.src = './assets/babygirl.png'
        }
        //Child
        else if (age >= 3 && age < 13) {
            img.src = './assets/childgirl.png'
        }
        //Teen
        else if (age < 25) {
            img.src = './assets/teengirl.png'
        }
        //Young adult
        else if (age < 35) {
            img.src = './assets/youngadultwoman.png'
        }
        //Adult
        else if (age < 60) {
            img.src = './assets/adultwoman.png'
        }
        //Elder
        else if (age < 80) {
            img.src = './assets/elderwoman.png'
        }
    }
    res.style.textAllign = 'center'
    res.innerHTML = `Detectamos ${sex} de ${age} anos`

}
