import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yhjxjtdrpqoqbtjjaoik.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)

const champInfo = () => {
    const [champions, setChampions] = useState(null);
    let params = useParams();

    useEffect (() => {
        async function getChampions() {
          const {data, error} = await supabase.from('Champions').select().eq('id', params.id);
          if(error) {
            console.warn(error)
          }
          setChampions(data)
          console.log(data)
        }
        getChampions()
    }, [])
    const randomNumberInRange = (min, max) => { 
        return Math.floor(Math.random()  
                * (max - min + 1)) + min; 
    }; 

    const returnto = () => {
        window.location = "/ViewChampion";
    }
    return (
        <>
        <div>Champion info!</div>
        {champions == null ? console.log('null') :  champions.map(function(item) { return(<div>Name: {item.name} Title: {item.title} Role: {item.role}</div>)})}

        {randomNumberInRange(0, 1) ? <div>What a Cool and very Useful Champion!</div> : <div>This Champion isn't very good</div> }

        <button onClick={returnto}>Return</button>
        </>
    )

}

export default champInfo;
