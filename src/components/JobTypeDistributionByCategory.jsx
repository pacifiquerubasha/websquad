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


    return (
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
    );
}

export default JobTypeDistributionByCategory;