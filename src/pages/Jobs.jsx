import React, { useEffect, useRef, useState } from 'react';
import FixedContact from '../components/FixedContact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { images } from '../utils/images';
import ReactPaginate from 'react-paginate';

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

                }

                else setIsLoading(false)

            }

            else setIsLoading(false)
        }

        fetchJobs();
        

    }, [])

    const [allJobs, setAllJobs] = useState([
        {
          id: 1,
          title: 'React Developer',
          type: 'Full Time',
          company: 'Figma',
          companySize: '10-50',
          salary: '10k-50k',
          time: '2 days ago',
          image: 'images.react',
          tags: ['JSX', 'Javascript'],
        },
        {
          id: 2,
          title: 'Frontend Engineer',
          type: 'Full Time',
          company: 'Acme Corp',
          companySize: '100-500',
          salary: '60k-80k',
          time: '1 day ago',
          image: 'images.frontend',
          tags: ['HTML', 'CSS', 'JavaScript'],
        },
        {
          id: 3,
          title: 'Full Stack Developer',
          type: 'Contract',
          company: 'XYZ Tech',
          companySize: '500+',
          salary: '80k-100k',
          time: '3 days ago',
          image: 'images.fullstack',
          tags: ['Node.js', 'Express', 'React', 'MongoDB'],
        },
        {
          id: 4,
          title: 'Python Developer',
          type: 'Full Time',
          company: 'TechCo',
          companySize: '50-100',
          salary: '70k-90k',
          time: '1 day ago',
          image: 'images.python',
          tags: ['Python', 'Django', 'REST API'],
        },
        {
          id: 5,
          title: 'UI/UX Designer',
          type: 'Full Time',
          company: 'DesignWorks',
          companySize: '10-50',
          salary: '50k-70k',
          time: '2 days ago',
          image: 'images.designer',
          tags: ['UI Design', 'UX Design', 'Prototyping'],
        },
        {
          id: 6,
          title: 'Java Developer',
          type: 'Full Time',
          company: 'ByteCode',
          companySize: '1000+',
          salary: '90k-120k',
          time: '3 days ago',
          image: 'images.java',
          tags: ['Java', 'Spring', 'Hibernate'],
        },
        {
          id: 7,
          title: 'Data Analyst',
          type: 'Part Time',
          company: 'Data Insights',
          companySize: '50-100',
          salary: '40k-60k',
          time: '4 days ago',
          image: 'images.data',
          tags: ['Data Analysis', 'SQL', 'Excel'],
        },
        {
          id: 8,
          title: 'Backend Engineer',
          type: 'Full Time',
          company: 'CodeNinja',
          companySize: '10-50',
          salary: '60k-80k',
          time: '5 days ago',
          image: 'images.backend',
          tags: ['Node.js', 'Python', 'REST API'],
        },
        {
          id: 9,
          title: 'DevOps Engineer',
          type: 'Full Time',
          company: 'Cloud Solutions',
          companySize: '100-500',
          salary: '80k-100k',
          time: '6 days ago',
          image: 'images.devops',
          tags: ['AWS', 'Docker', 'Kubernetes'],
        },
        {
          id: 10,
          title: 'Product Manager',
          type: 'Full Time',
          company: 'Innovation Labs',
          companySize: '500+',
          salary: '100k-120k',
          time: '1 week ago',
          image: 'images.product',
          tags: ['Product Management', 'Agile', 'UX'],
        },
        {
          id: 11,
          title: 'Mobile App Developer',
          type: 'Full Time',
          company: 'AppTech',
          companySize: '100-500',
          salary: '70k-90k',
          time: '2 weeks ago',
          image: 'images.mobile',
          tags: ['Android', 'iOS', 'React Native'],
        },
        {
          id: 12,
          title: 'Data Scientist',
          type: 'Full Time',
          company: 'Data Innovators',
          companySize: '10-50',
          salary: '90k-110k',
          time: '2 weeks ago',
          image: 'images.datascience',
          tags: ['Machine Learning', 'Python', 'Statistics'],
        },
        {
          id: 13,
          title: 'Quality Assurance Engineer',
          type: 'Contract',
          company: 'Testing Solutions',
          companySize: '10-50',
          salary: '50k-70k',
          time: '3 weeks ago',
          image: 'images.qa',
          tags: ['Manual Testing', 'Automated Testing', 'Bug Tracking'],
        },
        {
          id: 14,
          title: 'Ruby on Rails Developer',
          type: 'Full Time',
          company: 'RubySoft',
          companySize: '50-100',
          salary: '70k-90k',
          time: '1 month ago',
          image: 'images.ruby',
          tags: ['Ruby', 'Ruby on Rails', 'MySQL'],
        },
        {
          id: 15,
          title: 'Network Engineer',
          type: 'Full Time',
          company: 'Connectivity Solutions',
          companySize: '100-500',
          salary: '80k-100k',
          time: '1 month ago',
          image: 'images.network',
          tags: ['Cisco', 'Routing', 'Switching'],
        },
        {
          id: 16,
          title: 'Graphic Designer',
          type: 'Full Time',
          company: 'Artistry Studio',
          companySize: '10-50',
          salary: '50k-70k',
          time: '2 months ago',
          image: 'images.graphic',
          tags: ['Adobe Creative Suite', 'Illustration', 'Typography'],
        },
        {
          id: 17,
          title: 'Cybersecurity Analyst',
          type: 'Full Time',
          company: 'SecureTech',
          companySize: '500+',
          salary: '90k-110k',
          time: '2 months ago',
          image: 'images.cybersecurity',
          tags: ['Security Assessment', 'Incident Response', 'Network Security'],
        },
        {
          id: 18,
          title: 'Sales Representative',
          type: 'Full Time',
          company: 'SalesForce',
          companySize: '1000+',
          salary: '80k-100k',
          time: '3 months ago',
          image: 'images.sales',
          tags: ['B2B Sales', 'CRM', 'Negotiation'],
        },
        {
          id: 19,
          title: 'Business Analyst',
          type: 'Contract',
          company: 'Consulting Solutions',
          companySize: '100-500',
          salary: '70k-90k',
          time: '4 months ago',
          image: 'images.business',
          tags: ['Requirements Gathering', 'Process Improvement', 'Data Analysis'],
        },
        {
          id: 20,
          title: 'Artificial Intelligence Engineer',
          type: 'Full Time',
          company: 'AI Technologies',
          companySize: '50-100',
          salary: '100k-120k',
          time: '5 months ago',
          image: 'images.ai',
          tags: ['Machine Learning', 'Deep Learning', 'Python'],
        },
      ])
    

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


    const daysDiff = (date)=>Math.abs(Math.floor((new Date(date) - new Date()) / (1000 * 60 * 60 * 24)));
     

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
                            <input type="text" placeholder="Search Jobs" name='search'/>
                            <input type="submit" value="Search"/>
                        </form>                  

                    </div>
                    

                </section>

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
                
            </main>

            <FixedContact/>
            <Footer/>
            
        </>
    );
}

export default Jobs;