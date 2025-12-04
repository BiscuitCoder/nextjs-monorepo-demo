import { Card, Button, Badge } from "@repo/ui"
import { formatCurrency } from "@repo/utils"

export default function ProductsPage() {
  const products = [
    { id: 1, name: "产品 A", price: 999, stock: 120, status: "available" },
    { id: 2, name: "产品 B", price: 1299, stock: 85, status: "available" },
    { id: 3, name: "产品 C", price: 1599, stock: 5, status: "low-stock" },
    { id: 4, name: "产品 D", price: 899, stock: 0, status: "out-of-stock" },
    { id: 5, name: "产品 E", price: 2199, stock: 200, status: "available" },
    { id: 6, name: "产品 F", price: 1899, stock: 45, status: "available" },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return <Badge variant="success">有货</Badge>
      case "low-stock":
        return <Badge variant="warning">库存低</Badge>
      case "out-of-stock":
        return <Badge variant="error">缺货</Badge>
      default:
        return <Badge>未知</Badge>
    }
  }

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">产品管理</h1>
          <p className="text-gray-600">管理您的产品库存和定价</p>
        </div>
        <Button variant="primary" size="lg">
          添加产品
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} padding="lg" shadow>
            <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>

            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              {getStatusBadge(product.status)}
            </div>

            <p className="text-2xl font-bold text-gray-900 mb-2">{formatCurrency(product.price)}</p>

            <p className="text-sm text-gray-600 mb-4">库存: {product.stock} 件</p>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 bg-transparent">
                编辑
              </Button>
              <Button variant="primary" className="flex-1">
                查看详情
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
