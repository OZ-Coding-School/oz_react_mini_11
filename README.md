OZ코딩스쿨 초격차캠프 프론트엔드 11기 React 미니프로젝트 2일차(6/19~20)
[mission-3] 3단계 미션 구현 - 김승원/1팀

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

 - api 호출을 통한 검색결과 페이지를 별도 컴포넌트로 만들어 라우터 설정을 통해 이동하게끔 시도하였으나,
원하는 결과를 얻지 못해 한참 헤맸음. 이전 커밋으로 리셋하고 다시 작성.
 
## 구현 이미지
![3단계](https://github.com/user-attachments/assets/03ee4a42-2085-4272-9b68-7635873a2bc9)



