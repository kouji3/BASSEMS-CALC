const calcBtns = document.querySelectorAll(".btns > button");
const selectedNum = document.querySelector('.result > h2');
const sub = document.querySelector('.result > h3');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');


let y = '';
let x = '';
let leng;
let isClicked = false;
let first;
let firstFinished = false;
let second;
let isEqualClicked = false;
let result;
let sign;
let stick = false;
let willContinue = undefined;


document.body.ontouchstart = function() {
    // Remove the hover state from all elements
    for (let element of document.querySelectorAll(':hover')) {
      element.classList.remove('hover');
    }
};


clear.addEventListener('click', () => {
    selectedNum.textContent = "0";
    sub.textContent = "";
    y = '';
    first = undefined;
    second = undefined;
    stick = false;  
    sign = "";
    willContinue = undefined;
    result = 0;
    isEqualClicked  = undefined;
    leng = 0;
    x = '';
    isClicked = false;
});

del.addEventListener('click', () => {
    if(stick) {
        return;
    } else {
        if(isClicked) {
            let s = leng - 1;
            let x =  selectedNum.textContent.slice(0, s);
            selectedNum.textContent = x;
            y = selectedNum.textContent;
            second = parseFloat(y);
            leng = x.length;
            console.log(x)
        } else {
            let s = leng - 1;
            let x =  selectedNum.textContent.slice(0, s);
            selectedNum.textContent = x;
            y = selectedNum.textContent;
            first = parseFloat(y);
            leng = x.length;
            console.log(x)
        }
        
    }
    
});



calcBtns.forEach((btn) => {
    btn.addEventListener('click', () => {

        if(btn.textContent != "x" && btn.textContent != "+" && btn.textContent != "-" && btn.textContent != "÷" && btn.textContent != "=" ){
            if(btn.textContent == "." && y.includes(".")) return;
            if(isClicked){
                
                if(firstFinished){
                    y = '';
                    firstFinished = false;
                }
                if(y == '' && btn.textContent == "."){
                    y = '0.';
                    selectedNum.textContent = y;
                   
                } else {
                    if(stick){
                        return;
                    } else {
                       
                        y += btn.textContent;
                        console.log(second);
                        second = parseFloat(y);
                        willContinue = false;
                        console.log(second);
                        selectedNum.textContent = y;
                        leng = selectedNum.textContent.length;
                        stick = false;
                        willContinue = true;
                    }
                }
                
                
            } else {

                if(btn.textContent == "." && y.includes(".")) return;

                if(y == '' && btn.textContent == "."){
                    y = '0.';
                    selectedNum.textContent = y;
                } else {
                    y += btn.textContent;
                    first = parseFloat(y);
                    firstFinished = true;
                    selectedNum.textContent = y;
                    leng = selectedNum.textContent.length;
                }
                
            }
           
            
        }


        if(btn.textContent == "="){
            if(first == undefined || second == undefined) return;
            
            if(stick) return;


            if(sign == "x" && !isEqualClicked){
                let check = String(first * second);
                if(check.includes(".")){
                    selectedNum.textContent = (first * second).toFixed(2);
                    sub.textContent = first + " x " + second + " =";
                    result = (first * second).toFixed(2);
                    stick = true;
                } else {
                    selectedNum.textContent = first * second;
                    sub.textContent = first + " x " + second + " =";
                    result = first * second;
                    stick = true;
                }
                
            }

            if(sign == "x" && isEqualClicked){
                let check = String(result * second);
                if(check.includes(".")){
                    selectedNum.textContent = (result * second).toFixed(2);
                    sub.textContent = result + " x " + second + " =";
                    result = (result * second).toFixed(2);
                    stick = true;
                }  else {
                    selectedNum.textContent = result * second;
                    sub.textContent = result + " x " + second + " =";
                    result = result * second;
                    stick = true;
                }
                
            }


            if(sign == "+" && !isEqualClicked){
                let check = String(first + second);
                if(check.includes(".")){
                    selectedNum.textContent = (first + second).toFixed(2);
                    sub.textContent = first + " + " + second + " =";
                    result = (first + second).toFixed(2);
                    stick = true;
                } else {
                    selectedNum.textContent = first + second;
                    sub.textContent = first + " + " + second + " =";
                    result = first + second;
                    stick = true;
                }
            }

            if(sign == "+" && isEqualClicked){
                console.log(second);
                let check = String(result + second);
                if(check.includes(".")){
                    let k = parseFloat(result) + parseFloat(second);
                    selectedNum.textContent = k.toFixed(2);
                    sub.textContent = result + " + " + second + " =";
                    
                    result = k.toFixed(2);
                    stick = true;
                } else {
                    selectedNum.textContent = result + second;
                    sub.textContent = result + " + " + second + " =";
                    result = result + second;
                    stick = true;
                }
            }

            if(sign == "÷" && !isEqualClicked){
                let check = String(first / second);
                if(check.includes(".")){
                    selectedNum.textContent = (first / second).toFixed(2);
                    sub.textContent = first + " ÷ " + second + " =";
                    result = (first / second).toFixed(2);
                    stick = true;
                } else {
                    selectedNum.textContent = first / second;
                    sub.textContent = first + " ÷ " + second + " =";
                    result = first / second;
                    stick = true;
                }
            }

            if(sign == "÷" && isEqualClicked){
                let check = String(result / second);
                if(check.includes(".")){
                    selectedNum.textContent = (result / second).toFixed(2);
                    sub.textContent = result + " ÷ " + second + " =";
                    result = (result / second).toFixed(2);
                    stick = true;
                } else {
                    selectedNum.textContent = result / second;
                    sub.textContent = result + " ÷ " + second + " =";
                    result = result / second;
                    stick = true;
                }
            }

            if(sign == "-" && !isEqualClicked){
                console.log(second);
                let check = String(first - second);
                if(check.includes(".")){
                    selectedNum.textContent = (first - second).toFixed(2);
                    sub.textContent = first + " - " + second + " =";
                    result = (first - second).toFixed(2);
                    stick = true;
                } else {
                    selectedNum.textContent = first - second;
                    sub.textContent = first + " - " + second + " =";
                    result = first - second;
                    stick = true;
                }
            }

            if(sign == "-" && isEqualClicked){
                console.log(second);
                let check = String(result - second);
                if(check.includes(".")){
                    selectedNum.textContent = (result - second).toFixed(2);
                    sub.textContent = result + " - " + second + " =";
                    result = (result - second).toFixed(2);
                    stick = true;
                } else {
                    selectedNum.textContent = result - second;
                    sub.textContent = result + " - " + second + " =";
                    result = result - second;
                    stick = true;
                }
            }
            
        

            isEqualClicked = true;

        }

        if(btn.textContent == "x" || btn.textContent == "+" || btn.textContent == "-" || btn.textContent === "÷"){
            console.log(first);
            if(first == undefined) return;
            
            isClicked = true;
            sign = btn.textContent;

            

            

            if(isEqualClicked){
                x = result + " " + btn.textContent;
                sub.textContent = x;
                x = '';
                stick = false;
            } else {
                if(!willContinue){
                    x += y + ' ' + btn.textContent;
                    sub.textContent = x;
                    x = '';
                } else return;
                
            }

           if(firstFinished){
                y = y;
                
           } else {
                y = '';
           }
            
        }
    });


})


