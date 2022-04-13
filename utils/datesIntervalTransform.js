const datesIntervalTransform = datesArr => { 
    return datesArr.map(isoDate => {
        const date = new Date(isoDate);
        return [date.getDate(), date.getMonth()+1, date.getFullYear()].join('/');
    });
};

module.exports = datesIntervalTransform;