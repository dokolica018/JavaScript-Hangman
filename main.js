let slovca = document.querySelector('.slovca')
let answer = "";
let mistakes = 0;
let guessed = []
let winLetters = []
let letters = 'абвгдђежзијклљмнњопрстћуфхцчџш'.split("")
let annswerArray;
let glava = document.querySelector('.glava')
let vrat = document.querySelector('.vrat')
let telo = document.querySelector('.telo')
let levaRuka = document.querySelector('.leva-ruka')
let desnaRuka = document.querySelector('.desna-ruka')
let levaNoga = document.querySelector('.leva-noga')
let desnaNoga = document.querySelector('.desna-noga')
let dead = document.querySelector('.dead')
let greska = document.querySelectorAll('.greska')
let mis = document.querySelector('#mistakes')
let rec = document.querySelector('.rec')
let explain = document.querySelector('.r')
let naslov = document.querySelector('#naslov')
let start = document.querySelector('.start')
let reload = document.querySelector('.reload')
reload.style.display = 'none'
start.addEventListener('click',game)

function game() {
    function randomWord() {
        answer = izrazi[Math.floor(Math.random()*izrazi.length)]
        console.log(answer);
    generateButtons()
}
function generateButtons() {
    for (let i = 0; i < letters.length; i++) {
        let btn = document.createElement('button')
        btn.className='btn'
        slovca.appendChild(btn)
        btn.innerHTML = letters[i]            
    }
    btns = document.querySelectorAll('.btn')
    annswerArray = answer.split("")
    let spaces = document.querySelector('#spaces')
    for (let i = 0; i < annswerArray.length; i++) {
        spaces.innerHTML += `<p class="pos">  __ </p>   `
        
    }
    btns.forEach(slovo => slovo.addEventListener('click',letterCheck));
    
}
    start.removeEventListener('click',game)
    start.style.display = "none"
    randomWord()
    
let pos = document.querySelectorAll('.pos')
function letterCheck() {
    this.removeEventListener('click',letterCheck)
    this.style.background = "cadetblue"
    guessed.push(this.innerHTML)
    if (annswerArray.includes(this.innerHTML)) {
        for (let i = 0; i < annswerArray.length; i++) {
            const element = annswerArray[i];
            if (element.includes(guessed[guessed.length-1])) {
                pos[i].innerHTML = this.innerHTML
                winLetters.push(pos[i].innerHTML)
                if (winLetters.length === annswerArray.length) {
                    btns.forEach(slovo => slovo.removeEventListener('click',letterCheck))
                    let text2 = `<h2>Браво! Погодили сте реч: <br><br>
                    ${answer} </h2>`
                    rec.innerHTML = text2
                    rec.style.display = "block"
                    naslov.innerHTML = "Нисам те обесио!"
                    naslov.style.color = "teal"
                    // start.innerHTML = "Играј поново"
                    // start.addEventListener('click',game)
                    newGame()
                }
                
            }
        }
    } else {
        for (let i = 0; i < 9; i++) {
            greska[mistakes].style.display = "block"
        }
        
        mistakes++;
        mis.innerHTML = mistakes
        mis.style.color = "red"
        if (mistakes === 7) {
            btns.forEach(slovo => slovo.removeEventListener('click',letterCheck))
            dead.style.display = "block"
            let text = `<h2>Реч коју смо тражили је: <br><br>
            ${answer} </h2>`
            rec.innerHTML = text
            rec.style.display = "block"
            naslov.innerHTML = "Обесио сам те!"
            naslov.style.color = "teal"
            // start.innerHTML = "Играј поново"
            // start.addEventListener('click',game)
            newGame()
            
        }
    }
}
}
    function newGame(params) {
        reload.style.display = 'block'
    }



