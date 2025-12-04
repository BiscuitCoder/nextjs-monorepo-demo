import { Button, Card, Input, Badge } from "@repo/ui"

export default function ComponentsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">组件文档</h1>
      <p className="text-lg text-gray-600 mb-8">@repo/ui 组件库的完整使用说明和示例。</p>

      <div className="space-y-12">
        {/* Button */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Button</h2>
          <Card padding="lg">
            <h3 className="text-xl font-medium text-gray-900 mb-4">示例</h3>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Props</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                <code className="bg-gray-100 px-2 py-0.5 rounded">variant</code>: 'primary' | 'secondary' | 'outline' |
                'ghost'
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-0.5 rounded">size</code>: 'sm' | 'md' | 'lg'
              </li>
            </ul>
          </Card>
        </section>

        {/* Card */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Card</h2>
          <Card padding="lg">
            <h3 className="text-xl font-medium text-gray-900 mb-4">示例</h3>
            <div className="space-y-4 mb-6">
              <Card padding="sm">Small padding card</Card>
              <Card padding="md">Medium padding card</Card>
              <Card padding="lg">Large padding card</Card>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Props</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                <code className="bg-gray-100 px-2 py-0.5 rounded">padding</code>: 'none' | 'sm' | 'md' | 'lg'
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-0.5 rounded">shadow</code>: boolean
              </li>
            </ul>
          </Card>
        </section>

        {/* Input */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Input</h2>
          <Card padding="lg">
            <h3 className="text-xl font-medium text-gray-900 mb-4">示例</h3>
            <div className="space-y-4 mb-6 max-w-md">
              <Input label="用户名" placeholder="请输入用户名" />
              <Input label="邮箱" type="email" placeholder="example@email.com" />
              <Input label="密码" type="password" error="密码长度至少8位" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Props</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                <code className="bg-gray-100 px-2 py-0.5 rounded">label</code>: string
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-0.5 rounded">error</code>: string
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-0.5 rounded">fullWidth</code>: boolean
              </li>
            </ul>
          </Card>
        </section>

        {/* Badge */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Badge</h2>
          <Card padding="lg">
            <h3 className="text-xl font-medium text-gray-900 mb-4">示例</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Props</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                <code className="bg-gray-100 px-2 py-0.5 rounded">variant</code>: 'default' | 'success' | 'warning' |
                'error' | 'info'
              </li>
            </ul>
          </Card>
        </section>
      </div>
    </div>
  )
}
