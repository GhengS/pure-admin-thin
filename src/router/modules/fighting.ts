// 最简代码，也就是这些字段必须有
export default {
  path: "/fighting",
  meta: {
    title: "励志"
  },
  children: [
    {
      path: "/fighting/index",
      name: "Fighting",
      component: () => import("@/views/fighting/index.vue"),
      meta: {
        title: "加油",
        // 通过设置showParent为true，显示父级
        showParent: true
      }
    },
    {
      path: "/components/statistic",
      name: "Statistic",
      component: () => import("@/views/components/statistic.vue"),
      meta: {
        title: "统计组件",
        showParent: true
      }
    }
  ]
};
