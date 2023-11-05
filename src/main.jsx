import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout.jsx';
import CreateChampion from './routes/createChampion.jsx'
import ViewChampion from './routes/viewChampions.jsx'
import UpdateChamp from './routes/updateChamp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route index={false} path="/CreateChampion" element={<CreateChampion />} />
          <Route index={false} path="/ViewChampion" element={<ViewChampion />} />
          <Route index={false} path="/champdetail/:id" element={<UpdateChamp />} />
        </Route>
      </Routes>
    </BrowserRouter>
)
