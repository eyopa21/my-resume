import { defineRule } from "vee-validate";
import { email, required, min, max } from "@vee-validate/rules";
export default defineNuxtPlugin((nuxtApp) => {
    defineRule("email", (value) => {
        if (email(value) && required(value)) {
            return true;
        }

        return "Please enter a Valid email";
    });
    defineRule("password", (value) => {
        if (
            required(value) &&
            min(value, { length: 6 }) &&
            max(value, { length: 10 })
        ) {
            return true;
        }

        return "Password must be between 6 and 10 characters";
    });
    defineRule("confirmPassword", (value, [target], ctx) => {
        if (required(value) && value === ctx.form[target]) {
            return true;
        }

        return "Passwords must match";
    });
    defineRule("required", (value) => {
        if (value && value.trim()) {
            return true;
        }
        return "This is required";
    });
    defineRule("minmax", (value) => {
        if (
            required(value) &&
            min(value, { length: 10 }) &&
            max(value, { length: 100 })
        ) {
            return true;
        }
        return "Minimum 10 characters is needed";
    });

});