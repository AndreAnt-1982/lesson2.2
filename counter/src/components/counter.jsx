import React,{useState} from 'react';

const Counter = () => {
    const [count, setCount]=useState(0);
   // const tags =['tag1', 'tag2', 'tag3']
    const formCount = () => {
        return count === 0? "Ноль" : count;
    };

const getBageclasses = () => {
    let classes = "badge m-2 bg-"
    classes += count === 0? "danger" : "primary";
    return classes;
};

/* const renderTags = () => {
    if (tags.length === 0) return 'Tags are not found';
    return tags.map((tag) => <li key={tag}>{tag}</li>);
}; /* {renderTags()} */

const handleIncrement = () => {
   setCount(count+1);
};
const handleDecrement = () => {
    return count === 0? alert("stop") : setCount(count-1);
};

    return (
    <React.Fragment>
       
        <span className={getBageclasses()}>{formCount()}</span>
        <button onClick={handleIncrement} className='btn btn-secondary btn-sm m-2'>Increment</button>
        <button onClick={handleDecrement} className='btn btn-secondary btn-sm'>Decrement</button>
    </React.Fragment>
    );
};
 
export default Counter;