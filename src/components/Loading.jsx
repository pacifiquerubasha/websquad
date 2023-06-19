import React from 'react';

function Loading({isMain}) {

    const Loader = ()=>(
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
    return (
        <>
            {isMain? 
                <div className='loader__main'>

                    <Loader/>

                </div>:

                <Loader/>
            }
        </>
    );
}

export default Loading;