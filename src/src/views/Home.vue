<template>
  <div>
    <h1>HOME</h1>
  </div>
</template>

<script>
import consts from '@/consts'

export default {
  name: 'Home',
  metaInfo () {
    return {
      title: consts.site_name,
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: 'Web系エンジニアyaso28のポートフォリオサイトです。'
        }
      ]
    }
  }
}
</script>
