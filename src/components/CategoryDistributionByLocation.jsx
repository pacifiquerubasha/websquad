import React from 'react';
import { ResponsivePie } from '@nivo/pie'
import { useEffect } from 'react';
import { useState } from 'react';
import { FixedSizeList as List } from "react-window";

function CategoryDistributionByLocation({data}) {

    const [allData, setAllData] = useState([]);

    const [dataToUse, setDataToUse] = useState(allData);

    

    const [searchKeyword, setSearchKeyword] = useState("");

    const handleSearch = (e)=>{
        e.preventDefault();
        let filteredData = allData.filter((item)=> item["location"].toLowerCase().includes(searchKeyword.toLowerCase()));
        setDataToUse(filteredData);
    
    }    

    useEffect(()=>{

        const temp = Object.entries(data).map((datum)=>{
            const locationData = Object.entries(datum[1]).map((item)=>{
                return {
                    "id": item[0],
                    "label": item[0],
                    "value": item[1],
                }
            })

            return {location:datum[0], data:locationData}
        })

        setAllData(temp)
        setDataToUse(temp)
    },[])



    return (
        <>
        <form onSubmit={handleSearch} className='search__loc--form'>
            <input type="search" name="searchLocation" id="location" value={searchKeyword} onChange={(e)=>setSearchKeyword(e.target.value)} />
            <button type="submit">Search</button>
        </form>

        <div className='viz__pies flex'>
            {dataToUse.map((datum)=>{
                return (
                <div className='unique__pie '>
                    <h5 className='w-full'>{datum.location}</h5>
                    <ResponsivePie
                        data={datum.data}
                        margin={{ top: 40, right: 80, bottom: 280, left: 80 }}
                        innerRadius={0.5}
                        padAngle={0.7}
                        cornerRadius={3}
                        activeOuterRadiusOffset={8}
                        borderWidth={1}
                        borderColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    0.2
                                ]
                            ]
                        }}
                        arcLinkLabelsSkipAngle={10}
                        arcLinkLabelsTextColor="#333333"
                        arcLinkLabelsThickness={2}
                        arcLinkLabelsColor={{ from: 'color' }}
                        arcLabelsSkipAngle={10}
                        arcLabelsTextColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    2
                                ]
                            ]
                        }}
                
                        legends={[
                            {
                                anchor: 'bottom',
                                direction: 'column',
                                justify: false,
                                translateX: -100,
                                translateY: datum.data.length < 7 ? 100: 280,
                                itemsSpacing: 0,
                                itemWidth: 100,
                                itemHeight: 18,
                                itemTextColor: '#999',
                                itemDirection: 'left-to-right',
                                itemOpacity: 1,
                                symbolSize: 18,
                                symbolShape: 'circle',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemTextColor: '#000'
                                        }
                                    }
                                ]
                            }
                        ]}
                    />

                </div>
                )

            })

            }
            
        </div>
      

        </>
    );
}

export default CategoryDistributionByLocation;