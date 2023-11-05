import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Link } from "react-router-dom";
import './displayChampions.css'

const supabaseUrl = 'https://yhjxjtdrpqoqbtjjaoik.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)

const displayChampion = () => {

    const [champions, setChampions] = useState(null);

    useEffect (() => {
        async function getChampions() {
          const {data, error} = await supabase.from('Champions').select();
          if(error) {
            console.warn(error)
          }
          setChampions(data)
        }
        getChampions()
    }, [])

    const championInfo = () => {
        return (
            <>
            {champions.map(function(item){
                {console.log('pain')}
                <div>
                    <div>{item.name}</div>
                    <div>{item.title}</div>
                    <div>{item.role}</div>
                </div>
            })}
            </>
        )
    }

    return (
        <>
        <div className="body">
            {champions == null ? console.log('null') :
            champions.map(function(item) {
                return (
                    <>
                        <div className='championBox'>
                            <div>{item.name}</div>
                            <div>{item.title}</div>
                            <div>{item.role}</div>
                            <Link
                            to={`/champdetail/${item.id}`}
                            key= {item.id}>
                                <div>Edit</div>
                            </Link>
                        </div>
                    </>
                )
            })}
        </div>
        </>
    );
  };
  
  export default displayChampion;