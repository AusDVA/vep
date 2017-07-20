package gov.au.vep.resource;

import java.util.HashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import gov.au.vep.utility.MailConstructor;

@RestController
public class ContactResource {

	@Autowired
	private MailConstructor mailConstructor;

	@RequestMapping(value = "/contactus", method = RequestMethod.POST)
	public ResponseEntity<String> sendFeedbackEmail(@RequestBody HashMap<String, String> mapper) throws Exception {
	
		String name = (mapper.get("name"));		
		String email = (mapper.get("email"));				
		String phone = (mapper.get("phone"));
		String message = (mapper.get("message"));
		
			if(name == null) {			
				return new ResponseEntity<String>("No name provided", HttpStatus.BAD_REQUEST);			
			}
		
			if(email == null && phone == null) {			
				return new ResponseEntity<String>("No contact details provided", HttpStatus.BAD_REQUEST);			
			}
		
			if(message == null) {			
				return new ResponseEntity<String>("No message provided", HttpStatus.BAD_REQUEST);			
			}

		mailConstructor.constructFeedbackEmail(name, email, phone, message );
		
		return new ResponseEntity<String>("Email sent", HttpStatus.OK);
	}
}
