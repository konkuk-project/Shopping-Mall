import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { getPhotos } from "../network";

import { FetchMore } from "../components/FetchMore";
import ItemList from "../components/item-list";

function Main() {
  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMore = async () => {
      setLoading(true);
      console.log("loading");

      // 0. dummyfetcher
      // const itemList = await dummyFetcher(
      //   (page) => itemInfos.slice(page * 20, (page + 1) * 20),
      //   page
      // );

      // 1. fetch
      // fetch(
      //   `https://jsonplaceholder.typicode.com/photos?_start=${
      //     20 * page
      //   }&_limit=20`
      // )
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //     setList((prev) => [...prev, ...data]);
      //   });

      // 2. axios
      try {
        const data = await getPhotos(`/photos?_start=${20 * page}&_limit=20`);
        setList((prev) => [...prev, ...data]);
      } catch (e) {
        console.debug("main", e);
      }

      setLoading(false);
      console.log("loading end");
    };
    fetchMore();
  }, [page]);

  return (
    <>
      <Text as="h3">Best Items</Text>
      <ItemList items={list} />
      <FetchMore setPage={setPage} loading={loading} />
    </>
  );
}

export default Main;
