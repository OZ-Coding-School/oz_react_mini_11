import styled from "@emotion/styled";
import ContentLoader from "react-content-loader";

const SkeletonWrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
  height: 80%;
  padding: 1rem;
  background-color: #2c2c2c;
`;

const MovieDetailSkeleton = () => {
  return (
    <SkeletonWrapper>
      <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
        backgroundColor="#3c3c3c"
        foregroundColor="#4c4c4c">
        <rect x="5" y="0" width="45%" height="90%" />
        <rect x="110" y="5" rx="4" width="40%" height="16px" />
        <rect x="160" y="23" rx="4" width="15%" height="8px" />
        <rect x="115" y="35" rx="4" width="35%" height="12px" />
        <rect x="110" y="50" rx="4" width="40%" height="40%" />
      </ContentLoader>
    </SkeletonWrapper>
  );
};

export default MovieDetailSkeleton;
