---
layout: single
title: "Jekyll 与 GitHub Pages 部署的分支管理方案"
date: 2025-10-01
categories: [技术方法]
tags: [Jekyll, GitHub Pages, Git, 博客搭建]
excerpt: "使用 Git 分支管理解决 Jekyll 本地开发与 GitHub Pages 部署的配置冲突"
---

## 概述

本文用于记录个人使用 Git 分支管理来解决 Jekyll 本地开发与 GitHub Pages 部署冲突的方法：通过创建两个独立分支，清晰地分离本地开发和线上部署环境。

## 核心思想

创建两个分支，分别用于不同的目的：

- **`dev` 分支**：用于本地开发，包含本地主题文件，不使用 `remote_theme`
- **`main` 分支**：用于 GitHub Pages 部署，使用 `remote_theme`，不包含本地主题文件

## 日常开发流程

### 1. 切换到开发分支
```bash
git checkout dev
```

### 2. 编写内容/修改样式
编辑 Markdown 文件（Posts/Pages）、CSS (Sass) 或布局文件

### 3. 本地预览
```bash
bundle exec jekyll serve
```

### 4. 保存并提交更改
```bash
git add .
git commit -m "Add new post about X / Fix typo / etc."
```

### 5. 推送开发分支
```bash
git push origin dev
```
（用于备份本地开发进度）

## 部署到 GitHub Pages

### 1. 确保开发分支更改已提交
```bash
git status
git add .
git commit -m "..."
```

### 2. 切换到主分支
```bash
git checkout main
```

### 3. 合并开发分支的更改
```bash
git merge dev
```
这会将你在 `dev` 分支上做的所有内容和样式修改合并到 `main` 分支。

### 4. 在主分支上配置 GitHub Pages 部署

**修改 `_config.yml`**：
```yaml
# _config.yml (in main branch)
# ... 其他配置 ...
remote_theme: mmistakes/minimal-mistakes
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-remote-theme # 必须包含这个插件
  # ... 其他插件 ...
```

**修改 `Gemfile`**：
```ruby
# Gemfile (in main branch)
# ... 其他 gems ...
gem "jekyll-remote-theme"
# ... 其他 gems ...
```

### 5. 提交主分支的配置更改
```bash
git add .
git commit -m "Switch config to remote theme for GitHub Pages"
```

### 6. 推送到 GitHub 主分支
```bash
git push origin main
```

### 7. 等待 GitHub Pages 构建
等待github构建网站成功后访问自己的GitHub Pages URL：`https://GitHubId.github.io/`，比如我自己的是`https://noonecar.github.io/`

## 关键要点

- **分支职责明确**：
  - `dev`：本地开发环境，包含本地主题文件
  - `main`：生产环境，使用 `remote_theme`

- **配置差异**：`_config.yml` 和 `Gemfile` 在两个分支上有不同的内容

- **合并策略**：部署时，将 `dev` 分支的内容（文章、页面、配置修改）合并到 `main`，然后在 `main` 分支上覆盖配置以适应 GitHub Pages

## 优势

1. **环境隔离**：本地开发和线上部署环境完全分离
2. **配置灵活**：不同环境使用最适合的配置方案
3. **版本控制**：所有更改都有清晰的版本历史
4. **维护简单**：个人项目维护流程清晰明了

通过这种分支管理方式，可以有效避免 Jekyll 本地开发与 GitHub Pages 部署之间的配置冲突，提高开发效率和部署可靠性。