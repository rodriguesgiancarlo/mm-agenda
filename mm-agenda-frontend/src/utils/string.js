import _ from 'lodash';

export const compare = (baseText, textToCompare) => {
  return _.includes(
    _.deburr(_.lowerCase(baseText)),
    _.deburr(_.lowerCase(textToCompare))
  );
};
