import { Card } from "@repo/ui"

export default function Home() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">欢迎使用 Monorepo 文档</h1>
      <p className="text-lg text-gray-600 mb-8">本文档包含组件库和工具函数库的完整使用说明。</p>

      <div className="grid gap-6 md:grid-cols-2 mb-12">
        <Card padding="lg" shadow>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">@repo/ui</h2>
          <p className="text-gray-600 mb-4">公共 React 组件库，提供可复用的 UI 组件，包括按钮、卡片、输入框等。</p>
          <a href="/components" className="text-blue-600 hover:text-blue-700 font-medium">
            查看组件文档 →
          </a>
        </Card>

        <Card padding="lg" shadow>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">@repo/utils</h2>
          <p className="text-gray-600 mb-4">工具函数库，提供常用的工具方法，包括格式化、验证、日期处理等。</p>
          <a href="/utils" className="text-blue-600 hover:text-blue-700 font-medium">
            查看工具文档 →
          </a>
        </Card>
      </div>

      <Card padding="lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">快速开始</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">1. 安装依赖</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>pnpm install</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">2. 启动开发服务器</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>pnpm dev</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">3. 使用组件</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`import { Button, Card } from '@repo/ui'
import { formatNumber } from '@repo/utils'

function App() {
  return (
    <Card>
      <Button>点击我</Button>
      <p>{formatNumber(1234567)}</p>
    </Card>
  )
}`}</code>
            </pre>
          </div>
        </div>
      </Card>
    </div>
  )
}
