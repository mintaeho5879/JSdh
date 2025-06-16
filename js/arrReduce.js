// 배열의 여러 값을 하나의 값으로 변경할 때 사용
const arr = [11, 32, 7, 19, 40, 56, 57];
const result = arr.reduce((prev, next) => {
    // prev 0번 방 11 호출, next 1번 방 32 호출
  console.log("prev: ", prev, ", next: ", next);
  return prev + next;
  // 그 전 return 했던 값(43) + next(7, 2번 방)
});
console.log("result: ", result);
// prev:  11 , next:  32
// prev:  43 , next:  7
// prev:  50 , next:  19
// prev:  69 , next:  40
// prev:  109 , next:  56
// prev:  165 , next:  57
// result:  222
const result2 = arr.reduce((prev, next) => {
    console.log('prev: ', prev, ', next: ', next);
    return prev + next
}, 0);
// prev 초기값 0
console.log('result2: ', result2);
// prev:  0 , next:  11
// prev:  11 , next:  32
// prev:  43 , next:  7
// prev:  50 , next:  19
// prev:  69 , next:  40
// prev:  109 , next:  56
// prev:  165 , next:  57
// result2:  222
