<script setup>
import { signInWithEmailAndPassword } from 'firebase/auth';
let user = userState();
const { $auth } = useNuxtApp();
</script>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            errorMessageEmail: "",
            errorMessagePassword: "",
            passwordType: "password",
            passwordShown: false
        }
    },
    methods: {
        signIn() {
            signInWithEmailAndPassword(this.$auth(), this.email, this.password).then((userCred) => {
                this.errorMessageEmail = ""
                this.errorMessagePassword = ""
                console.log(userCred.user.email);
                this.user = userCred.user
            }).catch((error) => {
                console.error(error)
                console.log(error.code)
                if (error.code === "auth/wrong-password") {
                    this.errorMessagePassword = "Wrong password"
                } else if (error.code === "auth/user-not-found") {
                    this.errorMessageEmail = "Email address not found"
                } else if (error.code === "auth/invalid-email") {
                    this.errorMessageEmail = "Invalid email address"
                } else {
                    this.errorMessageEmail = "Unknown error"
                }
                this.error = true
            });
        },
        togglePasswordVisibility() {
            this.passwordShown = !this.passwordShown
            this.passwordType = this.passwordShown ? "text" : "password"
        }
    }
};

</script>

<template>
    <div class="login-box">
        <div class="title">Jamgram</div>
        <div class="description">Login in to Jamgram to continue</div>
        <div class="description">Dont have an account? <NuxtLink to="/signup">Sign up</NuxtLink>.</div>
        <!-- email input field -->
        <div class="form-group">
            <div class="input-box" :style="{ borderColor: errorMessageEmail == '' ? '#C7CCD6' : 'red' }">
                <div class="icon-left">
                    <span class="iconify-inline" data-icon="mdi:email-outline" data-width="20" data-height="20"></span>
                </div>
                <input type="email" class="form-control" id="email" v-model="email" placeholder="Email Address">
                <!-- <div class="character-count">{{ email.split("").length }}</div> -->
            </div>
            <div class="error-message">{{ errorMessageEmail }}</div>
        </div>
        <!-- password input field -->
        <div class="form-group">
            <div class="input-box" :style="{ borderColor: errorMessagePassword == '' ? '#C7CCD6' : 'red' }">
                <div class="icon-left">
                    <span class="iconify-inline" data-icon="mdi:password-outline" data-width="20"
                        data-height="20"></span>
                </div>
                <input :type="passwordType" class="form-control" id="password" v-model="password"
                    placeholder="Password">
                <div class="icon-right clickable" v-on:click="togglePasswordVisibility()" v-if="passwordShown">
                    <span class="iconify-inline" data-icon="mdi:eye-outline" data-width="20" data-height="20"></span>
                </div>
                <div class="icon-right clickable" v-on:click="togglePasswordVisibility()" v-else>
                    <span class="iconify-inline" data-icon="mdi:eye-off-outline" data-width="20"
                        data-height="20"></span>
                </div>
            </div>
            <div class="error-message">{{ errorMessagePassword }}</div>
        </div>
        <!-- submit button -->
        <button type="submit" class="login-button clickable" @click="signIn">Login</button>
    </div>
</template>

<style lang="scss">
.login-box {
    font-family: system-ui;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    width: 200px;
    border-radius: 10px;
    padding: 40px 20px 40px 20px;
    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
}

.title {
    width: 200px;
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 20px;
}

.description {
    font-size: 0.8em;
    font-weight: 200;
    text-align: center;
}

.input-box:first-of-type {
    margin-top: 25px;
}

.form-control,
.form-control:focus,
.form-control:focus-visible,
.form-control:focus-within {
    border: none;
    flex-grow: 1;
    outline: none;
    margin-left: 4px;
    overflow: hidden;
    font-size: 13px;
}

.icon-left,
.icon-right {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 24px;
    flex-shrink: 0;
}

.icon-left {
    padding-left: 3px;
}

.icon-right {
    padding-right: 3px;
}

.input-box {
    display: flex;
    height: 30px;
    border-radius: 4px;
    border: 2px #C7CCD6 solid;
    width: 192px;
    z-index: 1;
    margin: 5px 0 5px 0;
}

.clickable {
    cursor: pointer;
}

.login-button {
    margin: 5px 0 0 0;
    width: 196px;
    height: 40px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: black;
}

.error-message {
    font-size: 13px;
    color: red;
    line-height: 16px;
    height: 16px;
    margin-left: 2px;
}
</style>
