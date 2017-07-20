package gov.au.vep.utility;

import java.util.HashMap;
import java.util.Map;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import freemarker.template.Configuration;
import freemarker.template.Template;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

@Component
public class MailConstructor {
	
	@Autowired
	private Environment env;
	
	@Autowired
	private JavaMailSender mailSender;
	
	@Autowired
    private Configuration freemarkerConfig;
	
	 public MimeMessageHelper constructFeedbackEmail(String name, String clientEmail, String phone, String feedbackMessage) throws Exception {
		 
	        MimeMessage feedback = mailSender.createMimeMessage();
	        MimeMessageHelper email = new MimeMessageHelper(feedback);

	        Map<String, Object> model = new HashMap<String, Object>();
	        model.put("name", name);
	        model.put("email", clientEmail);
	        model.put("phone", phone);
	        model.put("feedbackMessage", feedbackMessage);
	        
	        // set loading location to src/main/resources/templates
	        freemarkerConfig.setClassForTemplateLoading(this.getClass(), "/templates");
	        
	        Template template = freemarkerConfig.getTemplate("feedback-email.ftl");
	        String text = FreeMarkerTemplateUtils.processTemplateIntoString(template, model);
	        
	        email.setTo(env.getProperty("to.email"));
	        email.setSubject("Veterans' Employment Program, feedback received from " + name);
	        email.setText(text, true);
	        email.setFrom(env.getProperty("from.email"));
			
	        mailSender.send(feedback);
	        
	        return email;
	    }
	

}




