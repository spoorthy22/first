package chatapplication.chat;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class User {
	
	@Id
	private int userid;
	private String name;
	private String email;
	private String password;
	private String groupname;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public String getGroupname() {
		return groupname;
	}

	public void setGroupname(String groupname) {
		this.groupname = groupname;
	}

	public User(int userid, String name, String email, String password, String groupname) {
		super();
		this.userid = userid;
		this.name = name;
		this.email = email;
		this.password = password;
		this.groupname = groupname;
	}

	@Override
	public String toString() {
		return "User [userid=" + userid + ", name=" + name + ", email=" + email + ", password=" + password
				+ ", groupname=" + groupname + "]";
	}

}
