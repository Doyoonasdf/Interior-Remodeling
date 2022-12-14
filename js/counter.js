
counter("list_1", 300, 2000);
counter("list_2", 300, 2000);
counter("list_3", 300, 2000);
counter("list_4", 300, 2000);
counter("list_5", 300, 2000);
counter("list_6", 300, 2000);

function counter(el, num, time) { //el 적용할 요소, num 최종도달할 값, time 기간

  const item = document.querySelector(el);

  let current_num = parseInt(item.innerText);
  let count_num = num - current_num;
  let interval = parseInt(time / count_num);

  let timer = setInterval(() => {
    current_num++;
    if (current_num == num) {
      clearInterval(timer);
    }
    item.innerText = current_num;
  }, interval);

}