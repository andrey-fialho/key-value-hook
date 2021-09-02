export function UseKeyValuePairCreator(key: any, value: any = '', object: any) {
  if (Array.isArray(object)) {
    return [...object, { [key]: value }];
  }

  return { ...object, [key]: value };
}
