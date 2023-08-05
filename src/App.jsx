import React from "react"
import ResponsiveWeb from "./A.CSS_TEST/ResponsiveWeb"
// import { JobPostProvider } from "./B.API_TEST/global/DataContext"
import JobAplication from "./B.API_TEST/pages/JobAplication"
import { Routes, Route } from 'react-router-dom';
import JobDetail from "./B.API_TEST/pages/JobDetail";
import HomeChat from "./D.ERD_TEST/pages/HomeChat";
import Home from "./Home";



function App() {

  return (
    <>
    {/* <JobPostProvider> */}
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/responsive-web" element={<ResponsiveWeb/>}/>
        <Route path="/job" element={<JobAplication/>}/>
        <Route path="/job-detail/:jobId" element={<JobDetail/>}/>
        <Route path="/home-chat" element={<HomeChat/>}/>
      </Routes>
    {/* </JobPostProvider> */}
    </>
  )
}

export default App
