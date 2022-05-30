import React from "react";
import { useState, useEffect} from "react";
import axios from "axios"
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Select,
  RadioGroup,
  Radio,
  ModalFooter,
  ModalOverlay,
  ModalContent
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const AddProduct = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [NewProd, setNewProd] = useState([]);
  const [form, setForm] = useState({});
  const [value, setValue] = useState('');

  const onChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };


  const saveInfo = () => {
    fetch("http://localhost:8080/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title:form.title,
        category:form.category,
        imageSrc: "",
        price:form.price
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setNewProd([...NewProd, d]);
        setForm("");
      });
  };



  useEffect(() => {
    const getList = async () => {
      let r = await axios.get(`http://localhost:8080/products`);
      console.log(r.data);
      setNewProd(r.data);
    };
    getList();
  }, []);

  const btnStyle = {
      boxSizing:"border-box",
      margin:"auto",
      marginBottom:"30px"
  }

  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}  w="13%" style={btnStyle} >
        Add new Product
      </Button >
      <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
      <ModalContent>
        <ModalBody pb={6}>
          <label htmlFor="">Title</label>
          <Input
            data-cy="add-product-title"
            type='text'
            name="title"
            value={form.title}
            onChange={onChange}
          />
          <label htmlFor="">Category</label>
          <Select
            data-cy="add-product-category"
            name="category"
            value={form.category}
            onChange={onChange}
          >
            <option data-cy="">category</option>
            <option value="Shirt" data-cy="add-product-category-shirt">Shirt</option>
            <option value="Pant" data-cy="add-product-category-pant">Pant</option>
            <option value="Jeans" data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <label htmlFor="">Gender</label>
          <RadioGroup
            data-cy="add-product-gender"
            onChange={setValue} value={value}
          >
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <label htmlFor="">Price</label>
          <Input
            data-cy="add-product-price"
            type="text"
            name="price"
            value={form.price}
            onChange={onChange}
          />
          <Button data-cy="add-product-submit-button" onClick={saveInfo}>
            Submit
          </Button>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
