/**
 * 转换为驼峰命名
 * @param str 字符串
 * @returns 驼峰命名字符串
 */
export function toCamelCase(str: string): string {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
}

/**
 * 转换为短横线命名
 * @param str 字符串
 * @returns 短横线命名字符串
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase()
}

/**
 * 转换为蛇形命名
 * @param str 字符串
 * @returns 蛇形命名字符串
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase()
}

/**
 * 截断字符串
 * @param str 字符串
 * @param length 最大长度
 * @param suffix 后缀
 * @returns 截断后的字符串
 */
export function truncate(str: string, length: number, suffix = "..."): string {
  if (str.length <= length) return str
  return str.slice(0, length) + suffix
}

/**
 * 移除HTML标签
 * @param html HTML字符串
 * @returns 纯文本字符串
 */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "")
}
