import React, {useState} from "react"

export default function Midterm(hook) {
    // let counter = 0
    const [content, setContent] = useState()

    return (
        <>
            <h1>당신은 어떤 과일을 좋아하나요? {content}</h1>
            <button onClick={() => setContent('사과')}>
                사과
            </button>
            <button onClick={() => setContent('오렌지')}>
                오렌지
            </button>
            <button onClick={() => setContent('바나나')}>
                바나나
            </button>
        </>
    )
}