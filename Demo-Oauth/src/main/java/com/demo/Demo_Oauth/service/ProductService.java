package com.demo.Demo_Oauth.service;


import com.demo.Demo_Oauth.dto.ProductDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ProductService {


    private final List<ProductDTO> products = new ArrayList<>();


    public ProductService(){

        products.add( ProductDTO.builder().name("Product1").productId("abc123vd2")
                .description("This is Product1")
                .price(10.0)
                .build());
    }


    //create

    public ProductDTO add(ProductDTO product){

       product.setProductId(UUID.randomUUID().toString());

        products.add(product);

        return product;
    }


    public List<ProductDTO> getAll(){
        return products;
    }


    public void remove(String id){

        products.removeIf((product) -> product.getProductId().equals(id));

    }


}
