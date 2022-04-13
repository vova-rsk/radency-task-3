const datesTransform = value => {
    const transform = isoDate => { 
        const date = new Date(isoDate);
        const dateArr = [
                date.getDate(),
                date.getMonth() + 1,
                date.getFullYear()
        ];
        
        return dateArr.join('/');
    };

    return (
        Array.isArray(value)
        ? value.map(isoDate => transform(isoDate))
        : transform(value)
    );
};

module.exports = datesTransform;