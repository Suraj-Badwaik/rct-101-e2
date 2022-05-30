import React from "react";

import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel,
  GridItem,
  Flex,
  Center,
} from "@chakra-ui/react";



const Product = ({ List }) => {
  return List.map((data) => (
    <GridItem style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}} padding="20px" borderRadius="12px">
      <Stack data-cy="product">
        <Image data-cy="product-image" src={data.imageSrc} borderRadius="16px"/>
        <Flex justifyContent="space-between">
          <Box textTransform="uppercase">
            <Text data-cy="product-category">{data.category}</Text>
          </Box>
          <Box textTransform="uppercase" >
            <Tag>
              <TagLabel data-cy="product-gender">{data.gender}</TagLabel>
            </Tag>
          </Box>
        </Flex>
        <Flex>
          <Center>
            <Heading data-cy="product-title" fontSize="20px" color="cyan.700" textTransform="capitalize">{data.title}</Heading>
          </Center>
          <Center >
            <Text data-cy="product-price">Rs {data.price} /unit</Text>
          </Center>
        </Flex>
      </Stack>
    </GridItem>
  ));
};

export default Product;
