<template>
  <Layout>
    <h1 class="title is-1 is-size-3-mobile">
      Contact Us
    </h1>

    <!-- Automatically filtered via Akismet. (https://www.netlify.com/blog/2019/02/12/improved-netlify-forms-spam-filtering-using-akismet/?_ga=2.21610226.87509668.1582861993-557186014.1574965950_-->
    <form
      ref="form"
      class="container"
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <p>All fields required!</p>
      <input type="hidden" name="form-name" value="contact" />

      <div class="columns">
        <div class="column is-one-third">
          <div class="field">
            <label class="label" for="fname">First Name</label>
            <div class="control">
              <input
                id="fname"
                v-model="formData.fname"
                class="input has-text-black"
                type="text"
                name="fname"
                required
                @blur="$v.formData.fname.$touch"
              />
            </div>
            <!--.control  -->

            <!-- Must use 'v-if' and not 'v-if'. -->
            <transition name="slide-fade" mode="out-in">
              <template v-if="$v.formData.fname.$error">
                <p v-if="!$v.formData.fname.required" class="help is-danger">
                  First name is required! 🙇🏽‍♀️
                </p>
              </template>
            </transition>
          </div>
          <!-- .field -->

          <div class="field">
            <label class="label" for="lname"> Last Name</label>
            <div class="control">
              <input
                id="lname"
                v-model="formData.lname"
                class="input has-text-black"
                type="text"
                name="lname"
                required
                @blur="$v.formData.lname.$touch"
              />
            </div>
            <!-- .control -->
            <transition name="slide-fade" mode="out-in">
              <template v-if="$v.formData.lname.$error">
                <p v-if="!$v.formData.lname.required" class="help is-danger">
                  Last name is required! 🙇🏽‍♀️
                </p>
              </template>
            </transition>
          </div>
          <!-- field -->

          <div class="field">
            <label class="label" for="email">Email</label>
            <div class="control">
              <input
                id="email"
                v-model="formData.email"
                class="input has-text-black"
                type="email"
                name="email"
                required
                placeholder="✉️"
                @blur="$v.formData.email.$touch"
              />
            </div>
            <transition name="slide-fade" mode="out-in">
              <template v-if="$v.formData.email.$error">
                <p v-if="!$v.formData.email.required" class="help is-danger">
                  Email is required! 🙇🏽‍♂️
                </p>
                <p v-if="!$v.formData.email.email" class="help is-danger">
                  This email is invalid! 😞
                </p>
              </template>
            </transition>
          </div>
          <!-- .field -->
        </div>
        <!-- .column -->

        <div class="column">
          <div class="field">
            <label class="label" for="msg">Message</label>
            <div class="control">
              <textarea
                id="msg"
                v-model="formData.msg"
                class="textarea has-text-black"
                rows="8"
                name="msg"
                required
                @blur="$v.formData.msg.$touch"
              />
            </div>
            <!-- .control -->
            <transition name="slide-fade" mode="out-in">
              <template v-if="$v.formData.msg.$error">
                <p v-if="!$v.formData.msg.required" class="help is-danger">
                  Please provide a few details!
                </p>
                <p v-if="!$v.formData.msg.minLength" class="help is-danger">
                  Please provide a little more detail... ✍️
                </p>
              </template>
            </transition>
          </div>
          <!-- .field -->
        </div>
        <!-- .column -->
      </div>
      <!-- .columns -->

      <div class="field">
        <div class="control">
          <label class="checkbox" for="agreed">
            <input
              id="agreed"
              v-model="formData.agreed"
              type="checkbox"
              name="agreed"
              @change="$v.formData.agreed.$touch"
            />
            I understand that private information should not be included in my
            message because we cannot guarantee the security and confidentiality
            of messages sent via the internet.
          </label>
        </div>
        <!-- .control -->

        <transition name="slide-fade" mode="out-in">
          <template v-if="$v.formData.agreed.$error">
            <p class="help is-danger">
              Please confirm 👆🏽!
            </p>
          </template>
        </transition>
      </div>
      <!-- .field -->

      <div class="field is-grouped">
        <div class="control">
          <button
            class="button is-success"
            type="submit"
            :disabled="$v.$invalid"
          >
            Submit
          </button>
        </div>
        <div class="control">
          <button
            class="button is-warning is-light"
            type="reset"
            @click="$v.$reset"
          >
            Reset
          </button>
        </div>
      </div>
      <!-- .field -->

      <transition name="slide-fade" mode="out-in">
        <template v-if="$v.$anyError">
          <p class="help is-danger">
            Form is invalid! 😞 Please double check the above fields 👆🏽or just
            give us a ring: <a href="tel:+13142414595">(314)241-4505</a>
          </p>
        </template>
      </transition>
    </form>

    <section class="section">
      <h2 class="subtitle">Our Offices</h2>
      <div id="container--maps">
        <div class="box">
          <iframe
            width="600"
            height="450"
            frameborder="0"
            style="border:0"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIbNa2wi12IcR-yph2CowriA&key=AIzaSyAL3yPJmXJ7qabe8MvegSh0mDLXHt4CwWY"
            allowfullscreen
          ></iframe>
        </div>

        <div class="box">
          <iframe
            width="600"
            height="450"
            frameborder="0"
            style="border:0"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJwHGP4rEJIgRmehW1m2r068&key=AIzaSyAL3yPJmXJ7qabe8MvegSh0mDLXHt4CwWY"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import { validationMixin } from "vuelidate";
import { email, minLength, required, sameAs } from "vuelidate/lib/validators";

export default {
  metaInfo: "Contact Us",
  mixins: [validationMixin],
  data() {
    return {
      formData: {}
    };
  },
  validations: {
    formData: {
      fname: {
        required
      },
      lname: {
        required
      },
      email: {
        required,
        email
      },
      msg: {
        minLength: minLength(50),
        required
      },
      agreed: {
        _: sameAs(() => true)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/initial-variables.sass";

#container--maps {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(900px + 2.5rem);
  margin: 1.25rem;

  @media screen and (min-width: $widescreen) {
    flex-direction: row;
    height: calc(450px + 1.25rem);
    justify-content: center;
  }
}

.box {
  padding: 0;

  @media screen and (min-width: $widescreen) {
    margin: 1rem;
  }
}

iframe {
  max-width: 100%;
}

.slide-fade-enter {
  opacity: 0;
  transform: translateX(-10px);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
