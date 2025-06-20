import styled from "@emotion/styled";
import ContentLoader from "react-content-loader";

const SkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2c2c2c;
`;

const MovieCardSkeleton = () => {
  return (
    <SkeletonWrapper>
      <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        viewBox="0 0 100 160"
        backgroundColor="#3c3c3c"
        foregroundColor="#4c4c4c">
        <rect x="0" y="0" width="100" height="120" />
        <rect x="8" y="127" rx="4" width="70%" height="8%" />
        <rect x="68" y="144" rx="4" width="25%" height="8%" />
      </ContentLoader>
    </SkeletonWrapper>
  );
};

export default MovieCardSkeleton;
