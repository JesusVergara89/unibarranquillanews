import React from 'react';
import { lineSpinner } from 'ldrs';

const Loading = () => {

    const newColor = '#111111'
    lineSpinner.register();
    return (
        <div className="loading-container">
            <l-line-spinner
                size="100"
                stroke="7"
                speed="1"
                color={newColor}
            ></l-line-spinner>
        </div>
    );
};

export default Loading;
