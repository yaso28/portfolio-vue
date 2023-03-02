<template>
  <div>
    <h1>{{ title }}</h1>

    <v-expansion-panels
      multiple
      class="my-4"
    >
      <v-expansion-panel
        v-for="workData in workDataList"
        :key="workData.title"
      >
        <v-expansion-panel-header>
          {{ `${workData.title}【${workData.skills}】` }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="d-flex flex-wrap">
            <v-btn
              v-for="link in workData.links"
              :key="link.name"
              :href="link.href"
              target="_blank"
              class="mr-1 mb-1"
            >
              {{ link.name }}
            </v-btn>
          </div>
          <div
            class="mt-4 text-body-2"
          >
            <p
              v-for="comment in workData.comments"
              :key="comment"
            >
              {{ comment }}
            </p>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import consts from '@/consts'

export default {
  name: 'Works',
  computed: {
    title () {
      return 'WORKS'
    },
    workDataList () {
      return [
        /*
        {
          title: '練習会場予約・予定公開システム',
          skills: 'Vue + Laravel',
          links: [
            { name: 'デモサイト', href: process.env.VUE_APP_DEMO_URL_SCHEDULE_RESERVATION },
            { name: 'ソースコード（フロントエンド）', href: 'https://github.com/yaso28/schedule-reservation-frontend' },
            { name: 'ソースコード（バックエンド）', href: 'https://github.com/yaso28/schedule-reservation-backend' }
          ],
          comments: [
            '趣味の競技かるたで所属会の練習会場を予約する業務を担当しており、煩雑だった予約状況の管理を簡略化するために独力で開発しました。このシステムによって予約状況の把握が容易になるとともに、以前は別途作業していた練習予定のメール送信およびWeb公開も効率よく行えるようになりました。',
            'SPA + APIという構成のWebシステムを開発するのはこれが初めてであり、認証周りで試行錯誤しましたがクッキーベースのセッション認証について理解を深める事ができました。またテストコードを作成しながら開発する事で、テストしやすいコードの書き方を学びました。'
          ]
        },
        */
        {
          title: 'ポートフォリオサイト',
          skills: 'Vue',
          links: [
            { name: 'ソースコード', href: 'https://github.com/yaso28/portfolio-vue' }
          ],
          comments: [
            'このサイトです。',
            '手早く作成するため習得済みのVueを利用しました。時間があれば別のスキルで作り直すかもしれません。'
          ]
        }
      ]
    }
  },
  metaInfo () {
    return {
      title: `${this.title} - ${consts.site_name}`,
      meta: [
        {
          vmid: 'description',
          name: 'description',
          content: `${consts.me}のポートフォリオをまとめています。`
        }
      ]
    }
  }
}
</script>
