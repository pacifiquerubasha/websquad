import React, { useEffect, useRef, useState } from 'react';
import FixedContact from '../components/FixedContact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { images } from '../utils/images';
import ReactPaginate from 'react-paginate';
import JobDetails from '../components/JobDetails';
import { daysDiff } from '../utils/utils';

function Jobs(props) {


    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [jobsToShow, setJobsToShow] = useState(jobs);
    const [filters, setFilters] = useState([]);
    const [filtersToShow, setFiltersToShow] = useState(filters);

    useEffect(()=>{

        const fetchJobs = async()=>{
            const api = "https://remotive.com/api/remote-jobs";
            
            setIsLoading(true)
            const res = await fetch(api);

            if(res){
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

        fetchJobs();
        

    }, [])

     
      const [currentFilters, setCurrentFilters] = useState([]);
      const [jobListTitle, setJobListTitle] = useState("All Jobs");

      

      const [searchFilterKeyword, setSearchFilterKeyword] = useState("");

      const handleSearchFilter = (e)=>setSearchFilterKeyword(e.target.value);

      useEffect(()=>{
        const temp = filters.filter((item)=>item.toLowerCase().includes(searchFilterKeyword.toLowerCase()));
        setFiltersToShow(temp);
      }, [searchFilterKeyword])



      const handleAddFilter = (e)=>{
        if(e.target.checked){
            setCurrentFilters([...currentFilters, e.target.name]);
        }else{
            setCurrentFilters(currentFilters.filter((item)=>item!==e.target.name));
        }
      }

      const handleSearchJob = (e)=>{
        e.preventDefault();

        setJobListTitle("All Jobs")

        const temp = jobs.filter((job)=>{
            return (
                job.title.toLowerCase().includes(e.target.search.value.toLowerCase()) ||
                job.company_name.toLowerCase().includes(e.target.search.value.toLowerCase()) ||
                job.tags.join(" ").toLowerCase().includes(e.target.search.value.toLowerCase()) ||
                job.job_type.toLowerCase().includes(e.target.search.value.toLowerCase())
                
            )
        });

        setJobsToShow(temp);

        setFiltersToShow(
            Array.from(new Set(temp.map((job)=>{
                return job.tags
              }).flat(1)))
        )

    }

      const handleFiltering = ()=>{
        const temp = jobs.filter((job)=>{
            return job.tags.some((tag)=>currentFilters.includes(tag));
        });

        setJobsToShow(temp);
        const tempTitle = `${temp.length} jobs found for the keywords ${currentFilters.join(", ")}`
        setJobListTitle(tempTitle);
        
      }

      useEffect(()=>{
        if(currentFilters.length === 0){
            setJobsToShow(jobs)
            setJobListTitle("All Jobs")
        };
      }, [currentFilters])

    
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = jobsToShow.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(jobsToShow.length / itemsPerPage);
    const topListRef = useRef(null);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % jobsToShow.length;
        setItemOffset(newOffset);
        topListRef.current.scrollIntoView({ behavior: "smooth" });
    };   


    const [currentJob, setCurrentJob] = useState({});
    const [isJobDetails, setIsJobDetails] = useState(false);
   
    const handleShowJobDetails = (job)=>{
      setCurrentJob(job);
      setIsJobDetails(true)
    }

    return (
        <>
            <Header/>
            <main className='main__with__banner jobs'>
                <section ref={topListRef} className="about__hero ">
                    <div className="hero__image">
                        <img src={images.hero} alt="" />
                    </div>

                    <div className="hero__content flex flex-col">
                        <h1>Job Search</h1> 
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque voluptates nam, animi cum deserunt ad.</p> 

                        <form action="" className='search__form' onSubmit={handleSearchJob}>
                            <input type="text" placeholder="Search Jobs" name='search' onKeyUp={()=> isJobDetails && setIsJobDetails(false)}/>
                            <input type="submit" value="Search"/>
                        </form>                  

                    </div>
                    

                </section>

                {!isJobDetails ? 
                
                <section className="jobs__list">
                    <div className="container flex">
                        <div className="filters flex flex-col">
                            <h3 className='uppercase text-gray'>FILTERS</h3>
                            <input type="search" name="" id="" placeholder='Search Filters' onKeyUp={handleSearchFilter}/>
                            
                            {currentFilters.length > 0 &&

                            <>
                                <div className="current__filters flex">
                                    {currentFilters.map((filter)=>{
                                        return <span>{filter}</span>
                                    })}

                                    
                                </div>
                                <button className='apply__filters' onClick={handleFiltering}>Apply Filters</button>
                            
                            </>
                            }

                            {isLoading ?
                            
                                <div class="lds-roller">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>:

                                <div className="filters__list flex flex-col">

                                    {filtersToShow.map((filter)=>{
                                            return(
                                                <div className="filter__item">
                                                    <input type="checkbox" name={filter} id={filter} checked={currentFilters.includes(filter)} onChange={handleAddFilter}/>
                                                    <label htmlFor={filter}>{filter}</label>
                                                </div>
                                            )
                                        }
                                        )}                              
                                </div>
                            }


                        </div>

                        <div className="jobs__container flex flex-col">
                            <h3 className={`${jobListTitle === "All Jobs" && "uppercase"} text-gray`}>{jobListTitle}</h3>
                            <div className="job__list__container">

                            {isLoading ?
                            
                            <div class="lds-roller">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>:

                            <>
                            {

                                currentItems && currentItems.map((job, index)=>(
                                    <div key={index} className="job__item flex">                                                
                                        <div className="job__item__left flex">
                                            <div className="job__image">
                                                <img src={job.company_logo} alt="" />
                                            </div>
                                            <div className="job__content flex flex-col">
                                                <div className="job__content__top flex">
                                                    <h5>{job.title}</h5>
                                                    <p>{job.job_type}</p>
                                                    <span className='time'>{daysDiff(job.publication_date)} days ago</span>

                                                </div>
                                                <div className="job__content__bottom flex">
                                                    <h5>{job.company_name}</h5>
                                                    <div><i className='fas fa-user'></i><p>{job.candidate_required_location}</p> </div>
                                                    {job.salary && <div><i className='fas fa-user'></i>{job.salary}</div>}
                                                </div>
                                                <div className="tags flex">
                                                    {job.tags.filter((tag, i)=>i<2).map((tag)=> <p>{tag}</p>)}
                                                </div>
                                            </div>
                                        </div>                                        

                                        <a className='cursor-pointer' onClick={()=>handleShowJobDetails(job)} >View Job</a>
                                    </div>
                                ))
                            }

                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel="< previous"
                                renderOnZeroPageCount={null}
                            />

                            {/* <List
                                itemData={jobsToShow}
                                height={4000}
                                itemCount={jobsToShow.length}
                                itemSize={45}
                                width={"100%"}
                            >
                                {Row}
                            </List> */}

                                {/* {jobsToShow.map((job)=>{
                                        return(
                                            <div className="job__item flex">                                                
                                                <div className="job__item__left flex">
                                                    <div className="job__image">
                                                        <img src={job.company_logo} alt="" />
                                                    </div>
                                                    <div className="job__content flex flex-col">
                                                        <div className="job__content__top flex">
                                                            <h5>{job.title}</h5>
                                                            <p>{job.job_type}</p>
                                                            <span className='time'>{job.publication_date}</span>

                                                        </div>
                                                        <div className="job__content__bottom flex">
                                                            <h5>{job.company_name}</h5>
                                                            <div><i className='fas fa-user'></i>{job.candidate_required_location} </div>
                                                            <div><i className='fas fa-user'></i>{job.salary}</div>
                                                        </div>
                                                        <div className="tags flex">
                                                            {job.tags.filter((tag, i)=>i<2).map((tag)=> <p>{tag}</p>)}
                                                        </div>
                                                    </div>
                                                </div>
                                                

                                                <a href='/jobs'>View Job</a>
                                            </div>
                                        )
                                    })
                                } */}
                            
                            </>                            
                        
                            }




                                
                                
                            </div>

                        </div>

                    </div>
                </section>

                :

                <JobDetails job={currentJob} setIsJobDetails={setIsJobDetails}/>
                
                }

                
            </main>

            <FixedContact/>
            <Footer/>
            
        </>
    );
}

export default Jobs;