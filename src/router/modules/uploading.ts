export default {
  path: "/uploading",
  meta: {
    title: "上传"
  },
  children: [
    {
      path: "/uploading/index",
      name: "uploading",
      component: () => import("@/views/uploading/index.vue"),
      meta: {
        title: "文件上传",
        showParent: true
      }
    }
  ]
};
