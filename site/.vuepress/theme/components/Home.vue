<template>
  <main
    class="home"
    aria-labelledby="main-title"
  >
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1
        v-if="data.heroText !== null"
        id="main-title"
      >
        {{ data.heroText || $title || 'Hello' }}
      </h1>

      <p
        v-if="data.tagline !== null"
        class="description"
      >
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        v-if="data.actionText && data.actionLink"
        class="action"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>

    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom" />

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
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 20px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 2.5rem
      font-weight 900
      letter-spacing: 0.04em;
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 45rem
      font-size 1.2rem
      font-weight 300
      line-height 1.3
      color lighten($textColor, 20%)
    .action-button
      display inline-block
      font-size 1rem
      font-weight 700
      color #fff
      background-color $accentColor
      padding 0.3rem 1.4rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 47%
    max-width 47%
    h3
      font-size 1.35rem
      font-weight 700
      text-transform uppercase
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 15%)
    p
      color lighten($textColor, 25%)
      font-family Roboto Condensed
      font-weight 400
  .footer
    font-size 0.7rem
    padding 2.5rem 0 2.5rem 0
    margin-top 2.5rem
    border-top 1px solid $borderColor
    text-align left
    color lighten($textColor, 30%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 1rem
    .footer
      padding 1.5rem 1rem 1.5rem 1rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.3rem 1.2rem
    .feature
      h2
        font-size 1.25rem
    .footer
      padding 2.5rem 1rem 2.5rem 1rem
</style>
