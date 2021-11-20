import React from 'react'
import './CounterDisplayer.css'
const CounterDisplayer= (props)=> {
    // console.log(props.value.count);
    return (
        <div class="value-text">
            Counter value is {props.value.count?props.value.count:0}.
        </div>
    )
}

export default CounterDisplayer;
