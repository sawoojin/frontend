//선언적 함수
function jsFunc1() {
    var h1Tag = document.querySelector("#p1");
    h1Tag.innerHTML = "선언적 평션";
}
//익명 함수
var jsFunc2 = function() {
// alert("test");
    var p2Tag = document.querySelector("#p2");
    p2Tag.innerHTML = "jsFunc2 함수 실행 완료";
}
//전달인자 매개변수
function resultJsFunc4() {
    jsFunc4(23, 11, 13);
    jsFunc4(24, 4, 25);
}
function jsFunc4(num1, num2, num3) {
    var result = num1 + num2 + num3;
    var result_p4 = document.querySelector("#p4");
    result_p4.innerHTML = result_p4.innerHTML += result + "<br>";
}
function resultJsFunc5() {
    // console.log(jsFunc5());
    var result_p5 = document.querySelector("#p5");
    // var result = jsFunc5();
    result_p5.innerHTML = result_p5.innerHTML += jsFunc5() + "&nbsp";
}
function jsFunc5() {
    return Math.floor(Math.random()*10+1);
}
//결론 : 함수의 매개변수는 함수도 받을 수 있고 그 함수를 콜백함수라 한다.
function callFuncTenTimes(otherFunc) {
    // callback (매개변수로 넘겨지는) 함수이다.
    for(var i = 0; i < 10; i++) {
        otherFunc(i);
    }
}
callFuncTenTimes(jsFunc6);
function jsFunc6(num) {
    console.log((num+1)+"번째 함수 호출 완료");
    // var p6Tag = document.querySelector("#p6");
    // p6Tag.innerHTML = p6Tag.innerHTML + (num+1) + "번째 함수 호출 완료"+ "<br>";
}
// function calleeFunc(jsFunc6) {
//     var p6Tag = document.querySelector("#p6");
//     p6Tag.innerHTML = p6Tag.innerHTML + (num+1) + "번째 함수 호출 완료"+ "<br>";
// }
//함수 미개변수와 리턴 복습
function calculatePlus(num1, num2, operator) {
    var result = 0;
    switch(operator) {
        case '+' : result = num1+num2; break;
        case '-' : result = num1+num2; break;
        case '*' : result = num1+num2; break;
        case '/' : result = num1+num2; break;
    }
    return result;
}
// 익명함수 리턴하는 함수
function jsReturnFunc() {
    var nameTag = document.querySelector("#name");
    var p7Tag = document.querySelector("#p7");
    return function() {
        p7Tag.innerHTML = nameTag.value;
    }();
}