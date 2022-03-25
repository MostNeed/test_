import React, { Component } from 'react';//라이브러리 호출
// import Person from './Person';
// import Todo from './Todo';
// import Animal from './Animal';

// import Report1 from './Report1';
import Report2 from './Report2';


class App extends Component {  
  render(){//메서드 => 컴포넌트에서 무조건 들어가야 되는 메서드
    // return <Person country="korea"></Person>
    // return <Todo user="aaa" age="22"></Todo>
    // return <Animal></Animal>
    // return <Person></Person>
    // return (<Person name="aaaaa" age={23}></Person>)
    // return (
    // <Todo 
    //       name="aaaaa" 
    //       age={23} 
    //       user="asdad" 
    //       done={true} 
    //       description="cleaning my room on wekends">            
    // </Todo>
    // )


    // ------------------------------------------
    // 연습과제1       
    // 10번을 보내서 class와 함수를 사용한 방법
    // return (
    //   <>
    //   <Report1 name= 'aslslkgl' age= {13} city= 'seoul'></Report1>
    //   <Report1 name= 'sun' age={34} city= 'busan'></Report1>
    //   <Report1 name= 'johseb' age={25} city= 'busan'></Report1>
    //   <Report1 name= 'syleemomo' age={9} city= 'seoul'></Report1>
    //   <Report1 name= 'hannah' age={41} city= 'daegu'></Report1>
    //   <Report1 name= 'shara' age={37} city= 'seoul'></Report1>
    //   <Report1 name= 'martin' age={28} city= 'daegu'></Report1>
    //   <Report1 name= 'gorgia' age={39} city= 'seoul'></Report1>
    //   <Report1 name= 'nana' age={24} city= 'busan'></Report1>
    //   <Report1 name= 'dannel' age={19} city= 'seoul'></Report1>
    // </>
    // )

    // 1번만 보내서 출력하는 방법
    // const friends = [
    //   {name: 'victoria', age: 13, city: 'seoul'},
    //   {name: 'sun', age: 34, city: 'busan'},
    //   {name: 'johseb', age: 25, city: 'busan'},
    //   {name: 'syleemomo', age: 9, city: 'seoul'},
    //   {name: 'hannah', age: 41, city: 'daegu'},
    //   {name: 'shara', age: 37, city: 'seoul'},
    //   {name: 'martin', age: 28, city: 'daegu'},
    //   {name: 'gorgia', age: 39, city: 'seoul'},
    //   {name: 'nana', age: 24, city: 'busan'},
    //   {name: 'dannel', age: 19, city: 'seoul'},
    // ]    
    // return (
    //     <>
    //       <Report1 friends = {friends} ></Report1>
    //     </>
    //   )
    // ------------------------------------------

    // ------------------------------------------
    // 연습과제2    
    // return <Report2></Report2>
    // ------------------------------------------

    // ------------------------------------------
    // 연습과제3    
    return <Report2></Report2>
    // ------------------------------------------



    // 로딩된 파일을 한개의 태그로 리턴 하는방법 아래 내용으로 묶어서 사용
    // <> </>
    // <> <Todo></Todo>  <Person country="korea"></Person>  </>
    
  }
}

//결과를 내보기해야 정보가 표시된다.
export default App; 