    package com.cognizant.spring_learn;

    import org.slf4j.LoggerFactory;
    import org.slf4j.Logger;


    public class Country {
        private static final Logger LOGGER =
                LoggerFactory.getLogger(Country.class);
        private String code;
        private String name;

        public Country(){
            LOGGER.debug("Inside Country Constructor.");
        }

        public void setCode(String code)
        {
            LOGGER.debug("Inside setCode()");
            this.code=code;
        }

        public String getCode()
        {
            LOGGER.debug("Inside getCode()");
            return code;
        }

        public void setName(String name)
        {
            LOGGER.debug("Inside setName()");
            this.name=name;
        }

        public String getName()
        {
            LOGGER.debug("Inside getName()");
            return name;
        }
        @Override
        public String toString(){
            return "Country{" +
                    "code='" + code + '\'' +
                    ", name='" + name + '\'' +
                    '}';
        }


    }
