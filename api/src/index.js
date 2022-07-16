const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
require("dotenv").config();

const port = process.env.PORT || 4000;

const items = [
  {
    id: "1",
    title: "티셔츠",
    thumbnailUrl: "https://cdn.imweb.me/thumbnail/20210518/a098cae37bb7e.jpg",
    price: "29000",
    quantity: 1,
  },
  {
    id: "2",
    title: "머그컵",
    thumbnailUrl:
      "https://contents.sixshop.com/thumbnails/uploadedFiles/59826/product/image_1622135279973_750.jpg",
    price: "10000",
    quantity: 1,
  },
  {
    id: "3",
    title: "모자",
    thumbnailUrl:
      "https://img.gqkorea.co.kr/gq/2018/03/style_5aa635a19dd2d-1024x1024.jpg",
    price: "19000",
    quantity: 1,
  },
];

const typeDefs = gql`
  type Item {
    """
    Description for field
    Supports **multi-line** description for your [API](http://example.com)!
    """
    id: ID!

    """
    이것은 타이틀 설명입니다
    """
    title: String!
    quantity: Int!
    price: String!
    thumbnailUrl: String!
  }
  type Query {
    items: [Item!]!
    item(id: ID!): Item!
  }
  type Mutation {
    newItem(
      title: String!
      quantity: Int!
      price: String!
      thumbnailUrl: String!
    ): Item!
  }
`;

const resolvers = {
  Query: {
    items: () => {
      return items;
    },
    item: (parent, args) => {
      return items.find((item) => item.id === args.id);
    },
  },
  Mutation: {
    newItem: (parent, args) => {
      const Item = {
        id: String(items.length + 1),
        title: args.title,
        price: args.price,
        quantity: args.quantity,
        thumbnailUrl: args.thumbnailUrl,
      };
      items.push(Item);
      return Item;
    },
  },
};

// express를 이용하여 app 객체를 생성한다.
const app = express();

app.get("/", (req, res) => {
  res.send("hello!");
});

async function startApolloServer(typeDefs, resolvers) {
  // 아폴로 서버 설정
  const server = new ApolloServer({ typeDefs, resolvers });

  // express와 통합하기 위해 추가
  await server.start();

  // 아폴로 그래프QL 미들웨어를 적용하고 경로를 /api로 설정
  server.applyMiddleware({ app, path: "/api" });

  await new Promise((resolve) => app.listen({ port }, resolve));
  console.log(
    `🚀 GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  );
}

startApolloServer(typeDefs, resolvers);
