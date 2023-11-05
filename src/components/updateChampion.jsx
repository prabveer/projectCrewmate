import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yhjxjtdrpqoqbtjjaoik.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)

const updateChampion = () => {
    const [champions, setChampions] = useState(null);
    const [count, setCount] = useState([])
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        await supabase
        .from('Champions')
        .update({name: count.name, title: count.title, role: count.role})
        .eq('id', params.id);

    
      window.location = "/";
    }
    
    const handleInputChange = (event)  => {
        const name = event.target.name;
        const value = event.target.value;

        setCount(values => ({...values, [name]: value}))
      }

      const deletePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Champions')
          .delete()
          .eq('id', params.id); 
      
        window.location = "/";
      }

    return (
        <>
        <div>This Is Where You Can Update A Existing Champion!</div>
        <div>Current info</div>
        {champions == null ? console.log('null') :  champions.map(function(item) { return(<div>Name: {item.name} Title: {item.title} Role: {item.role}</div>)})}

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
            <button onClick={deletePost}>Delete Champion!</button>

        </>
    );
  };
  
  export default updateChampion;