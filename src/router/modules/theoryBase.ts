


export default {
  path: "/theoryBase/baseConcept",
  redirect: "/theoryBase/baseConcept/baseConcept",
  meta: {
    icon: "informationLine",
    title: "基础",
    name: "baseConcept",
    rank: 1
  },
  children: [
    {
      path: "/theoryBase/baseConcept/baseConcept",
      name: "baseConcept1",
      component: () => import( "@/views/theoryBase/baseConcept/baseConcept.vue") ,
      meta: {
        title: "基础概念"
      },
    },
  ]
}
