import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './CounterComponent.css'
import Loading from './Loading'
import CounterDisplayer from './CounterDisplayer'
var boo=false;
// axios.get('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json')
//     .then(res=>{console.log(res)});
const CounterComponent=()=> {
    const [count, setCount]=useState(0);
    useEffect(async () => {
        // <Loading/>
        // boo=true;
        // console.log('here');
        // await setTimeout(() => {
        //     return (
        //         <div>
        //             <Loading/>
        //         </div>
        //     )
        // }, 10000);
        await axios.put('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', {deepanshu:count})
        .then(res=>{
            console.log('posted successfully');
        });
        console.log('here now')
        boo=false;
        
        
        }, [count])
        if(boo){
            console.log("hi mate i m called");
            <Loading/>
        }
    return (
        <div className="ArtBoardView">
            
            <div className="viewBox">
               
                <button className="decrementor" >
                    <div className="minus" onClick={()=>setCount(count-1)}>-</div>
                </button>
                <div className="counterDisplay">{count}</div>
                <button className="incrementor">
                    <div className="plus" onClick={()=>setCount(count+1)}>+</div>
                </button>
            </div>
            <CounterDisplayer value = {{count}} />
        </div>
    )
}

export default CounterComponent;
