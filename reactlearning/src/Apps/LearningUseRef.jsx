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
    
    const inputRef=useRef(null);

    const focusInput=()=>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor='red';
        console.log(inputRef);
        
    }

    return (
        <>
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
        <div className="">
        <input type="text" placeholder='Focus me' ref={inputRef} />
        <button onClick={focusInput}>Focus</button>
        </div>
        </>
    )
}

export default LearningUseRef
