package com.demo.Demo_Oauth.controller;


import com.demo.Demo_Oauth.dto.ProductDTO;
import com.demo.Demo_Oauth.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {


    @Autowired
    ProductService productService;

    //create products

    @PostMapping("add-product")
    public ProductDTO addProduct(@RequestBody ProductDTO productDTO){
       return  productService.add(productDTO);
    }


    //get products

    @GetMapping("/get-all-products")
    public List<ProductDTO> getAllProducts(){
        return productService.getAll();
    }


    //delete product

    @DeleteMapping("/remove-product/{id}")
    public void deleteProduct(@PathVariable String id){
        productService.remove(id);
    }



}
