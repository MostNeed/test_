import React, { Component } from 'react';
import './Todo.css'


// class Todo extends Component {
// // export default 아래에서 안쓰고 여기에 이렇게 쓸수도 있다.
// // export default class Todo extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             name : 'cleaning',
//             done : false,
//             description : 'cleaning my room on wekends'
//         }
//     }

//     changeName = () => {
//         // this.setState({name:"learning react"});
//         this.setState({name:(this.state.name=="cleaning")?"learning react":"cleaning"});
//     } 

//     render(){
//         // 비구조화 할당
//         const { name, done, description } = this.state;
//         //props 조회
//         const {user} = this.props;
//         const {age} = this.props;
//         console.log(this.props);
//         console.log(this.props.user);

//         // HTML 템플릿 => JSX문법
//         return(
//             <>
//                 <h3>name : {name}</h3>
//                 <h4>done : {done?"finished":"ongoing"}</h4>
//                 <p>description: {description}</p>
//                 <button type="button" onClick={this.changeName}>이름 변경하기</button>
//                 <h2>{user}</h2>
//                 <h2>{age}</h2>
//             </>
//         )
//     }
// }

//위내용을 아래처럼 변경가능
function Todo({user, name, done, description}){
    return(
        <>
            <h3>name : {name}</h3>
            <h4>done : {done?"finished":"ongoing"}</h4>
            <p>description: {description}</p>
            <h2>{user}</h2>
        </>
    )
}

export default Todo;