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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WWI7FA7%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T164312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEkKObSThiDif%2FN5SVyA851Ym8e8aYhtEB7MZUgGDC6zAiEA48YeqHC40utHE396g883d0rHr%2FeehbWAT%2BmQQYFs%2BFgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfdEC%2F6CYESXZKR1ircA75W9Y5jzR7pOxIkAr8BQab9W%2FQ3I9YtGBG6ayFGKkDLA0uFUeWZCEceuq%2FWZ4fKK2H8Mybf5ncx5dG9CGr71JFJ7696p8Yvr2riwmqXm%2FvNkjsRiPkyhFrl6YWPqAFUA5sHgfxTFfXRPHFC8WXuS7fdb%2BgzQR%2Fn2sLPgRybGuETiEbjQMWuv0dD74rF1621w0J7Y5siflfPYiUWTCHTZY0QFLURicZyGz%2Be9Y%2BEGFM%2FpTRY%2BNRtHjc4jXcBCEN%2FEnN1cGDkeBU8bPBZhxfV4mRsvKgZLCHwVBGBvNcOAvkTRFRsKxBVdta2HGCHRmzRmFftbTlaIZ54Lj157ZLXgEBTBpvMtIrtvpBdUi01I%2Fjvb7fQkMSo8jrIS0C0Pumyfa5K9fSUGVhxDPD8NCpkDli77AZKUgXz6ryXeT0p8WAMnpjP8sIWDKlW6eLUcxiX5aEnlH%2ByonzleV%2F9lUYYcByeHGCN7WgHbDvd1N9KqQKErwSSkXAD7F4hYhuK5W05z3iO%2BNLmz7mj4ymbg7iu2tHGn2o1FQn5aDmMo57iQs6nKBPWzQR8mThTx37oZDwkeDf7l%2BjMzFYfOzTNEFBeYagcNKtuWoMtu5jol%2BmpNbpjji0TMhR9MyJU8btOMI6y8tMGOqUBFRIXpNcu2FpV1e0xUpBkxT3WnKwkrSE5MZMwNYH%2BQwZmfLlV9hIBMkRiVliwIDLz8sWX86atQKbNCl9XZWB%2BNJZuRgPMS%2BSd9W2pvUJokFfIBPTg1xpKCOoPlilKWT3KFtYSnw98rmGdyoAjlbkUZ98cmIX83sWHjxF6Muw28CbItkUnRjt9OLGoFJCbc2zD%2BS8m2ffOnHwuldwKaeSWLz5R5ZgK&X-Amz-Signature=3343a738d9cef6ce3ae9d9f8cdadebb6e108468d0a8bf323d5e32e8e99b8889c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

