package com.example.roomsbotapi.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Groups {

    @Id
    private String id;

    private String nameGroup;
    private List<User> users;
}
