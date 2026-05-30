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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PBCCJ7%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T214731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFzWDi8xUA%2FdF%2F7M22rAL6Ub4%2Bd7qEoeWL4RIMkob4ZDAiAui4504uPK2FVGrQAdVt5vCNbW6MOVJ%2FXGMkRTpQwFVSqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhvKrU4w%2BcLx75HOIKtwD4zrbkvf6VUv9iFoDtoxyWqTslAL7CnjkTTVdjEn332Xsfol%2Bw6zu%2BFm3bTw25KnwKICb%2Bu2HmvL2VKm7YjlDlcGXkiLKek4X%2FaTpMLd1nhZEaGh2PFxnkn2vezObpdiVW1aD2vImslk1mnA%2FDFtPpN599%2FOoF2F0mksVJ%2BID3Z3rFC%2F0%2BTH7woi2xY9%2FX6K%2Fs3dxEzDCerU2lETTjqPRAtD%2BJ4SrWQUV0WeKmthE%2FmeySYjjqX5%2BCqvpqJ4WrG%2Bi2acAlgWfrZFsw1inu%2B5izgm7u24T21EhJiyfpik%2BVrmZQY6x3UpdIMQnEN0hzzc%2BKYp1365gw%2FFdPXSpUGZcrUa1PAB2Q%2B2%2FevosI1u9%2B3YtqscBAdEguyZ2yVNXGvf3skCCSdWWHolT%2FrKcvVmO7ZROa10ro2XwGmsNCOFK66ZWRSUZbN7fhubfjeP%2BvyiBHASP8tqEo0Lrsgkt%2BYCtqmaw20xeTzoz3vfLc2me7Z1hr3UyWTbKR8NkGcikMejcs6%2F0E1rcbC8GZ1HVAddzTpS7WxOzI58jiByiH23aj60KZuF4%2F0Qr2WVuLvGqjHiO8F%2F1Ta%2BfwXA0AaVJrfNydF5bRXjISgFmiee3ayPggZqt4DuDB3dYjd4Al94wy67t0AY6pgH8oGWHZ%2FHDzMjCwKmwh3LCu5MlapsR0f%2FWW7Gj%2BgO7hRzSDjNrtUonELJp2%2BbPcdmiWZ%2BQ5yJC3JN0lTj1TX0jTMhy1lDicu68OrMpk9OjBI5OaBlmtEoyWpyJFEpq7zf2oQKAutG8oPYHoX7SuOsAyBNeDuVJPxI%2Fiuo%2FrsfqdeFX0kY4AZYzczjIg2NOh%2FZpANkS%2B7FdaJIY6fBqDdirM%2FDXiTyP&X-Amz-Signature=1bda202d45a50cb33dc09f7807146e4f7c9a44eab23e7815e72d0843b811fa41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

