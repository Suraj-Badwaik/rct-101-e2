import React ,{useEffect,useState}from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import { Flex,Grid } from "@chakra-ui/react";
import axios from 'axios'

const Products = () => {
  const [List, setList] = useState([]);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(3)
  const [totalcount,setTotalcount]= useState(0)


  useEffect(() => {
    const getList = async () => {
      let r = await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`);
      console.log(r.data);
      setList(r.data);
      setTotalcount(Number(r.headers["x-total-count"]));
    };
    getList();
  }, [page,limit]);



  return (
    <Flex>
      <AddProduct  />
      <Grid templateColumns='repeat(3, 1fr)' gap={6}  margin="auto">
        <Product List={List}/>
      </Grid>
      <Pagination page={page} limit={limit} setPage={setPage}  setLimit={setLimit} totalcount={totalcount} />
    </Flex>
  );
};

export default Products;
