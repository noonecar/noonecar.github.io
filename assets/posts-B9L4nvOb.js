var e=[{slug:`my-website-is-born`,title:`我的网页诞生了`,date:`2025-10-01`,excerpt:`记录使用 Jekyll 和 GitHub Pages 搭建第一个个人网站的完整过程，从选题到部署的心路历程。`,tags:[`建站`,`Jekyll`,`GitHub Pages`],category:`建站`,content:`
## 我的网页诞生了

在 2025 年 9 月 30 日的晚上，我开始着手搭建这个个人网站。

最初计划使用默认的 **Minima** 主题，但在探索过程中发现了 **Minimal Mistakes** 主题 —— 一个功能更丰富、设计更精致的 Jekyll 主题。经过几个小时的折腾，终于成功切换到了新主题。

### 选择 Jekyll + GitHub Pages

选择这个技术栈有几个原因：

- **免费托管**：GitHub Pages 提供免费的静态网站托管
- **Markdown 写作**：用 Markdown 写文章，简洁高效
- **版本控制**：所有内容都在 Git 中管理
- **自定义性强**：可以深入修改主题的方方面面

### 下一步计划

网站搭建只是第一步。接下来我计划：

1. 完善个人介绍页面
2. 添加更多文章
3. 探索更多 Jekyll 插件的可能性

这是一个开始。**
`,author:`noonecar`},{slug:`jekyll-github-pages-branch-management`,title:`Jekyll 网站开发与 GitHub Pages 部署的分支管理方案`,date:`2025-10-01`,excerpt:`探索 Jekyll + GitHub Pages 部署中 dev/main 双分支工作流的最佳实践，解决本地开发与远程部署的配置冲突。`,tags:[`技术方法`,`Jekyll`,`GitHub Pages`,`Git`],category:`技术方法`,content:`
## Jekyll 网站开发与 GitHub Pages 部署的分支管理方案

在使用 Jekyll 和 GitHub Pages 搭建个人网站时，一个常见的痛点是**本地开发环境与远程部署环境之间的配置差异**。

### 问题背景

本地开发时，我们通常使用本地安装的 Jekyll 主题 gem：

\`\`\`yaml
# _config.yml (dev)
theme: minimal-mistakes
\`\`\`

但在 GitHub Pages 上部署时，需要使用 \`remote_theme\`：

\`\`\`yaml
# _config.yml (main)
remote_theme: "mmistakes/minimal-mistakes"
\`\`\`

### 解决方案：双分支工作流

我采用的方案是维护两个分支：

- **\`dev\` 分支**：用于本地开发，使用 \`theme\` 配置
- **\`main\` 分支**：用于 GitHub Pages 部署，使用 \`remote_theme\` 配置

### 工作流程

1. 在 \`dev\` 分支上进行写作和开发
2. 本地预览：\`bundle exec jekyll serve\`
3. 满意后，切换到 \`main\` 分支
4. 合并 \`dev\` 的更改（排除 \`_config.yml\` 的 theme 配置部分）
5. 推送到 GitHub，触发 Pages 自动部署

### 小结

这个方案虽然需要手动管理两个分支的合并，但对于个人博客来说完全够用。GitHub Actions 也可以自动化这个过程，但目前的方案更简单可控。
`,author:`noonecar`},{slug:`welcome-to-jekyll`,title:`Welcome to Jekyll!`,date:`2025-10-01`,excerpt:`Jekyll 官方入门欢迎文章，记录了这个博客的起点。`,tags:[`Jekyll`,`入门`],content:`
## Welcome to Jekyll!

This is the default welcome post that comes with every new Jekyll site.

You'll find this post in your \`_posts\` directory. Go ahead and edit it and re-build the site to see your changes.

Jekyll requires blog post files to be named according to the following format:

\`YEAR-MONTH-DAY-title.MARKUP\`

Jekyll also offers powerful support for code snippets:

\`\`\`ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
\`\`\`

Check out the [Jekyll docs](https://jekyllrb.com/docs/home) for more info.
`,author:`noonecar`}];export{e as t};