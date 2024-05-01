import React from 'react';
import { lineSpinner } from 'ldrs'; // Importing lineSpinner from ldrs package

/**
 * Component displaying a loading spinner.
 * Uses the ldrs package to render a line spinner.
 * @returns {JSX.Element} Component JSX
 */
const Loading = () => {
    // Define new color for the spinner
    const newColor = '#111111';
    // Register lineSpinner component
    lineSpinner.register();

    return (
        <div className="loading-container">
            {/* Render lineSpinner component with specified props */}
            <l-line-spinner
                size="100"
                stroke="5"
                speed="1"
                color={newColor}
            ></l-line-spinner>
            <p>Cargando...</p>
        </div>
    );
};

export default Loading;

