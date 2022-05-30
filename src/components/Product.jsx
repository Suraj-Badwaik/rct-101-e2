import React from "react";

import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

const Product = ({List}) => {
 

  return ( 
  <div>
  <Stack data-cy="product">  
      {List.map((data) =>(
        <div>
        <Image data-cy="product-image" src={data.imageSrc}/>
        <Text data-cy="product-category">{data.category}</Text>
        <Tag>
          <TagLabel data-cy="product-gender">{data.gender}</TagLabel>
        </Tag>
        <Heading data-cy="product-title">{data.title}</Heading>
        <Box data-cy="product-price">{data.price}</Box>
        </div>
        ))}
  </Stack>
    </div>
  )
}
export default Product;
