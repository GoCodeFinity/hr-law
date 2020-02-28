<template>
  <Layout>
    <form class="container" name="contact" method="POST" data-netlify="true">
      <div class="columns">
        <div class="column is-one-third">
          <div class="field">
            <label class="label">First Name</label>
            <div class="control">
              <input class="input has-text-black" type="text" />
            </div>
          </div>

          <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
              <input class="input has-text-black" type="text" />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-danger has-text-black" type="email" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p class="help is-danger">This email is invalid</p>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea has-text-black" rows="8"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" />
            I understand that private information should not be included in my
            message because we cannot guarantee the security and confidentiality
            of messages sent via the internet.
          </label>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-success" type="submit">Submit</button>
        </div>
        <div class="control">
          <button class="button is-warning is-light" type="reset">
            Cancel
          </button>
        </div>
      </div>
    </form>
  </Layout>
</template>
