import React from 'react';
import Header from '../components/Header';
import FixedContact from '../components/FixedContact';
import Footer from '../components/Footer';

import WordCloudContainer from '../components/WordCloudContainer';
import { useEffect } from 'react';
import { useState } from 'react';
import JobTypeDistributionByCategory from '../components/JobTypeDistributionByCategory';
import CategoryTrends from '../components/CategoryTrends';
import Chloropeth from '../components/Chloropeth';
import { countries } from 'country-data';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import CategoryDistributionByLocation from '../components/CategoryDistributionByLocation';
import Loading from '../components/Loading';

function Visualisations(props) {
    const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

    const [tagsData, setTagsData] = useState([]);
    const [jobTypeDistByCategory, setJobTypeDistByCategory] = useState([]);
    const [categoryTrends, setCategoryTrends] = useState([]);
    const [locationDistribution, setLocationDistribution] = useState([]);
    const [categoryDistributionByLocation, setCategoryDistributionByLocation] = useState([]);

    const [categories, setCategories] = useState([]);
    const [uniqueJobs, setUniqueJobs] = useState([]);

    const [jobs, setJobs] = useState([]);

    const getCountryCode = (countryName) => {
      // console.log(countries.all[10])
      const country = countries.all.find(
        (country) => {
          if(countryName === "USA" && country.name === "United States") return true;
          if(countryName === "UK" && country.name === "United Kingdom") return true;

          return country.name.toLowerCase() === countryName.toLowerCase() || country.alpha2 === countryName.toLowerCase()
        }
      );
    
      return country ? country.alpha3 : "Not Found";
    };
    

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

        const jobTypeDistribution = {};
  
        jobs.forEach((job) => {
          let { category, job_type } = job;
          
          job_type = job_type === "" ? "not_specified" : job_type;

          if (jobTypeDistribution.hasOwnProperty(category)) {
            if (jobTypeDistribution[category].hasOwnProperty(job_type)) {
              jobTypeDistribution[category][job_type]++;
            } else {
              jobTypeDistribution[category][job_type] = 1;
            }
          } else {
            jobTypeDistribution[category] = { [job_type]: 1 };
          }
        });
        
        const formattedDistribution = Object.entries(jobTypeDistribution).map(([category, types]) => {
          const formattedObject = { category };
          Object.entries(types).forEach(([jobType, count]) => {
            formattedObject[jobType] = count;
          });
          return formattedObject;
        });
        
        return formattedDistribution;

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
      

      const categoryCounts = Object.entries(categoryTrends).map(([category, timestamps]) => {
        const counts = {};
        
        timestamps.forEach((timestamp, i) => {
          const monthYear = `${ new Date(timestamp).toLocaleString('default', { month: 'long' })}-${new Date(timestamp).getFullYear()}`;
      
          if (!counts[monthYear]) {
            counts[monthYear] = 0;
          }
      
          counts[monthYear]++;

        });
      
        return {category, counts };
      });

      const categoryCountsFormatted = categoryCounts.map(({ category, counts }) => {
        const data = Object.entries(counts).map(([monthYear, count]) => {
          const [month, year] = monthYear.split('-');
          const x = `${month}`;
          const y = count;
          
          return { x, y };
        });
        
        return { id: category, data:data.reverse()};
      });
      
      return categoryCountsFormatted;

    }

    const getCategoriesDailyData = (jobs)=>{
      const categoryTrends = jobs.reduce((trends, job) => {
        const category = job.category;
        const timestamp = new Date(job.publication_date).toISOString().split('T')[0];
      
        if (!trends[category]) {
          trends[category] = [];
        }

        const currentDateExists = trends[category].find((data)=>data.day === timestamp);
        if(!currentDateExists){
          trends[category].push({value:1, day:timestamp})
        }

        else{
          currentDateExists.value++;
        }
      
      
        return trends;
      }, {});

      return categoryTrends;
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


        return Object.entries(locationDistribution).map((item)=>{ return {id:getCountryCode(item[0]), value:item[1]}});
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

    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{

        document.title = "Visualizations | JobMagnetix"
       
        const fetchJobs = async()=>{
            const api = "https://remotive.com/api/remote-jobs";
            
            setIsLoading(true)
            const res = await fetch(api);
    
            if(res.ok){
                const data = await res.json();
                if(data){
                    const testData = data.jobs;
                    setJobs(testData)

                    const tempTags = handleCountTags(testData.map((job)=>job.tags).flat(1));
                    const tempJobTypeDistByCat = getJobTypeDistByCategory(testData);
                    const tempCategoryTrends = getCategoriesDailyData(testData);
                    const tempLocationDistribution = getLocationDistribution(testData);
                    const tempCategoryDistributionByLocation = getCategoryDistributionByLocation(testData);

                    console.log("AD", tempTags)
             
                    setTagsData(tempTags)
                    setJobTypeDistByCategory(tempJobTypeDistByCat)
                    setCategoryTrends(tempCategoryTrends)
                    setLocationDistribution(tempLocationDistribution);
                    setCategoryDistributionByLocation(tempCategoryDistributionByLocation)
                    

                    setCategories(Array.from(new Set(testData.map((job)=>job.category))))
                    setUniqueJobs(Array.from(new Set(testData.map((job)=>job.title))))
                }
                setIsLoading(false)
            }

            else setIsLoading(false)
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



    const tabs = ["Job Type Distribution","Category Trends","Location Distribution","Category Distribution", "Tags"]  
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <>
            <Header page="Visualisations"/>
            <main className='main__with__banner'>              
                <section className="visualisations__hero">
                  <h1>Visualisations</h1>
                  <p>Explore our Visualizations Page for captivating data representations and interactive graphics</p>

                  <ul className='flex'>
                    {tabs.map((tab, key)=>{
                      return <li key={key} onClick={()=>setSelectedTab(key)} className={selectedTab == key ? "selected__viz--tab" : ""}>{tab}</li>
                    })
                    }

                  </ul>
                </section>
                <section className='viz__field' ref={parent}>
                  {
                    isLoading ? 
                    <div className='loading__container'>
                      <Loading/>
                      
                    </div>
                    
                    :
                    <>
                      {selectedTab == 0 && <JobTypeDistributionByCategory data={jobTypeDistByCategory}/>}
                      {selectedTab == 1 && <CategoryTrends data={categoryTrends}/>}
                      {selectedTab == 2 && <Chloropeth data={locationDistribution}/>}
                      {selectedTab == 3 && <CategoryDistributionByLocation data={categoryDistributionByLocation}/>}
                      {selectedTab == 4 && <WordCloudContainer data={tagsData}/>}
                    
                    </>

                  }


                </section>

            </main>
            <FixedContact/>
            <Footer/>
            
        </>
    );
}

export default Visualisations;