<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import consts from '@/consts'

export default {
  name: 'Skills',
  computed: {
    title () {
      return 'SKILLS'
    }
  },
  metaInfo () {
    return {
      title: `${this.title} | ${consts.site_name}`,
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Web系エンジニアyaso28のテクニカルスキルをまとめています。'
        }
      ]
    }
  }
}
</script>
