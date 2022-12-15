


counter(".list_1", 1975, 200);
counter(".list_2", 300, 20);
counter(".list_3", 500, 200);
counter(".list_4", 100, 10);
counter(".list_5", 2500, 200);
counter(".list_6", 600, 100);


function counter(el, num, time) { //el 적용할 요소, num 최종도달할 값, time 기간

  const item = document.querySelector(el);//매개변수로 반드시 문자열""로 안에 대상을 적어준다

  let current_num = parseInt(item.innerText); //대상의 안에있는 값을 정수로 변환
  let count_num = num - current_num; //count_num은 남은 값이 된다
  let interval = parseInt(time / count_num); //반복횟수

  let timer = setInterval(() => {
    current_num++;
    if (current_num == num) {
      clearInterval(timer); //setInterval 을 취소 무효화하는 코드
    }
    item.innerText = current_num;
  }, interval);

}