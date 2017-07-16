package gov.au.vep.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration

public class RestConfig {

	@Bean

	public CorsFilter corsFilter() {

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

		CorsConfiguration config = new CorsConfiguration();

		config.addAllowedOrigin("http://localhost:3000");
		config.addAllowedHeader("Content-Type");
		config.addAllowedMethod("OPTIONS");
		config.addAllowedMethod("POST");

	

		source.registerCorsConfiguration("/**", config);

		return new CorsFilter(source);

	}

}
