<template>
  <div class="register">
    <form class="form-register" @submit.prevent="register">
      <h2>Registration</h2>
      <div class="register-item">
        <label for="name">Name</label>
        <input
          id="name"
          @input="validateName"
          type="text"
          v-model="name"
          :class="{ wrong: isNameNotValidated }"
        />
      </div>
      <div class="register-item">
        <label for="email">Email</label>
        <input
          id="email"
          @input="validateEmail"
          type="email"
          v-model="email"
          :class="{ wrong: isEmailNotValidated }"
        />
      </div>
      <div class="register-item">
        <label for="password">Password (at least 6 characters)</label>
        <input
          id="password"
          @input="validatePassword"
          type="password"
          v-model="password"
          :class="{ wrong: isPasswordNotValidated }"
        />
      </div>
      <button class="register-button" type="submit">Register</button>
    </form>
    <Modal v-show="showMessage" :message="message" />
  </div>
</template>
<script>
import Modal from "../../Modal";
import firebase from "firebase";
export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      isEmailNotValidated: false,
      isPasswordNotValidated: false,
      isNameNotValidated: false,
      messages: {
        success: "Successfully registered! Please login",
        already_used: "This email is already used!",
        uncorrect: "Enter correct data",
      },
      message: "",
      showMessage: false,
    };
  },
  computed: {},
  components: {
    Modal,
  },
  methods: {
    validateName() {
      this.isNameNotValidated = false;
      return this.name.length > 0;
    },
    validateEmail() {
      this.isEmailNotValidated = false;
      const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return !!this.email.match(regexEmail);
    },
    validatePassword() {
      this.isPasswordNotValidated = false;
      this.message = this.messages.uncorrect;
      return this.password.length >= 6;
    },
    isNeedShowMessage() {
      return (this.showMessage = false);
    },
    routeToLogin() {
      return this.$router.push("/login");
    },
    sendDataToFirebase() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.message = this.messages.success;
          this.showMessage = true;
          setTimeout(this.isNeedShowMessage, 3000);
          setTimeout(this.routeToLogin, 4000);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            this.message = this.messages.already_used;
            this.showMessage = true;
            setTimeout(this.isNeedShowMessage, 3000);
          } else {
            this.message = this.messages.uncorrect;
            this.showMessage = true;
            setTimeout(this.isNeedShowMessage, 3000);
          }
        });
    },

    register() {
      if (!this.validateEmail()) {
        this.message = this.messages.uncorrect;
        this.isEmailNotValidated = true;
      }
      if (!this.validateName()) {
        this.message = this.messages.uncorrect;
        this.isNameNotValidated = true;
      }
      if (!this.validatePassword()) {
        this.message = this.messages.uncorrect;
        this.isPasswordNotValidated = true;
      } else {
        this.sendDataToFirebase();
        clearTimeout(this.isNeedShowMessage);
        clearTimeout(this.routeToLogin);
      }
    },
  },
};
</script>
<style scoped>
.register {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}

.form-register {
  max-width: 320px;
  width: 310px;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

.register-item {
  width: 100%;
}

input {
  box-sizing: border-box;
  outline: none;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(46, 170, 118);
  font-size: 1em;
}

.register-button {
  display: block;
  width: 100%;
  padding: 15px 0;
  background-color: #00aa6a;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease-in;
}
.register-button:hover {
  color: #00aa6a;
  background-color: #fff;
  box-shadow: 0 0 2px 1px #00aa6a;
}

.wrong {
  border-color: red;
}

label {
  display: block;
  margin: 5px 0;
}

.message {
  text-align: center;
}
</style>