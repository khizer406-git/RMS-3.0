export const serverSchemaValidator = async <T extends object>(data: any, formValues: T): Promise<boolean> => {
    if(!data){
        return false;
    }
    const formKeys = Object.keys(formValues) as Array<keyof T>;
    const isValid = formKeys.every(key => key in data);
    return isValid;
};
