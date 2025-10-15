import { useEffect } from "react";
import { clsx } from "keycloakify/tools/clsx";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { useInitialize } from "keycloakify/login/Template.useInitialize";
import type { I18n } from "./i18n";
import type { KcContext } from "./KcContext";
import * as S from "./login.styles";
import VmIcon from "./VmIcon";

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const {
        displayInfo = false,
        displayMessage = true,
        displayRequiredFields = false,
        headerNode,
        socialProvidersNode = null,
        infoNode = null,
        documentTitle,
        bodyClassName,
        kcContext,
        i18n,
        doUseDefaultCss,
        classes,
        children
    } = props;

    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

    const { msgStr } = i18n;

    const { realm, auth, url, message, isAppInitiatedAction } = kcContext;

    useEffect(() => {
        document.title = documentTitle ?? msgStr("loginTitle", realm.displayName);
    }, []);

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: bodyClassName ?? kcClsx("kcBodyClass")
    });

    const { isReadyToRender } = useInitialize({ kcContext, doUseDefaultCss });

    if (!isReadyToRender) {
        return null;
    }

    return (
        <>
            <S.Container>
                {/* 왼쪽 로그인 폼 영역 */}
                <S.LoginSection>
                    <S.LoginContent>
                        {/* 타이틀 섹션 */}
                        <S.TitleSection>
                            <S.TitleRow>
                                <S.LogoSymbol>
                                    <VmIcon name="loginSymbol" />
                                </S.LogoSymbol>
                                <S.MainTitle>
                                    {(() => {
                                        const node = !(auth !== undefined && auth.showUsername && !auth.showResetCredentials) ? (
                                            headerNode
                                        ) : (
                                            <a id="reset-login" href={url.loginRestartFlowUrl} aria-label={msgStr("restartLoginTooltip")}>
                                                {auth.attemptedUsername}{" "}
                                            </a>
                                        );

                                        if (displayRequiredFields) {
                                            return (
                                                <div className={kcClsx("kcContentWrapperClass")}>
                                                    <div className="col-md-10">{node}</div>
                                                </div>
                                            );
                                        }

                                        return node;
                                    })()}
                                </S.MainTitle>
                            </S.TitleRow>
                            {!(auth !== undefined && auth.showUsername && !auth.showResetCredentials) && (
                                <S.Subtitle>세상의 모든 GPU, AstraGo로 관리해 보세요.</S.Subtitle>
                            )}
                        </S.TitleSection>
                        {/* App-initiated actions should not see warning messages about the need to complete the action during login. */}
                        {displayMessage && message !== undefined && (message.type !== "warning" || !isAppInitiatedAction) && (
                            <div
                                className={clsx(
                                    `alert-${message.type}`,
                                    kcClsx("kcAlertClass"),
                                    `pf-m-${message?.type === "error" ? "danger" : message.type}`
                                )}
                            >
                                <div className="pf-c-alert__icon">
                                    {message.type === "success" && <span className={kcClsx("kcFeedbackSuccessIcon")}></span>}
                                    {message.type === "warning" && <span className={kcClsx("kcFeedbackWarningIcon")}></span>}
                                    {message.type === "error" && <span className={kcClsx("kcFeedbackErrorIcon")}></span>}
                                    {message.type === "info" && <span className={kcClsx("kcFeedbackInfoIcon")}></span>}
                                </div>
                                <span
                                    className={kcClsx("kcAlertTitleClass")}
                                    dangerouslySetInnerHTML={{
                                        __html: kcSanitize(message.summary)
                                    }}
                                />
                            </div>
                        )}
                        {/* 로그인 폼 */}

                        {/* <span className="required">*</span> */}
                        {/* {msg("requiredFields")} */}
                        <S.LoginForm>{children}</S.LoginForm>
                        <S.LoginForm>{socialProvidersNode}</S.LoginForm>
                        {displayInfo && infoNode}
                    </S.LoginContent>
                    {/* 하단 정보 */}
                    <S.FooterInfo>
                        <S.FooterLinks>도움말 ｜개인정보처리방침 ｜이용약관</S.FooterLinks>
                        <S.CompanyInfo>(주)씨이랩｜대표이사 : 이우영 ｜사업자등록번호 : 119-86-31534</S.CompanyInfo>
                    </S.FooterInfo>
                </S.LoginSection>

                {/* 우측 배경 이미지 영역 */}
                <S.BackgroundSection>
                    <VmIcon name="loginBg" objectFit="cover" />
                    <S.BackgroundContent>
                        <S.BackgroundTitleWrapper>
                            <S.BackgroundLogo>
                                <VmIcon name="logo" />
                            </S.BackgroundLogo>
                            <S.BackgroundTitle>VM 솔루션</S.BackgroundTitle>
                        </S.BackgroundTitleWrapper>
                        <S.BackgroundText>
                            {`AstraGo는 자원 최적화 기술을 활용하여 `}
                            <span>GPU 서버의 활용도를 극대화</span>
                            {`하는 솔루션입니다.\n이를 통해 학습 시간을 단축하여 사용자의 프로젝트 계획을 더욱 향상시킵니다.`}
                        </S.BackgroundText>
                    </S.BackgroundContent>
                </S.BackgroundSection>
            </S.Container>
        </>
    );
}
