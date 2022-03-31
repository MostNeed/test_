import React from "react";


function Report3(props){
    const {model} = props;
    return <>
        <h1>도서 정보</h1>
        <h2>TEST</h2>
        <h3>제목 - {model.title}</h3>
        <h3>저자 - {model.author}</h3>
        <h3>줄거리 - {model.summary}</h3>
        <h3>장르 - {model.genre}</h3>
        <h3>출판일 - {model.release}</h3>
        <h3>ISBN - {model.ISBN}</h3>
        </>
}

export default Report3;