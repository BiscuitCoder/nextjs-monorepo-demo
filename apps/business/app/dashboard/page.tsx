import { Card, Badge } from "@repo/ui"
import { formatNumber, formatCurrency, getRelativeTime } from "@repo/utils"

export default function DashboardPage() {
  const recentActivities = [
    { id: 1, action: "新订单", user: "张三", time: new Date(Date.now() - 5 * 60 * 1000) },
    { id: 2, action: "用户注册", user: "李四", time: new Date(Date.now() - 15 * 60 * 1000) },
    { id: 3, action: "产品更新", user: "王五", time: new Date(Date.now() - 60 * 60 * 1000) },
    { id: 4, action: "支付完成", user: "赵六", time: new Date(Date.now() - 2 * 60 * 60 * 1000) },
  ]

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">控制台</h1>
        <p className="text-gray-600">欢迎回来，这是您的业务概览</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card padding="lg" shadow>
          <h3 className="text-sm font-medium text-gray-600 mb-2">今日收入</h3>
          <p className="text-3xl font-bold text-gray-900 mb-1">{formatCurrency(45678)}</p>
          <Badge variant="success">+18% 较昨日</Badge>
        </Card>

        <Card padding="lg" shadow>
          <h3 className="text-sm font-medium text-gray-600 mb-2">活跃用户</h3>
          <p className="text-3xl font-bold text-gray-900 mb-1">{formatNumber(1234)}</p>
          <Badge variant="info">+5% 较昨日</Badge>
        </Card>

        <Card padding="lg" shadow>
          <h3 className="text-sm font-medium text-gray-600 mb-2">待处理订单</h3>
          <p className="text-3xl font-bold text-gray-900 mb-1">{formatNumber(89)}</p>
          <Badge variant="warning">需要关注</Badge>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card padding="lg" shadow>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">最近活动</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.user}</p>
                </div>
                <p className="text-sm text-gray-500">{getRelativeTime(activity.time)}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card padding="lg" shadow>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">快速操作</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <p className="font-medium text-gray-900">创建订单</p>
            </button>

            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <p className="font-medium text-gray-900">添加用户</p>
            </button>

            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="font-medium text-gray-900">生成报告</p>
            </button>

            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="font-medium text-gray-900">系统设置</p>
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}
