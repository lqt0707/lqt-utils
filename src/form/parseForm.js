/**
 * 用于去除 form 表单中值undefined，null的数据
 * @param data form 表单提交的数据
 * @returns {{}}
 */
export const parseFormData = (data) => {
  const params = Object.keys(data)
    .filter((key) => data[key] !== null && data[key] !== undefined)
    .reduce((acc, key) => ({ ...acc, [key]: data[key] }), {});
  return params;
};
