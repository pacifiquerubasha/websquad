import React from 'react';

function MatchingTemplate({description}) {
    return (
        <div dangerouslySetInnerHTML={{ __html: description }}>
        </div>
    );
}

export default MatchingTemplate;