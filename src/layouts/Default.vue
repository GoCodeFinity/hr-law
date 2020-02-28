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

    <section class="hero" v-if="showHero">
      <div class="hero-body">
        <div class="container">
          <p class="is-size-7">
            Have You Suffered From an Injury?
          </p>
          <p class="is-size-1 is-size-3-mobile" style="line-height: 1.33">
            You Deserve To Be Compensated!
          </p>
          <p class="has-text-weight-bold">
            At Horas, Radice &amp; Associates, we handle
            <strong>serious injury and wrongful death cases,</strong> as well as
            <strong
              >legal services for small and medium-sized businesses.</strong
            >
          </p>
        </div>
      </div>
    </section>

    <main class="section">
      <slot />
    </main>

    <footer class="footer has-text-centered">
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
