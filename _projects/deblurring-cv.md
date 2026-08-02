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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YMLVWCJ%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T214205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDNDwcfd6k2RF9SfmSQSfBGAi5Gbd%2FOBQLxe8SO9vZAiAiEAxSucshz%2BTaVCdELc95OTvJb61RvMjS9zXGcGZpQ6J%2FkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLCxqx5N6V5NZDGVircAzvjwEaRRHnUtKVsHmEnWo2qJPfDiyrlCB%2B50GKeVAA7yBI0IgbP9cTaCfz%2BgDIDWg64gvAO5oK6DaeIic3ciOCPQAWD%2FeYunibZ5c%2F7v57igvhERrSP32CIYmf5gj3784oSb%2BKDgiFOc7c0oty1eGZMGwxahTb9J%2BAG3CCxZRiWKR0rYuG3nqEsS54rCD%2FrQS8W2ShJ4EnV7wjCjZv8CMZYi3xNku5Nsq%2BLWxMhpzl2llko0uh80BuoRo8IdTNrQWsaOZ4AnNZL1YZ6o66XQOpldQvydfT%2F4MaWmSXGelVHGG%2BQ1aQqQRtOmENX0S9JEkWRjARJGB0KVA%2FAa%2FWyrgdo6wd2ftKw01mn5FN8Q0fXozv7Kbxc%2Fyx7nsQigQPOazm%2FspoegLmL6VQvv6v7W26w7erKjqK%2BiQfImEcbOYr%2B5cR9EG8wrwv%2BZe6umnMMVTo0JXnvA9O0jaZObNU8khBMF23D779JnOQNHyFEAm7F%2BEZNmzSMu63iN05Rz16WWGnKLhLtY%2BIGk5Saz01efxeRw0LcExvao%2B8tRI8795L5hg%2BEPfX%2Fe3TyEZmbedBIpXeR89KpUZh5zpFg0qSvJzdEvh4jI7X6G%2FELafGXe81CztGjUSlvMBGcwQs1MIjSvtMGOqUBR878c%2B4FHb0h%2BVg06UmgUMvzaTG%2FKqn7D%2FUfRF%2BNGOfHK3MyQA8LoZh67y0sN680fdOC6iOnr8nThTxV9k4k0c0cOGwimnLY%2FmhVLbI1jvNC1BUrMwEuM2EuJVtpT3N3xBk%2B0cEijtMjmUGPWJKDV9%2F2ADATpwrQlc%2Bgiv5J9IGNd8gylynD17kzXZ6MFHSQO0OPRHjPQ3U9g6RrQr%2FqUwj%2FuH3y&X-Amz-Signature=cdb723b24253752378315466214164f28049a3cd3d1b3b92e33785dd6e39a775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

