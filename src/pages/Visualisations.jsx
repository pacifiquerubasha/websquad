import React from 'react';
import Header from '../components/Header';
import FixedContact from '../components/FixedContact';
import Footer from '../components/Footer';

import WordCloud from 'react-d3-cloud';
import { useEffect } from 'react';
import { useState } from 'react';

function Visualisations(props) {

    const [tagsData, setTagsData] = useState([]);
    const [jobTypeDistByCategory, setJobTypeDistByCategory] = useState([]);
    const [categoryTrends, setCategoryTrends] = useState([]);
    const [locationDistribution, setLocationDistribution] = useState([]);
    const [categoryDistributionByLocation, setCategoryDistributionByLocation] = useState([]);

    const [categories, setCategories] = useState([]);
    const [uniqueJobs, setUniqueJobs] = useState([]);

    const [jobs, setJobs] = useState([]);

    const handleCountTags = (tags)=>{

        const countObj = tags.reduce((obj, element) => {
            if (obj[element]) {
              obj[element]++;
            } else {
              obj[element] = 1;
            }
            return obj;
          }, {});

        return Object.entries(countObj).map(([item, count]) => ({ text: item, value: count }));  
    }

    const getJobTypeDistByCategory = (jobs)=>{

        const jobTypeDistribution = jobs.reduce((distribution, job) => {
            const { category, job_type } = job;
            if (!distribution[category]) {
              distribution[category] = {};
            }
            if (!distribution[category][job_type]) {
              distribution[category][job_type] = 0;
            }
            distribution[category][job_type]++;

            return distribution;
          }, {});
        
          return jobTypeDistribution;

    }

    const getCategoryTrends = (jobs)=>{

      const categoryTrends = jobs.reduce((trends, job) => {
        const category = job.category;
        const timestamp = new Date(job.publication_date).toISOString().split('T')[0];
      
        if (!trends[category]) {
          trends[category] = [];
        }
      
        trends[category].push(timestamp);
      
        return trends;
      }, {});
      
      // Calculate count of job listings for each category over time
      const categoryCounts = Object.entries(categoryTrends).map(([category, timestamps]) => {
        const counts = {};
        
        timestamps.forEach((timestamp) => {
          const monthYear = `${new Date(timestamp).getMonth() + 1}-${new Date(timestamp).getFullYear()}`;
      
          if (!counts[monthYear]) {
            counts[monthYear] = 0;
          }
      
          counts[monthYear]++;
        });
      
        return { category, counts };
      });

      return categoryCounts;

    }

    const getLocationDistribution = (jobs)=>{
        const locationDistribution = jobs.reduce((distribution, job) => {
            const locations = job.candidate_required_location.split(',').map((location) => location.trim());
            locations.forEach((location) => {
              if (!distribution[location]) {
                distribution[location] = 0;
              }
              distribution[location]++;
            });
            return distribution;
          }, {});
        return locationDistribution;
    }

    const getCategoryDistributionByLocation = (jobs)=>{
        const categoryDistributionByLocation = jobs.reduce((distribution, job) => {
            const locations = job.candidate_required_location.split(',').map((location) => location.trim());
            locations.forEach((location) => {
              if (!distribution[location]) {
                distribution[location] = {};
              }
              if (!distribution[location][job.category]) {
                distribution[location][job.category] = 0;
              }
              distribution[location][job.category]++;
            });
            return distribution;
          }, {});
        return categoryDistributionByLocation;
    }

    
    useEffect(()=>{
       
        const fetchJobs = async()=>{
            const api = "https://remotive.com/api/remote-jobs";
            
            const res = await fetch(api);
    
            if(res.ok){
                const data = await res.json();
                if(data){
                    const testData = data.jobs;
                    setJobs(testData)

                    const tempTags = handleCountTags(testData.map((job)=>job.tags).flat(1));
                    const tempJobTypeDistByCat = getJobTypeDistByCategory(testData);
                    const tempCategoryTrends = getCategoryTrends(testData);
                    const tempLocationDistribution = getLocationDistribution(testData);
                    const tempCategoryDistributionByLocation = getCategoryDistributionByLocation(testData);

                    setTagsData(tempTags)
                    setJobTypeDistByCategory(tempJobTypeDistByCat)
                    setCategoryTrends(tempCategoryTrends)
                    setLocationDistribution(tempLocationDistribution);
                    setCategoryDistributionByLocation(tempCategoryDistributionByLocation)
                    

                    setCategories(Array.from(new Set(testData.map((job)=>job.category))))
                    setUniqueJobs(Array.from(new Set(testData.map((job)=>job.title))))

                }
    
            }
    
        }

        fetchJobs();

      }, [])


    
    const [currentCategoryTag, setCurrentCategoryTag] = useState();


    const handleCategoryChange = (category)=>{      
      const filteredCategories = jobs.filter((job)=>job.category == category);
      const tagsPool = filteredCategories.map((job)=>job.tags).flat(1);

      setTagsData(handleCountTags(tagsPool))

    }

    useEffect(()=>{
        handleCategoryChange(currentCategoryTag);
    }, [currentCategoryTag])
      

    return (
        <>
            <Header page="Visualisations"/>
            <main>

                <div className='word__cloud'>
                    {tagsData && <WordCloud 
                    data={tagsData} 
                    spiral="rectangular"
                    rotate={(word) => 0}
                    padding={5}
                    

                    />}
                </div>


                <button onClick={()=>setCurrentCategoryTag("Writing")}>TRY</button>

            </main>
            <FixedContact/>
            <Footer/>
            
        </>
    );
}

export default Visualisations;