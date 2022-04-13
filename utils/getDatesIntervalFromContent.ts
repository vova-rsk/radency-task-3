const REGEX =
  /([1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1]?)\/([1-9]|0[1-9]|1[0-2]?)\/[1-9][0-9]{3}/g;

type GetIntervalFn = (txt: string) => [string, string] | [];

const getDateIntervalFromContent:GetIntervalFn = (text) => {
  const result = text.match(REGEX);

  return result ? [result[0], result[1]] : [];
};

export default getDateIntervalFromContent;