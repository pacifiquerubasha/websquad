import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar'

function JobTypeDistributionByCategory({data}) {


    const [mobileProps, setMobileProps] = useState({
        labelAnchor:"bottom-right",
        marginRight:130,
        marginbottom:150,
        legendTranslateX:120,
        legendTranslateY:0
    });

    useEffect(()=>{
        if(window.innerWidth <=768){
            setMobileProps({
                labelAnchor:"bottom",
                marginRight:0,
                marginbottom:450,
                legendTranslateX:-100,
                legendTranslateY:300

            });
        }
    }, [])

    const description = `
        <h1>Job Market Report</h1>

        <p>The analysis of the job market reveals a dynamic landscape with diverse opportunities across various categories.</p>

        <p>In the field of Quality Assurance (QA), there is a strong demand for professionals who ensure excellence in product quality and performance. Companies are actively seeking skilled individuals to fill both full-time and contract positions.</p>

        <p>Across multiple industries, the "All Others" category offers a wide array of exciting roles. From full-time positions that provide stability and growth to part-time opportunities offering flexibility, candidates can find suitable options to match their preferences.</p>

        <p>The Writing category combines creativity and technical expertise, with professionals specializing in content creation, technical writing, and documentation. The job market presents a mix of full-time, part-time, contract, and freelance positions.</p>

        <p>In the ever-evolving field of DevOps / Sysadmin, organizations are searching for skilled individuals who can manage complex systems and ensure seamless operations. Full-time roles are predominant in this category.</p>

        <p>Customer Service remains a crucial aspect of business operations, with companies focusing on providing exceptional support to their clients. This category offers a significant number of full-time positions, along with part-time and contract opportunities.</p>

        <p>Software Development continues to be in high demand, driving innovation and technological advancements. The job market presents a wealth of full-time positions, along with contract, freelance, and part-time roles.</p>

        <p>Design professionals bring creativity and aesthetics to various projects. With a mix of full-time, contract, freelance, part-time, and internship positions, this category offers opportunities for both experienced designers and emerging talent.</p>

        <p>The Human Resources field plays a critical role in talent management and organizational development. Full-time positions, part-time roles, internships, and contracts are available to individuals with expertise in this domain.</p>

        <p>Within the Finance / Legal sector, professionals with financial expertise and legal knowledge are sought after. Full-time positions are prominent, complemented by a smaller number of part-time and contract opportunities.</p>

        <p>The Business category caters to individuals with diverse skill sets, encompassing roles in management, administration, and strategy. It offers a range of full-time positions, along with select part-time and contract options.</p>

        <p>In the dynamic realm of Marketing, organizations seek innovative professionals to drive brand awareness and customer engagement. Full-time positions, internships, contracts, and freelance opportunities are available to individuals with a passion for creativity and strategic thinking.</p>

        <p>Data professionals play a pivotal role in leveraging insights and driving data-centric decision-making. The job market offers a significant number of full-time positions, along with contract and freelance roles.</p>

        <p>Sales positions remain integral to business growth, with organizations seeking persuasive and results-oriented professionals. Full-time roles dominate this category, accompanied by freelance, internship, and contract opportunities.</p>

        <p>Product specialists drive the development and enhancement of products, ensuring they align with market demands. This category presents a mix of full-time positions, along with select contract opportunities.</p>

        <p>These insights provide a captivating glimpse into the dynamic job market, showcasing a range of opportunities across various categories. As industries continue to evolve, professionals with diverse skill sets can find their niche and contribute to the growth and success of organizations.</p>
        
    `


    return (

        <>
            <div className='viz__container container__job--dist'>
                <ResponsiveBar
                    data={data}
                    keys={Array.from(new Set(data.map((item)=>Object.keys(item)).flat(1))).slice(1)}
                    indexBy="category"
                    layout={mobileProps.layout}
                    margin={{ top: 50, right: mobileProps.marginRight, bottom: mobileProps.marginbottom, left: 50 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: '#38bcb2',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: '#eed312',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                1.6
                            ]
                        ]
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 90,
                        legend: 'category',
                        legendPosition: 'middle',
                        legendOffset: 100
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Total',
                        legendPosition: 'middle',
                        legendOffset: -40,
                        
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                1.6
                            ]
                        ]
                    }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: mobileProps.labelAnchor,
                            direction: 'column',
                            justify: false,
                            translateX: mobileProps.legendTranslateX,
                            translateY: mobileProps.legendTranslateY,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={e=>e.id+": "+e.formattedValue+" in category: "+e.indexValue}
                />                
            </div>
            <div className='viz__desc' dangerouslySetInnerHTML={{ __html: description }}/>        
        
        </>
    );
}

export default JobTypeDistributionByCategory;