module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:         新功能' },
    { value: 'fix', name: 'fix:         修复' },
    { value: 'docs', name: 'docs:         文档变更' },
    { value: 'style', name: 'style:         代码格式(不影响代码运行的变动)' },
    {
      value: 'refactor',
      name: 'refactor: 重构(既不是新增feature, 也不是修复bug)'
    }

  ]
}