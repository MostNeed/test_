import React from 'react';

function Report4(ssss){
    const {state} = ssss;
    return <>
                <h1>동물 정보</h1>
                <h3>종류 - {state.type}</h3>
                <h3>이름 - {state.name}</h3>
                <h3>크기 - {state.size}</h3>
                <h3>소리 - {state.sound}</h3>
                <h3>생김새 - {state.appearence}</h3>
            </>
}

export default Report4;