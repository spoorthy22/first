package chatapplication.chat;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Message {
	
	@Id
	private int userid;
	
	private int messageid;
	
	private String messagetext;
	
	//private int userid;

	public Message() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}


	public int getMessageid() {
		return messageid;
	}

	public void setMessageid(int messageid) {
		this.messageid = messageid;
	}

	public String getMessagetext() {
		return messagetext;
	}

	public void setMessagetext(String messagetext) {
		this.messagetext = messagetext;
	}
	
	public Message(int userid, int messageid, String messagetext) {
		super();
		this.userid = userid;
		this.messageid = messageid;
		this.messagetext = messagetext;
	}

	@Override
	public String toString() {
		return "Message [userid=" + userid + ", messageid=" + messageid + ", messagetext=" + messagetext + "]";
	}
	
	

}
