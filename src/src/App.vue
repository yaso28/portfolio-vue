<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = true"
      />
      <v-toolbar-title class="my-title">
        yaso28 - Web系エンジニア
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
      fixed
      temporary
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
    menuItemList () {
      return ['HOME', 'ABOUT', 'SKILLS', 'WORKS']
    }
  }
}
</script>

<style lang="scss">
.v-toolbar__title.my-title {
  overflow: visible;
}
</style>
