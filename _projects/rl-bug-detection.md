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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2JPUBWC%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T164111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLwMX08n99Truvb9sBL3YOmGFMKsH2qMucs9N6ML%2BTyQIhAKO5f12zqBXPGMQyw4Mb1jn7uuTijFw13qZira3v9DZmKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBBpSeF9SUEo1TuQIq3AOlVhumvz5fuoDJYQJP3goLn7XR20od%2BgHqO7j%2Bsqln6yxACTw4jmK3ye2glqIDk3vdiUCMoppZlfws65Pq7WHM5YW%2FcsF4c1FlXkWRAaY4%2Bn%2BWtVaqFZTIaQuRhgUTPEAup7%2BHr9sYOdNDrFvf2UPkEOTrFKQ5Xs4mPgL86bmrRDbrwjT3YzAyTSSzxJhMSn8QrFP6DBXm5haIt90o1R4d4L9AQONUwLLEXvxHupwpZsBS8hWNC%2BhWiDLc5%2Bt7Arq%2F6EqTn4J7bx8%2FFNsVuHM8%2FDpG25i5FjlMx%2FkavvCEq6B2XVRqJFGd5btIa8G08GiMn5VscTrd%2BUmdmOHO3IPBSgPtRcBIUqcUpX9tOuPCAccGOePSiZ5FGBod3rqVikyUqnLyZ6Qo808y8Rau1ORu5CcdZ1LHNPwo73cliJuOYA3H%2BBNdS1gKIIMaCigyjtdS9PzWIM1wuyc%2B72%2BROqQgF1ZTtndI0wqA9Q9on0qflIMtzqWf%2BB4vXLVDtbrQ5QHR3UsHaDt2YoJdum142%2B0eQxfVlAHiaUJMqtAOZ5FNtzLG5azNL8qs7Fi5elR3UAXK9KrUqa26pWke8zB4dynwiuTSQSZfB03QbG08mN74Otz9039NO6WOfMQVYTCqoPPSBjqkAYXxqKuwROdZ4OsgifcuuCTYevMvnBM2%2F1kg0APl0eMmSxPmxFvOVD%2BE3vwNm9K8gLuCv7uHuiKpWwxeBui0zaY72Y%2BwFvNIKEgAYy1Mo6e%2FLnkV2plF%2Bkrjkm8Nol0ucIEzSrBDgW5TbEwMn6NwylnAi34sSD0oZ1djMaLvpFl%2BPsOT5n44YLtCERDStrxfK2SpgO%2B4h5qXLrsoP8%2F4NJiM36YP&X-Amz-Signature=892ba5a437d8caffb6950b5092399f2dc12a7b02699cc5fa4ad9f384d2a047d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

