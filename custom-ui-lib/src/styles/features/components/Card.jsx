import React from 'react';

const Card = ({ title, content, className }) => {
    return (
        <div className={`bg-light border-dark pd-4 ${className}`}>
            <h2 className="text-primary txt-xl">{title}</h2>
            <p className="text-dark txt-md">{content}</p>
        </div>
    );
};

export default Card;
