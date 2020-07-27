import {
  calculateMean,
  calculateMedian,
  calculateMode,
  calculateStdDeviation,
} from '../common/math';

export const useNumArray = (dataSet = [], precision = 6) => {
  const formatStat = (value) => value?.toFixed(precision);

  const meanValue = formatStat(calculateMean(dataSet));
  const medianValue = formatStat(calculateMedian(dataSet));
  const stdDevValue = formatStat(calculateStdDeviation(dataSet));
  const modeValue = calculateMode(dataSet)
    .map((item) => (item = item.toFixed(precision)))
    .toString();

  return [meanValue, medianValue, stdDevValue, modeValue];
};

export default useNumArray;
