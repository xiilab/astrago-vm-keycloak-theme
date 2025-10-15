import type { JSX } from "keycloakify/tools/JSX";
import { useState } from "react";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import { useIsPasswordRevealed } from "keycloakify/tools/useIsPasswordRevealed";
import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { getKcClsx, type KcClsx } from "keycloakify/login/lib/kcClsx";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import * as S from "../login.styles";
import VmIcon from "../VmIcon";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { social, realm, url, usernameHidden, login, auth, registrationDisabled, messagesPerField } = kcContext;

    const { msg, msgStr } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={!messagesPerField.existsError("username", "password")}
            headerNode={msg("loginAccountTitle")}
            displayInfo={realm.password && realm.registrationAllowed && !registrationDisabled}
            infoNode={
                <div id="kc-registration-container">
                    <div id="kc-registration">
                        <span>
                            {msg("noAccount")}{" "}
                            <a tabIndex={8} href={url.registrationUrl}>
                                {msg("doRegister")}
                            </a>
                        </span>
                    </div>
                </div>
            }
            socialProvidersNode={
                <>
                    {realm.password && social?.providers !== undefined && social.providers.length !== 0 && (
                        <div id="kc-social-providers" className={kcClsx("kcFormSocialAccountSectionClass")}>
                            <hr />
                            <h2>{msg("identity-provider-login-label")}</h2>
                            <ul className={kcClsx("kcFormSocialAccountListClass", social.providers.length > 3 && "kcFormSocialAccountListGridClass")}>
                                {social.providers.map((...[p, , providers]) => (
                                    <li key={p.alias}>
                                        <a
                                            id={`social-${p.alias}`}
                                            className={kcClsx(
                                                "kcFormSocialAccountListButtonClass",
                                                providers.length > 3 && "kcFormSocialAccountGridItem"
                                            )}
                                            type="button"
                                            href={p.loginUrl}
                                        >
                                            {p.iconClasses && <i className={clsx(kcClsx("kcCommonLogoIdP"), p.iconClasses)} aria-hidden="true"></i>}
                                            <span
                                                className={clsx(kcClsx("kcFormSocialAccountNameClass"), p.iconClasses && "kc-social-icon-text")}
                                                dangerouslySetInnerHTML={{ __html: kcSanitize(p.displayName) }}
                                            ></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            }
        >
            <form
                id="kc-form-login"
                onSubmit={() => {
                    setIsLoginButtonDisabled(true);
                    return true;
                }}
                action={url.loginAction}
                method="post"
            >
                <S.InputGroup>
                    <S.InputLabel>
                        {!realm.loginWithEmailAllowed ? msg("username") : !realm.registrationEmailAsUsername ? msg("usernameOrEmail") : msg("email")}
                    </S.InputLabel>

                    <S.InputContainer>
                        <S.InputField
                            placeholder="이메일을 입력해주세요."
                            tabIndex={2}
                            id="username"
                            // className={kcClsx("kcInputClass")}
                            name="username"
                            defaultValue={login.username ?? ""}
                            type="text"
                            autoFocus
                            autoComplete="username"
                            aria-invalid={messagesPerField.existsError("username", "password")}
                        />
                        <S.InputIcon>
                            <VmIcon name="email" />
                        </S.InputIcon>
                    </S.InputContainer>
                </S.InputGroup>

                {/* 비밀번호 입력 */}
                <S.InputGroup>
                    <S.LabelContainer>
                        <S.InputLabel>{msg("password")}</S.InputLabel>
                        <S.ErrorMessage>
                            {!usernameHidden && (
                                <>
                                    {messagesPerField.existsError("username", "password") && (
                                        <span
                                            id="input-error"
                                            aria-live="polite"
                                            dangerouslySetInnerHTML={{
                                                __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                                            }}
                                        />
                                    )}
                                </>
                            )}
                        </S.ErrorMessage>
                    </S.LabelContainer>
                    <S.InputContainer>
                        <S.InputIcon>
                            <VmIcon name="password" />
                        </S.InputIcon>
                        <PasswordWrapper kcClsx={kcClsx} i18n={i18n} passwordInputId="password">
                            <S.InputField
                                type={"password"}
                                placeholder="비밀번호를 입력해주세요."
                                tabIndex={3}
                                id="password"
                                // className={kcClsx("kcInputClass")}
                                name="password"
                                autoComplete="current-password"
                                // aria-invalid={messagesPerField.existsError("username", "password")}
                            />
                        </PasswordWrapper>
                    </S.InputContainer>
                </S.InputGroup>

                {realm.password && (
                    <>
                        <div className={kcClsx("kcFormGroupClass")}>
                            <label htmlFor="password" className={kcClsx("kcLabelClass")}></label>

                            {usernameHidden && messagesPerField.existsError("username", "password") && (
                                <span
                                    id="input-error"
                                    className={kcClsx("kcInputErrorMessageClass")}
                                    aria-live="polite"
                                    dangerouslySetInnerHTML={{
                                        __html: kcSanitize(messagesPerField.getFirstError("username", "password"))
                                    }}
                                />
                            )}
                        </div>

                        <div className={kcClsx("kcFormGroupClass", "kcFormSettingClass")}>
                            <div id="kc-form-options">
                                {realm.rememberMe && !usernameHidden && (
                                    <div className="checkbox">
                                        <label>
                                            <input
                                                tabIndex={5}
                                                id="rememberMe"
                                                name="rememberMe"
                                                type="checkbox"
                                                defaultChecked={!!login.rememberMe}
                                            />{" "}
                                            {msg("rememberMe")}
                                        </label>
                                    </div>
                                )}
                            </div>
                            <div className={kcClsx("kcFormOptionsWrapperClass")}>
                                {realm.resetPasswordAllowed && (
                                    <span>
                                        <a tabIndex={6} href={url.loginResetCredentialsUrl}>
                                            {msg("doForgotPassword")}
                                        </a>
                                    </span>
                                )}
                            </div>
                        </div>

                        <>
                            <input type="hidden" id="id-hidden-input" name="credentialId" value={auth.selectedCredential} />
                            <S.LoginButton tabIndex={7} disabled={isLoginButtonDisabled} name="login" id="kc-login" type="submit">
                                {msgStr("doLogIn")}
                            </S.LoginButton>
                        </>
                    </>
                )}
            </form>
        </Template>
    );
}

function PasswordWrapper(props: { kcClsx: KcClsx; i18n: I18n; passwordInputId: string; children: JSX.Element }) {
    const { kcClsx, i18n, passwordInputId, children } = props;

    const { msgStr } = i18n;

    const { isPasswordRevealed, toggleIsPasswordRevealed } = useIsPasswordRevealed({ passwordInputId });

    return (
        <div className={kcClsx("kcInputGroup")}>
            {children}
            <button
                type="button"
                className={kcClsx("kcFormPasswordVisibilityButtonClass")}
                aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
                aria-controls={passwordInputId}
                onClick={toggleIsPasswordRevealed}
            >
                <VmIcon name={isPasswordRevealed ? "hidePassword" : "showPassword"} />
            </button>
        </div>
    );
}
