export const Utils = {
    isNullOrUndefined(value: any) {
        return value === null || typeof value === 'undefined';
    },
    isUndefined(value: any) {
        return typeof value === 'undefined';
    },
    isFalsy(value: any) {
        return !value;  // Returns true for: undefined, null, 0, false, '', NaN
    },
    isTruthy(value: any) {
        return !!value; // Returns true for: any value that is not falsy (e.g., 1, true, 'non-empty string', etc.)
    }
};