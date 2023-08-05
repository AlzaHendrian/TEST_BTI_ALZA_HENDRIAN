// // JobPostContext.js
// import { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// // Buat context
// export const JobPostContext = createContext();

// // Buat provider
// export const JobPostProvider = ({ children }) => {
//   const [jobPosts, setJobPosts] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     let config = {
//       method: 'get',
//       maxBodyLength: Infinity,
//       url: 'https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth',
//       headers: {
//         'Cookie': 'XSRF-TOKEN=1f7ca29c-21e5-4c81-b5cd-fb0b1010c945'
//       }
//     };

//     axios.request(config)
//       .then((response) => {
//         setJobPosts(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <JobPostContext.Provider value={{ jobPosts }}>
//       {children}
//     </JobPostContext.Provider>
//   );
// };
