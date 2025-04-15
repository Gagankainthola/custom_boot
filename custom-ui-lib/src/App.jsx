import React from 'react';
import Card from "../src/styles/features/components/Card";
const App = () => {
    return (
        <div className="flexy justify-center items-center pd-6">
            <Card title="Welcome" content="This is a custom card using your UI library." className="shadow-lg" />
        </div> 
    );
};

export default App;
