<template>
  <div class="dashboard-container">
    <div>
      <el-dropdown>
        <svg class="icon" aria-hidden="true" font-size="20px">
          <use xlink:href="#iconlanguage" />
        </svg>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="item in languages" :key="item.value" :disabled="language === item.value">
              <span @click="handleSetLanguage(item.value)">{{ item.name }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    {{ t('route.dashboard') }}
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'
import { getApplyList } from '@/apis/apply'

type Language = {
  name: string
  value: string
};
export default defineComponent({
  setup() {
    const store = useStore()
    const { t, locale } = useI18n()
    const state = reactive({
      languages: [
        { name: 'en', value: 'en' },
        { name: '中文', value: 'zh-cn' }
      ] as Array<Language>,
      handleSetLanguage: (lang: string) => {
        locale.value = lang
        store.commit('updateLanguage', lang)
      }
    })
    const language = computed(() => {
      return store.state.language
    })
    // 接口请求
    getApplyList({
      autoerror: 1
    }).then((res: any) => {
      console.log(res)
    })
    return {
      ...toRefs(state),
      language,
      t
    }
  }
})
</script>
