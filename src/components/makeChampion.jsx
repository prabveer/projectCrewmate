import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import './displayChampions.css'

const supabaseUrl = 'https://yhjxjtdrpqoqbtjjaoik.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)

const makeChampion = () => {
    const [count, setCount] = useState([])
    const handleSubmit = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Champions')
          .insert({name: count.name, title: count.title, role: count.role})
          .select();
      
        window.location = "/";
      }
      const handleInputChange = (event)  => {
        const name = event.target.name;
        const value = event.target.value;

        setCount(values => ({...values, [name]: value}))
      }
    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(count)
    //     alert(count);
    //   }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label for="name">Name</label> <br />
                <input type="text" itd="name" name="name" value={count.name || ""}  onChange={handleInputChange}/><br />
                <br/>

                <label for="title">Title</label><br />
                <input type="text" id="title" name="title" value={count.title || ""} onChange={handleInputChange}/><br />
                <br/>

                <label for="role">Role</label><br />
                <input type="text" id="role" name="role" value={count.role || ""} onChange={handleInputChange}/><br />
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
  };
  
  export default makeChampion;