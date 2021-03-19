const form = document.getElementById("form")
const inpt = document.querySelectorAll('.input')
const container = document.querySelector(".container")
const gameLink = document.querySelector('.gamelink')
const question = document.querySelector('.question')
const label = document.querySelectorAll('.label')
const text = document.querySelectorAll('.p2')
console.log(text)
const questionArray = ['Bunlardan hansı ətyeyən bitkidir?']

const answerArray = {
    One:[ 'Milçəkqapan', 'Qızılgül','Palıd' ,'Pambıq'],
    Two:[ 'Yonca', 'Şehçiçəyi','Zanbaq' ,'Çaytikanı'],
    Three:[ 'Çobanyastığı', 'Qovaq ', 'Meymun fincanı' ,'Dəvədabanı'],
}

const questions =   Math.floor(Math.random() * 3);
console.log()
question.innerHTML = questionArray
let answer = 0
let trueAnswer = 0
for (let i = 0; i < text.length; i++) {
    if(0 == questions){
        text[0].innerHTML = answerArray.One[0]
        text[1].innerHTML = answerArray.One[1]
        text[2].innerHTML = answerArray.One[2]
        text[3].innerHTML = answerArray.One[3]
        trueAnswer = 1 
    }else if(1 == questions){
        text[0].innerHTML = answerArray.Two[0]
        text[1].innerHTML = answerArray.Two[1]
        text[2].innerHTML = answerArray.Two[2]
        text[3].innerHTML = answerArray.Two[3]
        trueAnswer = 2
    }else if(2 == questions){
        text[0].innerHTML = answerArray.Three[0]
        text[1].innerHTML = answerArray.Three[1]
        text[2].innerHTML = answerArray.Three[2]
        text[3].innerHTML = answerArray.Three[3]
        trueAnswer = 3
    }
    
}





for (let i = 0; i < label.length; i++) {
    label[i].addEventListener('click', function(e){
        let index = [i]
        label[i].style.border = '3px solid black'
        answer = Number(index) + 1
        console.log(answer)
        console.log(trueAnswer)
    })

}
form.addEventListener('submit', function(e){
    e.preventDefault()
    if(answer == trueAnswer){
        gameLink.style.display = 'block'
        console.log(true)
    }else{
        answer = 0
        // trueAnswer = 0
        console.log(false)
    }
    
})