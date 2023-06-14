import React from 'react';
import WordCloud from 'react-d3-cloud';

function WordCloudContainer({data}) {
    return (
        <div className='word__cloud'>
            {data && 
            <WordCloud 
                data={data} 
                spiral="rectangular"
                rotate={(word) => 0}
                padding={5}                     
            />
            
            }
        </div>
    );
}

export default WordCloudContainer;