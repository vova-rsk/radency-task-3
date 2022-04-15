type TransformFn = (a: string) => string | string[];

const datesTransform:TransformFn = value => {
    const transform = (isoDate:string) => { 
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

export default datesTransform;