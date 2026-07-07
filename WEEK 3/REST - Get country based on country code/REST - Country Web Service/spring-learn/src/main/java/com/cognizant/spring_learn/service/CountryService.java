package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.Country;
import com.cognizant.spring_learn.CountryList;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;
import com.cognizant.spring_learn.Country;

@Service
public class CountryService {
    public Country getCountry(String code) {

        ApplicationContext context = new ClassPathXmlApplicationContext("Country.xml");
        CountryList countryList = context.getBean("countryList", CountryList.class);
        List<Country> countries=countryList.getCountryList();
        return countryList.getCountryList()
                .stream()
                .filter(country ->
                        country.getCode()
                                .equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }

}
