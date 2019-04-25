package chatapplication.chat;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Groups {
	
	@Id
	
	private int userid;
	
	private int groupid;
	
	private String groupname;

	public Groups() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public int getGroupid() {
		return groupid;
	}

	public void setGroupid(int groupid) {
		this.groupid = groupid;
	}

	public String getGroupname() {
		return groupname;
	}

	public void setGroupname(String groupname) {
		this.groupname = groupname;
	}
	
	public Groups(int userid, int groupid, String groupname) {
		super();
		this.userid = userid;
		this.groupid = groupid;
		this.groupname = groupname;
	}

	@Override
	public String toString() {
		return "Groups [userid=" + userid + ", groupid=" + groupid + ", groupname=" + groupname + "]";
	}

	
}
