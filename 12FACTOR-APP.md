Introduction:
In the modern era, software is commonly delivered as a service: called web apps, or software-as-a-service. The twelve-factor app is a methodology for building software-as-a-service apps that:
1. Use declarative formats for setup automation, to minimize time and cost for new developers joining the project;
2. Have a clean contract with the underlying operating system, offering maximum portability between execution environments;
3. Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration;
4. Minimize divergence between development and production, enabling continuous deployment for maximum agility;
5. And can scale up without significant changes to tooling, architecture, or development practices.
The twelve-factor methodology can be applied to apps written in any programming language, and which use any combination of backing services (database, queue, memory cache, etc).

Background:
The contributors to this document have been directly involved in the development and deployment of hundreds of apps, and indirectly witnessed the development, operation, and scaling of hundreds of thousands of apps via our work on the Heroku platform.
This document synthesizes all of our experience and observations on a wide variety of software-as-a-service apps in the wild. It is a triangulation on ideal practices for app development, paying particular attention to the dynamics of the organic growth of an app over time, the dynamics of collaboration between developers working on the app’s codebase, and avoiding the cost of software erosion.
Our motivation is to raise awareness of some systemic problems we’ve seen in modern application development, to provide a shared vocabulary for discussing those problems, and to offer a set of broad conceptual solutions to those problems with accompanying terminology. The format is inspired by Martin Fowler’s books Patterns of Enterprise Application Architecture and Refactoring.

The Right Environment:
The 12-factor app methodology addresses the following challenges:
1. How can you get to fail faster?
2. How can you get everything you need ready so then, at a push of a button, you and your team can get your work done?
3. How do you take that code and then through process make it available for production?
4. And then how can you automate that process with continuous integration, continuous deployment, and even sometimes continuous delivery?
5. How do you get people to change methodology? What are the processes that they need to define to do the work?
As with all cultural transformations, answering these challenges could down to three parts: the people, the processes and the tech.
“Understanding the processes and educating the people help us to understand that one side of how do I build an app to identify potholes so they can get fixed,” Pryzby said.

Nine Rules Guiding the 12-factor App:
Pryzby offers the four words that 12 factor stands on:
1. Performance: For 12-factor apps, you’re scaling out for a lot of copies of the code, meaning performance must be a priority.
2. Elasticity: Focus on scalable components that can grow and shrink as needed. Pryzby recommends Chaos Monkey as a tool of not only bad data but scaling up.
3. Resilience: You want to loosely couple your pieces. By each component doing only one thing, uptime increases.
4. Security: All data should be encrypted whenever possible, building security into design. If it’s a known fact that 80 percent of attacks are internal, Pryzby says it’s not that they can’t get to the network, they’re already on the network, which means you must ask the security questions before someone else asks them and it’s too late.
ask the security questions yourself before someone else asks them when it’s almost too late

And then you need to follow these five design principles, most of which are so logical, it’d be good if they are followed for all cloud-based services:
Do One Thing and Do It Well
As you yourself know how can you break things into smaller components:
1. Decouple the data. You don’t want any of the data inside your app.
2. Keep communication to a minimum. If that component dies, you want to make sure you can still get the data. By using a backing store, it means you can pass around the data more easily, and it also means you’re passing less data around the system.
3. Think about how it will perform in scale. This whole system was created with scaling apps out to large communities in mind.
4. Security. Seriously. Thought about from the start.

The 12 Building Blocks of 12-Factor Apps
1. Factor 1: Codebase
You need to build on top of one codebase, fully tracked with revision control and many deployments. Deployments should be automatic, so everything can run in different environments without work.
“If you’re thinking that something is different in dev than in QA, don’t put it in the code,” Pryzby said, echoing a common theme you will see running throughout the 12 factors.
2. Factor 2: Isolated Dependencies
“How many times have you installed or tried to install something only to find out you had the wrong version of glibc?” asked Pryzby. Or perhaps you had the wrong version of Python or the wrong version of one of the Python libraries?
The second factor is about explicitly declaring and isolating dependencies because the app is a standalone and needs to install dependencies. This is why you declare what you need in the code.
“Your development, your QA and your production have to be identical for 12-factor apps to actually work because when you scale for web, you can’t have any room for error.”
3. Factor 3: Config
Here you store your configuration files in the environment. This factor focuses on how you store your data — the database Uniform Resource Identifier (URI) will be different in development, QA and production.
4. Factor 4: Backing Services
You need to treat backing services like attached resources because you may want different databases depending on which team you’re on. Sometimes dev will want a lot of logs, while QA will want less. With this method, even each developer can have their own config file.
5. Factor 5: Build, Run, Release
You want to strictly separate the Build and Run stages, making sure everything has the right libraries. Then you put everything together in something that can be released and installed in the environment and then be able to run it.
“As a developer, I want to be able to develop something that is this nice, tightly deliverable object, thing, that I can give to Ops. Ops then can put it in that environment and run it. And ideally, I will never hear from Ops again,” Pryzby said, “because you’ve made it a well-defined solution” with few dependencies.
6. Factor 6: Stateless Processes
You want to make sure that stuff is stored in a backing store, meaning you’re able to scale out and do what you need to do. The app is executed in one or more stateless processes. As you scale up and out, you don’t want to have a state that you need to pass along.
7. Factor 7: Port Binding
“People are back and forth on how important this is,” admitted Pryzby, but argues exporting services via port binding allows your internal customers to access your endpoints without traversing security. Then, you are able to access your app directly via a port to know if it’s your app or another point in the stack that isn’t working properly.
8. Factor 8: Concurrency
Small, defined apps allow scaling out as needed to handle the varying loads. Break your app into much smaller pieces and then look for services out there that you either have to write or can consume.
9. Factor 9: Disposability
Make sure changes can take effect very quickly. It’s about making sure you can start up and take down fast. And that you can handle a crash.
10. Factor 10: Dev-Prod Parity
Development, staging and production should be as similar as possible. Continuous deployment needs continuous integration based on matching environments to limit deviation and errors. If you keep dev, staging and production as similar as possible, anyone can understand it and release it. This is of course simply good development but it also enables a lot more scalability.
11. Factor 11: Logs
Your app only worries about creating a sort of event stream. Then, depending on the configuration, you can decide where that log will publish.
12. Factor 12: Admin Processes
Your admin tools ship with the product. Pryzby warns us to not go messing with the database. Instead, use the tooling you built alongside your app to go and check the database. This also means that the privileges are the same across your system — no more special cases that put your security at risk.

But Who Uses Factor 12?
Of course, factor 12 is only a solution for certain companies. It’s not ready for those that are still trying to overcome the baggage of their legacy, on-premise applications. The right use case for this DevOps methodology is in new apps or instances where you’ve already started the refactoring process for a brownfield project that you’re completely reworking.
It’s all about deciding what your main problem is and if factor 12 can solve that problem. And even devotees of factor 12 don’t always apply all 12 factors. Will Koffel has written a good piece that highlights which factors are mandatory versus very important versus only rather important.
But, when it comes down to it, as always, you should prioritize what works for your team.











