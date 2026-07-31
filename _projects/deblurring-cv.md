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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666YYRXPZ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T215428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbgZiAzVuk%2BgEmDhZejQfyi%2Fy0jRQevOcOW9G1vnoUYwIhAKXc6izW6eWB73WpJdtafIxe16eqeBGbYdTSUOcue7yeKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycenZwMMQJ3VxOuv4q3APecPs%2FWweP7CysJfg1lEfWuqqty7hWfpkSblJ9zXT35T8z794RPp63hDU54QNfyFJvniHLXX4mrp083XsBcFI6dzU0eGDhRnAhDSDw9XKhw16REaQZ1OyPFVVjCwi%2BibhcA57eG0RMrm2ZlZwO%2BQSEtODQsFamJtlS4%2BY51v7spZfbljfuteVbwgwsxPa7Pkn2dICBh1fQ4JXUk%2FzCMg23ztNSOV%2B7JIZDhzpaqiE7UKxfWHe3JxotAK5RDlS8kr0i7yITDVoVZicVNrur8xhq6zk%2BU9z32%2FsVwd%2FN4W2u9uSrNZ%2BgEyTh3hVot%2B9ZxpgtduyuyYz1df8tJjDg3e7EhMzKl%2Byhi%2FJ3rhSfhahS9wyjwiuMJ5HQyyBh2f%2FkoOprIiTF1wsaTFOmfoKXgzJBrMzJxzaHLAG2xa%2FT5ETnDTV14PY9poSgS56OGsOUVTDWBA0yuRo29n6d%2FYbKyQLxKnS5MKdUvTh26VriXKhRS7E5MbAj5c8c4Njc3qv24%2F1z4ap3po1DKudgYisjcf3%2B0X8kSJUBHpANrNTMALJINUNcG5NTpY5XQzHEpkH11eBKnLC6l3y3xdqElMtBFiMqN%2FucuXUetjGDB3ZUHJSJU%2BJupIzPP4AG1%2FdaCTDnnLPTBjqkAWdiL3q3M%2F3K2NkPS1RKkVh%2BXftqKqETrQzvZZIuMpvfxASbBY7Y0GfN9WGojPYM4VIM9u0uOYWC0RVT40d4v7EErZ0k%2BR51pWTJo9lsCtVXMV%2B7xwk7ZIpF6LgpvWZLYuHPY62qWG9Lqh2lRO6v6%2FBDKOEwYonAnaavn8Fn8T3engVfAJGqA3zi2PbHjLsLBGdsxrtOrPLsnbXhzWtYqb6NXpf4&X-Amz-Signature=b82ebb6b2bc0a3e1d418ab07d76a0203e4f546e70b346eb610c24f312cc8a673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

