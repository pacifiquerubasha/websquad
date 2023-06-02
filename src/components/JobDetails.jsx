import React, { useEffect, useRef } from 'react';
import { images } from '../utils/images';
import { daysDiff } from '../utils/utils';

function JobDetails({job, setIsJobDetails}) {

    // const job = {
    //     "id": 1686335,
    //     "url": "https://remotive.com/remote-jobs/writing/technical-writer-for-blockchain-platform-1686335",
    //     "title": "Technical Writer for blockchain platform",
    //     "company_name": "Tatum",
    //     "company_logo": "https://remotive.com/job/1686335/logo",
    //     "category": "Writing",
    //     "tags": [
    //         "api",
    //         "developer",
    //         "blockchain",
    //         "agile",
    //         "content",
    //         "research",
    //         "documentation",
    //         "technical writing",
    //         "product",
    //         "infrastructure",
    //         "development",
    //         "IT",
    //         "technical documentation",
    //         "writing",
    //         "implementation",
    //         "cryptography",
    //         "applications",
    //         "communication",
    //         "support",
    //         "API documentation",
    //         "software"
    //     ],
    //     "job_type": "full_time",
    //     "publication_date": "2023-06-01T03:41:15",
    //     "candidate_required_location": "Czech Republic",
    //     "salary": "",
    //     "description": "<p>We are looking for an experienced Technical Writer to join our team at Tatum. As a Technical Writer, you will be responsible for creating high-quality technical documentation that communicates complex blockchain concepts and technology to our target audience of blockchain developers. Your documentation will be critical to the successful adoption and implementation of the Tatum solution by our users.</p>\n<p>You’ll report to the VP of Content helping them ensure that all technical documents are published on schedule, are maintained for relevancy, and help the users understand blockchain development and our products.</p>\n<p>We are one of the world's leading blockchain and Web3 development platforms and provide infrastructure and a unified framework for over 60 blockchain protocols. With Tatum, any developer can build, test and run apps with no previous blockchain experience. We serve over 140,000 customers globally.</p>\n<p><strong>What you will do:</strong></p>\n<ul style=\"\">\n<li style=\"\">Create clear, concise, and comprehensive technical documentation for the Tatum platform, including user manuals, technical specifications, API documentation, and developer guides.</li>\n<li style=\"\">Collaborate with product managers, developers, and other subject matter experts to gather information and ensure accuracy of documentation.</li>\n<li style=\"\">Ensure that all documentation adheres to established standards for clarity, accuracy, style, and tone.</li>\n<li style=\"\">Research and stay up-to-date with the latest trends and developments in blockchain technology and applications.</li>\n<li style=\"\">Develop and maintain documentation templates, style guides, and best practices to ensure consistency and quality across all documentation.</li>\n<li style=\"\">Conduct regular reviews and audits of documentation to identify areas for improvement and make updates as necessary.</li>\n<li style=\"\">Work with cross-functional teams to ensure that documentation is delivered on time and meets project deadlines.</li>\n<li style=\"\">Provide feedback and support to developers and other team members to ensure that documentation is accurate and meets user needs.</li>\n</ul>\n<p><strong>Requirements</strong></p>\n<ul style=\"\">\n<li style=\"\">3+ years of experience in technical writing, preferably in blockchain technology or a related field.</li>\n<li style=\"\">Excellent written and verbal communication skills, with the ability to translate technical concepts into clear and concise documentation.</li>\n<li style=\"\">Strong understanding of blockchain technology and concepts, including cryptography, consensus algorithms, smart contracts, and decentralized applications.</li>\n<li style=\"\">Experience with documentation tools and software.</li>\n<li style=\"\">Familiarity with agile development methodologies and processes.</li>\n<li style=\"\">Ability to work collaboratively with cross-functional teams and stakeholders.</li>\n<li style=\"\">Strong attention to detail and ability to manage multiple projects simultaneously.</li>\n</ul>\n<p><strong>Benefits</strong></p>\n<ul style=\"\">\n<li style=\"\">Our team works remotely within Czechia. Nevertheless, you are also always welcome in our office in Brno or Prague.</li>\n<li style=\"\">We offer flexible hours - work whenever it suits your personal schedule. For most positions, we don't have any fixed hours at all.</li>\n<li style=\"\">We value work life balance. We offer 25 days off per year.</li>\n</ul>\n<p>Ready to hop on our fast train to the future? Become a #Tatumer! Apply now - we’d love to show you who we are and how we do things.</p>\n<img src=\"https://remotive.com/job/track/1686335/blank.gif?source=public_api\" alt=\"\"/>"
    // }

    const handleShowJobList = ()=>{
        setIsJobDetails(false)
    }

    const topRef = useRef(null)

    useEffect(()=>{
        topRef.current.scrollIntoView({behavior: 'smooth'})
    }, [])

    return (
        <section className="job__details" ref={topRef}>
            <div className="container">
            
            <div className="job__header flex">
                <div onClick={handleShowJobList} className='cursor-pointer'>
                    <i className='fas fa-angle-left'></i>
                </div>
                <h2>{job.title}</h2>
            </div>
            <div className="job__info flex">
                <div className="job__info__left flex flex-col">
                    <div>
                        <h3>Job Title</h3>
                        <p className='job__title'>
                        {job.title}
                        </p>
                    </div>
                    <div>
                        <h3>Hiring Company</h3>
                        <div className='flex'>
                            <img src={job.company_logo} alt="" className='company__logo'/>
                            <p>{job.company_name}</p>
                        </div>
                    </div>
                    <div>
                        <h3>Job Description</h3>
                        <p dangerouslySetInnerHTML={{ __html: job.description }} className='job__desc'>
                        </p>
                    </div>
                    <a href={job.url} target='_blank' className="main__btn" data-aos="fade-up" data-aos-duration="1000">                        
                        <span>APPLY</span>
                        <div>
                            <i className='fas fa-arrow-right'></i>
                        </div>
                    </a>

                </div>

                <div className="job__info__right">
                    <h3>Job Details</h3>
                    <div className="job__details__list flex flex-col">
                        
                        <div className="job__details__item flex flex-col">
                            <span>Job creation Date</span>
                            <span>{new Date(job.publication_date).toLocaleDateString()}</span>
                        </div>
                        <div className="job__details__item flex flex-col">
                            <span>Job Type</span>
                            <span>{job.job_type}</span>
                        </div>
                        <div className="job__details__item flex flex-col">
                            <span>Location</span>
                            <span>{job.candidate_required_location}</span>
                        </div>
                        <div className="job__details__item flex flex-col">
                            <span>Salary</span>
                            <span>{job.salary ? job.salary :"Not specified"}</span>
                        </div>
                        <div className="job__details__item flex flex-col">
                            <span>Last Update</span>
                            <span>{daysDiff(job.publication_date)} days ago</span>
                        </div>
                        <div className="job__details__item flex flex-col">
                            <span>Tags</span>
                            <div className='flex job__tags'>
                                {job.tags.map((tag,index) => (
                                    <p key={index}>{tag}</p>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>

        </section>
    );
}

export default JobDetails;