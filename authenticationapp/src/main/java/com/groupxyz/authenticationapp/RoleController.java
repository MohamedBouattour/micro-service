package com.groupxyz.authenticationapp;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/role")
@RequiredArgsConstructor
public class RoleController {
    private final RoleService roleService;

    @PostMapping(value = "/save")
    public ResponseEntity<Role> save(@RequestBody Role role) {
        return new ResponseEntity<>(this.roleService.saveRole(role), HttpStatus.CREATED);
    }
}
