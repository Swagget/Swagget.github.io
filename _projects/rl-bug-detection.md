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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZ4MW73%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T164132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDEnbNvd2r9BNk9Ds0JVCSI8MnFyz0hEtDm%2Btqd9O0u2gIhAMp3qg2LaKJExCabdBse5ZG1zIigpoUYyrDGCLw9LiXbKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeBL%2F173l5PBkaq3Uq3AMee7u%2FvPxZtOxBd4jizEIEcJb%2BX4R04PHD3ZIM%2Bz2XEht7eUCnr7m9r50dU5ygb4kaWoyDufFt4Qup35CbDt6lB9b5LLvEY%2B%2FQxpk4qztvZwY%2FaRSO%2BIQLuO776sRMqiqh%2BfcTCI3Nwbt9PpqQpSygc6gO%2FJCy%2BaDEYK%2Fhm%2F57Q62dh1S1IEfmqmr5RyXYkBGrcAORbFqHV1nSgBcQkWjW5Mz45SSgllFlUrejNuqE4Gk1e3vQlpEp5Ti7n7xD%2B66wTd5INVsE4rU30D6LUMmhW5TiV0RDy%2FZKHQIRVMKnszg%2Frh8D4wqFF3E%2BHoMZbg3NYqCjxlJeMV5YDastBCAl3hDdZI72ee0pGolWahdFtJGUxelI3g302yr1lfCqc3ym%2FQZy5XYypBzRCu70WK7EHHTzjeJH3nXRu2iUBxrFH%2F%2F%2FMAgehCTeOFyiRfDvlPI8UP0yYHVsmiGctybTLNVZdh36qKhtK0NfU33fQlq8uBUWORYJTsw5y6SrvO8VVPU8ZAVwxEasP7%2Btrzg3Z4TL%2B4suI0Jp5Yja%2B%2Bd%2FfG%2BRCImrXjGrXcnyn8JRijMptQP52A09dXTDQQYWFbyEex1KHjS8dUdTOYm39UrJk%2BsTXaOdjMQF0V7ub3YNZzD7%2Fc3SBjqkAQjawOH4Rq2uMrC8oMhMO5qKno1ywtPxheHY%2BNfSnNdlTwCvUH4Qb9d%2BMtpIrL7d6uxJG955GBl9Y15i0fJjZPpdyVb0NFcG46rCeCTRwqSTZGmXNIkfzPzhFm9vBkMOVukhbh%2Fg6oZ1%2FjqDNJzvolz5n3ox9QN%2FXitMLK2mhrybRWfhG35OAOLhlI5TM166QyYxsUuDEvmmCUxNw4F844%2FsjOv%2B&X-Amz-Signature=a6a150d1e86b9dc4712f6197b0a02bbcd8e27412d2b135f777706b6058081e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

