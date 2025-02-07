/*
function doSomething(callback){
   console.log("첫번째");
    callback();// 콜백 함수를 나중에 실행
     }
 
   function finish(){
  console.log("두번째");
   }
  
   doSomething(finish);
*/

/* 
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => {
    // 콜백 형태로 then 안에서 비동기 결과 받음
    console.log("서버 데이터:", data);
  })
  .catch(error => {
    console.error("에러 발생:", error);
  });
 */

//Ajax 요청 Fetch API - 현대적인 방법
/* 
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => {
    // 콜백 형태로 then 안에서 비동기 결과 받음
    console.log("서버 데이터:", data);
  })
  .catch(error => {
    console.error("에러 발생:", error);
  });
 */