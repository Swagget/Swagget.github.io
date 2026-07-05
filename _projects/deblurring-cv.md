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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKI2ZQR%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T142251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCpafpB7H7ztsCr20SG35pBx1%2F3R81vx75hbnUb5gTdRgIgAUwe785q8HnsfUMygzRJ7kzm6FGKri0KhiHKzRWggBkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEzPQdxkTFz380T%2FUyrcA6j%2B7jSP89cjPSqEjsc8d%2Bx7gGk%2B8Npf9fXLeqRRadplBq%2Fl6mCK0DuBqZxFUd7wpAwXbpWaD9igDq9ukQmQDYui6n6mihUjbV2h7xzV7QfMW%2FdgJPqU1GYKWdk0A4%2BwGjiy76shJnJmqzBm%2FXS1l1T2gllIm4zgcOFkIuzL3gZ%2FtmtVECRx5gMLn9tTO5UcsKuqy%2FlnXAcn5RGl2Rpwx%2FM8E2A%2Bz7DI7MI8%2F4Qyy8N9W996XiANHFilG6o5HuFZ15%2BxiEgkagQz%2FIvruTQDWTTRPM1ltfA%2BuirIvmds2TVNhK3X8UzRCt8kk6PZhAh%2BovIucECVfjntH%2BNyI0Vylc6lE0GfUVyOGMkcUbwcWEbdDEk8UsOK8zydB4GGXWswyESHGiQcQn816wf6Wam8KY95lhXxRKjI85xQNys2kJc09GQpNUUP0yHUTZm2ZaMmTGDVAKIi3CCkMq%2FYBWo86N5vqF5BlQrslg9C8Ts7NvKQLsv%2BykesxGBeaWwAXKPMzsn0AA%2FQHddhLJ6w4bUc9chw1YrlhMa2vxvq6DRI2S1olxeO5vmst4jFDaPd%2BR7am%2F6gew2zjoCGccgL7l5tPhzhEo7SCslrBRNahP0wvDlqg%2Bk22llpaON%2Fsg7%2FMMyZqdIGOqUBKrKRdw05NPRl%2BDk%2Bmfv%2FSSYWgGDkTvj%2Fk05J9gR0NQp3HqrbMgYCSjqh%2BkqTIuYkxtGdpJiaCWmxHGraDjHmtu%2FXSxLkRk%2FRFhv118%2Bl8AlyDe70YpvVxZLFJweJ%2FD6EfNW8aY5wYiLwQDzHfP9LYGxn5IWdxpjwY5rWk9KJMSHCSOgSm5xHOTP8GOFHr5qjaaa1WcZGHzxckMHlfpEMRK9xUJre&X-Amz-Signature=1bc7b483087b712f85e0306530b54d1cf0c8638bd79066baec621e6fb3b675a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

