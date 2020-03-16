import React, {useContext, useEffect} from 'react';
import { ApiGlobalContext } from '../context/ApiGlobalState';

export const Home = () => {
  const { getGeneralStats, stats } = useContext(ApiGlobalContext);
  
  useEffect(() => {
       const fetchData = async () => {
        const response = await fetch('/api/stats', {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8"
          }
        });
        let data = await response;
        if (data.status === 400 || data.status === 404 || data.status === 403) {
          const error = await data.json();
          throw new Error(JSON.stringify(error));
        }
        data = await response.json();
        const { stats } = data;
        getGeneralStats(stats);
       }
     fetchData();
     
     }, []); 
  
  return (
    <div>
     <h1>Home covid-19</h1>
     <img src={stats.image} alt="covid-19"/>
    </div>
    
  )
}