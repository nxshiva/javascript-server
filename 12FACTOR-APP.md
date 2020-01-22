### Introduction:
In the modern era, software is commonly delivered as a service: called web apps, or software-as-a-service. The twelve-factor app is a methodology for building software-as-a-service apps that:
1. Use declarative formats for setup automation, to minimize time and cost for new developers joining the project;
2. Have a clean contract with the underlying operating system, offering maximum portability between execution environments;
3. Are suitable for deployment on modern cloud platforms, obviating the need for servers and systems administration;
4. Minimize divergence between development and production, enabling continuous deployment for maximum agility;
5. And can scale up without significant changes to tooling, architecture, or development practices.

### Background:
The contributors to this document have been directly involved in the development and deployment of hundreds of apps, and indirectly witnessed the development, operation, and scaling of hundreds of thousands of apps via our work on the Heroku platform.
This document synthesizes all of our experience and observations on a wide variety of software-as-a-service apps in the wild. It is a triangulation on ideal practices for app development, paying particular attention to the dynamics of the organic growth of an app over time, the dynamics of collaboration between developers working on the app’s codebase, and avoiding the cost of software erosion.

### The Right Environment:
The 12-factor app methodology addresses the following challenges:
1. How can you get to fail faster?
2. How can you get everything you need ready so then, at a push of a button, you and your team can get your work done?
3. How do you take that code and then through process make it available for production?
4. And then how can you automate that process with continuous integration, continuous deployment, and even sometimes continuous delivery?
5. How do you get people to change methodology? What are the processes that they need to define to do the work?

### The 12 Building Blocks of 12-Factor Apps
##### 1. Factor 1: Codebase
You need to build on top of one codebase, fully tracked with revision control and many deployments. Deployments should be automatic, so everything can run in different environments without work.
##### 2. Factor 2: Isolated Dependencies
The second factor is about explicitly declaring and isolating dependencies because the app is a standalone and needs to install dependencies. This is why you declare what you need in the code.
##### 3. Factor 3: Config
Here you store your configuration files in the environment. This factor focuses on how you store your data — the database Uniform Resource Identifier (URI) will be different in development, QA and production.
##### 4. Factor 4: Backing Services
You need to treat backing services like attached resources because you may want different databases depending on which team you’re on. Sometimes dev will want a lot of logs, while QA will want less. With this method, even each developer can have their own config file.
##### 5. Factor 5: Build, Run, Release
You want to strictly separate the Build and Run stages, making sure everything has the right libraries. Then you put everything together in something that can be released and installed in the environment and then be able to run it.
##### 6. Factor 6: Stateless Processes
You want to make sure that stuff is stored in a backing store, meaning you’re able to scale out and do what you need to do. The app is executed in one or more stateless processes. As you scale up and out, you don’t want to have a state that you need to pass along.
##### 7. Factor 7: Port Binding
“People are back and forth on how important this is,” admitted Pryzby, but argues exporting services via port binding allows your internal customers to access your endpoints without traversing security. Then, you are able to access your app directly via a port to know if it’s your app or another point in the stack that isn’t working properly.
##### 8. Factor 8: Concurrency
Small, defined apps allow scaling out as needed to handle the varying loads. Break your app into much smaller pieces and then look for services out there that you either have to write or can consume.
##### 9. Factor 9: Disposability
Make sure changes can take effect very quickly. It’s about making sure you can start up and take down fast. And that you can handle a crash.
##### 10. Factor 10: Dev-Prod Parity
Development, staging and production should be as similar as possible. Continuous deployment needs continuous integration based on matching environments to limit deviation and errors. If you keep dev, staging and production as similar as possible, anyone can understand it and release it. This is of course simply good development but it also enables a lot more scalability.
##### 11. Factor 11: Logs
Your app only worries about creating a sort of event stream. Then, depending on the configuration, you can decide where that log will publish.
##### 12. Factor 12: Admin Processes
Your admin tools ship with the product. Pryzby warns us to not go messing with the database. Instead, use the tooling you built alongside your app to go and check the database. This also means that the privileges are the same across your system — no more special cases that put your security at risk.











