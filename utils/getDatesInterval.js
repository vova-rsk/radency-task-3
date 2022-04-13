const REGEX =
  /([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1]?)\/([1-9]|0[1-9]|1[0-2]?)\/[1-9][0-9]{3}/g;

// type GetIntervalFn = (txt: string) => [string, string] | [];

const getIsoDateInterval = text => {
  const result = text.match(REGEX);

  if (!result) { 
    return [];
  }

  const dates = result
    .filter((date, i) => i < 2)
    .map(date => { 
      const dateParts = date.split('/');
      return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]).toISOString();
    });

  return dates;
};

module.exports = getIsoDateInterval;