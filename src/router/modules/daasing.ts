export default {
  path: "/daasing",
  meta: {
    title: "DAAS"
  },
  children: [
    {
      path: "/daasing/index",
      name: "daasing",
      component: () => import("@/views/daasing/index.vue"),
      meta: {
        title: "DAAS",
        showParent: true
      }
    }
  ]
};
