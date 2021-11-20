import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './CounterComponent.css'
import Loading from './Loading'
import CounterDisplayer from './CounterDisplayer'

const MAX = 1000 , MIN = 0;                                                 // set the maximum and minimum value

//GET request
//this request returns NULL initially

const CounterComponent=()=> {
    const [count, setCount]=useState(1);                                    // state to keep count
    const [boo, setBoo] = useState(false);                                  // state used to render loading component


    useEffect(async (e) => {                                                 // will be called whenever value of count changes.
        
        
        setBoo(true);                                                       //loader will become active
        
        await axios.put('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', {deepanshu:count})  //PUT request
        .then(res=>{
            console.log('posted successfully');                             //success message
        })
        .catch(err=>{console.log(err)});                                    //failure message

        setBoo(false);                                                      //loader will be deactivated

    }, [count])

    useEffect(async ()=>{

        await axios.get('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/deepanshu.json')
        .then(res=>{
            if(!res)setCount(1);
            else setCount(res.data);
        });

    },[])



    return (

        <div className="ArtBoardView">

            {boo?<Loading/>:''}  

            <div className="viewBox">

                <button className="decrementor"  onClick={()=>count-1>=0?setCount(count-1):alert('Value can be in the range [0,1000]')}>
                    <div className="minus">-</div>
                </button>

                <input className="counterDisplay" type="text" defaultValue={''} 
                value={count}
                onChange={
                    (e)=>{
                        
                        var val = parseInt(e.target.value);
    
                        if(!val)setCount(0);
                        else{
                            if((val>=0) && (val<=1000)) setCount(val);
                            else alert('Value can be in the range [0,1000]');  
                        }                 
                    }
                }/>

                <button className="incrementor" onClick={()=>count+1<=1000?setCount(count+1):alert('Value can be in the range [0,1000]')}>
                    <div className="plus" >+</div>
                </button>

            </div>

            <CounterDisplayer value = {{count}} />   
        </div>
    )
}

export default CounterComponent;
