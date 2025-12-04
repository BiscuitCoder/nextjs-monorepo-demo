import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 fixed h-screen overflow-y-auto">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900 mb-8">文档导航</h1>

        <nav className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-900 mb-2">开始</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  首页
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-900 mb-2">组件库</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/components" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  组件文档
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-900 mb-2">工具库</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/utils" className="block text-gray-600 hover:text-blue-600 transition-colors">
                  工具函数
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  )
}
