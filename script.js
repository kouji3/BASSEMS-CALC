const calcBtns = document.querySelectorAll(".btns > button");
const selectedNum = document.querySelector('.result > h2');
const sub = document.querySelector('.result > h3');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');


let y = '';
let x = '';
let leng;
let isClicked = false;


clear.addEventListener('click', () => {
    selectedNum.textContent = "0";
    sub.textContent = "";
    y = '';
    x = '';
    isClicked = false;
});

del.addEventListener('click', () => {
    let s = leng - 1;
    let x =  selectedNum.textContent.slice(0, s);
    selectedNum.textContent = x;
    y = selectedNum.textContent;
    leng = x.length;
    console.log(x)
});



calcBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.textContent != "x" && btn.textContent != "+" && btn.textContent != "-" && btn.textContent != "÷"){
            if(isClicked){
                y = '';
                isClicked = false
            }
            y += btn.textContent;
            selectedNum.textContent = y;
            leng = selectedNum.textContent.length;
            
        }

        if(btn.textContent == "x" || btn.textContent == "+" || btn.textContent == "-" || btn.textContent === "÷"){
            isClicked = true;
            x += y + ' ' + btn.textContent;
            sub.textContent = x;
        }
    });


})