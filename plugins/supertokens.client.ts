import SuperTokens from "supertokens-web-js";
import ThirdPartyEmailPassword from "supertokens-web-js/recipe/thirdpartyemailpassword";
import Session from "supertokens-web-js/recipe/session";

export default defineNuxtPlugin((nuxtApp) => {
    SuperTokens.init({
        appInfo: {
            apiDomain: "http://localhost:3000",
            apiBasePath: "/api/auth/",
            appName: "Jamgram",
        },
        recipeList: [
            Session.init(),
            ThirdPartyEmailPassword.init(),
        ],
    });
});