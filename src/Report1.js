import React from "react";


// 클래스로 props를 값을 받아서 사용하는 방법
// class Report1 extends React.Component {    
//     render(){
//         console.log(this.props);       
//         const { name, age, city } = this.props;
//         return(
//             <>
//                 <h3>{name}</h3>
//                 <h3>{age}</h3>
//                 <h3>{city}</h3>
//                 <h3>---------------</h3>
//             </>
//         )
//     }
// }

// 함수를 사용하여 props를 값을 받아서 사용하는 방법
// function Report1(props){
//     return(
//       <>
//         <h3>{props.name}</h3>
//         <h3>{props.age}</h3>
//         <h3>{props.city}</h3>
//         <h3>-------------------</h3>
//       </>
//     )
//   }



function Report1(props){
    const {friends} = props;
    // console.log(friends);
    return(
        friends.map(friends => {
            // console.log(friends);
            <>
                <h3>{friends.name}</h3>
                <h3>{friends.age}</h3>
                <h3>{friends.city}</h3>
                <h3>-------------------</h3>
            </>})
    )
}



export default Report1;