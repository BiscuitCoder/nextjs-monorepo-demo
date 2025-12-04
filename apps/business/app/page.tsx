import { Button, Card, Badge } from "@repo/ui"
import { formatNumber } from "@repo/utils"
import Link from "next/link"

export default function Home() {
  const stats = [
    { label: "总用户数", value: 12345, change: "+12%" },
    { label: "活跃用户", value: 8976, change: "+8%" },
    { label: "营业额", value: 2567890, change: "+23%" },
    { label: "订单数", value: 4532, change: "+15%" },
  ]

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">企业管理系统</h1>
        <p className="text-xl text-gray-600 mb-8">高效管理您的业务，提升运营效率</p>
        <div className="flex gap-4 justify-center">
          <Link href="/dashboard">
            <Button variant="primary" size="lg">
              进入控制台
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline" size="lg">
              浏览产品
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <Card key={stat.label} padding="lg" shadow>
            <div className="flex items-start justify-between mb-2">
              <p className="text-sm text-gray-600">{stat.label}</p>
              <Badge variant="success">{stat.change}</Badge>
            </div>
            <p className="text-3xl font-bold text-gray-900">{formatNumber(stat.value)}</p>
          </Card>
        ))}
      </div>

      {/* Features */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">核心功能</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card padding="lg" shadow>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">数据分析</h3>
            <p className="text-gray-600">实时追踪业务数据，提供深入的分析报告和可视化图表</p>
          </Card>

          <Card padding="lg" shadow>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">团队协作</h3>
            <p className="text-gray-600">强大的团队管理功能，支持多角色权限和任务分配</p>
          </Card>

          <Card padding="lg" shadow>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">安全可靠</h3>
            <p className="text-gray-600">企业级安全保障，数据加密存储，符合行业标准</p>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <Card padding="lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">准备好开始了吗？</h2>
          <p className="text-lg text-gray-600 mb-6">立即体验我们的企业管理系统，提升您的业务效率</p>
          <Button variant="primary" size="lg">
            免费试用 30 天
          </Button>
        </div>
      </Card>
    </div>
  )
}
