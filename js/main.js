const services = document.querySelector("#services")
const dts = services.querySelectorAll("dt");
const dds = services.querySelectorAll("dd");

const dts_icon = services.querySelectorAll("dt .icon");
//tab키로 이동하게될 추적할 대상으로써 a태그를 사용했을뿐 a태그에는 큰의미는 없다

dts_icon.forEach((el, index) => {
  el.addEventListener("focusin", () => {
    activation(dts, index);
    activation(dds, index);
  })
})




dts.forEach((el, index) => {
  //배열에 반복을 돌면서 클릭이벤트 부여한다 
  el.addEventListener("click", () => {
    //모든 곳에 on을 떼었다가
    // for (let el of dts) el.classList.remove("on");
    // el.classList.add("on");

    // for(let el of dds){
    //   el.classList.remove('on');
    // } 
    // dds[index].classList.add("on");

    //활성화 함수를 이름을 불러줌
    activation(dts, index);
    activation(dds, index);


  })


  //내가 선택한 그부분만 on을 붙임
})

//활성화 함수를 만듦
function activation(arr, index) {
  for (let el of arr) {
    el.classList.remove("on");
  }
  arr[index].classList.add("on");
}
