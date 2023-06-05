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
            const fetchJobs = async()=>{
                const api = "https://remotive.com/api/remote-jobs";
                
                setIsLoading(true)
                const res = await fetch(api);
    
                if(res.ok){
                    const data = await res.json();
                    if(data){
                        const testData = data.jobs;
                        setJobs(testData)
                        setJobsToShow(testData)
                        setIsLoading(false)
                        const tempFilters = testData.length > 0 ? Array.from(new Set(testData.map((job)=>{
                            return job.tags
                          }).flat(1))) : [];
                        
                        setFilters(tempFilters);
                        setFiltersToShow(tempFilters);
    
                        console.log(testData)
    
                    }
    
                    else setIsLoading(false)
    
                }
    
                else setIsLoading(false)
            }
    
            `
         }
    ]


    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    const topContentRef = useRef(null);
    const handleChangeContent =(index)=>{
        setCurrentContentIndex(index);
        topContentRef.current.scrollIntoView({behavior: 'smooth'});
    }


    return (
        <>

        <Header/>
        <main className='main__contentful'>
            <div className="container flex flex-col">
                <h1>Matching</h1>
                <div className="illustration">
                    <img src={images.hero} alt="Matching"/>
                </div>

                

                <div ref={topContentRef}></div>
                <div className="description">                    
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

                </div>

            </div>

            <div className="fixedSubmenu">
                {submenuItems.map((item, index)=>{
                    return (
                    <div onClick={()=>handleChangeContent(index)}>
                        <i className={item.icon}></i>
                        <span>{item.text}</span>
                    </div>                        
                    )
                })

                }
               
            </div>
            
        </main>

        <FixedContact/>

        <Footer/>
            
        </>
    );
}

export default Matching;