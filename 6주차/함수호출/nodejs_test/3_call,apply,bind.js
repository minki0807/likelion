/* 
function introduce(greeting, age) {
    console.log(`${greeting}! 제 이름은 ${this.name}이고, 나이는 ${age}살입니다.`);
  }
  
  const person = { name: "홍길동" };
  
  // call() 사용
  introduce.call(person, "안녕하세요", 20);
  // 출력: "안녕하세요! 제 이름은 홍길동이고, 나이는 20살입니다."
   */



/* 
function sumAll() {
    return Array.from(arguments).reduce((acc, cur) => acc + cur, 0); //순회
  }
  
  function introduce(greeting, age) {
    console.log(`${greeting}! 제 이름은 ${this.name}이고, 나이는 ${age}살입니다.`);
  }
  
  const person = { name: "홍길동" };
  
  // apply() 사용
  introduce.apply(person, ["안녕하세요", 20]); //배열

  // 출력: "안녕하세요! 제 이름은 홍길동이고, 나이는 20살입니다."
  
  // apply()로 sumAll에 배열 전달하기
  console.log(sumAll.apply(null, [1, 2, 3, 4])); // 10
   */

/* 

  function introduce(greeting, age) {
    console.log(`${greeting}! 제 이름은 ${this.name}이고, 나이는 ${age}살입니다.`);
  }
  
  const person = { name: "홍길동" };
  
  // bind() 사용
  const introduceWithPerson = introduce.bind(person, "안녕하세요");
  
  // introduceWithPerson을 호출하면 this가 이미 person으로 고정됨
  introduceWithPerson(25);
  // 출력: "안녕하세요! 제 이름은 홍길동이고, 나이는 25살입니다."
  
   */