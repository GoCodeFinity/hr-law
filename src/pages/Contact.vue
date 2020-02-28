<template>
  <Layout>
    <h1 class="title is-1 is-size-3-mobile">
      Contact Us
    </h1>

    <!-- Automatically filtered via Akismet. (https://www.netlify.com/blog/2019/02/12/improved-netlify-forms-spam-filtering-using-akismet/?_ga=2.21610226.87509668.1582861993-557186014.1574965950_-->
    <form class="container" name="contact" method="POST" data-netlify="true">
      <p>All fields required!</p>
      <div class="columns">
        <div class="column is-one-third">
          <div class="field">
            <label class="label" for="fname">First Name</label>
            <div class="control">
              <input
                class="input has-text-black"
                type="text"
                id="fname"
                name="fname"
                v-model="fname"
                required
              />
            </div>
            <!--.control  -->
            <p class="help is-danger" v-show="!$v.fname.required">
              First name is required! 🙇🏽‍♀️
            </p>
          </div>
          <!-- .field -->

          <div class="field">
            <label class="label" for="lname">Last Name</label>
            <div class="control">
              <input
                class="input has-text-black"
                type="text"
                id="lname"
                name="lname"
                v-model="lname"
                required
              />
            </div>
            <!-- .control -->
            <p class="help is-danger" v-show="!$v.lname.required">
              Last name is required! 🙇🏽‍♀️
            </p>
          </div>
          <!-- field -->

          <div class="field">
            <label class="label" for="email">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-danger has-text-black"
                type="email"
                id="email"
                name="email"
                v-model="email"
                required
                placeholder="✉️"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-danger" v-show="!$v.email.required">
              Email is required! 🙇🏽‍♂️
            </p>
            <p class="help is-danger" v-show="!$v.email.email">
              This email is invalid! 😞
            </p>
          </div>
          <!-- .field -->
        </div>
        <!-- .column -->

        <div class="column">
          <div class="field">
            <label class="label" for="msg">Message</label>
            <div class="control">
              <textarea
                class="textarea has-text-black"
                rows="8"
                name="msg"
                id="msg"
                v-model="msg"
                required
              ></textarea>
            </div>
            <!-- .control -->
            <p class="help is-danger" v-show="!$v.msg.required">
              Please provide a few details!
            </p>
            <p class="help is-danger" v-show="!$v.msg.minLength">
              Please provide a little more detail... ✍️
            </p>
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
              type="checkbox"
              id="agreed"
              name="agreed"
              v-model="agreed"
              required
            />
            I understand that private information should not be included in my
            message because we cannot guarantee the security and confidentiality
            of messages sent via the internet.
          </label>
        </div>
        <!-- .control -->
        <p class="help is-danger" v-show="!agreed">
          Please confirm 👆🏽!
        </p>
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
          <button class="button is-warning is-light" type="reset">
            Cancel
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
