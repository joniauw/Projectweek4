package com.example.partyinaboxweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.example.partyinaboxweb"})
public class PartyInABoxWebApplication {
    public static void main(String[] args) {
        SpringApplication.run(PartyInABoxWebApplication.class, args);
    }

}
