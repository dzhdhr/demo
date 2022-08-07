package com.course.system.controller;

import com.course.system.Domain.Test;
import com.course.system.repositories.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @Autowired
    private TestRepository testRepository;
    @GetMapping("/test")
    public String HelloWorld(){

        return "hello";
    }
}
