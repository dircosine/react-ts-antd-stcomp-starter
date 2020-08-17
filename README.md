# 코드 작성 기본 규칙

## 코드 스타일 관리

- prettier(VS Code 익스텐션) 사용 → .prettierrc 파일 공유해서 사용

## 컴포넌트 작성 규칙

- 컴포넌트명은 **PascalCase** 로 작성
- 파일명은 [컴포넌트명].tsx
- `function` 키워드로 컴포넌트 정의
- `interface` 키워드로 Props의 타입 정의
- Props 타입 이름은 [*컴포넌트명*+**Props**] 준수
- styled-components 정의는 export 구문 밑에서
- ex)

  ```tsx
  interface BaseTemeplateProps {
    children: ReactNode | HTMLElement;
  }

  function BaseTemplate({ children }: BaseTemeplateProps) {
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }

  export default BaseTemplate;

  const Header = styled.div``;
  ```

## 폴더 구조

**/pages**

- 웹 사이트의 각 페이지에 해당됨
- 해당 페이지의 **_네트워킹, 데이터 로직 포함_**
- [*이름+***Page**].tsx 형식 준수
  - ex) `FooPage.tsx` , `BarPage.tsx`

**/templates**

- 각각 pages 에 매칭되는 템플릿
  - 특정 페이지에 매칭되지 않고, Layout 목적의 템플릿도 가능
- **_네트워킹, 데이터 로직 최대한 배제_**
- [*이름+***Template**].tsx 형식 준수
  - ex) `FooTemplate.tsx` , `BarTemplate.tsx`

**/components**

- 이외의 컴포넌트들 정의

**/styles**

- `GlobalStyle.ts`: css 리셋 및 전역 스타일링
- `theme.ts`: 전역으로 사용할 테마 정의

**/lib**

- 화면 표시와 관계 없는 파일들
- 유틸 함수, 네트워킹 설정 등

  **/types**

  - **프로젝트를 관통하는 type 정의**
  - 고유한 데이터 모델별로 파일 분리
    - ex) `user.ts` , `post.ts`

**/hooks**

- 커스텀 훅스 정의

**/img**

- 로고, 파비콘 등 static 이미지 리소스
