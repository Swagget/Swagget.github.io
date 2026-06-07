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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTM43L2%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T114108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2GHfKXikJPoSzfUwNxVM2kw5Jr38ewlddXsCpHHj7BAiAhVPn4UYAV6NtGQF8NM4Xqoeqa%2FAFh7vkxVyXt4NyZZCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM02muiX9XQs0lpMtCKtwD0f0%2FoxiQh%2BmMqzK1B3w9s3JiXpjdYpYF5q3bxLo41uUqu1QywsHrn9NHNu10AgzgJf89oqg1U3Qewz0lPKHUl4%2B6WQpbiMDHgeNlXhV0z6AAuJfY7KEbpU439DQCJsHM531ow3Tu2CZbpC%2BmkeKSecVmgGNKAnfWc5As6pcVkZgg7k3DzJmueW9BeR8l0x2OrniZ7ZEiZe3ag8FdK60J%2BOn7XQ03Jsid%2BauzWLHd5DKSEE6qusewTe2xSn6KYtQNbQcl51AtCiz6pOlNHYfhKkW2RX99xvquyGlix0TAfJg9DfVVDxDxUrs4M3qdFXHAyh4EOMNE1Ph0l6YggL5fhJY0H%2FNcK4gkjyJ40M2fEbHulC%2Fl6j9xqzBNqOC41kaDM1TB7PKbpfujmU5IXQu3vUBQbVfxesN6vzeemL8sdEwGe5CaycPlXhaXvL5U03mCylWgU9%2BNnjxadoOs032e5uSgR24Io16MgoLB3o%2F0WFMJW%2FSN1NlSdfwvGKTM6u1jptBLE2KWKTM%2BoYNfx9Y7o%2Fyi%2BYaL4zg8yHyRyvhYwE%2B4T4cc8bd2IG%2BVL%2Ffl2ezXpZzXGacZbj0rLxsR%2FoS4slHIcS7ojpPDSgHNDG4Ts0H4rG9vQa5D0SPE%2Bsgw5o2V0QY6pgGWS0ZkG23Wwn5Ic1ocdYwxVK6p1X8riFEzVIgw%2F2Tg3CUt2yPubw3sX%2BZMd0ri7IjTBijAK914XtCGdxNSApFzZn5E7Ydqt13MO6urVxw7DSOCiFRl1r%2FP1Y3OYPTfAZlX80JRWRKe4OxV%2BZtLWAZI9lYypKvxd9syQMhR4YG3ow9MENryHIN7C%2FjuUUqBemNW9U2JtYw7WPcZIA61NjyDg%2Fnj5kkX&X-Amz-Signature=2c76246a99e2417eea5ea899ddf82e46c465a354e00415bb57461e5e1f887767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

