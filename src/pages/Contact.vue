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
      <div class="columns">
        <div class="column is-one-third">
          <div class="field">
            <label class="label" for="fname">First Name</label>
            <div class="control">
              <input
                id="fname"
                v-model="fname"
                class="input has-text-black"
                type="text"
                name="fname"
                required
                @blur="$v.fname.$touch"
              />
            </div>
            <!--.control  -->

            <!-- Must use 'v-if' and not 'v-if'. -->
            <template v-if="$v.fname.$error">
              <p v-if="!$v.fname.required" class="help is-danger">
                First name is required! 🙇🏽‍♀️
              </p>
            </template>
          </div>
          <!-- .field -->

          <div class="field">
            <label class="label" for="lname"> Last Name</label>
            <div class="control">
              <input
                id="lname"
                v-model="lname"
                class="input has-text-black"
                type="text"
                name="lname"
                required
                @blur="$v.lname.$touch"
              />
            </div>
            <!-- .control -->
            <template v-if="$v.lname.$error">
              <p v-if="!$v.lname.required" class="help is-danger">
                Last name is required! 🙇🏽‍♀️
              </p>
            </template>
          </div>
          <!-- field -->

          <div class="field">
            <label class="label" for="email">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                id="email"
                v-model="email"
                class="input has-text-black"
                type="email"
                name="email"
                required
                placeholder="✉️"
                @blur="$v.email.$touch"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope" />
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle" />
              </span>
            </div>
            <template v-if="$v.email.$error">
              <p v-if="!$v.email.required" class="help is-danger">
                Email is required! 🙇🏽‍♂️
              </p>
              <p v-if="!$v.email.email" class="help is-danger">
                This email is invalid! 😞
              </p>
            </template>
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
                v-model="msg"
                class="textarea has-text-black"
                rows="8"
                name="msg"
                required
                @blur="$v.msg.$touch"
              />
            </div>
            <!-- .control -->
            <template v-if="$v.msg.$error">
              <p v-if="!$v.msg.required" class="help is-danger">
                Please provide a few details!
              </p>
              <p v-if="!$v.msg.minLength" class="help is-danger">
                Please provide a little more detail... ✍️
              </p>
            </template>
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
              v-model="agreed"
              type="checkbox"
              name="agreed"
              required
              @blur="$v.agreed.$touch"
            />
            I understand that private information should not be included in my
            message because we cannot guarantee the security and confidentiality
            of messages sent via the internet.
          </label>
        </div>
        <!-- .control -->
        <template v-if="$v.agreed.$error">
          <p v-if="!agreed" class="help is-danger">
            Please confirm 👆🏽!
          </p>
        </template>
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
    </form>
  </Layout>
</template>

<script>
import { validationMixin } from "vuelidate";
import { email, minLength, required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      msg: "",
      agreed: false
    };
  },
  validations: {
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
      required
    }
  }
};
</script>
