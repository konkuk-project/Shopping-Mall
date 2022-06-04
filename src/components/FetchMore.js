import React, { useRef, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

// intersectionObserver option
const config = {
  root: null,
  rootMargin: "0px",
  threshold: 0.0,
};

export const FetchMore = ({ setPage, loading }) => {
  const fetchElement = useRef(null);

  const observer = new IntersectionObserver((entries) => {
    const [{ isIntersecting }] = entries;

    if (isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, config);

  useEffect(() => {
    observer.observe(fetchElement.current);
  }, []);

  return (
    <div
      ref={fetchElement}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {loading && <Spinner />}
    </div>
  );
};
