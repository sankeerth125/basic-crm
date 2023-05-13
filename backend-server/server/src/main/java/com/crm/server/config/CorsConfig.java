package com.crm.server.config;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Configuration //This can be used for detailed CORS Config instead of having @CrossOrigin(origins = "http://localhost:4200") on top of Controller
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Specify the URL pattern for which CORS is enabled
                .allowedOrigins("http://localhost:4200") // Allow requests from this origin
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow these HTTP methods
                .allowedHeaders("Content-Type", "Authorization") // Allow these request headers
                .exposedHeaders("Content-Type", "Authorization") // Expose these response headers
                .allowCredentials(true) // Allow credentials (cookies, authorization headers) to be sent
                .maxAge(3600); // Set the max age of the CORS preflight response cache
    }
}
