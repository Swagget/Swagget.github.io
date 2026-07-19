---
title: "Deblurring Computer Vision"
collection: projects
category: cv
permalink: /projects/deblurring-cv
excerpt: "Implemented a research paper’s code that de blurred video content. However the code had an issue where the output videos occasionally had artifacts in areas that were relatively still and not moving."
date: 2021-10-01
techstack: "Computer Vision, Deep Learning"
source: notion
---

Implemented a research paper’s code that de blurred video content. However the code had an issue where the output videos occasionally had artifacts in areas that were relatively still and not moving.


We then used optical flow with a threshold, when the threshold was crossed we used the prior method, however when the optical threshold wasn’t crossed, we used the frames from the input image itself.


We then wrote the methods in the form of a research paper.


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKB5MAKB%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T045721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXDgBw9gVVJS%2BJjFFjLvmD2D23hi7Lwi0jYP%2BJoABTgAiEAlXO3v2UJaaIJOmJeMUefadCZcFCKL0uEzkS924M%2B1tsqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxGNfY7UCXULc3OyyrcA%2FkVQ69N%2BTvS54CxbCwchBZgiTgjrxFuebOh1aPmwAOGeTil87h9tOn%2FfaHY3%2Br1ZYltv%2Bm9n%2FMMBBeaKV4vycKe85bro7Syfkjehx9CCb1paZ1x3YuY68GeHnAEqkjjuISPIsxXEYyCfOE79ZS4WICS2Orgvc9Hl5j5OkZCMhPE%2BJYkz28SlyXu0tYlGk35eZ%2FDOGxPKxDPqzM89jC4MVVxccPJr20SL%2FfM34ZJNe3SVDS54cYBquBchob1srj6FxZGBvj8pv3kU0BUFs374KHD%2FcS1gPipJ2elR5Qed2QvanVH2716UKA0SqYuOw87q1RhhVUXbRMsGopWB05iACxh6CLnhvCgTVMj8Xl3yogd7ggdFw0RbboYOati201AlMhGLtCdKUg71J2YAf3xy4JmDzF5zM0inzNcdoZ6MtTIJzTIhA5N1WHw5O%2F4MnQJxjV%2Bevh%2FhjyHsIfI1e%2B%2FMYo%2BBJHw9Jpi5Y8Ek3LcutYjYyJF%2FK2imaLx1HzIOYGmK5%2BgOkE%2FOsp7SMfqEExWCRxQi9Go0vfYpHvvNbPPxN%2FO0QCXz3E8dYacbuUf3J1M29dCVPZYddCqsCjGrg2Gyw62E8TGbp%2FZ66PeKXoRhG%2BAV5Trg8msdnXVI5uoMJWF8dIGOqUBoWaCZ3%2Fmr1QtbLhj2K5EtN%2BHzr%2BCzHRWTbVdS6lVX9xXWjV60pl0eT2R759kMzopVzdjPKchFvsJlnVr7CtUoqA09AR8504lKFsiwgPv%2Bq0P5XWeUGs8R7BbyW0jH6XfTovXcG5KWskFsNrwOt5bxge%2BElDBEGx5ambw5JJxA7U9Fsn3iB7v7YDtZOqGu%2B7GSWY44if0JN7amDs6nQqdnRjAe8E%2B&X-Amz-Signature=76ec57527b4deacaa9bf7259bdef898aeb271676a7af7efdc90afb96f1c54625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

