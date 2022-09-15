/**
 * @name: isExternal
 * @description: 判断是否为外部资源,判断是否以https mailto tel 开头
 * @param {*} path
 * @return {*}
 */
export function isExternal(path) {
  return /^(https?:|mailto:tel:)/.test(path)
}
