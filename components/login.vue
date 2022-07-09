<script>
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";
import Session from "supertokens-web-js/recipe/session";

export default {
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        signIn: async function () {
            const response = await ThirdPartyEmailPassword.emailPasswordSignIn({
                formFields: [
                    {
                        id: "email",
                        value: this.email,
                    },
                    {
                        id: "password",
                        value: this.password,
                    },
                ],
            });
            console.log("Status: " + response.status);
            if (response.status === "WRONG_CREDENTIALS_ERROR") {
                console.log("Wrong credentials");
                return;
            }
            if (response.status === "FIELD_ERROR") {
                console.log("Field error");
                return;
            }
            window.location.assign("/");
        },
    },
}

</script>

<template>
    <div class="login-box">
        <div class="title"><strong>LOGIN</strong></div>
        <!-- email input field -->
        <div class="form-group">
            <div class="input-box">
                <div class="icon">
                    <span class="iconify-inline" data-icon="mdi:email-outline" data-width="24" data-height="24"></span>
                </div>
                <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email">
                <div class="character-count">{{ email.split("").length }}</div>
            </div>
        </div>
        <!-- password input field -->
        <div class="form-group">
            <div class="input-box">
                <div class="icon">
                    <span class="iconify-inline" data-icon="mdi:password-outline" data-width="24"
                        data-height="24"></span>
                </div>
                <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
                <div class="character-count">{{ password.split("").length }}</div>
            </div>
        </div>
        <!-- submit button -->
        <button type="submit" class="login-button" @click="signIn">Login</button>
    </div>
</template>

<style lang="scss">
.login-box {
    font-family: Inter, sans-serif;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    width: 200px;
    border: 1px black solid;
    border-radius: 10px;
    padding: 40px 20px 40px 20px;
    margin: 20px;
}

.title {
    width: 200px;
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 20px;
}

.character-count {
    color: #747474;
    line-height: 30px;
    width: 27px;
    text-align: center;
    font-size: 0.9rem;
}

.form-control,
.form-control:focus,
.form-control:focus-visible,
.form-control:focus-within {
    border: none;
    width: 130px;
    outline: none;
    display: inline;
    margin-left: 4px;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 24px;
    padding-left: 3px;
}

.input-box {
    overflow: hidden;
    display: flex;
    height: 30px;
    border-radius: 4px;
    border: 2px #C7CCD6 solid;
    margin: 10px 0 10px 0;
    width: 192px;
    z-index: 1;
}

.login-button {
    margin: 10px 0 0 0;
    width: 196px;
    height: 30px;
}
</style>
