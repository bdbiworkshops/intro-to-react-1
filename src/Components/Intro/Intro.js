import React from 'react';

//props is an object that contains all the properties that are passed to this component
//const Intro is a functional component
const Intro = (props) => {
    return (
        //div is necessary to wrap all the elements
        <div>
            <p>Hello guys. {props.message}</p>

            {/* input is a tag that allows user to enter text. Value is the value of the input initially. onChange is an event that is triggered when the value of the input changes. e is the event object. target is the element that triggered the event. value is the value of the input. */}
            <input value={props.topic} onChange={e => props.setTopic(e.target.value)} />

            <button onClick={props.addTopic}>Add Topic</button>
        </div>
        
   )
}


//exporting the Intro component so that we can use it in other files
export default Intro;