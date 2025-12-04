import Link from "next/link"
import { Button } from "@repo/ui"

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              企业管理系统
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                首页
              </Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                控制台
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">
                产品
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost">登录</Button>
            <Button variant="primary">注册</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
