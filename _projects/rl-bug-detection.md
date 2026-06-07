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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S5H3HAN%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T065602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQPHB0TmI8KSJ5EK%2FWPgWdFjE8w5UPWfXxE6TNtfC7nAIgN7kRJDGeT1ocjL3t48cRaahdmxGnEUX1GYGI6426yG8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTRexkq3USIijUWISrcA045llliSxaQeWxzlqmvZ5mOM83LIIUBM%2BSTbrZIo5ani%2B6bDIk7L006VtOUNXb2NOi30xc7FuGaofmjim1FWrM7frlO%2Brb5NWNaEmoQXyBaqvMcheBbStOv9oDVaoz5fwa7UwLh1XUV74vIGD5Lo1hatxn%2Fv63ZayxwVPKAfBKZG2s%2BSDAul4AZ1yVLNTIqtSsmSTh6WAwZnyL5XJB0E6wLTqVMM6dv5h0OKrc1pFt2vf%2BKyaCbmxQRDvHPYGQ16wQDcWHw%2F924YUo3Cc4QJhH192uQMMUtcfeAAQQht37Jy1%2B4vyPZgna5SG7myUSsXEmt9bjvKM9x2kP2Zs%2BdhaNUjteuac0EJx5LNpIqr4P34JOyytRWVn1KyGznnMKt%2BWIw0bDrwrHxftOenB9a9qfmGkoepRvvfcmHV9Z0XET5we5ZCiSYT1kyvsg4iP5vTFsmRbisTEWWVGVV3aQTwxOSit2nkaVoX%2FJXFdRkHL7A1QT5wa72zatDOs70GjT9pq9lFo0VDcK1SZxW59A92jNEj8ak8PuS2OhEd5Ian3%2FBFSwJpnmEHicQjfJnMjW0bUTxLh%2BNm96dWC8oOoZ0N7of43acDxpORlbMoqkKhFz7k07Ca16OlWZ9S%2BR8MO2ZlNEGOqUBU0QEDG%2BVUmT4R%2F%2BOxGB78T34UT39akkIOsU%2FTSUiCm%2BosMf1W32aW74L2LeTAg41mSa4%2FFUKkmyIW622pj%2B%2BxKPCjrrM6Ap4dTdEMNd1pEo9xCXXp2oZEcmDsOOwPOCtfKS%2FGKNRi8gBoRI59p6TlVrP5RKMoN2h7rEgqPMezH9OcGvicH1icJBVbUi4mXuSsvqdZxQfKim97SMKDyxS9YfjbYd2&X-Amz-Signature=8a45b9d3c72841baaf233a29337bd177067715659ee97d9e5509be4b9b43755e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

