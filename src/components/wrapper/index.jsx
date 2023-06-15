import React from 'react';

const Wrapper = ({children}) => {
    return (
        <div className='container mx-auto px-4 py-2 min-h-screen'>
            {children}
        </div>
    );
};

export default Wrapper;