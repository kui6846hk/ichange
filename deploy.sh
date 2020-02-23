
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 删除目录防止构建失败
rm -rf docs/.vuepress/dist

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
# git remote add origin https://github.com/kui6846hk/ichange.git/
# git pull origin master:gh-pages
git push origin master:gh-pages

cd -