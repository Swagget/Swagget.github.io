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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTNM5VI%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T055952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCPy8H8zFICD5ooI4sKAcmI%2BRPrPnCfGEyvXPqx%2Bnp7wgIgSvLHq%2FEt1QWFz8feh%2FUx7yaslRxpGbYBNJZv4I%2FFibcq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNVxUzojaALL9EKsoircA8%2BMB0sfKFCsQVgkQB0zV3P7TIyb3mAshUViKxqXiu%2F%2BckjNFQkogNnaViDTMBx1OQ9IKjPDdmePolUh950f6z9OkXAK5Ze9%2FF2i1ldYECUOs7S9X9DgCqboWBIx1ntbZJ8hkLjXtv7DYhoknjnYdG52dtP5RvKtmWfdyLLxq2V37T4MboU5A60zCXvB%2Br0DWPAHxB2BKOCTwS%2FHLhnNg724%2Ft4VSoryeW99aFFttax2T8csSzbbyFUJlSEcEDQrQMDLcNDDNTnQVABNUoYBaiHhaCxyKmCpZ5EOt%2B7MipNnUEEp67PScMiiQxhmeNxq2fK2vyXBelOW85%2BasABjjjcdSxqNaQyrGUEZPDR2139RQm06qNsqbIB65MoRrq3H2X4bMUfxTRJ5EfV5riqzP%2FIVSZG%2FsRdphAKgZohEsf6QlSWUJWRqGsUGLH1s19fNn%2FwhNHH65yw0kOLdx3mg3Sul0SMP5M3ozd5NqvIxLZyMQq%2B0OQOS866Z942QPAMYYUDCWlTrpQpLqWjTf5TApmBVz8FMHxq7PrKuatqsg6n7YALPSIrpGXPkUd%2BBMkb77Hk6vNSckp9%2F%2Fi8FBj3THEn2EjXe6XBlBPX1xhpfLzqSn72OQzPjN0o358lrMJLA7dEGOqUB4wsR5cnxyAtyPUsxa7seI2d39gXep5mhxk7yJJ8JujHq3iXfxDYY1827zA8dl%2BnRJLGXW4m0R43XI4ggX6BwBJwhpcM2a0u4RR6ls4uCxajWzMYPpNA7%2FVRXlH8iDGplstazP0FUEuNyhBlVsXOxlzincNa37z%2BjO5pHEL4N%2FqS9w8wHWdOljlvX%2BrGZrRRBCcoawthKFHFqsfZT0j15mJcQBtoh&X-Amz-Signature=7335d1aad3687c3711af068988a9adbc2e88f8939783e4d73b54ddd0f9fb8d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

