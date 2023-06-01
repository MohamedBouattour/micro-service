package com.groupxyz.authenticationapp;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
@EnableEurekaClient
public class AuthenticationAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthenticationAppApplication.class, args);
	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner run(RoleService roleService, UserService userService) {
		return args -> {
			roleService.saveRole(Role.builder().name("ADMIN").build());
			roleService.saveRole(Role.builder().name("USER").build());
			userService.saveUser(User.builder().email("groupxyz@esprit.tn").password("groupxyz").username("groupxyz")
					.roles(new ArrayList<>()).build());
		};
	}
}
