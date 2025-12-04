export default function RootPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Monorepo 项目</h1>
          <p className="text-xl text-gray-600">基于 Turborepo 的多包管理架构</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Business App Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">业务应用</h2>
            <p className="text-gray-600 mb-6">企业管理系统，包含控制台、产品管理等功能模块</p>
            <div className="space-y-2 text-sm text-gray-500 mb-6">
              <p>📍 端口: 3000</p>
              <p>📦 路径: apps/business</p>
            </div>
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              访问业务应用 →
            </a>
          </div>

          {/* Docs App Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">文档站点</h2>
            <p className="text-gray-600 mb-6">组件库和工具库的完整使用文档和示例代码</p>
            <div className="space-y-2 text-sm text-gray-500 mb-6">
              <p>📍 端口: 3001</p>
              <p>📦 路径: apps/docs</p>
            </div>
            <a
              href="http://localhost:3001"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              查看文档站点 →
            </a>
          </div>
        </div>

        {/* Packages Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📦 共享包</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">@repo/ui</h3>
              <p className="text-sm text-gray-600 mb-3">公共 React 组件库</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Button</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Card</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Input</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Badge</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">@repo/utils</h3>
              <p className="text-sm text-gray-600 mb-3">工具函数库</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">格式化</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">验证</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">日期</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">字符串</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div className="mt-8 bg-gray-900 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">🚀 快速开始</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm mb-2">1. 安装依赖</p>
              <code className="block bg-black/50 p-3 rounded-lg text-sm">pnpm install</code>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">2. 启动开发服务器</p>
              <code className="block bg-black/50 p-3 rounded-lg text-sm">pnpm dev</code>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2">3. 构建所有包</p>
              <code className="block bg-black/50 p-3 rounded-lg text-sm">pnpm build</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
