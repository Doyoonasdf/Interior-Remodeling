const form = document.querySelector("#form");
const btnSubmit = form.querySelector("input[type=submit]");



//폰넘버는 4글자만 가능하다




btnSubmit.addEventListener("click", (e) => {
  //이름
  if (!isTxt("name")) e.preventDefault();

  //이메일주소
  if (!isEmail("email")) e.preventDefault();

  //동의
  if (!isAgree("agree")) e.preventDefault();

  //핸드폰 (앞자리 중간자리 뒷자리)
  // if (!isSelect("tell")) e.preventDefault();
  if (!isNum("tell")) e.preventDefault();

});


//name 이름은 빈값이면 안된다 

function isTxt(el) {
  let input = form.querySelector(`[name=${el}]`);
  let txt = input.value;

  // if (txt !== undefined) {  왜 언디파인드는 안될까
  if (txt !== "") {
    const errMsgs = input.closest("td").querySelectorAll("p");

    if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

    return true;
  } else {

    const errMsgs = input.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) return false;

    const errMsg = document.createElement("p");
    errMsg.append(`이름을 입력하세요`);
    input.closest("td").append(errMsg);
    return false;
  }
}

//이메일은 @가 있어야한다
function isEmail(el) {
  let input = form.querySelector(`[name=${el}]`);
  let txt = input.value;


  if (/@/.test(txt)) {
    const errMsgs = input.closest("td").querySelectorAll("p");

    if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();
    return true;
  } else {
    const errMsgs = input.closest("td").querySelectorAll("p");

    if (errMsgs.length > 0) return false;
    const errMsg = document.createElement("p");
    errMsg.append("@를 포함한 전체 이메일 주소를 입력하세요");
    input.closest("td").append(errMsg);
    return false;
  }
}


//약관에 동의합니다에 체크해야한다
function isAgree(el) {
  let inputs = form.querySelectorAll(`[name=${el}]`);
  let isCheck = false;

  for (let el of inputs) {
    if (el.checked) isCheck = true;
  }

  if (isCheck) {
    const errMsgs = inputs[0].closest("th").querySelectorAll("p");

    if (errMsgs.length > 0) inputs[0].closest("th").querySelector("p").remove();


    return true;
  } else {
    const errMsgs = inputs[0].closest("th").querySelectorAll("p");
    if (errMsgs.length > 0) return false;

    const errMsg = document.createElement("p");
    errMsg.append("필수 입력항목을 체크해주세요");
    inputs[0].closest("th").append(errMsg);

    return false;
  }


}

function isNum(el, len) {
  if (len === undefined) len = 4;
  let input = form.querySelector(`[name=${el}]`);
  let txt = input.value;
  if (txt.length >= len) {

    const errMsgs = input.closest("td").querySelectorAll("p");

    if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

    return true;
  } else {


    const errMsgs = input.closest("td").querySelectorAll("p");

    if (errMsgs.length > 0) return false;

    const errMsg = document.createElement("p");
    errMsg.append(`핸드폰 번호를 입력해주세요`);
    input.closest("td").append(errMsg);
    return false;
  }

}