/*
import React, { Component } from 'react';//라이브러리 호출
//아래 처럼도 사용 가능
// import React from 'react';//라이브러리 호출
// class Person extends React.Component {

class Person extends Component {
  render(){//메서드 => 컴포넌트에서 무조건 들어가야 되는 메서드
    const name = "yhlee";
    const age = 3;

    // HTML 템플릿
    return(
        // React.Fragment, <> 태그들을 묵어주고 싶을때 사용
        //  단, 개발자모드에서는 태그가 표시되지 않음
      <React.Fragment>          
        <h3>{name}</h3>
        <h4>{age}</h4>
      </React.Fragment>
    )
  }
}
//결과를 내보기해야 정보가 표시된다.
export default Person; 
*/

// 위 내용을 함수형으로 변경
import React from "react";

function Person(props){
  const name = "aaa";
  const age = 23;
  return(
    <>
      <h3>{props.name}</h3>
      <h4>{props.age}</h4>
    </>
  )
}
// 30번 줄의 함수를 아래처럼도 사용가능
// function Person({name, age}){
//   return(
//     <>
//       <h3>{name}</h3>
//       <h4>{age}</h4>
//     </>
//   )
// }

// 30번 줄의 함수를 아래처럼도 사용가능
// const Person = ({name,age}) => {
//   return(
//     <>
//       <h3>{name}</h3>
//       <h4>{age}</h4>
//     </>
//   )
// }




export default Person;