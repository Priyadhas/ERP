package com.example.Tnit.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Allow CORS for the API endpoints
        registry.addMapping("/api/**")
                .allowedOrigins("http://localhost:3000")  // Allow only the frontend server
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allow these methods
                .allowedHeaders("*");  // Allow all headers (you can restrict if needed)
    }
}
