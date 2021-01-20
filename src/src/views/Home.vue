<template>
  <div>
    <h1>ポートフォリオサイト</h1>

    <v-card
      class="my-4"
    >
      <v-card-title>ABOUT ME</v-card-title>
      <v-card-text
        class="d-flex align-center"
      >
        <v-img
          src="@/assets/yaso28.png"
          max-height="64px"
          max-width="64px"
        />
        <div
          class="ml-10"
        >
          Web系メインのプログラマーをしています。京都在住です。<br>
          システム開発会社を2社経験したのち、フリーランスとして活動しています。
        </div>
      </v-card-text>
    </v-card>
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
          content: `${consts.me}のポートフォリオサイトです。`
        }
      ]
    }
  }
}
</script>
