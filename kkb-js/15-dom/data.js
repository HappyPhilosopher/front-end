// 扁平化数据结构，即数据间不存在直接嵌套关系
// 其实还是有所关联，父级的 id 等于子级的 pid
var data = [
  {
    id: 0,
    pid: -1,
    title: '微云'
  },
  {
    id: 1,
    pid: 0,
    title: '我的文档'
  },
  {
    id: 2,
    pid: 0,
    title: '我的音乐'
  },
  {
    id: 2999,
    pid: 1,
    title: 'js程序设计'
  },
  {
    id: 29000,
    pid: 1,
    title: 'js权威指南'
  },
  {
    id: 23333,
    pid: 2,
    title: '王杰'
  },
  {
    id: 244444,
    pid: 2,
    title: '张国荣'
  },
  {
    id: 3,
    pid: 2,
    title: '周杰伦'
  },
  {
    id: 4000,
    pid: 3,
    title: '稻香'
  },
  {
    id: 4,
    pid: 3,
    title: '发如雪'
  },
  {
    id: 600,
    pid: 3,
    title: '夜曲'
  }
];
