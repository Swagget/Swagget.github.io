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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF3XV5WH%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T102603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQC71aTlXDPXDhXD7dGluH%2Bi7%2FZwZNKBmmcE9ONpVoYNogIgI%2BNnFGXUOMKmjN6gitbuMUCxmOWDZqvoK1XVob3AQ8wq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGDzW1HICwbzSix5oSrcA%2BluZgS0mVTsx6oEZcTmCO%2FW7Ge%2BV7Ulq5zOjxr2Angl3MoTyVm8X1x2uiMsalgqjvyieIAf%2BtYRJN0CEmXQdyL9Wb0QKPrsUw694lXMfm3U%2FCgHBgsk6QcbpbGDqMOOccWHU6cAbrY7%2BaE7DRfZ6Pazra1M50Su7PWRbd2rKQSArca1G5nSyZX%2FXzo4k6shFVd11WMlMXyFfN27ODZb%2BdRePCxgNoy2UmQX97bLRzaZ0Dn1OClzeCbej0QSooe%2Br2EFy4GREvw%2F7S5YHlpi4wrmBNNnf9EObptCJ8PqeL76MzuR%2Bb60a5JpGDa%2F96bKMlsvfPLGs6%2Bg1Hax4rGafqkoOjFf2Z8kKnxefuWf%2B2FYE5QIVVTym0nlMNRqet9%2FpRlvROVeSLSNiZsD4nbO6DmOtQuPHcRA7dD9KD7q4Sqcd1jCBhDOLUd0REXDdI4a%2FSistb4gduITeIKNm%2BaMyu3z0AceUiCrPNA%2FS1QqkE5dbZP1VxIWeVxFUoDFwhYQr2JobirzeNzctoK9vTHjcjJ7dTrEtZhMl8g4zv5XsGWDmwSqw3Ys6XdGvHoUI7Dwo%2Fn2X7QMjbrLgLHKrrU9zclTqJ1TejcCk6XSDKqOwcfnYxiXcBpAqbSddmjFMPGF6dEGOqUB%2B%2B5fLvlaoWhCQE9cFGphOT%2BTd%2BJSOfY9at%2FUXQ7Ox%2BullTHjIemUjJmrAsdIxJUa1Z00mebnjEW9lZmd08%2BHKQ0W5zrfBIaKKcmwyHfbcCzKYR%2BIAJEAVzFyY8%2FZl4Wrbx2IOAHATRhQAsrip%2F1rrpqTU7UxekVRe6dytkU5k4AbNJCPbc5wiyKIsv39SPbw0soCX7c0ObW6iS1%2BuDsMZAiTYBPW&X-Amz-Signature=ed21395c0208d218990402fbd0adc93413abbe35e7be879613ab301617babe58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

