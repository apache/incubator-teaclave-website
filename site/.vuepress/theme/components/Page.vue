<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

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
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
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
