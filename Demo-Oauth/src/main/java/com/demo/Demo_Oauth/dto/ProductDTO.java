package com.demo.Demo_Oauth.dto;


import lombok.Builder;
import lombok.Data;

@Data
@Builder //for some design pattern
public class ProductDTO {

    private String productId;
    private String name;
    private String description;
    private double price;
    private int quantity;
}
