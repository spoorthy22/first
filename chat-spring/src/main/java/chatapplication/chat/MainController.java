package chatapplication.chat;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping
public class MainController {
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private GroupsRepository groupRepository;
	@Autowired
	private MessageRepository messageRepository;
	
	@PostMapping(path="/adduser") 
	public @ResponseBody User addNewUser (@RequestBody User u) {
		     return	userRepository.save(u);
	}
	
	
	@GetMapping(path="/allusers")
//	public @ResponseBody Iterable<User> getAllUsers() {
//		// This returns a JSON or XML with the users
//		return userRepository.findAll();
//	}
	public @ResponseBody List<User> getAllUsers() {
		userRepository.save(new User(1,"Jack","jack@gmail.com","1234","a"));
		userRepository.save(new User(2, "John", "john@gmail.com", "123456","a"));
		List<User> l = new ArrayList<User>();
		for(User u: userRepository.findAll())
		{
			l.add(u);
		}
	    return l;
	}
	
	@DeleteMapping(path = {"/deleteuser/{userid}"})
	public @ResponseBody String deleteUser(@RequestParam int id) {
		userRepository.deleteById(id);
     	return "Deleted";
    }
	
	@PostMapping(path="/addgroup") 
	public @ResponseBody Groups addNewGroup (@RequestBody Groups g) {
		     return	groupRepository.save(g);
	}
		
	@GetMapping(path="/allgroups")
//	public @ResponseBody  Iterable<Groups>  getAllGroups() {
//		   return groupRepository.findAll();
//	}
	public @ResponseBody List<Groups> getAllGroups() {
		groupRepository.save(new Groups(1,1,"a"));
		groupRepository.save(new Groups(2,1,"a"));
		groupRepository.save(new Groups(3,2,"b"));
		groupRepository.save(new Groups(4,2,"b"));
		List<Groups> l = new ArrayList<Groups>();
		for(Groups g: groupRepository.findAll())
		{
			l.add(g);
		}
	    return l;
	}

	@DeleteMapping(path = {"/deletegroup/{groupid}"})
	public @ResponseBody String deleteGroup(@RequestParam int id) {
		groupRepository.deleteById(id);
     	return "Deleted";
    }
	
	
	@PostMapping(path="/addmessage") 
	public @ResponseBody Message addNewMessage (@RequestBody Message m) {
		     return	messageRepository.save(m);
	}
	
	@GetMapping(path="/allmessages")
//	public @ResponseBody Iterable<Message> getAllMessages() {
//		// This returns a JSON or XML with the users
//		return messageRepository.findAll();
//	}
	public @ResponseBody List<Message> getAllMessages() {
		messageRepository.save(new Message(1,1,"hey"));
		messageRepository.save(new Message(2,2,"hi"));
		List<Message> l = new ArrayList<Message>();
		for(Message m: messageRepository.findAll())
		{
			l.add(m);
		}
	    return l;
	}
	
	@DeleteMapping(path = {"/deletemessage/{messageid}"})
	public @ResponseBody String deleteMessage(@RequestParam int id) {
		messageRepository.deleteById(id);
     	return "Deleted";
    }
	
}
