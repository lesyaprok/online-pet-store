<template>
  <div class="login">
    <form class="form-login" @submit.prevent="login">
      <h2>Enter your email and password to log in</h2>
      <div class="login-item">
        <label for="email">Email</label>
        <input
          id="email"
          @input="validateEmail"
          type="email"
          v-model="email"
          :class="{ wrong: isEmailNotValidated }"
        />
      </div>
      <div class="login-item">
        <label for="password">Password</label>
        <input
          autocomplete=""
          id="password"
          @input="validatePassword()"
          type="password"
          v-model="password"
          :class="{ wrong: isPasswordNotValidated }"
        />
        <button class="login-button" type="submit">Log in</button>
      </div>
    </form>
    <Modal v-show="showMessage" :message="message" />
  </div>
</template>

<script>
import firebase from "firebase";
import Modal from "../../Modal";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      isEmailNotValidated: false,
      isPasswordNotValidated: false,
      messages: {
        fail: "Uncorrect email or password. Try again",
        success: "You are loged in!",
      },
      message: "",
      showMessage: false,
    };
  },
  components: {
    Modal,
  },
  computed: {},
  methods: {
    validateEmail() {
      this.isEmailNotValidated = false;
      const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return !!this.email.match(regexEmail);
    },
    validatePassword() {
      this.isPasswordNotValidated = false;
      return this.password.length >= 6;
    },
    isNeedShowMessage() {
      return (this.showMessage = false);
    },
    routeToMainPage() {
      return this.$router.push("/");
    },
    signInWithFirebase() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.message = this.messages.success;
          this.showMessage = true;
          setTimeout(this.isNeedShowMessage, 3000);
          setTimeout(this.routeToMainPage, 4000);
        })
        .catch(() => {
          this.message = this.messages.fail;
          this.showMessage = true;
          setTimeout(this.isNeedShowMessage, 3000);
        });
    },
    login() {
      if (!this.validateEmail()) {
        this.isEmailNotValidated = true;
      }
      if (!this.validatePassword()) {
        this.isPasswordNotValidated = true;
      } else {
        this.signInWithFirebase();
        clearTimeout(this.isNeedShowMessage);
      }
    },
  },
};
</script>
<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  height: 60vh;
}

.form-login {
  max-width: 300px;
  margin: 0 auto;
  border: 1px solid rgb(41, 92, 41);
  border-radius: 5px;
  padding: 20px 40px;
}

h2 {
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
}

.login-item {
  max-width: 300px;
}

input {
  box-sizing: border-box;
  outline: none;
  padding: 10px;
  margin: 5px 0 15px 0;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(138, 180, 138);
  font-size: 1em;
}

.login-button {
  display: block;
  width: 100%;
  padding: 15px 0;
  background-color: #00aa6a;
  padding: 10px;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
}
.login-button:hover {
  color: #00aa6a;
  background-color: #fff;
  box-shadow: 0 0 2px 1px #00aa6a;
}

/* .modal { 
    position: fixed; 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1; 
    left: 0;
    top: 0;
    width: 30%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0, 0, 0, 0.767); 
    padding-top: 60px;
}
.close-modal {
  position: absolute;
  right: 25px;
  top: 0;
  font-size: 40px;
  color: #fff;
} */
.wrong {
  border-color: red;
}
</style>