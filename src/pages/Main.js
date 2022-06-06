import React, { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

import Item from "../components/Item";
import { Grid } from "@chakra-ui/react";
import { FetchMore } from "../components/FetchMore";

function Main() {
  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMore = async () => {
      setLoading(true);

      // const itemList = await dummyFetcher(
      //   (page) => itemInfos.slice(page * 20, (page + 1) * 20),
      //   page
      // );
      // 1. fetch
      console.log(page);
      fetch(
        `https://jsonplaceholder.typicode.com/photos?_start=${
          20 * page
        }&_limit=20`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setList((prev) => [...prev, ...data]);
        });

      // 2. axios

      setLoading(false);
    };
    fetchMore();
  }, [page]);

  return (
    <>
      <Text as="h3">Best Items</Text>
      <Grid gridTemplateColumns="repeat(2, 1fr)" gap="10px" className="app">
        {list.map((info) => (
          <Item info={info} key={info.id} />
        ))}
      </Grid>
      <FetchMore setPage={setPage} loading={loading} />
    </>
  );
}

export default Main;
