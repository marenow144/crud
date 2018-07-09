package com.mareknowakowski.trip.repository;

import com.mareknowakowski.trip.model.Plan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;


@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface PlanRepository extends JpaRepository<Plan,Long> {

  @Transactional
  void removePlanById(Long id);
}
