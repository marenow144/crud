package com.mareknowakowski.trip.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.joda.time.DateTime;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Getter @Setter
@ToString
@EqualsAndHashCode
public class Plan {

    @Id
    @GeneratedValue
    private Long id;
    private @NonNull String name;

<<<<<<< HEAD
    private DateTime timeOfEvent;

    private Integer rating;
=======
    @JsonIgnore

    private DateTime timeOfEvent;

>>>>>>> parent of c5c848f... Revert "no message"

    public Plan(String name) {
        this.name = name;
    }
    public Plan() {}
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }
}
