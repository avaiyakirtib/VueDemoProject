<template>
  <v-container fluid>
    <v-layout column>
      <v-flex xs12 class="text-xs-center" mt-1>
        <h1>{{title}}</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'customers',
    data() {
      return {
        title: 'Customers Page'
      }
    }
  }
</script>