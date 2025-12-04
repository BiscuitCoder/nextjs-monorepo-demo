export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">产品</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  功能
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  定价
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  案例
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">公司</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  关于我们
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  团队
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  招聘
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">资源</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  文档
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  博客
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  支持
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">联系</h3>
            <ul className="space-y-2 text-gray-600">
              <li>邮箱: info@example.com</li>
              <li>电话: 400-123-4567</li>
              <li>地址: 北京市朝阳区</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© 2025 企业管理系统. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
