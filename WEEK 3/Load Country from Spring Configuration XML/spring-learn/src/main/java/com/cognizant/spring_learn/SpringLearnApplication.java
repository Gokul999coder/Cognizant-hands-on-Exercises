package com.cognizant.spring_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {
	private static final Logger LOGGER= LoggerFactory.getLogger(SpringLearnApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(SpringLearnApplication.class, args);
		System.out.println("Main started");
		displayCountry();
	}
	private static void displayCountry(){

		LOGGER.debug("start");
		ApplicationContext context= new  ClassPathXmlApplicationContext("Country.xml");
		Country country=context.getBean("country",Country.class);
		LOGGER.debug("Country : {}",country.toString());
		LOGGER.debug("END");

	}

}
