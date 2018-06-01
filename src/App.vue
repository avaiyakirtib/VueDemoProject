<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed
      app>
      <v-list>
        <v-list-group value="true" v-for="(item, i) in menuItems" :key="i">
          <v-list-tile :to="item.path" slot="activator">
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <template v-if="item.subMenus">
            <v-list-tile v-for="subItem in item.subMenus" :to="subItem.path" :key="subItem.title" @click="" class="sub-menu">
              <v-list-tile-action>
                <v-icon v-html="subItem.icon"></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="subItem.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar v-if="currentRoute != '/'" app :clipped-left="clipped" color="light-blue" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <img src="@/assets/logo.png" alt="logo" class="logo">
      <!-- <v-toolbar-title v-text="title">

      </v-toolbar-title> -->
      <v-spacer></v-spacer>
      <v-btn primary @click="logoutFun" v-text="logout" active-class>
      </v-btn>
      <v-toolbar-title :right="right">
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer v-if="currentRoute != '/'" :fixed="fixed" app>
      <v-flex xs12 class="text-xs-center mt-3 grey--text text--darken-1" mb-5>
        <h1 class="mt-3 grey--text text--darken-1">Footer</h1>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<style>
  .logo{
    height: 30px;
  }
  .sub-menu {
    padding-left: 50px;
  }

  /* .list__tile--active,
  v-list-tile-title {
    background-color: rgba(10, 10, 10, 0.05);
    color: #fff !important;
  } */
  
</style>
<script>
  export default {
    name: 'App',
    data() {
      return {
        currentRoute: this.$route.path,
        clipped: true,
        drawer: false,
        fixed: false,
        menuItems: [{
          icon: 'home',
          path: '/dashboard',
          title: 'Dashboard',
          subMenus: []
        }, {
          icon: 'list_alt',
          path: '/jobs',
          title: 'Jobs',
          subMenus: [{
            icon: 'add',
            path: '/addJob',
            title: 'Add Job'
          }, {
            icon: 'receipt',
            path: '/jobDetails',
            title: 'Job Details'
          }]
        }, {
          icon: 'perm_identity',
          path: '/customers',
          title: 'Customers',
          subMenus: []
        }, {
          icon: 'accessibility',
          path: '/employees',
          title: 'Employees',
          subMenus: []
        }, {
          icon: 'assignment',
          path: '/reports',
          title: 'Reports',
          subMenus: []
        }, {
          icon: 'account_box',
          path: '/profile',
          title: 'Profile',
          subMenus: []
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vue Demo',
        logout: 'Logout',
        loginPath: '/',
      }
    },
    methods: {
      logoutFun() {
        location.href = '/#/';
        window.location.reload();
      }
    }
  }
</script>