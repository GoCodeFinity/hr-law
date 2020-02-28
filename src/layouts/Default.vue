<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="primary navigation">
      <div class="container">
        <div class="navbar-brand">
          <Logo v-if="showLogo" />
          <a
            role="button"
            class="navbar-burger burger"
            :class="{ 'is-active': showNav }"
            aria-label="menu"
            aria-expanded="false"
            @click="showNav = !showNav"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-end">
            <g-link class="navbar-item" to="/">
              Home
            </g-link>
            <g-link class="navbar-item" to="/bob-radice/">
              Bob Radice
            </g-link>
            <g-link class="navbar-item" to="/jack-horas/">
              Jack Horas
            </g-link>
            <g-link class="navbar-item" to="/contact/">
              Contact Us
            </g-link>
          </div>
        </div>
      </div>
    </nav>

    <section v-if="showHero" class="hero">
      <div class="hero-body">
        <div class="container">
          <h2 class="is-size-7">
            Have You Suffered From an Injury?
          </h2>
          <h3 class="is-size-1 is-size-3-mobile" style="line-height: 1.33">
            You Deserve To Be Compensated!
          </h3>
          <div class="message">
            <p class="message-body">
              At Horas, Radice &amp; Associates, we handle
              <strong>serious injury and wrongful death cases,</strong> as well
              as
              <strong
                >legal services for small and medium-sized businesses.</strong
              >
            </p>
          </div>
          <g-link
            to="/contact/"
            class="button is-link is-inverted is-uppercase has-text-weight-bold"
            >Contact Us!</g-link
          >
        </div>
      </div>
    </section>

    <transition name="fade" appear>
      <main class="section">
        <div class="container">
          <slot />
        </div>
      </main>
    </transition>

    <footer class="footer has-text-centered">
      <div class="container">
        <a href="tel:+13142414595">(314)241-4505</a>
        <div class="level is-mobile">
          <div class="level-left">
            <address class="level-item">
              2123 Marconi Avenue<br />
              "The Hill"<br />
              St. Louis, MO 63110<br />
            </address>
          </div>

          <div class="level-right">
            <address class="level-item">
              1361 E. Big Beaver Road<br />
              Troy, MI 48083<br />
            </address>
          </div>
        </div>

        <span>Copyright © {{ new Date().getFullYear() }}. </span>
        <span
          >Powered by <a href="//gridsome.org"> Gridsome</a> &amp;
          <a href="//codefinity.tech">CodeFinity</a></span
        >
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  props: {
    showHero: {
      type: Boolean,
      default: false
    },
    showLogo: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    showNav: false
  })
};
</script>

<style lang="scss">
// Just need the responsive variables
@import "~bulma/sass/utilities/initial-variables.sass";

.hero {
  background: url("https://res.cloudinary.com/codefinity/image/upload/w_768/v1582854242/hero.jpg")
    center center no-repeat;
  background-size: cover;

  .container {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    padding: 1rem;
  }

  @media screen and (min-width: $tablet) {
    background: url("https://res.cloudinary.com/codefinity/image/upload/w_960/v1582854242/hero.jpg")
      center center no-repeat;
    background-size: cover;
  }

  @media screen and (min-width: $desktop) {
    background: url("https://res.cloudinary.com/codefinity/image/upload/w_1152/v1582854242/hero.jpg")
      center center no-repeat;
    background-size: cover;
  }

  @media screen and (min-width: $widescreen) {
    background: url("https://res.cloudinary.com/codefinity/image/upload/w_1344/v1582854242/hero.jpg")
      center center no-repeat;
    background-size: cover;
  }

  @media screen and (min-width: $fullhd) {
    background: url("https://res.cloudinary.com/codefinity/image/upload/w_2560/v1582854242/hero.jpg")
      center center no-repeat;
    background-size: cover;
  }
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
