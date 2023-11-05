import { useState, useEffect } from 'react'
import './App.css'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yhjxjtdrpqoqbtjjaoik.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)

function App() {
  return (
    <>
    <div>Welcome to the League of Legends Champion Creator!</div>
    <div>You can create your very own set of League of Legends Champions, before they Int in game!</div>
    </>
  )
}

export default App
