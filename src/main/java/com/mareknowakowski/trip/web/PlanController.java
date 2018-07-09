package com.mareknowakowski.trip.web;

import com.mareknowakowski.trip.model.Plan;
import com.mareknowakowski.trip.model.PlanDto;
import com.mareknowakowski.trip.repository.PlanRepository;
import org.springframework.hateoas.UriTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import sun.misc.Request;

import java.net.URI;
import java.util.Collection;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class PlanController {


    private final PlanRepository repository;

    public PlanController(PlanRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/plans")
    public Collection<Plan> plans() {
        return repository.findAll().stream()
                .collect(Collectors.toList());
    }

    @RequestMapping(value = "/plans", method = RequestMethod.POST))
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Void> add(@RequestBody Plan plan) {
        this.repository.save(new Plan(plan.getName()));
        URI location = ServletUriComponentsBuilder.fromCurrentRequestUri().path("{childId}").buildAndExpand(plan.getId())
                .toUri();
        return ResponseEntity.created(location).build();
    }
    @RequestMapping(value="/plans/",method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        this.repository.removePlanById(id);
<<<<<<< HEAD
=======

>>>>>>> parent of c5c848f... Revert "no message"
    }
}