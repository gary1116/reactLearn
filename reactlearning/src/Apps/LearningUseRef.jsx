import React, { useRef, useState } from 'react'

const LearningUseRef = () => {
    const [count, setCount] = useState(0);
    const refCount = useRef(0);
    console.log(refCount);

    const incrementStateCount = () => {
        setCount(count + 1);
    }

    const incrementRefCount = () => {
        refCount.current +=1;
        console.log(`refCount:${refCount.current}`);
    }

    return (
        <div>
            <div className="aligning">
                <p>UseState Count: {count}</p>
                <button onClick={() => incrementStateCount()} className='button'>increment useState</button>
            </div>
            <div className="aligning">
                <p>useRef count:{refCount.current}</p>
                <button onClick={() => incrementRefCount()} className='button'>increment useRef</button>
            </div>
        </div>
    )
}

export default LearningUseRef
