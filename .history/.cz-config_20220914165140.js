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
  ],
  // 步骤
  message: {
    type: '请选择提交的类型',
    customScope: '请输入修改的范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确认要使用以上信息提交?(y/n)'
  }
}