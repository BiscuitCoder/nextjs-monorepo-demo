import { Card } from "@repo/ui"
import {
  formatNumber,
  formatCurrency,
  formatFileSize,
  isValidEmail,
  isValidPhone,
  formatDate,
  toCamelCase,
  toKebabCase,
} from "@repo/utils"

export default function UtilsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">工具函数文档</h1>
      <p className="text-lg text-gray-600 mb-8">@repo/utils 工具函数库的完整使用说明和示例。</p>

      <div className="space-y-12">
        {/* Format */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">格式化</h2>
          <Card padding="lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">formatNumber</h3>
                <p className="text-gray-600 mb-2">格式化数字为千分位形式</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm">formatNumber(1234567)</code>
                  <p className="text-gray-900 mt-2">结果: {formatNumber(1234567)}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">formatCurrency</h3>
                <p className="text-gray-600 mb-2">格式化货币</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm">formatCurrency(1234567)</code>
                  <p className="text-gray-900 mt-2">结果: {formatCurrency(1234567)}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">formatFileSize</h3>
                <p className="text-gray-600 mb-2">格式化文件大小</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm">formatFileSize(1048576)</code>
                  <p className="text-gray-900 mt-2">结果: {formatFileSize(1048576)}</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Validate */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">验证</h2>
          <Card padding="lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">isValidEmail</h3>
                <p className="text-gray-600 mb-2">验证邮箱格式</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm">isValidEmail('test@example.com')</code>
                  <p className="text-gray-900 mt-2">结果: {String(isValidEmail("test@example.com"))}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">isValidPhone</h3>
                <p className="text-gray-600 mb-2">验证手机号码（中国）</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm">isValidPhone('13812345678')</code>
                  <p className="text-gray-900 mt-2">结果: {String(isValidPhone("13812345678"))}</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Date */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">日期</h2>
          <Card padding="lg">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">formatDate</h3>
              <p className="text-gray-600 mb-2">格式化日期</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <code className="text-sm">formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss')</code>
                <p className="text-gray-900 mt-2">结果: {formatDate(new Date(), "YYYY-MM-DD HH:mm:ss")}</p>
              </div>
            </div>
          </Card>
        </section>

        {/* String */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">字符串</h2>
          <Card padding="lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">toCamelCase</h3>
                <p className="text-gray-600 mb-2">转换为驼峰命名</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm">toCamelCase('hello-world')</code>
                  <p className="text-gray-900 mt-2">结果: {toCamelCase("hello-world")}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">toKebabCase</h3>
                <p className="text-gray-600 mb-2">转换为短横线命名</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <code className="text-sm">toKebabCase('helloWorld')</code>
                  <p className="text-gray-900 mt-2">结果: {toKebabCase("helloWorld")}</p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
