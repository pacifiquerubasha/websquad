import { useAutoAnimate } from '@formkit/auto-animate/react';
import React from 'react';
import { useState } from 'react';
import WordCloud from 'react-d3-cloud';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function WordCloudContainer({data}) {

    const fontSizeMapper = word => Math.log2(word.value) * 5;

    const [vizParent] = useAutoAnimate();

    return (
        <div ref={vizParent} className='word__cloud'>
            {data && 

            <>         
                    <h2 className='font-500 text-center'>Distribution of tags and slugs in jobs in Germany</h2>
                
                    <WordCloud 
                        data={data} 
                        spiral="rectangular"
                        rotate={(word) => 0}
                        fontSize={fontSizeMapper}
                    />
                    
            </>
            
            }
        </div>
    );
}

export default WordCloudContainer;