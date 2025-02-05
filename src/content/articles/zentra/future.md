---
title: Zentra's Future
slug: zentras-future
date: 05/02/2025
order: 1
---
When I first started Zentra I wanted to make it into an SDK that could simplify the development for building FastAPI apps with Next.js. The idea was simple: a CLI for FastAPI with auto-generated snippets and an initial project template, and a Python API for building React.js components.

I dedicated 4 months to it and achieved both of my goals but never published the component building API. Why? Well, for one, it was incomplete. At the time I was focusing on the [Shadcn/ui](https://ui.shadcn.com/) component library that had ~40 components. I'd finished about 10 of them and had a startling realisation - I was only making it to avoid programming in JavaScript.

Over my lifespan, I've programmed in PHP, C#, C++, JavaScript, and Python, but always gravitate back to Python for its simplicity and readability. Everything else just feels wrong. As this dawned on me, my passion for the project wavered and so I eventually stopped working on it.

Since then, I've come to realise that there is a much deeper problem that needs to be addressed. For most of my life, I've been a Web Developer, it comes naturally to me, but it's not what I truly enjoy.

I enjoy building applications that have real physical impact in the world - bridging the gap between hardware and software. A future that could simplify our lives by offloading tasks to physical counterparts such as robots and embedded systems. So that we can focus on bigger picture problems surrounding our world.

That is a future I want to build and be a part of and so Zentra needs to change.

## Zentra 2.0

At the time of writing this entry, my focus is on Velora. A framework for exploring small-scale models for control problems. Once it's complete (or at least once there is enough there to get started with), I will need a way to interact with hardware systems and what better way than an API?

I haven't planned out the full details yet but have a general guideline for what could be used. Simplicity is key here, especially if it's going to involve a lot of experiments!

Here's what I have in mind:

1. Zentra will remain a FastAPI wrapper. CLI commands will be limited to project creation and perhaps building for production (more in this shortly).
2. Information that needs to be stored in a database will go through Zentra (FastAPI).
3. ROS2 integration could be useful, with a CLI wrapper around common `ROS` and `colcon` commands to reduce mental gymnastics.

### Point 1

Our first point is critical for speeding up development. Sounds odd, right? You would have thought CLI commands with auto-generated code snippets would make things easier, but it does the opposite. Without the foundational knowledge for developing FastAPI apps, the snippets make things worse. I experienced this recently when trying to use the tool in a new project.

My FastAPI knowledge got rusty so I needed to familiarise myself with the basics again, using the snippets felt extremely overwhelming. So, instead, documentation with recommended route formatting is a better option.

### Point 2

Zentra has some neat little features in it for building robust APIs, specifically helper methods for simplifying response documentation and providing A standardised format for response outputs like this one:

```json
{
    "status": "success",
    "code": 201,
    "response": "200_OK",
    // Data = dynamic given a Pydantic BaseModel
    "data": {
        "email": "johndoe@email.com",
        "phone": "+44123456789",
        "full_name": "Agent 47",
        "is_active": true,
        "username": "agent47",
    },
    "headers": {}
}
```

Most APIs provide just the `data` they pass through often without a clear indication of API status or message. From my experience, it makes things harder to debug and tanks the developer experience. Explainability and ease of use should be two of the highest priorities for building APIs.

With regards to the database data, I'm not quite sure what that would be yet. Could be sensor data, could be prediction results - all I know is one will likely be needed. For this, I'll focus on Supabase. It's easy to implement, takes a lot of the hassle away from dealing with things like image storage and authentication (it's all built in). It's literally something you can set up in a weekend, which saves a lot of headaches.

### Point 3

ROS2 is an incredibly powerful robotics framework. The node system is so simple to use, it's great for modularity and reusability and has a lot of features straight out of the box. You can also easily integrate topic outputs into APIs without many issues.

Regarding 'mental gymnastics', ROS commands are often long. They are heavily documented and really useful, but are a ballache to remember or write out 24/7. So, a simpler method wouldn't hurt.

I've got a few other ideas in mind for automating launch file creation too, which makes things even easier.

---

I don't know when Zentra will be back in development, but I do know this - I look forward to building it!

When the project is back in motion, I'll add another journal entry with my plan of action. Until then - back to Velora! 😊
