# Wei Liu · 刘威

个人学术主页：<https://willliu322.github.io/>

## 本地预览

需要 Node.js 22.13 或更新版本。

```sh
npm ci
npm run dev
```

## 修改内容

- `app/page.tsx`：个人介绍、联系方式、研究经历、教育与荣誉。
- `app/publications.ts`：论文信息、链接与可选图片。
- `app/globals.css`：排版、颜色和移动端样式。
- `app/layout.tsx`：网页标题、描述和图标。
- `public/images/wei-liu.png`：头像。
- `public/images/platoon.png`：Compensator-Based Fixed-Time Prescribed Performance Control 论文配图。
- `public/images/paper-blank.svg`：其余论文的白色占位图。

为论文设置图片时，在对应论文条目中添加或修改 `image` 字段；没有该字段的论文使用白色占位图。

## 构建与发布

```sh
npm run build
```

静态网站输出到 `dist/client/`，无需服务器。

将修改提交到 GitHub 仓库 `WillLiu322/willliu322.github.io` 的 `master` 分支后，在 Actions 页面手动运行 **Deploy personal homepage**。仓库 Settings → Pages 的发布来源应设为 **GitHub Actions**。

`npm run lint` 用于检查代码，`npm run format` 用于统一格式。
