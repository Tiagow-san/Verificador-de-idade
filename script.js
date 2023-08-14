function calculate() {
    const date = new Date()
    const year = date.getFullYear()
    const formsage = document.getElementById("age")
    const res = document.querySelector("div#res")
    const birth = Number(formsage.value)
    const age = year - birth
    const fsex = document.getElementsByName("radsex")
    let sex = ""
    const img = document.getElementById("image")
    
    if (formsage.value.length < 4 || birth >= year || (fsex[0].checked == false && fsex[1].checked == false)) {
        alert("[ERRO] Verifique os dados e tente novamente")
        clearInputs()
        return
    }
    
    if (fsex[0].checked) {
        sex = "homem";
        itsMale(img, age)
    } else if (fsex[1].checked) {
        sex = "mulher"
        itsFemale(img, age)
    }
    
    res.style.textAlign = "center"
    res.innerHTML = `Detectado ${sex} de ${age} anos`
    clearInputs()
}

function itsMale(img, age) {
    if (age >= 0 && age <= 2) {
        img.src = "./assets/babyboy.png"
    } else if (age >= 3 && age < 13) {
        img.src = "./assets/childboy.png"
    } else if (age < 25) {
        img.src = "./assets/teenboy.png"
    } else if (age < 35) {
        img.src = "./assets/youngadultman.png"
    } else if (age < 60) {
        img.src = "./assets/adultman.png"
    } else {
        img.src = "./assets/elderman.png"
    }
}

function itsFemale(img, age) {
    if (age >= 0 && age < 2) {
        img.src = "./assets/babygirl.png"
    } else if (age >= 3 && age < 13) {
        img.src = "./assets/childgirl.png"
    } else if (age < 25) {
        img.src = "./assets/teengirl.png"
        img.src = "./assets/youngadultwoman.png"
    } else if (age < 60) {
        img.src = "./assets/adultwoman.png"
    } else {
        img.src = "./assets/elderwoman.png"
    }
}

function clearInputs() {
    const formsage = document.getElementById("age")
    const fsex = document.getElementsByName("radsex")
    formsage.value = ""
    fsex.forEach(radio => (radio.checked = false))
}
