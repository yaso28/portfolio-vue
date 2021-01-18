<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import consts from '@/consts'

export default {
  name: 'Works',
  computed: {
    title () {
      return 'WORKS'
    }
  },
  metaInfo () {
    return {
      title: `${this.title} | ${consts.site_name}`,
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Web系エンジニアyaso28のポートフォリオをまとめています。'
        }
      ]
    }
  }
}
</script>
