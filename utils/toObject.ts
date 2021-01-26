import { FieldError } from '../src/generated/graphql';

export const convertArrayToObject = (array: FieldError[]) => {

    let initValue: Record<string, string> = {};

    array.forEach(({field, message}) => {
        initValue[field] = message;
    });

    return initValue;
}