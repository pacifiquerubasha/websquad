import React from 'react';
import { ResponsiveTimeRange } from '@nivo/calendar'

function CategoryTrends({data}) {

    const description =`
        <h1>Job Market Trends</h1>

        <p>The analysis of job market trends reveals a dynamic landscape with diverse opportunities across different categories. Let's delve into the fluctuations in demand for various job roles over a four-month period.</p>
        <p>In the field of Quality Assurance (QA), there has been a consistent growth in job opportunities. Starting from 3 jobs in March, the demand increased to 7 in April, peaked at 18 in May, and settled at 17 in June. This signifies a strong need for professionals who ensure excellence in product quality and performance.</p>
        <p>The category "All Others" encompasses a wide range of exciting roles. In March, there were 2 job openings, which escalated to 11 in April. The demand slightly decreased to 14 in May and remained stable at 16 in June. This category offers a diverse array of opportunities, catering to individuals with various skill sets and preferences.</p>
        <p>Professionals in the Writing category have witnessed a consistent demand in the job market. From 2 jobs in March, the numbers rose to 7 in April, peaked at 17 in May, and maintained a strong presence with 16 job openings in June. This category combines creativity and technical expertise, offering roles in content creation, technical writing, and documentation.</p>
        <p>The DevOps / Sysadmin category experienced significant growth over the four-month period. Starting from 5 jobs in March, the demand skyrocketed to 30 in April, further increased to 40 in May, and settled at 32 in June. Organizations are actively seeking skilled individuals who can manage complex systems and ensure seamless operations.</p>
        <p>Customer Service remains a crucial aspect of business operations, and the job market reflects this significance. The demand for customer service professionals has been consistently high, with 9 jobs in March, 24 in April, 58 in May, and 48 in June. Organizations are focused on providing exceptional support and service to their clients.</p>
        <p>Software Development continues to be a thriving field, driving innovation and technological advancements. The job market presents a wealth of opportunities for developers, with 21 job openings in March, escalating to 60 in April, reaching an impressive 128 in May, and stabilizing at 100 in June. This category offers diverse positions, including full-time, part-time, contract, and freelance roles.</p>
        <p>Design professionals bring creativity and aesthetics to various projects. The job market for designers remained consistently strong, with 9 job openings in March, increasing to 29 in April, and peaking at 58 in May. In June, the demand slightly decreased to 47. This category provides opportunities for both experienced designers and emerging talent, with positions ranging from full-time to part-time, contract, freelance, and internships.</p>
        <p>The Human Resources field plays a critical role in talent management and organizational development. Job opportunities in this category have been stable, with 5 openings in March, 11 in April, 32 in May, and 30 in June. Professionals with expertise in human resources can explore various positions, including full-time, part-time, and consultancy roles, across different industries and organizations.</p>
        <p>The Finance / Legal category showcases the demand for professionals with expertise in financial management and legal matters. With 2 job openings in March, the numbers rose to 19 in April, and the demand remained consistent at 32 in May and 33 in June. This category offers opportunities for accountants, financial analysts, lawyers, and legal consultants, among others.</p>
        <p>The Business category reflects the diverse roles and responsibilities involved in driving organizational success. From 5 job openings in March, the demand increased to 17 in April, reaching 36 in May. In June, the numbers slightly decreased to 33, indicating a continued need for professionals in business development, strategy, project management, and consulting.</p>
        <p>Marketing professionals play a pivotal role in promoting products and services, and the job market reflects their significance. From 6 job openings in March, the demand rose to 29 in April and maintained a strong presence at 36 in both May and June. This category offers opportunities for individuals skilled in digital marketing, content creation, brand management, and market research.</p>
        <p>The Data category highlights the increasing importance of data analysis and management in today's business landscape. Starting with 8 job openings in March, the demand reached 20 in April, further escalated to 41 in May, and settled at 34 in June. Organizations are seeking data professionals proficient in analytics, data science, database management, and data visualization.</p>
        <p>Sales professionals play a crucial role in driving revenue and business growth. The job market reflects a consistent demand for sales roles, with 14 openings in March, 39 in April, 56 in May, and 47 in June. This category offers opportunities for sales representatives, account managers, business development executives, and sales consultants.</p>
        <p>The Product category focuses on roles related to product management and development. With 4 job openings in March, the numbers increased to 23 in April, and remained stable at 37 in May. In June, the demand slightly decreased to 27. This category offers opportunities for product managers, product owners, and product development specialists across various industries.</p>
        <p>In conclusion, the job market trends over the four-month period showcase a dynamic landscape with diverse opportunities across different categories. From the consistent growth in QA to the increasing demand for software development and customer service professionals, individuals with a range of skills and expertise can explore exciting career prospects. Whether in design, marketing, finance, or data, organizations are actively seeking talented individuals to contribute to their success and drive innovation in their respective fields. </p>

    `
    return (

        <>
            <div className='viz__categories'>            
            
                {Object.entries(data).map(([key, datum])=>{
                    return(

                        <div className='unique__viz--cat'>
                            <h5>{key}</h5>
                            <ResponsiveTimeRange
                                data={datum}
                                from="2023-03-01"
                                to={new Date().toISOString().split('T')[0]}
                                emptyColor="#eeeeee"
                                colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
                                margin={{ top: 40, right: 0, bottom: 60, left: 0 }}
                                dayBorderWidth={2}
                                dayBorderColor="#ffffff"
                                legends={[
                                    {
                                        anchor: 'bottom-left',
                                        direction: 'row',
                                        justify: false,
                                        itemCount: 4,
                                        itemWidth: 42,
                                        itemHeight: 36,
                                        itemsSpacing: 14,
                                        itemDirection: 'right-to-left',
                                        translateX: 0,
                                        translateY: -60,
                                        symbolSize: 20
                                    }
                                ]}
                            />

                        </div>
                    )
                })

                }
            </div>

            <div className='viz__desc' dangerouslySetInnerHTML={{ __html: description }}/>        
        </>

    );
        
}

export default CategoryTrends;