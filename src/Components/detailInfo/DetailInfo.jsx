import React from 'react';

const DetailInfo = ({detail}) => {
        // console.log(detail)
        const {description, reaponsibility, educational, experience, email,phone,location, salary, title,address} = detail;
        return (
                <div>
                        {
                                <p>{reaponsibility}</p>
                        }
                </div>
        );
};

export default DetailInfo;