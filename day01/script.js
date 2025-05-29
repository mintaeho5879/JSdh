/** @format */

const $screen = document.querySelector('#screen'); // (window 생략)객체의 주소값을 불러온다. #screen
const $toggleButton = document.querySelector('#button');
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

console.log('screen:', $screen);
console.log('toggleButton:', $toggleButton);
if ($screen && $toggleButton) {
  // 첫번째 아규먼트: 문자열(이벤트 이름)
  // 두번째 아규먼트: 함수 주소값 >> 콜백함수
  function clickBtn() {
    alert('하하');
  }

  // $toggleButton.addEventListener('click', clickBtn);
  // $toggleButton.addEventListener('click', function(){
  //     alert('호호')
  // })
  $toggleButton.addEventListener('click', () => {
    stopWatchOn = !stopWatchOn; //토글작업 값이 왔다갔다~
    $toggleButton.innerText = stopWatchOn ? '■' : '▶'; // 가져와서 바꾸겠다. '<div>ddd</div>' 실행.
    // $toggleButton.innerText = // 가져와서 바꾸겠다  '<div>ddd</div>' 뷰포트에 찍힘.
    // $toggleButton.style.backgroundColor = stopWatchOn ? 'tomato' : 'steelblue';
    $toggleButton.classList.toggle('stop-color'); // .속성. 의미 > 객체가 저장되어있다.
    if (stopWatchOn) {
      //setInterval
      //첫번째 인자 : 콜백함수
      //두번째 인자 : Number - ms
      timeInterval = window.setInterval(() => {
        //setInterval() 일정 딜레이마다 콜백함수를 실행.  유사 :setTimeOut 특정시간이 지나서 1번만 실행.
        /*
        1초 > 100
        1분 > 60초 > 6000
        */
        seconds++;
        const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, '0'); //floor 소숫점 떼는것(내림처리) , Ceil 올림, round 반올림, 대상.toFixed(자릿수) 소숫점 아래 표기.
        const ss = String(Math.floor(seconds / 100) % 60).padStart(2, '0'); //padStart '2자리'로 만들고싶다. 2자리 숫자인데 1자리숫자가 오면 앞을 '0'으로 채운다.
        const cs = String(seconds % 100).padStart(2, '0');
        $screen.innerText = `${mm}:${ss}:${cs}`;
      }, 10);
    } else {
      clearInterval(timeInterval);
      seconds = 0;
      $screen.innerText = '00:00:00';
    }
  });
}
