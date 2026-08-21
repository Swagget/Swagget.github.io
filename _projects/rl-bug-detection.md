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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5KI42A%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T003204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxaks4TIrF2c6olbDetDm1fFq82kExu9eBz5Cql9%2BHpAiAbNZhwp3EPB6GGameGDTsC2o4XCOBBVHEhELRO3fpYvSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzVHGcxfR47ILYiisKtwDhc5CIP7QZ9Htayj4nybvv4kQFCUA%2BGwyV1RBTta5eXuU4I1cnvWyGq7%2FylptWCWRKPt4T7bXUUEDnyitUwyvjRBx37BCLTXd2T%2FPKMj40ItI3A06gNgK%2BBkR6h%2FcYGbo8nTeMS7RpI8qxv9KQ9x%2B3%2Fc305o99eax44o4mfH6XuEmB4ssQy%2Fi9PoCwdQ%2FTNfQzhj9Okjs60%2F5Q231ZGi6Ga9KKxr9vPuXZnRa83Hf4sluYk2V0lL3Nx8ueTeuH31NsC5b8RcAK1l5sPcD1wy6dBNY3FCQnsSdTC8xOKCiRFHbIfWGj%2BlBAyZI6O%2BqZMYt1SsmCc9YJsuKmr5JkEc7C2QToJxBCnzu0XukYS8BGm0FBKnNd9pEGCnyXEga73mD91F1TvocOp8V5DHLtLfghSu68A6iqauF4%2BsxFkwcVx06tUYR22vCcFG7JmWYjgHQgv69QRPceLI8q7y9HGWBt3fh0wfDNJk4nIB9o7E3qSs99JRz5sg7K8s%2FZMPRUghYfCNi6uBMxElg3EqqkGirKuCsmyDfUBDOUplKpGnLTW9D9xFHrd2WgJNnTP34%2Fly9pR4G3b61sXo64GqX503Pny9yBrp9tPBJ54HP9Sbt6lFBRz8HV9HVzA56R6Qwr66e1AY6pgF%2FJSROUI1QCWY3t0aSBL6fdmGiXTcvSK5Bb%2BT1LtoHtm9TA%2B6V%2FynOHad9dV%2Btb9LfXizzOu78CTuRwMVHkfiVgg4yhF4daes8oJQYZkozScFQ7PZsuYJr0AfyEnic1SepDxvTyUzcZeIM0ZrYY5cti3KUth%2FONzLm727%2B%2B%2FmX8DM4vDP%2BwBJZMIAvjY1yoETLWIZRsHMSeaOG7HcFgWWO7ByhN63L&X-Amz-Signature=4c3056e217a20d65e4e56fc9b3e8a8edc052fb8fbd7f1454e803383901e59812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

