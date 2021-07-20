import React from 'react';
import dayjs from 'dayjs';

const Today = () => {
    const currentDate = dayjs().format('DD/MM/YYYY');
    return <p>{currentDate}</p>;
};

export default Today;