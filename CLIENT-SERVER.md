### Introduction:
Have you ever wondered about the mechanisms that delivered this page to you? Chances are you are sitting at a computer right now, viewing this page in a browser. So, when you clicked on the link for this page, or typed in its URL (uniform resource locator), what happened behind the scenes to bring this page onto your screen?

### How Web Servers Work:
Let's say that you are sitting at your computer, surfing the Web, and you get a call from a friend who says, "I just read a great article! Type in this URL and check it out. It's at https://www.howstuffworks.com/web-server.htm." So you type that URL into your browser and press return. And magically, no matter where in the world that URL lives, the page pops up on your screen.Your browser formed a connection to a Web server, requested a page and received it.

### Behind the Scenes:
If you want to get into a bit more detail on the process of getting a Web page onto your computer screen, here are the basic steps that occurred behind the scenes:

The browser broke the URL into three parts:

1. The protocol ("http")
2. The server name ("www.howstuffworks.com")
3. The file name ("web-server.htm")

The browser communicated with a name server to translate the server name "www.howstuffworks.com" into an IP Address, which it uses to connect to the server machine. The browser then formed a connection to the server at that IP address on port 80. (We'll discuss ports later in this article.)
Following the HTTP protocol, the browser sent a GET request to the server, asking for the file "https://www.howstuffworks.com/web-server.htm." (Note that cookies may be sent from browser to server with the GET request -- see How Internet Cookies Work for details.)
The server then sent the HTML text for the Web page to the browser. (Cookies may also be sent from server to browser in the header for the page.) The browser read the HTML tags and formatted the page onto your screen.


### The Internet:
So what is "the Internet"? The Internet is a gigantic collection of millions of computers, all linked together on a computer network. The network allows all of the computers to communicate with one another. A home computer may be linked to the Internet using a phone-line modem, DSL or cable modem that talks to an Internet service provider (ISP). A computer in a business or university will usually have a network interface card (NIC) that directly connects it to a local area network (LAN) inside the business. The business can then connect its LAN to an ISP using a high-speed phone line like a T1 line. A T1 line can handle approximately 1.5 million bits per second, while a normal phone line using a modem can typically handle 30,000 to 50,000 bits per second.

### Clients and Servers:
In general, all of the machines on the Internet can be categorized as two types: servers and clients. Those machines that provide services (like Web servers or FTP servers) to other machines are servers. And the machines that are used to connect to those services are clients. When you connect to Yahoo! at www.yahoo.com to read a page, Yahoo! is providing a machine (probably a cluster of very large machines), for use on the Internet, to service your request. Yahoo! is providing a **server**. Your machine, on the other hand, is probably providing no services to anyone else on the Internet. Therefore, it is a user machine, also known as a **client**. It is possible and common for a machine to be both a server and a client, but for our purposes here you can think of most machines as one or the other.
A server machine may provide one or more services on the Internet. **For example**, a server machine might have software running on it that allows it to act as a Web server, an e-mail server and an FTP server. Clients that come to a server machine do so with a specific intent, so clients direct their requests to a specific software server running on the overall server machine.

### IP Addresses:
To keep all of these machines straight, each machine on the Internet is assigned a unique address called an IP address. IP stands for Internet protocol, and these addresses are 32-bit numbers, normally expressed as four "octets" in a "dotted decimal number." A typical IP address looks like this:
216.27.61.137
The four numbers in an IP address are called octets because they can have values between 0 and 255, which is 28 possibilities per octet.
Every machine on the Internet has a unique IP address. A server has a static IP address that does not change very often. 

### Domain Names:
Because most people have trouble remembering the strings of numbers that make up IP addresses, and because IP addresses sometimes need to change, all servers on the Internet also have human-readable names, called domain names. For example, www.howstuffworks.com is a permanent, human-readable name. It is easier for most of us to remember www.howstuffworks.com than it is to remember 209.116.69.66.
The name www.howstuffworks.com actually has three parts:
1. The host name ("www")
2. The domain name ("howstuffworks")
3. The top-level domain name ("com")

### Name Servers:
A set of servers called domain name servers (DNS) maps the human-readable names to the IP addresses. These servers are simple databases that map names to IP addresses, and they are distributed all over the Internet. Most individual companies, ISPs and universities maintain small name servers to map host names to IP addresses. There are also central name servers that use data supplied by VeriSign to map domain names to IP addresses.
If you type the URL "https://www.howstuffworks.com/web-server.htm" into your browser, your browser extracts the name "www.howstuffworks.com," passes it to a domain name server, and the domain name server returns the correct IP address for www.howstuffworks.com. A number of name servers may be involved to get the right IP address.

### Ports:
Any server machine makes its services available to the Internet using numbered ports, one for each service that is available on the server. For example, if a server machine is running a Web server and an FTP server, the Web server would typically be available on port 80, and the FTP server would be available on port 21. Clients connect to a service at a specific IP address and on a specific port.
Each of the most well-known services is available at a well-known port number. Here are some common port numbers:
1. echo 7
2. daytime 13
3. qotd 17 (Quote of the Day)
4. ftp 21
5. telnet 23
6. smtp 25 (Simple Mail Transfer, meaning e-mail)
7. time 37
8. nameserver 53
9. nicname 43 (Who Is)
10. gopher 70
11. finger 79
12. WWW 80

### Protocols:
Once a client has connected to a service on a particular port, it accesses the service using a specific protocol. The protocol is the pre-defined way that someone who wants to use a service talks with that service. The "someone" could be a person, but more often it is a computer program like a Web browser. Protocols are often text, and simply describe how the client and server will have their conversation.
Perhaps the simplest protocol is the daytime protocol. If you connect to port 13 on a machine that supports a daytime server, the server will send you its impression of the current date and time and then close the connection. 

### Putting It All Together:
Now you know a tremendous amount about the Internet. You know that when you type a URL into a browser, the following steps occur:
The browser breaks the URL into three parts:
1. The protocol ("http")
2. The server name ("www.howstuffworks.com")
3. The file name ("web-server.htm")

The browser communicates with a name server to translate the server name, "www.howstuffworks.com," into an IP address, which it uses to connect to that server machine. The browser then forms a connection to the Web server at that IP address on port 80. Following the HTTP protocol, the browser sends a GET request to the server, asking for the file "https://www.howstuffworks.com/web-server.htm." (Note that cookies may be sent from browser to server with the GET request -- see How Internet Cookies Work for details.) The server sends the HTML text for the Web page to the browser. (Cookies may also be sent from server to browser in the header for the page.) The browser reads the HTML tags and formats the page onto your screen.

### Extras: Security
Most servers add some level of security to the serving process. For example, if you have ever gone to a Web page and had the browser pop up a dialog box asking for your name and password, you have encountered a password-protected page. The server lets the owner of the page maintain a list of names and passwords for those people who are allowed to access the page; the server lets only those people who know the proper password see the page. More advanced servers add further security to allow an encrypted connection between server and browser, so that sensitive information like credit card numbers can be sent on the Internet.

### Extras: Dynamic Pages
Any search engine lets you enter keywords on an HTML form, and then it dynamically creates a page based on the keywords you enter.
In all of these cases, the Web server is not simply "looking up a file." It is actually processing information and generating a page based on the specifics of the query. In almost all cases, the Web server is using something called CGI scripts to accomplish this feat. CGI scripts are a topic unto themselves, and are described in the HowStuffWorks article How CGI Scripting Work.

