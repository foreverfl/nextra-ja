# Nextra

Next.js에서 사랑받는 모든 것과 함께 간단하고 강력하며 유연한 사이트 생성 프레임워크입니다.

## 문서

[https://nextra.site](https://nextra.site)

## 개발

### 설치

Nextra 저장소는 [PNPM Workspaces](https://pnpm.io/workspaces)와 [Turborepo](https://github.com/vercel/turborepo)를 사용합니다. 의존성을 설치하려면 프로젝트 루트 디렉토리에서 `pnpm install`을 실행하세요.

### Nextra 코어 빌드

```bash
cd packages/nextra
pnpm build
```

감시 모드: `pnpm dev`

### Nextra 테마 빌드

```bash
cd packages/nextra-theme-docs
pnpm build
```

| 명령어            | 설명                   |
| ----------------- | ---------------------- |
| pnpm dev          | 감시 모드              |
| pnpm dev:layout   | 감시 모드 (레이아웃만) |
| pnpm dev:tailwind | 감시 모드 (스타일만)   |

### 개발

로컬에서 웹사이트와 함께 디버그할 수도 있습니다. 예를 들어, examples/docs를 로컬에서 시작하려면 다음을 실행하세요:

```bash
cd examples/docs
pnpm dev
```

example/docs의 모든 변경사항이 즉시 다시 렌더링됩니다.

코어 또는 테마 패키지를 업데이트하는 경우 재빌드가 필요합니다. 또는 별도의 터미널에서 nextra와 테마 모두에 대해 감시 모드를 사용할 수 있습니다.
