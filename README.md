<p align="center">
    <i>🚀 <a href="https://keycloakify.dev">Keycloakify</a> v11 스타터 🚀</i>
    <br/>
    <br/>
</p>

# 빠른 시작

```bash
git clone https://github.com/keycloakify/keycloakify-starter
cd keycloakify-starter
yarn install # 또는 다른 패키지 매니저를 사용하되, 다른 패키지 매니저를 사용할 경우 yarn.lock을 삭제하세요.
```

# 로컬에서 테마 테스트하기

[문서](https://docs.keycloakify.dev/testing-your-theme)

# 테마 커스터마이징 방법

[문서](https://docs.keycloakify.dev/customization-strategies)

# 테마 빌드하기

테마를 빌드하려면 [Maven](https://maven.apache.org/)이 설치되어 있어야 합니다 (Maven >= 3.1.1, Java >= 7).  
`mvn` 명령어는 $PATH에 있어야 합니다.

-   macOS: `brew install maven`
-   Debian/Ubuntu: `sudo apt-get install maven`
-   Windows: `choco install openjdk` 그리고 `choco install maven` (또는 [여기](https://maven.apache.org/download.cgi)에서 다운로드)

```bash
npm run build-keycloak-theme
```

참고: 기본적으로 Keycloakify는 다양한 Keycloak 버전에 대해 여러 .jar 파일을 생성합니다.  
이 동작은 커스터마이징할 수 있습니다. [여기](https://docs.keycloakify.dev/features/compiler-options/keycloakversiontargets) 문서를 참조하세요.

# Account 테마 초기화

```bash
npx keycloakify initialize-account-theme
```

# Email 테마 초기화

```bash
npx keycloakify initialize-email-theme
```

# GitHub Actions

스타터는 테마를 빌드하고 jar 파일을 [GitHub 릴리즈 아티팩트](https://github.com/keycloakify/keycloakify-starter/releases/tag/v10.0.0)로 게시하는 범용 GitHub Actions 워크플로우를 포함하고 있습니다.  
새 버전을 릴리즈하려면 **`package.json`의 버전을 업데이트하고 푸시하기만 하면 됩니다**.

워크플로우를 활성화하려면 GitHub에서 이 저장소의 포크로 이동한 다음:
`Settings` > `Actions` > `Workflow permissions`로 이동하여 `Read and write permissions`를 선택하세요.
