import React from 'react';

const SectionCard = ({children}) => {
    return (
        <div className="p-2 border-dotted border-b-2">
                                <ul className="space-y-4">
                                    

                                    {children}
                                    
                                </ul>
                        </div>
    );
};

export default SectionCard;