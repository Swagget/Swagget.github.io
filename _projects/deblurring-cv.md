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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYQELKK%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T001749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYP0FnO0tsiy0YvH5OFt0xIpi36%2BovRKAmaeosbN4LkAiBvA5YNi4vCKlVks6z9CysckRx486sfY2h0cQfr9BaIBSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtkpE2z9DSi6J1yvaKtwD5nY2vHsuvjg5AH%2BzuZubPmiTbX76xHYmM%2BC9MJg977AdMLPe57wZp7DikMLg0ClzIoQTB4co9bKdYg95YBoXxZGUT6AobzfPjRD1U%2FMq0kCNGC6Pu3lEU3zd6pzerlE45VTPb3Dn9WPVDNEA56yLmQKKpL1Z0MklPfYP17qah8woEycYJ6UwzRaTXgvhtqcDdKRXnzbjWKsmeCrnLoxsGtC%2BIQE8CVGT2icQAMfZXpgMZjKG102n3GjJvYT64EUxPOjsAn3qt9Ter1ne09nWxDuah0fuaRg5M2dkSTLzqgGNLzvmdV0L%2BBmM4C3tbGlVzBzQAPgGXtSn0JcQXF2C%2B%2Bvg9cwwZNrNIjufx34zrlpmTROgpDDo69zUyCPB%2BcStV7%2FoLw8O4CkDS7a8b432uQqKyYQ18xdD83O8gN%2BwgtquVnwuZMOclc8C8%2BPsAeehOCvG8nzG3fniWNxeaSWXAze958Kx8QNur6vfW%2Be0y%2BfNuYRqxFIysAWzjZ9JHqvgDJwb%2FKk0x9T4oeaIwxsaps%2FtsE7hKEV2JVuwqoq1KRyptT3Ys%2BEneeAbC2K%2BgDqTllGXMEPX6JNNGL%2FExtF%2F2HAzPGxVIpYxkw2ifY2V4gN1zkMR2h3INkLBfh8w4YbS0QY6pgEmJdLJOxmhqNiEAb4eLSHADhlsaiZz5yVj2mBpv0raj0bkKBbpqkFzXpNzxOhRZMFyY8YHbXWaZp%2FRZEQyUcD6cdxUIxPGVdPnoubyYyAQHSkvJbj5mQ4LxzxRrLrKteiFnrnbKcQUEhPcLu1%2Bl%2BWprjEQN7tDwrNL9BuOAlyAhVCMA7u3XVpSxFHIuWx74BoWfU53%2FIfRVf4H967XveMKX%2FAuJ5Zv&X-Amz-Signature=b9041ed2fe0ca8148df7da4965c4f635bf2723ac30fec85dee87dbd88f258c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

