package com.example.roomsbotapi.controllers;

import com.example.roomsbotapi.models.User;
import com.example.roomsbotapi.services.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.joda.time.LocalDate;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("/api/admin")
@CrossOrigin
@Slf4j
public class AdminController {

    private final UserService userService;

    @GetMapping("/dateStatistic")
    public Map<String, Integer> getDateStatistic() {
        Map<String, Integer> integerMap = new HashMap<>();
        List<User> users = userService.findAll();

        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        int forDay = (int) users.stream().filter(x -> LocalDate.now().dayOfYear().equals(LocalDate.parse(dateFormat.format(x.getCreationDate())).dayOfYear())).count();
        int forWeek = (int) users.stream().filter(x -> LocalDate.now().weekyear().equals(LocalDate.parse(dateFormat.format(x.getCreationDate())).weekyear())).count();
        int forMonth = (int) users.stream().filter(x -> LocalDate.now().monthOfYear().equals(LocalDate.parse(dateFormat.format(x.getCreationDate())).monthOfYear())).count();

        integerMap.put("allUsers", users.size());
        integerMap.put("forDay", forDay);
        integerMap.put("forWeek", forWeek);
        integerMap.put("forMonth", forMonth);

        return integerMap;
    }

    @GetMapping("/stagesAtWhichClientsStopped")
    public Map<String, Integer> stagesAtWhichClientsStopped() {
        List<User> users = userService.findAll();
        Map<String, Integer> mapStages = new HashMap<>();

        mapStages.put("zeroStage", (int) users.stream().map(User::getUserStatus).filter(user -> user == 0).count());
        mapStages.put("firstStage", (int) users.stream().map(User::getUserStatus).filter(user -> user == 1).count());
        mapStages.put("secondStage", (int) users.stream().map(User::getUserStatus).filter(user -> user == 2).count());
        mapStages.put("thirdStage", (int) users.stream().map(User::getUserStatus).filter(user -> user == 3).count());
        mapStages.put("fourthStage", (int) users.stream().map(User::getUserStatus).filter(user -> user == 4).count());
        mapStages.put("fifthStage", (int) users.stream().map(User::getUserStatus).filter(user -> user == 5).count());
        mapStages.put("sixthStage", (int) users.stream().map(User::getUserStatus).filter(user -> user == 6).count());
        mapStages.put("seventhStage", (int) users.stream().map(User::getUserStatus).filter(user -> user == 7).count());

        return mapStages;
    }

    @GetMapping("/dataForChats")
    public Map<String, List<Object>> dataForChats() {
        List<User> users = userService.findAll();
        Map<String, List<Object>> datMap = new HashMap<>();
        List<Integer> usersCount = new ArrayList<>();

        DateFormat format = new SimpleDateFormat("yyyy-MM-dd");

        Set<java.time.LocalDate> dates = users.stream().map(x -> java.time.LocalDate.parse(format.format(x.getCreationDate())))
                .collect(Collectors.toSet());

        List<java.time.LocalDate> dateList = dates.stream().sorted().collect(Collectors.toList());

        for (var date : dateList) {
            int countUsers = (int) users.stream().filter(x -> java.time.LocalDate.parse(format.format(x.getCreationDate())).equals(date)).count();
            usersCount.add(countUsers);
        }


        datMap.put("dates", Arrays.asList(dateList.toArray()));
        datMap.put("users", Arrays.asList(usersCount.toArray()));

        log.info(datMap.toString());
        return datMap;
    }
}
