OZ코딩스쿨 초격차캠프 프론트엔드 11기 React 미니프로젝트
(6/19~20) [mission-3] 3단계 미션 구현 - 김승원/1팀

## 구현 사항

- useFetch 커스텀 훅으로 리팩토링
- 검색 필드 상태관리를 통한 검색 버튼 생성 및 활성화
- 요구사항인 useDebounce 활용을 위해 검색버튼 제거 (별도 컴포넌트로 보관)
- useDebounce로 query 값 지연전달 활성화
- debouncedquery 값을 setSearchParams로 전달
- index에서 searchParams 호출하여 query값 추출
- 삼항연산자를 활용하여 query값이 truthy라면 검색결과 페이지로 우선이동하게끔 작성
- useFetch 인자로 삼항연산자를 포함한 값을 상수에 담아 전달하여 요구사항의 기능 활성화

## 어려웠던 점

- api 호출을 통한 검색결과 페이지를 별도 컴포넌트로 만들어 라우터 설정을 통해 이동하게끔 시도하였으나, 원하는 결과를 얻지 못해 한참 헤맸음. 이전 커밋으로 리셋하고 다시 작성.
- 반응형 CSS 설정하는 보다 효율적인 방법을 좀 더 찾아봐야 할 것 같음.

## 구현 이미지
![3단계](https://github.com/user-attachments/assets/4672cef6-6137-493f-a0e4-7fe8c5711063)

![모바일뷰1](https://github.com/user-attachments/assets/28b99f66-e998-47ab-9fea-af96798f7404)

![모바일뷰3](https://github.com/user-attachments/assets/d89666dd-984d-4af6-a611-b3eea3dbe939)

![모바일뷰2](https://github.com/user-attachments/assets/b81390d9-b498-4a24-abff-05ad59713125)

![모바일뷰4](https://github.com/user-attachments/assets/1fc18bbc-2b03-4810-920f-5ca91f5f14b3)

![태블릿뷰1](https://github.com/user-attachments/assets/a4230709-7bdb-4143-9bd6-4263b0ca19ea)

![태블릿뷰2](https://github.com/user-attachments/assets/3ab5a4b6-d7fc-4d56-beb8-33dcaeb602a3)

![데스크탑 뷰](https://github.com/user-attachments/assets/16dc14f2-264f-4730-9975-cd0b9b3ba56d)

