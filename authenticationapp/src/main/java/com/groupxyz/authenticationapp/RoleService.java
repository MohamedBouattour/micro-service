package com.groupxyz.authenticationapp;

import org.springframework.stereotype.Service;

@Service
public interface RoleService {
    Role saveRole(Role role);
}
