package gov.au.vep.utility;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.mail.SimpleMailMessage;

@Component
public class MailConstructor {
	
	@Autowired
	private Environment env;

	public SimpleMailMessage constructFeedbackEmail(String name, String clientEmail, String phone, String message) {
		
		String feedback = "\nDear Veterans’ Employment team," 
						+ "\n\nYou have received feedback or a query from " + name
						+ "\nThe feedback/ query received from " + name + " is: " 
						+ "\n\n" + message 
						+ "\n\n" + name + " can be contacted at:";

		if (clientEmail != null) {
			feedback  += "\n\nEmail: " + clientEmail;
		}

		if (phone != null) {
			feedback += "\n\nPhone: " + phone;
		}

		feedback += "\n\nKind Regards," 
		         +  "\nVeteransEmployment.dva.gov.au";
		
		SimpleMailMessage email = new SimpleMailMessage();
		email.setTo(env.getProperty("to.email"));
		email.setSubject("Veterans' Employment Program, feedback received from " + name);
		email.setText(feedback);
		email.setFrom(env.getProperty("from.email"));
		return email;

	}
}




