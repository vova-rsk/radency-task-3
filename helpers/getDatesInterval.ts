const REGEX =
  /([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1]?)\/([1-9]|0[1-9]|1[0-2]?)\/[1-9][0-9]{3}/g;

type GetIntervalFn = (txt: string) => string[] | [];

const getIsoDateInterval:GetIntervalFn = text => {
  const result = text.match(REGEX);

  if (!result) { 
    return [];
  }

  const dates = result
    .filter((date, i) => i < 2)
    .map(date => { 
      const dateParts = date.split('/');
      return new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0])).toISOString();
    });

  return dates;
};

export default getIsoDateInterval;