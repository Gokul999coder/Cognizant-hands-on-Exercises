package com.cognizant.spring_learn;

import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;


@RestController
public class HelloController {

    private static final Logger LOGGER= LoggerFactory.getLogger(HelloController.class);
    @GetMapping("/hello")
    public String sayHello()
    {
        LOGGER.info("START...");
        String str="Hello World !!";
        LOGGER.info("END.");
        return str;
    }

}
