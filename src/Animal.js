import React from "react";

class Animal extends React.Component {
    state = {
        type: 'cat',
        name: 'meyow',
        size: 'small',
        sound: 'low',
        appearence: 'cute'
    }

    render(){
        // state 나 props값을 조회
        const { type, name, size, sound, appearence } = this.state;

        // <h3>종류 - {자바스크립트 표현식}</h3>
        return(
            <>
                <h1>동물 정보</h1>                
                <h3>종류 - {type}</h3>
                <h3>이름 - {name}</h3>
                <h3>크기 - {size}</h3>
                <h3>소리 - {sound}</h3>
                <h3>생김새 - {appearence}</h3>
            </>
        )
    }
}

export default Animal;