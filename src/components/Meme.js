import React from 'react';

export const Meme = ({ template, onClick }) => {
    return(
        <img 
            //className="memeImages"
            style={{width: 200}}
            key={template.id} 
            src={template.url} 
            alt={template.name} 
            onClick={onClick}
        />
    );
};
