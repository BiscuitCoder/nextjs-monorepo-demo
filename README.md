# Monorepo Project

这是一个基于 Turborepo 的 monorepo 项目，包含以下包：

## 项目结构

\`\`\`
.
├── apps/
│   ├── docs/          # 文档站点 (运行在 3001 端口)
│   └── business/      # 业务站点 (运行在 3000 端口)
├── packages/
│   ├── ui/            # 公共组件库
│   └── utils/         # 工具函数库
└── turbo.json         # Turborepo 配置
\`\`\`

## 快速开始

### 安装依赖

\`\`\`bash
pnpm install
\`\`\`

### 开发模式

\`\`\`bash
# 启动所有应用
pnpm dev
\`\`\`

### 构建所有包

\`\`\`bash
pnpm build
\`\`\`

## 包说明

- **@repo/ui**: 公共 React 组件库，供所有应用使用
- **@repo/utils**: 工具函数库，提供通用的工具方法
- **docs**: 文档站点，使用 Next.js 构建，端口 3001
- **business**: 业务应用站点，使用 Next.js 构建，端口 3000
