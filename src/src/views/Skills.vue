<template>
  <div>
    <h1>{{ title }}</h1>

    <v-card
      v-for="skillsData in skillsDataList"
      :key="skillsData.title"
      class="my-4"
    >
      <v-card-title>{{ skillsData.title }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col
            :cols="12"
            :sm="9"
          >
            <v-row
              v-for="item in skillsData.items"
              :key="item.name"
              align="center"
            >
              <template v-if="item.rate">
                <v-col
                  :cols="6"
                  class="text-body-1"
                >
                  {{ item.name }}
                </v-col>
                <v-col :cols="6">
                  <v-rating
                    readonly
                    :value="item.rate"
                    :length="3"
                  />
                </v-col>
              </template>
              <template v-else>
                <v-col><v-divider /></v-col>
              </template>
            </v-row>
          </v-col>
          <v-col
            class="d-sm-none"
            :cols="12"
          >
            <v-divider />
          </v-col>
          <v-col
            :cols="12"
            :sm="3"
          >
            {{ skillsData.comment }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import consts from '@/consts'

export default {
  name: 'Skills',
  computed: {
    title () {
      return 'SKILLS'
    },
    skillsDataList () {
      return [
        {
          title: 'Backend',
          items: [
            { name: 'C#', rate: 3 },
            { name: 'ASP.NET Core', rate: 3 },
            { name: '__BEGIN_PHP__' },
            { name: 'PHP', rate: 3 },
            { name: 'CakePHP', rate: 2 },
            { name: 'Laravel', rate: 3 },
            { name: 'concrete5', rate: 1 }
          ],
          comment: '現時点ではC#とPHPが得意ですが、他の言語も必要に応じて習得していきます。'
        },
        {
          title: 'Frontend',
          items: [
            { name: 'HTML', rate: 3 },
            { name: 'CSS', rate: 2 },
            { name: 'Bootstrap', rate: 2 },
            { name: '__BEGIN_JavaScript' },
            { name: 'JavaScript', rate: 3 },
            { name: 'jQuery', rate: 2 },
            { name: 'Vue', rate: 3 }
          ],
          comment: 'TypeScriptおよびReactも近いうちに習得しようと考えています。'
        },
        {
          title: 'Others',
          items: [
            { name: 'Windows', rate: 3 },
            { name: 'Linux', rate: 3 },
            { name: '__BEGIN_DB' },
            { name: 'Microsoft SQL Server', rate: 3 },
            { name: 'MySQL', rate: 3 },
            { name: 'SQLite', rate: 2 },
            { name: '__BEGIN_Web' },
            { name: 'IIS', rate: 3 },
            { name: 'Apache', rate: 3 },
            { name: '__BEGIN_Source' },
            { name: 'Git', rate: 3 },
            { name: '__BEGIN_Cloud' },
            { name: 'Microsoft Azure', rate: 1 },
            { name: 'Google Cloud Platform', rate: 1 },
            { name: '__BEGIN_Virtual' },
            { name: 'Hyper-V', rate: 2 },
            { name: 'Docker', rate: 1 }
          ],
          comment: 'クラウドサービスやDockerは軽く触った程度ですが、機会があれば深めていきたいです。'
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
          content: `${consts.me}のテクニカルスキルをまとめています。`
        }
      ]
    }
  }
}
</script>
