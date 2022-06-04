import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { dummyFetcher } from "../utils/dummyFetcher";

import Item from "../components/Item";
import { Grid } from "@chakra-ui/react";
import { FetchMore } from "../components/FetchMore";
import { itemInfos } from "../entities/items/MOCK_DATA";

function Main() {
  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMore = async () => {
      setLoading(true);

      // 1. mock data test
      const itemList = await dummyFetcher(
        (page) => itemInfos.slice(page * 20, (page + 1) * 20),
        page
      );

      setList((prev) => [...prev, ...itemList]);

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
