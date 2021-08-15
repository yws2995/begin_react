import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';

// function App() {
  
//   return (
//     <Wrapper>
//       <Hello name="react" color = "red" isSpecial 
//       // isSpecial이라는 props를 설정해서 조건부 렌더링 , true는 자바스크립트이므로 중괄호로 감싼다.
//       /> 
//       <Hello color = "pink" />
//     </Wrapper>
//   );
// }

function App() {
  
  return (
    <Counter />
  );
}

export default App;
