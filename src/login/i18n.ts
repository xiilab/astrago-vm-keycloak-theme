/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withExtraLanguages({
        한국어: { label: "ko", getMessages: () => import("./i18n.ko.ts") }
    })
    .withCustomTranslations({
        한국어: {
            loginAccountTitle: "Log in",
            usernameOrEmail: "Email",
            email: "Email",
            password: "Password",
            doLogIn: "로그인"
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
