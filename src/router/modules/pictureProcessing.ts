


export default {
  path: "/theoryBase/pictureProcessing",
  redirect: "/theoryBase/pictureProcessing/pictureProcessing",
  meta: {
    icon: "informationLine",
    title: "图像处理",
    name: 'pictureProcessing',
    rank: 2
  },
  children: [
    {
      path: "/theoryBase/pictureProcessing/pictureProcessing",
      name: "pictureProcessing1",
      component: () => import( "@/views/theoryBase/pictureProcessing/pictureProcessing.vue") ,
      meta: {
        title: "图像处理"
      }
    },
  ]
}
