# @repo/utils

通用工具函数库，提供常用的工具方法。

## 安装

\`\`\`bash
pnpm add @repo/utils
\`\`\`

## 使用

\`\`\`typescript
import { formatNumber, isValidEmail, formatDate } from '@repo/utils'

// 格式化数字
formatNumber(1234567) // "1,234,567"

// 验证邮箱
isValidEmail('test@example.com') // true

// 格式化日期
formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')
\`\`\`

## API

### 格式化 (format)

- \`formatNumber(num)\` - 格式化数字为千分位
- \`formatCurrency(amount, currency)\` - 格式化货币
- \`formatFileSize(bytes)\` - 格式化文件大小

### 验证 (validate)

- \`isValidEmail(email)\` - 验证邮箱格式
- \`isValidPhone(phone)\` - 验证手机号码
- \`isValidIdCard(idCard)\` - 验证身份证号码
- \`isValidUrl(url)\` - 验证URL格式

### 日期 (date)

- \`formatDate(date, format)\` - 格式化日期
- \`getRelativeTime(date)\` - 获取相对时间描述

### 字符串 (string)

- \`toCamelCase(str)\` - 转换为驼峰命名
- \`toKebabCase(str)\` - 转换为短横线命名
- \`toSnakeCase(str)\` - 转换为蛇形命名
- \`truncate(str, length, suffix)\` - 截断字符串
- \`stripHtml(html)\` - 移除HTML标签
