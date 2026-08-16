# zhaojin596 的个人首页

基于 VitePress 的个人首页，用于展示课程资料与项目，自动部署到 GitHub Pages。

线上地址：<https://zhaojin596.github.io/>

## 项目结构

```text
个人首页/
├── docs/                     # 站点内容（Markdown）
│   ├── index.md              # 首页：关于我 + 入口
│   ├── courses.md            # 课程资料索引（指向语雀）
│   ├── projects.md           # 项目展示
│   ├── public/               # 图片等静态资源（如头像 avatar.png）
│   └── .vitepress/           # 站点配置与主题
├── .github/workflows/        # 自动部署
└── package.json
```

## 本地预览

```bash
npm install
npm run dev
```

浏览器打开终端提示的地址即可预览，修改 Markdown 会热更新。

## 修改内容

- 个人介绍、头像：编辑 `docs/index.md`，把 `avatar.png` 换成你自己的头像
- 课程资料：编辑 `docs/courses.md`，把语雀链接替换成你自己的
- 项目：编辑 `docs/projects.md`，按模板添加新项目
- 站点标题、GitHub 链接：编辑 `docs/.vitepress/config.mts`

## 部署到 GitHub Pages

1. 在 GitHub 新建**公开**仓库，仓库名必须是 `zhaojin596.github.io`（这样首页才能用根路径）
2. 推送本目录：`git push -u origin master`
3. 进入仓库 **Settings → Pages**，将 Source 选为 **GitHub Actions**
4. 每次 `git push` 到 `master` 分支，工作流会自动构建并发布
5. 发布成功后访问 <https://zhaojin596.github.io/>

## 发布流程速查

```bash
git add .
git commit -m "更新内容"
git push
```
