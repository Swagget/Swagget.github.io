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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDMPCX7O%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T200031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAh9ubA%2F9tpidSRvgxaoele7cVkCDXprGgUWsvNhrgVAiEAuzrBBywoPMHBR6alXjfgs%2FUQNBRsYwIddmmsxp2UH0wq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDL9ySCnQpAOIe%2Ft1ASrcA1kFW2WwDy7XVcmfTWH%2B4XWg45I6e94VIcVAkr%2B6OnZYRD%2BUyHisajITw34yZGKyXs4riz51h0yj0Ht9CHR9z%2FDkwrBo2ykZjz4Nu1y5XWPXlJodIlqzs5LRntAWaour86yr3lk1O8ekGWFfV%2BSm7Niq4fnhukME9BBbT%2FcFtmaMhr4qReby%2BIFBs8WOLzHuyqNsYh5DS47mMP5J7ZQdM3nujFCtE%2Fzqgp7a%2FGxMyTgpabUFaDhrMwcpD8BaIpWvn6SzHxNB5pY1UjOTsfxxa037P4DXOdkBsX77z48aFQ1LoTiGPP78Xwg0EGDo9Kb9ZXLGYxsYcPWKdI30kQxgs1UDWhNXrBtWqHvKNdZ1vFXYHo4bNxio487104XFhxdUrXRvLBoHdnewg5Rjsi6Cpe9h0P24madpjbRbFCGSfzgHFJgaLFwV9AXSrd0Hw4OLslsIWTqzHliRV9%2BSZ1nbnFztGFU%2B1YwTdeW7O68uay58kScOAiyMCNbf82BHooCODH9ce4E3wknbiVsUhhC%2FZ0Md%2FXT7JTzMSzrCj0DsBU7s1RKPIhLo25TemGdFXV7gRmiVBYKrsYuxQM7qMTJZRPD4Umczg5L6SO5K4Ccv4XQNUGa8x%2FiHD0dmI1V0MOW1xtEGOqUBtAdgiM2AYmwMSpgy3RQd8ohfo4MmaaVapIGajh%2BKGvYxE%2FkWC94ck%2Fzv%2FcU9BSA06WdE6RvqKD9f%2FcvgS5fDbmMOE8K2JU1dH89AUc%2BBVk8WPO%2FweKckX8AtkegU7X0btgd4Nnvu4JFyaX%2BZmvMbw3CmBXha7FiOdS3%2Fwr8tS9ZH%2BD1LHssflyWW0lQ3eglOvchl4LR92pRBeLDKeNebUN3y1zhs&X-Amz-Signature=e23e8b7616c7f2e71772f77de44aff7657606e90cf212c9f667c14f7c7b35637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

