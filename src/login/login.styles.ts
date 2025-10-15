import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: #fafafa;
`;

export const LoginSection = styled.div`
    position: relative;
    width: 620px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
`;

export const LoginContent = styled.div`
    width: 100%;
    max-width: 440px;
`;

export const TitleSection = styled.div`
    text-align: center;
    margin-bottom: 48px;
`;

export const TitleRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 8px;
`;

export const LogoSymbol = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    position: relative;
`;

export const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.22;
    margin: 0;
`;

export const Subtitle = styled.p`
    font-size: 14px;
    line-height: 1.43;
    color: #333333;
    margin: 0;
`;

export const LoginForm = styled.div`
    margin-bottom: 24px;
`;

export const InputGroup = styled.div`
    margin-bottom: 16px;
`;

export const LabelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const InputLabel = styled.label`
    display: block;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 4px;
`;

export const InputContainer = styled.div`
    position: relative;
    isolation: isolate;

    /* Keycloakify 기본 스타일 오버라이드 */
    .kcInputGroup {
        position: relative;
        display: block;
        z-index: 0;
    }

    .kcFormPasswordVisibilityButtonClass {
        position: absolute !important;
        right: 8px !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        width: 24px !important;
        height: 24px !important;
        min-width: unset !important;
        min-height: unset !important;
        background: none !important;
        background-color: transparent !important;
        border: 0 !important;
        border-top: 0 !important;
        border-right: 0 !important;
        border-bottom: 0 !important;
        border-left: 0 !important;
        cursor: pointer !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        z-index: 10 !important;
        padding: 0 !important;
        outline: none !important;
        box-shadow: none !important;
        margin: 0 !important;
        text-decoration: none !important;
        appearance: none !important;
        -webkit-appearance: none !important;

        &::before,
        &::after {
            display: none !important;
        }

        &:hover,
        &:focus,
        &:active,
        &:visited {
            border: 0 !important;
            border-top: 0 !important;
            border-right: 0 !important;
            border-bottom: 0 !important;
            border-left: 0 !important;
            text-decoration: none !important;
            outline: none !important;
            box-shadow: none !important;
            background: none !important;
            background-color: transparent !important;
        }

        /* 기본 아이콘 숨김 */
        i {
            display: none !important;
        }
    }
`;

export const InputField = styled.input`
    width: 100%;
    height: 36px;
    padding: 11px 36px 11px 36px;
    background: #f3f5f7;
    border: 1px solid #ced2d6;
    border-radius: 2px;
    font-size: 12px;
    color: #000000;
    box-sizing: border-box;
    outline: none;

    &::placeholder {
        color: #555555;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-transition: background-color 9999s ease-out;
        -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
        -webkit-text-fill-color: #000000 !important;
    }
`;

export const InputIcon = styled.div`
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    pointer-events: none;
`;

export const PasswordToggle = styled.button`
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    padding: 0;
    outline: none;
`;

export const LoginButton = styled.button`
    width: 100%;
    height: 36px;
    background: radial-gradient(circle, #191878, #070913);
    border: none;
    border-radius: 2px;
    color: white;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 16px;

    &:disabled {
        cursor: not-allowed;
    }
`;

export const ErrorMessage = styled.div`
    color: #ff4d4f;
    font-size: 12px;
`;

export const FooterInfo = styled.div`
    position: absolute;
    bottom: 40px;
    text-align: center;
`;

export const FooterLinks = styled.div`
    font-size: 10px;
    color: #828588;
    margin-bottom: 8px;
`;

export const CompanyInfo = styled.div`
    font-size: 10px;
    color: #828588;
`;

export const BackgroundSection = styled.div`
    flex: 1;
    position: relative;
    overflow: hidden;
`;
export const BackgroundContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const BackgroundTitleWrapper = styled.div`
    display: flex;
    margin-bottom: 16px;
    align-items: flex-end;
    margin-left: 60px;
`;
export const BackgroundLogo = styled.div`
    width: 169px;
    height: 49px;
`;
export const BackgroundTitle = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    margin-left: 0px;
    margin-bottom: 6px;
`;
export const BackgroundText = styled.div`
    font-size: 14px;
    font-weight: 300;
    line-height: 1.43;
    color: #ffffff;
    white-space: pre-line;
    text-align: center;
    min-width: max-content;

    span {
        font-weight: 600;
    }
`;

export const DemoAccountInfo = styled.button<{ disabled?: boolean }>`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    max-width: 200px;
    z-index: 10;
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    opacity: ${props => (props.disabled ? 0.6 : 1)};
    transition: all 0.2s ease;

    &:hover {
        ${props =>
            !props.disabled &&
            `
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
      transform: translateY(-1px);
    `}
    }

    &:active {
        ${props =>
            !props.disabled &&
            `
      transform: translateY(0);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `}
    }
`;

export const DemoTitle = styled.div`
    font-size: 11px;
    font-weight: 600;
    color: #4a5568;
    margin-bottom: 6px;
    text-align: center;
`;

export const DemoCredentials = styled.div`
    font-size: 10px;
    color: #718096;
    line-height: 1.4;
    text-align: center;

    strong {
        color: #2d3748;
    }
`;

export const DemoHint = styled.div`
    font-size: 9px;
    color: #4299e1;
    text-align: center;
    margin-top: 4px;
    font-weight: 500;
`;
