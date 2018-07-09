package com.mareknowakowski.trip;

import com.mareknowakowski.trip.model.Plan;
import com.mareknowakowski.trip.repository.PlanRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class TripApplication {

    public static void main(String[] args) {
        SpringApplication.run(TripApplication.class, args);
    }


    @Bean
    ApplicationRunner init(PlanRepository repository) {
        return args -> {
            Stream.of("Walking", "Sleeping", "Eating", "Raving", "Repeating"
            ).forEach(name -> {
                Plan plan = new Plan();
                plan.setName(name);
                repository.save(plan);
            });
            repository.findAll().forEach(System.out::println);
        };
    }
}
