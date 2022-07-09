import SuperTokens from "supertokens-web-js";
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";
import Session from "supertokens-web-js/recipe/session";

export default defineNuxtPlugin((nuxtApp) => {
    SuperTokens.init({
        appInfo: {
            apiDomain: "https://localhost:3000",
            apiBasePath: "/api/auth",
            appName: "...",
        },
        recipeList: [
            Session.init(),
            ThirdPartyEmailPassword.init(),
        ],
    });
});