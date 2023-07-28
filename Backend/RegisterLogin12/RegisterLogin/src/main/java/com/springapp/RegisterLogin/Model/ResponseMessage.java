package com.springapp.RegisterLogin.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResponseMessage {
	
		String message;
		
		Boolean status;

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}

		public Boolean getStatus() {
			return status;
		}

		public void setStatus(Boolean status) {
			this.status = status;
		}

		public ResponseMessage(String message, Boolean status) {
			super();
			this.message = message;
			this.status = status;
		}
		
		public ResponseMessage()
		{
			
		}
	
}
