function calculate() {
    const date = new Date()
    const year = date.getFullYear()
    let formsage = document.getElementById("age")
    let res = document.querySelector("div#res")
    let birth = Number(formsage.value)
    let age = (year - birth)
    if (formsage.value.length < 4 || birth > year) {
        alert("[ERRO] Verifique os dados e tente novamente")
        pause
    }
    let fsex = document.getElementsByName("radsex")
    let sex = ''
    let img = document.getElementById("image")
    
    if (fsex[0].checked == false && fsex[1].checked == false) {
        alert("[ERRO] Verifique os dados e tente novamente")
    }
    else {
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
    res.innerHTML = `Detectado ${sex} de ${age} anos`
    }
}
