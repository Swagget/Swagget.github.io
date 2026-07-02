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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYNKOHBD%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T095759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAzoGJnucKIMiBCAb96emPPOEk3rDSTUJ7tkcqYYt5LyAiEA9KIE%2FnDVuVZqaultC0qzdw2lS%2FyRy9%2FG23gn527HihQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5zs1HFPJv3mDIPuSrcAyzeERDrZ76NcYw2B8GfFJaYZHnZQtctaKbScV8VXbyB2QOUnYfJiFHXOJHRcp1tCFDvCUYwj6iOMMmCHO%2Bfkx8YKT8F0CGWTCZ%2FaXtzKmfWoP57%2FbNuIY1p8OaoD16fU1hOkfW4LnonPoABOKOZO8NUGtZiUz%2FO2ncm%2FU79j2zA6LQ%2FEhiJATHSbNFEFuTfFY5L%2FmpEIF85JqWCwYTnftv%2BUM4AP8KeuT1a6ubl%2BCgYvUjJV37govZAKI%2F1koYUF3Fx6ih1o%2BO9Fy99k6x8HNisXuCq%2BaWgeEVuzjfa4X4BPjGUX8vvEGcoM40hFprcZoch2I7tN8pHRmxWVddwbYdi1tN35pX7ApenO1mysckpust95VdSwtIbxzCntVlI7dGG5JVHE9vmJ2nySIb9aS9pBzY6zaeNuGfWDHtXY8dXOFKRJrx%2FYPB5UTDP0YPv9%2BhAK1SwhmAt8RtFWD5y9KWXu%2F7Or5t8TRoPeWkKQeZmwVByjcEVRcPxK%2BqGbZodQ0pxPOEXLoRtPyPpdkOGALjpLObGHy6kT9dTn9FXKxx58zAOYnMpP%2F6VXMptz2ERRtz4rkvnv%2F9AoyzjtpcvI3P5w0XcpaDUpUZXeFsBWnvuS%2FPI87qX015b8%2FtcMMXPmNIGOqUBeHzPiKYrGoTKIvZHZpOQvmot5a2TNOyMPbl9gi8yPvLC8gqV7WDw02YbcQD6dFfwG5MDvaU9pANzA12MZ2ZV2nepMcASw8xSMLp7Rk8RGDg2FRc%2B90rgjokm2ikB%2BF%2Fpjy2cuS%2Fg3gpUYWzXfmTxyjyI2cKAV6rKBx0S96tLfUtQM6yez6l2nqPEXKhIbODBXTeQnsJUTj2PDoME%2FtzNvqQlrwBg&X-Amz-Signature=884abfb9f3931b51316b62f15653e2685dd159c53b4b4e75a31c67e156968d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

