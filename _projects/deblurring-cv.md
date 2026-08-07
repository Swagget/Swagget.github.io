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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENJ2RVR%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T113535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ%2ByQJnhvAKlAE4ODhUgm24WtM8BWhHjSJMsZB9lC5QQIgM6kR6AyQxsCTfFomr0pAY7u3tT2lrxaGig020sSlvJ0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNMgEFnaOxX%2Bj8pnvSrcA0pXCBl4vzbTl92etrzi2Q2KQf3Bko2h9BMVNO5z7luhr5N4rcnlf12d%2B648IuZavofMRacKhm7x9lDFz1%2BZ%2BYqzf4yZJR6ogtD9vSZPX4Vr62ZK9PFHfCCx4jLYlL2jXaS3ZT9%2F9trNPr91Qrk3zR5IwDThj5Y1RO9mQAV3y9Ekd4VjSY8TKjrGjX%2FKaLHrDyNRQLbMVx03tTxPPzZIEDDUh8f4pDYWa8Ly6ZJXY2Kl8%2FMWoFooC7fIlkpCJZp2gftIAeExTJYqnhwLWOazeKFwM1T8MWG9ryv3e%2BxVUfVeeeR%2Ftm4%2BL3cvlv1G0BLgXf1JNgGWqepodaKjLTReaTCxjBtNpu9gKKjS8rar7G3hbDSX6iijlKfRIbJitEQ4P7ZKN%2B928DP3nZQ6TJqgbvCSOZht5z4a0cSw05SOMPiEQnyq2WBfMSS6cg7ojslZUNwcS3oMvcJkvzRnhWjbMf5PjDyXIpgSkmeU5zEYOQQpCCqRwzVvenXiB8IpKDhRA8BenVtKRcxVwpvFlXrgD%2FdWy6SZ8N%2Buaga8y0nSoDcI%2BMPS6Z0nsPY2PZzDvTcQReS%2FzTG7z4g0t6RxuxEcQ%2FATnmd1NU7hmqZE8vnqpjEnnx%2FIc4N8GOHS%2FYSEMNn71tMGOqUBvVg2vMS2ITAbpUzQjWOWqELIJQweejF8WteIY08%2B%2FTCuCQ22zKetmRpkUWCev9oZNctAIO6CZhoEf5p8p9bRtII2iyqkbiIv13CYgE16N6NDqrWYatjwqNuLH7QpF0sJmz63FqPShsSJnHmETC8YnJJQR%2BkKTuJypLW1eFZcay7XQSL3rH7dQTuVoKDVpDdeeLiN7jwWgGiFkiY7uPIfCwpSYZSP&X-Amz-Signature=3f47b44e826d619269a3f9a0ac7b696ed7f0fdcd6edc1756d51aebf1a73abe8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

