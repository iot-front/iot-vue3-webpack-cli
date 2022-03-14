<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    // 父应用修改语言
    const store = useStore()
    const { locale } = useI18n()
    const selfwindow: any = window
    selfwindow.updateLanguage = function (lang: string) {
      locale.value = lang
      store.commit('updateLanguage', lang)
    }
  }
})
</script>
<style lang="scss"></style>
