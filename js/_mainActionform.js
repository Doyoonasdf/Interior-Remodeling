const form = document.querySelector("#form");
const btnSubmit = form.querySelector("input[type=submit]");

//이름은 빈값이면 안된다

//폰넘버는 4글자만 가능하다

//이메일은 @가 있어야한다

//약관에 동의합니다에 체크해야한다

btnSubmit.addEventListener("click", (e) => {
  //이름
  if (!isTxt("name")) e.preventDefault();

  //이메일주소
  if (!isEmail("email")) e.preventDefault();

  //동의
  if (!isAgree("agree")) e.preventDefault();


  //핸드폰 (앞자리 중간자리 뒷자리)
  if (!isSelect("tell")) e.preventDefault();
  if (!isNum("")) e.preventDefault();





});