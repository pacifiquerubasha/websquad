import React, {useState, useEffect} from 'react';
import { ResponsiveChoropleth } from '@nivo/geo'
import countries from "../utils/world_countries.json"

function Chloropeth({data}) {

    const [features, setFeatures] = useState([]);
    
    const [mobileProps, setMobileProps] = useState({
        legendTranslateY:-100
    });

    useEffect(()=>{
        setFeatures(countries.features)
        if(window.innerWidth <=768){
            setMobileProps({
                legendTranslateY:-140

            });
        }
    }, [])

    const description = `
        <h1>World Job Distribution</h1>

        <p>After a careful analysis of the data, a captivating narrative unfolds, shedding light on the total number of job opportunities in different countries or regions:</p>
        
        <p>In the vast expanse of the United States, a staggering 746 job openings beckon job seekers. This abundance signifies the land of endless possibilities, where dreams can be nurtured and ambitions realized.</p>
        
        <p>Within the realm of the unknown lies a mysterious category labeled as "Not Found." It encompasses 87 enigmatic job opportunities, intriguing in their elusive nature. An additional 102 jobs reside in this enigmatic domain, waiting to be unveiled by intrepid individuals seeking hidden treasures.</p>
        
        <p>Embark on a journey Down Under, where Australia awaits with 15 captivating job listings. The land of natural wonders and diverse landscapes offers not only professional growth but also an opportunity to immerse oneself in its unique charm.</p>
        
        <p>In the Netherlands, a country adorned with tulips and windmills, 9 tantalizing job positions await. This signifies a harmonious blend of rich cultural heritage and progressive work environments, providing international career seekers with an enticing prospect.</p>
        
        <p>Greece, the birthplace of ancient gods and philosophers, reveals 13 intriguing job vacancies. Amidst its mesmerizing landscapes and historical ruins, job seekers can find a harmonious balance between career aspirations and a Mediterranean lifestyle.</p>
        
        <p>Canada, with its pristine wilderness and maple syrup, presents 69 opportunities for individuals ready to embrace a new chapter in their professional journey. The country's open arms welcome job seekers to explore a diverse range of industries and landscapes.</p>
        
        <p>The United Kingdom, where history meets innovation, proudly showcases 157 job openings. From the bustling streets of London to the tranquil countryside, British job seekers can find abundant possibilities to forge their careers.</p>
        
        <p>Spain, a country known for its passion and siestas, unveils 20 alluring job positions. Amidst the warmth of the Mediterranean sun, individuals can explore career avenues ranging from tourism to technology.</p>
        
        <p>Mexico, with its vibrant culture and breathtaking landscapes, extends an invitation to seize 13 exciting job opportunities. Discover the fusion of tradition and modernity as you navigate your professional path in this lively nation.</p>
        
        <p>Peru, a land of ancient wonders and culinary delights, reveals 2 modest job openings. Though fewer in number, these opportunities carry the promise of extraordinary experiences and personal growth amidst the mystical Andes.</p>
        
        <p>This creatively designed report captures the essence of each country's job landscape, enticing job seekers to embark on unique journeys towards fulfilling careers.</p>

    `

    return (

        <>
            <div className="viz__container chloropeth">
                <ResponsiveChoropleth
                    data={data}
                    features={features}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    colors="nivo"
                    domain={[ 0, 100 ]}
                    unknownColor="#666666"
                    label="properties.name"
                    valueFormat=".2s"
                    projectionTranslation={[ 0.5, 0.5 ]}
                    projectionRotation={[ 0, 0, 0 ]}
                    enableGraticule={true}
                    graticuleLineColor="#dddddd"
                    borderWidth={0.5}
                    borderColor="#152538"
                                
                    legends={[
                        {
                            anchor: 'bottom-left',
                            direction: 'column',
                            justify: true,
                            translateX: 20,
                            translateY: mobileProps.legendTranslateY,
                            itemsSpacing: 0,
                            itemWidth: 94,
                            itemHeight: 18,
                            itemDirection: 'left-to-right',
                            itemTextColor: '#444444',
                            itemOpacity: 0.85,
                            symbolSize: 18,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000000',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
                
            </div>
            <div className='viz__desc' dangerouslySetInnerHTML={{ __html: description }}/>        

        </>
    );
}

export default Chloropeth;