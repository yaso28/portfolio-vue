<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = true"
      />
      <v-toolbar-title :style="titleStyle">
        <v-img
          src="@/assets/title.svg"
          alt="yaso28 フリーランスプログラマー"
          position="left"
        />
      </v-toolbar-title>
      <v-tabs
        right
        class="d-none d-md-block"
      >
        <v-tab
          v-for="menuItem in menuItemList"
          :key="menuItem"
          :to="{name: menuItem}"
          exact
        >
          {{ menuItem }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      :width="drawerWidth"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item
            v-for="menuItem in menuItemList"
            :key="menuItem"
            :to="{name: menuItem}"
            exact
          >
            <v-list-item-title>{{ menuItem }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <v-footer
      app
      padless
    >
      <v-card
        tile
        width="100%"
        color="transparent"
        class="text-center"
      >
        <v-btn
          v-for="linkItem in linkItemList"
          :key="linkItem.icon"
          class="mx-4"
          icon
          :href="linkItem.href"
          :target="linkItem.target"
        >
          <v-icon
            dense
          >
            {{ linkItem.icon }}
          </v-icon>
        </v-btn>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    titleStyle () {
      return {
        overflow: this.$vuetify.breakpoint.mdAndUp ? 'visible' : 'hidden'
      }
    },
    drawerWidth () {
      return this.$vuetify.breakpoint.smAndUp ? '256px' : '40%'
    },
    menuItemList () {
      return ['HOME', 'SKILLS', 'WORKS']
    },
    linkItemList () {
      const list = []
      list.push({ icon: 'mdi-github', href: 'https://github.com/yaso28', target: '_blank' })
      const email = process.env.VUE_APP_EMAIL
      if (email) {
        list.push({ icon: 'mdi-email', href: `mailto:${email}`, target: '_self' })
      }
      return list
    }
  }
}
</script>
