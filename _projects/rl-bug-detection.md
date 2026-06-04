---
title: "Reinforcement learning research paper"
collection: projects
category: research
permalink: /projects/rl-bug-detection
excerpt: "Wanted to test whether an algorithm such as DQN which was able to play atari games. Could also detect when the game being played had bugs."
date: 2022-01-01
techstack: "Reinforcement Learning, Deep Learning, Fun!"
source: notion
---

Wanted to test whether an algorithm such as DQN which was able to play atari games. Could also detect when the game being played had bugs.


The idea was that reinforcement learning could also be used to understand game environments and detect when they were behaving erratically.


For this I tracked the gradients of the last layer of the neural network and observed them when bugs were thrown into the system.


It was observed that when a bug was in the system the gradients shot up massively, and this could be used to help with video game testing by flagging situations where bugs are detectable.


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q7QG2N4%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T212110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDt8NZZuYgyZd%2BoKgTglFnSsgtCvcytaq8vuJhbrmF6AiEA0kT0iDgvlRZK6ssKDOirRpsMXfdmuDSn7K44O6rTKvYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDPrlsOYMtnKCTYPzYSrcA9WZbe5RBb%2Fy96a4QBafPJ82AvlEnWWrsKEEaXnN3OFbQ649f3jkAcIz8KEeqRJJVwaKu7e0skVlW%2B09OVTdXALEzEORqpi6%2BMajqwWUNXGBtxxIM7kYnpGQVcBobjyCCLhBvPozX7H3KiSwX6mvCqZaOOVHx%2BXzDhLtvgLcttqr%2Bkb6vTgR%2FTOdiZuBt6ZWdE6Tvp74PlinQCA22%2FWkCmprhNlE%2BEUVweW8G471MlgR%2BwLPBIm15yQsSl8UVYDvXofukz0s3mw4irMGlGh%2B9RrxKQfolQ7Yk3q91fwfcAaE9%2FzPBYRqOX2sBrP5XCjd210CVrL5%2FTcF%2B8csDprjnJBHRVon3H5dD5kwtFfvmTZsADaQIY7sIdHu%2BKc7vhu6WqmUCXxDAeYsLSUrzVcCOjFb3X1N%2FzNjKfgMvZrZiayjj%2Fo56rmAs2xyaN4eZKJfjunxs9LnjxgbIuOtFj0BI8Q9pnhguQwLY0qmlta1KUQtaJwwS5rpbef5VyL0DH8ZatFO3ZhKw60%2Bi3OdKChlYr%2FYqJYsyUStFVV3VbUrYi2aenUoTpgNiLZZCjAMhuZzZmdizuhUO%2FhVwlHI%2FbT%2BecXWsCoj6KcS%2BkiscqB8UY9pS0ezqoyAALly0dYvMIrGh9EGOqUBk0e5ebp7uOWZd2bSmeaoMis%2FW%2B%2BgEEYt%2BwcK9DVDcO6KX0lnkE3xNtD3lBBSqc384DmgBkex0kqXxESmGsE6Ds3irAMGPcdjJ4nevXTAaMqAMQGuG0%2FvMy8bd8WBLQDoOYn0aqeL6W%2BNv7zOUoIJ6AYOn4TER1%2FnR7YoDNTdNDnopPq6tgsvcYr046VgC6IQfwH7ItUwp0TGsytujJy7dKRoMGHL&X-Amz-Signature=f583230ab2974ff38ff1324898adac1175e9959332b1c8c0b5744f2d86341a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

