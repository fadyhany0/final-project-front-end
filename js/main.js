
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let div1 = document.getElementById('div1')
let div2 = document.getElementById('div2')
let div3 = document.getElementById('div3')
let div4 = document.getElementById('div4')
let div5 = document.getElementById('div5')
let div6 = document.getElementById('div6')
console.log(btn2)


let f1 = function(){
    if(div1.classList.contains('display')){
        div1.classList.remove('display')
        div2.classList.add('display')
        div3.classList.add('display')
        div4.classList.add('display')
        div5.classList.add('display')
        div6.classList.add('display')
    }else{
       div1.classList.add('display')
    }
}

let f2 = function(){
    if(div2.classList.contains('display')){
     div2.classList.remove('display')
     div1.classList.add('display')
     div3.classList.add('display')
     div4.classList.add('display')
     div5.classList.add('display')
     div6.classList.add('display')
    } else{
        div2.classList.add('display')
    }
}

let f3 = function(){
    if(div3.classList.contains('display')){
     div3.classList.remove('display')
     div1.classList.add('display')
     div2.classList.add('display')
     div4.classList.add('display')
     div5.classList.add('display')
     div6.classList.add('display')
    } else{
        div3.classList.add('display')
    }
}

let f4 = function(){
    if(div4.classList.contains('display')){
     div4.classList.remove('display')
     div1.classList.add('display')
     div2.classList.add('display')
     div3.classList.add('display')
     div5.classList.add('display')
     div6.classList.add('display')
    } else{
        div4.classList.add('display')
    }
}

let f5 = function(){
    if(div5.classList.contains('display')){
     div5.classList.remove('display')
     div1.classList.add('display')
     div2.classList.add('display')
     div3.classList.add('display')
     div4.classList.add('display')
     div6.classList.add('display')
    } else{
        div5.classList.add('display')
    }
}

let f6 = function(){
    if(div6.classList.contains('display')){
     div6.classList.remove('display')
     div1.classList.add('display')
     div2.classList.add('display')
     div3.classList.add('display')
     div4.classList.add('display')
     div5.classList.add('display')
    } else{
        div6.classList.add('display')
    }
}




btn6.addEventListener('click' , f6)
btn5.addEventListener('click' , f5)
btn4.addEventListener('click' , f4)
btn3.addEventListener('click' , f3)
btn2.addEventListener('click' , f2)
btn1.addEventListener('click' , f1)
btn.addEventListener('click' , them )

