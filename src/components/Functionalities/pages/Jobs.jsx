import { useEffect, useRef } from "react";
import styled from "styled-components";

const StJobs = styled.div`
  width: 500px;
  min-height: 100vh;
  outline: 1px solid red;
  iframe {
    height: 100vh;
    width: 100%;
  }
`;

const Jobs = () => {
  const frameRef = useRef();

  useEffect(() => {
    const doc =
      frameRef.current.contentDocument ||
      frameRef.current.contentWindow.document;
    setTimeout(() => {
      console.log(doc);
      console.log(doc.children.children);
    }, 7000);
  }, []);

  return (
    <StJobs>
      <iframe
        ref={frameRef}
        src="https://jobs.journey-magazine.com/"
        frameborder="0"
      />
    </StJobs>
  );
};

export default Jobs;
