<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

  <main class="page">
    <slot name="top" />
    <div id="base-list-layout" class="theme-default-content">
    <article
      class="vuepress-blog-theme-content"
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <header>
        <h1 class="post-title" itemprop="name headline">
          {{ $frontmatter.title }}
        </h1>
        <div class="publish-date-author">{{ resolvePostDate($frontmatter.date) }} · {{ $frontmatter.author }}</div>
      </header>
      <Content itemprop="articleBody" />
    </article>
    </div>
    <slot name="bottom" />
    <div class="footer">
      Apache Teaclave (incubating) is an effort undergoing incubation at The Apache
      Software Foundation (ASF), sponsored by the Apache Incubator.
      Incubation is required of all newly accepted projects until a further review
      indicates that the infrastructure, communications, and decision making process
      have stabilized in a manner consistent with other successful ASF projects. While
      incubation status is not necessarily a reflection of the completeness or
      stability of the code, it does indicate that the project has yet to be fully
      endorsed by the ASF.
      Copyright &copy; 2020 The Apache Software Foundation.
      Licensed under the Apache License, Version 2.0.
      Apache Teaclave, Apache, the Apache feather, and the Apache Teaclave project logo are either
      trademarks or registered trademarks of the Apache Software Foundation.
    </div>
  </main>

  </div>

  </div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import Vue from 'vue'
import dayjs from 'dayjs'
import { NavigationIcon, ClockIcon, TagIcon } from 'vue-feather-icons'
import {
  Pagination,
  SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar
  },

  data () {
    return {
      isSidebarOpen: false,
      paginationComponent: null,
    }
  },

  computed: {
    sidebarItems () {
      return []
    },
    pages() {
      return this.$pagination.pages
    },
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': true,
        },
        userPageClass
      ]
    }
  },
  created() {
    this.paginationComponent = this.getPaginationComponent()
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    },
    getPaginationComponent() {
      return Pagination
    },
    resolvePostDate(date) {
      return dayjs(date).format(
        this.$themeConfig.dateFormat || 'ddd MMM DD YYYY'
      )
    },
    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },
  }
}
</script>

<style lang="stylus">
.publish-date-author {
  margin: -10px 0 40px 0
}
.page
  .footer
    max-width $contentWidth
    margin: 2.5rem auto 0 auto
    font-size 0.7rem
    padding 2.5rem 0 2.5rem 0
    @media (max-width: $MQMobile)
      padding 2.5rem 1rem 2.5rem 1rem
    @media (max-width: $MQMobileNarrow)
      padding 2.5rem 1rem 2.5rem 1rem
    border-top 1px solid $borderColor
    text-align left
    color lighten($textColor, 25%)
</style>