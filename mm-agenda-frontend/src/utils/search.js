import { compare } from "@/utils/string";

/**
 * @description Finds all instances of Strings or Number in an array of objects
 * @param {Array} array - Array of objects to be filteded
 * @param {String} search - Search term
 * @param {Array} fields - OPTIONAL - Allowed fields to search
 * @param {String} alias - OPTIONAL - String to help navigate inside object (to help allowed fields)
 * @returns An array of all the matches with *search* in the initial *array*
 */
export const HandleSearch = (array, search, fields = [], alias = "") => {
  const isString = (value) => {
    return typeof value === "string" || value instanceof String;
  };

  const isNumber = (value) => {
    return typeof value === "number" && Number.isFinite(value);
  };

  const isObject = (value) => {
    return !!value && value.constructor === Object;
  };

  try {
    return array.filter((obj) =>
      Object.keys(obj).some((key) => {
        let objectArrayPropHasSearch = false;
        let objectPropHasSearch = false;
        let objectObjPropHasSearch = false;
        if (isString(obj[key]) || isNumber(obj[key])) {
          const isAllowedField =
            (fields.length &&
              fields.find((allowedField) => {
                const isAllowedNestedField =
                  allowedField.toLowerCase() ===
                  `${alias}.${key}`.toLowerCase();
                const isSameKeyField =
                  allowedField.toLowerCase() === key.toLowerCase();
                return isSameKeyField || isAllowedNestedField;
              }) !== undefined) ||
            fields.length === 0;
          objectPropHasSearch =
            isAllowedField &&
            Boolean(obj[key]) &&
            compare(obj[key].toString(), search);
        }
        if (Array.isArray(obj[key])) {
          const result = HandleSearch(obj[key], search, fields);
          objectArrayPropHasSearch = result.length > 0;
        }
        if (isObject(obj[key])) {
          const updatedAlias = alias !== "" ? alias.concat(`.${key}`) : key;
          const result = HandleSearch([obj[key]], search, fields, updatedAlias);
          objectObjPropHasSearch = result.length > 0;
        }
        return (
          objectPropHasSearch ||
          objectArrayPropHasSearch ||
          objectObjPropHasSearch
        );
      })
    );
  } catch (error) {
    console.error(error);
    return false;
  }
};
