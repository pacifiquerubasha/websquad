import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero';
import { images } from '../utils/images';
import MatchingTemplate from '../components/MatchingTemplate';
import { useState } from 'react';
import { useRef } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import FixedContact from '../components/FixedContact';
import { useAutoAnimate } from '@formkit/auto-animate/react';
function Matching(props) {

    const submenuItems = [
        {
            icon:"fas fa-cloud-download",
            text:"Data Source"
        },
        {
            icon:"fas fa-signal",
            text:"Data Fields"
        },
        {
            icon:"fas fa-cogs",
            text:"Data Usage"
        },

    ]
    
    const matchingContent = [
        {
           title:"Data Sourcing for Visualization: Utilizing the Remote Jobs API",
           content:`

           <p><strong>Introduction</strong></p>
           <p>This page provides an overview of the process involved in sourcing data for visualization pages using an online JSON API. Specifically, we will explore the utilization of the Remote Jobs API from "https://remotive.com/api/remote-jobs" as a source of data for visualization purposes.</p>
           
           <p><strong>Data Sourcing Methodology</strong></p>
           <p>The following methodology outlines the steps to source data for visualization pages using an API:</p>
           
           <ol>
             <li><strong>Identification of Suitable API:</strong> Begin by conducting research to identify a suitable API that provides the required data. In this case, the Remote Jobs API from "https://remotive.com/api/remote-jobs" was selected for its relevance to the project's needs.</li>
             <li><strong>API Documentation Review:</strong> Thoroughly review the API documentation provided by the API provider. This will help in understanding the available endpoints, request parameters, and data structure necessary to retrieve the desired data.</li>
             <li><strong>Establishing the API Connection:</strong> Utilize web development technologies to establish a connection with the Remote Jobs API. This involves making HTTP requests to the API's endpoints and handling responses to fetch the required data.</li>
             <li><strong>Data Retrieval:</strong> Retrieve the desired data by making specific API calls. In the case of the Remote Jobs API, remote job listings can be accessed through appropriate API calls.</li>
             <li><strong>Data Processing:</strong> Perform any necessary processing steps to transform the retrieved data into a format suitable for visualization. This may include cleaning, filtering, aggregating, or organizing the data based on the requirements of the visualization pages.</li>
           </ol>
           
           <p><strong>Conclusion</strong></p>
           <p>Sourcing data for visualization pages involves identifying a suitable API, reviewing its documentation, establishing a connection, retrieving the data, and processing it accordingly. By utilizing the Remote Jobs API from "https://remotive.com/api/remote-jobs," users can access relevant remote job data to create informative and visually appealing visualizations.</p>
           `
        },
        {
            title:"Data Content and Structure",
            content:`
            <p>The sample response from the API provides detailed information about a job listing. Let's break down the data content and structure, highlighting relevant attributes or fields:</p>
            
            <h4>id:</h4>
            <p>The unique identifier for the job listing. This field can be used as a key to identify and track individual job listings in a visualization app.</p>
            
            <h4>url:</h4>
            <p>The URL link to the job listing on the Remotive website. This field can be used to redirect users to the original job listing for more details.</p>
            
            <h4>title:</h4>
            <p>The title of the job listing. This field provides a concise summary of the job opportunity and can be used as a heading or label in a visualization app.</p>
            
            <h4>company_name:</h4>
            <p>The name of the company offering the job. This field provides information about the employer and can be used to display the company name alongside the job listing in a visualization app.</p>
            
            <h4>company_logo:</h4>
            <p>The URL link to the company logo image. This field can be used to display the company logo next to the job listing, providing visual representation and branding in a visualization app.</p>
            
            <h4>category:</h4>
            <p>The category or industry of the job. This field can be used to categorize and group job listings based on industry or job type in a visualization app.</p>
            
            <h4>tags:</h4>
            <p>An array of tags associated with the job. These tags indicate specific skills, technologies, or keywords related to the job. In a visualization app, these tags can be used for filtering and searching job listings based on specific criteria.</p>
            
            <h4>job_type:</h4>
            <p>The type of job, such as full-time, part-time, contract, etc. This field provides information about the job arrangement and can be used to display the job type alongside the job listing in a visualization app.</p>
            
            <h4>publication_date:</h4>
            <p>The date when the job listing was published. This field provides a timestamp of when the job became available and can be used for sorting and filtering job listings based on their publication date in a visualization app.</p>
            
            <h4>candidate_required_location:</h4>
            <p>The preferred location for candidates applying for the job. This field provides information about the desired location for the job and can be used to visualize job opportunities based on geographic regions or filter job listings based on specific locations in a visualization app.</p>
            
            <h4>salary:</h4>
            <p>The salary information for the job (if provided). This field provides details about the compensation for the job and can be used to compare and analyze salary ranges across different job listings in a visualization app.</p>
            
            <h4>description:</h4>
            <p>The detailed description of the job, including responsibilities, requirements, benefits, and additional information. This field contains rich text and can include HTML tags for formatting. In a visualization app, this field can be used to display the full job description, providing users with comprehensive information about the job opportunity.</p>
            
            `,
            code:`
            {
                "id": 1686335,
                "url": "https://remotive.com/remote-jobs/writing/technical-writer-for-blockchain-platform-1686335",
                "title": "Technical Writer for blockchain platform",
                "company_name": "Tatum",
                "company_logo": "https://remotive.com/job/1686335/logo",
                "category": "Writing",
                "tags": [
                    "api",
                    "developer",
                    "blockchain",
                    "agile",
                    "content",
                    "research",
                    "documentation",
                    "technical writing",
                    "product",
                    "infrastructure",
                    "development",
                    "IT",
                    "technical documentation",
                    "writing",
                    "implementation",
                    "cryptography",
                    "applications",
                    "communication",
                    "support",
                    "API documentation",
                    "software"
                ],
                "job_type": "full_time",
                "publication_date": "2023-06-01T03:41:15",
                "candidate_required_location": "Czech Republic",
                "salary": "",
                "description":"..."
            }
            `
         },
         {
            title:"API Access and Data Retrieval",
            content:`
            <p>To access the APIs and retrieve the required data, follow these steps:</p>
            <ol>
              <li>Make sure you have the necessary dependencies installed. In this code snippet, the <code>fetch</code> function is used, which is a built-in JavaScript function for making HTTP requests.</li>
              <li>Define the API endpoint URL. In this case, the API endpoint URL is set to "<code>https://remotive.com/api/remote-jobs</code>".</li>
              <li>Call the API using the <code>fetch</code> function. This function makes an HTTP GET request to the specified API endpoint URL. It returns a Promise that resolves to the response object.</li>
              <li>Check if the response is successful (<code>res.ok</code> is truthy). If it is, proceed with extracting the data from the response.</li>
              <li>Parse the response data using the <code>.json()</code> method. This method reads the response body and returns a Promise that resolves to the parsed JSON data.</li>
              <li>Once you have the parsed JSON data (<code>data</code>), you can access the desired information.</li>
              <li>Set the retrieved data to the respective state variables or perform any required operations.</li>
              <li>Optionally, you can perform additional operations or log the retrieved data for debugging purposes.</li>
            </ol>
            <p class="note__">Remember to handle any potential errors or exceptions that may occur during the API request and data retrieval process.</p>
            <p>Please note that the provided code snippet assumes you are using JavaScript with a framework like React. Adjustments may be needed based on your specific development environment and requirements.</p>
            `,
            code:`

            //Location Distribution state
            const [locationDistribution, setLocationDistribution] = useState([]);

            /**
             * Helper to match country data to format required by the chloropeth
             * @param {*} countryName 
             * @returns country's alpha3 code
             */
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

            /**
             * Helper to get the distribution of job types
             * @param {*} jobs 
             * @returns location distribution
             */
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

            /**
             * Fetching of data and use of helpers to handle manipulations
             */
            const fetchJobs = async()=>{
                const api = "https://remotive.com/api/remote-jobs";
                
                setIsLoading(true)
                const res = await fetch(api);
        
                if(res.ok){
                    const data = await res.json();
                    if(data){
                        const testData = data.jobs;
                        setJobs(testData)

                        const tempJobTypeDistByCat = getJobTypeDistByCategory(testData);
                        const tempCategoryTrends = getCategoriesDailyData(testData);
                        const tempLocationDistribution = getLocationDistribution(testData);
                        const tempCategoryDistributionByLocation = getCategoryDistributionByLocation(testData);

                
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

            //Data Usage
            <Chloropeth data={locationDistribution}/>
            `
         }
    ]


    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    const topContentRef = useRef(null);
    const handleChangeContent =(index)=>{
        setCurrentContentIndex(index);
        topContentRef.current.scrollIntoView({behavior: 'smooth'});
    }

    const [isMainSource, setIsMainSource] = useState(true);

    const dataFields = `
    {
        "data": [
          {
            "slug": "stagiaire-audit-des-systemes-dinformation-lille-mai-2022-hf-mazars-275214",
            "company_name": "MAZARS",
            "title": "Stagiaire Audit des systèmes d'information - Lille - Mai 2022 (H/F)",
            "description": "",
            "remote": false,
            "url": "https://arbeitnow.com/view/stagiaire-audit-des-systemes-dinformation-lille-mai-2022-hf-mazars-275214",
            "tags": [
              "Accounting",
              "accounting/auditing"
            ],
            "job_types": [
              "Internship",
              "full time"
            ],
            "location": "Villeneuve-d'Ascq",
            "created_at": 1638006745
            }
        ]
    }`;

    const dataUsage = `

    /**
     * Data Manipulation
     * @param {*} tags 
     * @returns 
     */
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

    /**
     * Fetching of data and use of helpers to handle manipulations
     */
    const fetchFromSecondSource = async()=>{
        const api = "https://www.arbeitnow.com/api/job-board-api";
        
        setIsLoading(true)
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        const res = await fetch(api, requestOptions);

        if(res){
          if(res.ok){
            const data = await res.json();
            if(data){
              const dataList = data.data;
              const tags = dataList.map((job)=>job.tags).flat(1);
              const slugs = dataList.map((job)=>{
                const slug = job.slug.split("-");
                slug.pop()
                return slug
              }).flat(1)
              setTagsData(handleCountTags(tags.concat(slugs)))
            }
          }

          setIsLoading(false)
        }
    }

    const fontSizeMapper = word => Math.log2(word.value) * 5;
    //Usage
    <WordCloud 
        data={data} 
        spiral="rectangular"
        rotate={(word) => 0}
        fontSize={fontSizeMapper}
    />
    `

    const [matchParent] = useAutoAnimate();

    return (
        <>

        <Header page="Matching"/>
        <main className='main__contentful'>
            <div className="container flex flex-col">
                <div className='flex justify-between items-center matching__title '>
                    <h1 className='font-500'>{isMainSource ? "Main" : "Secondary"} Data Source</h1>
                    <button onClick={()=>setIsMainSource((prev)=>!prev)} className='main__btn no-border cursor-pointer'>View {isMainSource ? "secondary" : "main"} source</button>
                </div>
                {isMainSource &&
                <div className="illustration" data-aos="fade-up" data-aos-duration="1000">
                    <img src={images.matching} alt="Matching"/>
                </div>}

                

                <div ref={topContentRef}></div>
                <div ref={matchParent} className="description" data-aos="fade-up" data-aos-duration="1000">  

                    {
                        isMainSource ?
                        <>
                            {matchingContent.map((item, index)=>{
                                return (
                                    <>
                                        {currentContentIndex === index && 
                                        
                                        <>
                                            <h2>{item.title}</h2>
                                            {item.code &&
                                            <div className='code__bloc'>
                                                <SyntaxHighlighter language="javascript" style={docco}>
                                                    {item.code}
                                                </SyntaxHighlighter>
                                                <p><em>{item.title}</em></p>
                                            </div>}

                                            <MatchingTemplate description={item.content}/>
                                                
                                            <div className='flex controls'>
                                                {index > 0 && <a className='prev__link' onClick={()=>handleChangeContent(index-1)}>&laquo;&nbsp;<div>{matchingContent[index-1]?.title}</div> </a>}
                                                {index+1 < matchingContent.length && <a className='next__link' onClick={()=>handleChangeContent(index+1)}><div>{matchingContent[index+1]?.title}</div> &nbsp;&raquo;</a>}
                                            </div>

                                        </>
                                        
                                        }
                                        
                                    
                                    </>
                                )
                            })

                            }                        
                        </>    :
                        
                        <div className='matching__desc'>
                            <h2 className='matching__title'>Data Source</h2>
                            <p>
                                The data appears to be sourced from an API provided by "Arbeitnow," a company based in Berlin that helps other companies hire candidates with visa sponsorship, four-day work weeks, and remote opportunities. The API seems to be a job board API, which allows users to access job postings and related information. The API endpoint used to fetch the data is <a href="https://www.arbeitnow.com/api/job-board-api" target='_blank'>"https://www.arbeitnow.com/api/job-board-api."</a> 
                            </p>
                            <h2 className='matching__title'>Data Fields</h2>
                            <div className='code__bloc'>
                                <SyntaxHighlighter language="javascript" style={docco}>
                                    {dataFields}
                                </SyntaxHighlighter>
                            </div>
                            <p>
                                The sample data response contains the following fields for each job posting:
                            </p>
                            <ul>
                                <li> <strong>slug</strong>: A unique identifier for the job posting.</li>
                                <li> <strong>company_name</strong>: The name of the company offering the job.</li>
                                <li> <strong>title</strong>: The job title or position.</li>
                                <li> <strong>description</strong>: The job description (which is an empty string in this case, but would typically contain details about the job).</li>
                                <li> <strong>remote</strong>: A boolean indicating whether the job offers remote opportunities (true/false).</li>
                                <li> <strong>url</strong>: The URL to view the complete details of the job posting.</li>
                                <li> <strong>tags</strong>: An array of tags associated with the job, such as the job category or related keywords.</li>
                                <li> <strong>job_types</strong>:  An array of job types, such as "Internship" or "Full-time."</li>
                                <li> <strong>location</strong>: The location of the job.</li>
                                <li> <strong>created_at</strong>: The timestamp indicating when the job posting was created.</li>
                            </ul>
                            <h2 className='matching__title'>Data Usage in Application</h2>
                            <div className='code__bloc'>
                                <SyntaxHighlighter language="javascript" style={docco}>
                                    {dataUsage}
                                </SyntaxHighlighter>
                            </div>
                            <p>
                                Based on the provided code snippet, it seems that the data is being used to generate a word cloud, which visually represents the frequency of different tags and slugs (parts of the job URLs) associated with the job postings. The word cloud appears to be constructed from the combined tags and slugs extracted from the sample data.
                                <br/><br/>The word cloud generation process involves the following steps:
                            </p>
                            <ul>
                                <li>Fetching the data from the API endpoint using the fetch function.</li>
                                <li>Extracting tags and slugs from each job posting and creating separate arrays.</li>
                                <li>Merging the tags and slugs arrays into a single array.</li>
                                <li>Counting the frequency of each tag and slug using a function called handleCountTags.</li>
                                <li>The resulting data, containing tag and slug frequencies, is then used to generate the word cloud visualization.</li>
                                
                            </ul>
                            <p>
                                However, the specific details of how the word cloud is being generated and displayed are not included in the code snippet, so further information would be required to understand the exact implementation.
                            </p>
                        
                        </div>
                    }


                </div>
            </div>

            {isMainSource && <div className="fixedSubmenu">
                {submenuItems.map((item, index)=>{
                    return (
                    <div onClick={()=>handleChangeContent(index)} className={`${index == currentContentIndex && "current__submenu--item"}`}>
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                    </div>                        
                    )
                })

                }
               
            </div>}
            
        </main>

        <FixedContact/>

        <Footer/>
            
        </>
    );
}

export default Matching;