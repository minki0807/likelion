/* function outerFunction() {
    let outerVar = '외부 변수 값';
  
    function innerFunction() {
      console.log(outerVar); // 내부 함수에서 외부 함수의 변수에 접근
    }
  
    innerFunction(); // 내부 함수를 실행
  }
  
  outerFunction(); 
  // 출력: "외부 변수 값"
   */


/*   
  function createCounter() {
    let count = 0; // 외부 함수 스코프의 변수
  
    // 내부 함수(클로저)
    function increase() {
      count++; //count = count + 1
      console.log(`현재 count 값: ${count}`);
    }
  
    return increase; // 내부 함수를 반환
  } //메모리가 없어짐.
  
  const counter = createCounter();
  counter(); // 현재 count 값: 1
  counter(); // 현재 count 값: 2
  counter(); // 현재 count 값: 3
   */

/* 
    function createSecret(secretValue) {
    // secretValue는 외부에서 직접 접근 불가능
    return function getSecret() {
      return secretValue;
    };
  }
  
  const secretGetter = createSecret('비밀 메시지');
  console.log(secretGetter()); // "비밀 메시지" 
 */

/*
  function createClickHandler(initialCount = 0) {
    let count = initialCount;
  
    return function () {
      count++;
      console.log(`버튼이 ${count}번 클릭되었습니다.`);
    };
  }
  
  const button = document.querySelector('button');
  button.addEventListener('click', createClickHandler());
  */
   
  