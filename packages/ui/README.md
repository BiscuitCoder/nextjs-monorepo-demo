# @repo/ui

公共 React 组件库，提供可复用的 UI 组件。

## 安装

\`\`\`bash
pnpm add @repo/ui
\`\`\`

## 使用

\`\`\`tsx
import { Button, Card, Input, Badge } from '@repo/ui'

function App() {
  return (
    <Card>
      <Input label="用户名" placeholder="请输入用户名" />
      <Button variant="primary">提交</Button>
      <Badge variant="success">已完成</Badge>
    </Card>
  )
}
\`\`\`

## 组件

### Button

按钮组件，支持多种样式和尺寸。

**Props:**
- \`variant\`: 'primary' | 'secondary' | 'outline' | 'ghost'
- \`size\`: 'sm' | 'md' | 'lg'

### Card

卡片容器组件。

**Props:**
- \`padding\`: 'none' | 'sm' | 'md' | 'lg'
- \`shadow\`: boolean

### Input

输入框组件，支持标签和错误提示。

**Props:**
- \`label\`: string
- \`error\`: string
- \`fullWidth\`: boolean

### Badge

徽章组件，用于显示状态或标签。

**Props:**
- \`variant\`: 'default' | 'success' | 'warning' | 'error' | 'info'
