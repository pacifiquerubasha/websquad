import React, {useState, useEffect} from 'react';
import { ResponsiveChoropleth } from '@nivo/geo'

function Chloropeth({data}) {

    const [features, setFeatures] = useState([]);

    useEffect(()=>{
        fetch('/src/utils/world_countries.json')
        .then(response => response.json())
        .then(data => {
          setFeatures(data.features);
        })
        .catch(error => {
          console.error('Error fetching the JSON file:', error);
        });

      }, [])

    
      const [mobileProps, setMobileProps] = useState({
        legendTranslateY:-100
    });

    useEffect(()=>{
        if(window.innerWidth <=768){
            setMobileProps({
                legendTranslateY:-140

            });
        }
    }, [])

    return (
        <div className="viz__container chloropeth">
            <ResponsiveChoropleth
                data={data}
                features={features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[ 0, 500 ]}
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
    );
}

export default Chloropeth;