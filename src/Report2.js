import React from "react";


class Report2 extends React.Component {
    state = {
        name : "sunrise",
        age : 23,
        friends : [
            "victoria",
            "daniel",
            "hanna"
        ]
    }


    displayInfo = () => {
        alert(this.state.name + "\n"+this.state.age + "\n"+this.state.friends);
    } 

    render(){
        return(
            <>
                <button onClick={this.displayInfo}>신상정보 확인하기</button>
            </>
        )
    }
}

export default Report2;