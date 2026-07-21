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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQDRRGT2%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T045515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIYHZCDVMV4t994ABLs3gShoGkjrSao2vG2JovzNl%2BQAiEAwNeRnoQp1LW8OEBp8wiZD5On5Ydw2cEiwQrj1ycyvhAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFTzxy1E6XEcDYMByrcA5Uu5wzzkmst0ICMYQNe4iILD6YptaGodTg5QybE6IC7A9JduLUrSzkAmrJdGEpImOlArz6H1gXP0fK1cCdq2Ju6z3u4QmogrlhpkN7NjqWvnLwLZij3G%2BieVyiqEItAyrH5rS9BhRGTTp3Hl0n%2Frlw1H4ce4ADsDUrrk3cOlCT33K8FzDXB77vHi1I2JqFvv%2BxatgH7bLUfxMhNQ7D1Pke4FWEl2ov7kINcubxqYEROLKxgKMNQaLywsCft%2BVtZCDfEpoTfY3LWkBqijcplxX0GHo7UZz27X%2FILDKLL%2BGOckbL9G0bflhxG%2BR2E8GC5pJCDFLiEk1FMJWnhF2gMO2k%2BB%2FN7iEU6hbXSkGWkmX5%2Bb4GRL063SUL4%2FnlA4JpDlPRDcQfLjmYkLgoc9PyJV09CD%2By9zeFykRsI7SnMMz6xdZKsDgeoAhu9e6NUBkvqDL9o%2B5VWL08UHj6C6KU0UVV0dhxvviJ3r%2B6yr8b5NrxvbKH%2BblZlXVUWwddKXkrd7Y2L3pnsBRUiKrGW3Yg%2FZgdPTkk6gHluvi9U2tUO0iohmLdBuVgf2lzX7SJMwL6nsK7DeWb8BaWhC0fOSDiECi7cmG32csKIcgnmmIUdXxQfjnroPwBv6CxW9KnWMPrw%2B9IGOqUBVLELviqx6jlPnBNi4U8jG7VN1pf6zqGqewknqmL%2FK%2FCvOWYv050LsrgffXYO6MXQZmjFxH%2BY6nX6a4AZ0aYdLoinzoFlSTssiv8b%2BonZ6eoWI3F1a4wMVc4uZoiCvkiLBzsFHWivRvWP8sf0QD9Wzbcr%2BT%2B%2B%2BJNrIL3wEGd6oGZ9H0%2BLEGThC33uUsTmqTNq%2BB5l8Lof7IfAQBUn5O1nsMha16nL&X-Amz-Signature=6a3b79432ca8112cd07705e20a426823acf799b061c70416f7a0a3015560e5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

