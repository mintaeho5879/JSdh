//for_of.js
//배열에 사용
const myArray=['A', 'B', 'C', 'D'];

console.log('Array.isArray(myArray)', Array.isArray(myArray));

for(const item of myArray) {
    console.log(item);
}

//유사 배열

const myArray2 = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    length: 4
};
for(let i=0; i<myArray2.length; i++) {
    console.log('for', myArray[i]);
}

const myArray2Iterable = Array.from(myArray2); //유사배열을 진짜배열로 만든다.
// 에러발생 myArray2 is not iterable, 반복 가능한 객체
// for(const item of myArray2) {
//     console.log(item);
// }

for(const item of myArray2Iterable) {
    console.log(item);
}