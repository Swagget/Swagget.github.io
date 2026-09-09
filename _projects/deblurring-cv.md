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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TOIGAGV%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T101353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPe4WjOnk0NbrVqLt4nIO6TA6%2BQkNeH3qeI%2BfydPnB3AIgRLI0T0lixf21G5FNzk4dAM52kn9QIxJn%2BORL6WLnHjYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDGw3a79EWWm8f%2B9dbircAwQjLbjFCk5X79nJz2SZ9GrF1hWLh4GyKPFV%2FIY5Y%2BgBTqn4kxRRZTSx8Jj96EdEkgMYXn1WToVUDJvVTekf4%2FWyB2JNygcmmne9j2qD06Copa65jKqE7dfQVVpouK1FXNHAx9p8sstIg3oXJz1i06APE7sSOgBZJkcVzjQv%2BoPgWmKpZdq1sXnLxYByp%2Bp9fo9onPejQgUugaJI8lyRsbFIqKD88D8gpXyVyAaqCBWsFI9%2FlVBiTkxBpYkWmw3iUTMWFE%2B73YVPLS80Qo2TiDjduMS8faClLC5cz5rN%2BYvaEd7fkQq%2F%2BZvaHIvlEkm33BFeHhE4MaZVp33Yx0vX37vxVprKShUmD1gM5DCPOUnjH4OC4lD3pDqiWUs1NJAB5DoP%2B1caGzlHyj0dIcshL8uQYXmWEBkmHMrt9SiQSqEAgJBoR6Z0rPFxEYdV8FTW6w052TXd9FMhtSN8EkkLfz3JDzHelEJaKAU2ssljH4hH6tIViWRknmXjAnilfBuNG36vtGEgr1tFiwBRjsM1g31IKX3TjaQzvQwO8cRSeyP0aImtFLjgqZI9x14eC6w0n4C5p%2BXQTGYh%2BBDmGofQnH%2BS1YE5Kx%2Fb1tdyjKPGW7iVdiUw4gJdOxyaltu6MJO9hNUGOqUBrxNvYsD2PBkferP1tHDPeoYjEzMkZXgkjCBuOc%2BXiDLynmqB%2Fy9sJDBMZw4jbJp12AWxuNUyVt3HIeOZ2ZmCpvkxO9oAvIuMLMHRa1DMQGoV%2FkyqrHoB%2F5TFDglHjDfCs3zN7is8YIYMTcEuTHjR36xILcqm4V5NQvzy%2BeEjJ8Dm6vi%2B7j29NQQGL50up9V5aK2FhLKRmlTkjqJOoXNLhCXIWUv%2F&X-Amz-Signature=02c8d5dd99be875c7eb3a4fd2d959e495d76d2e3ac408fbf86774aa5f9de6307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

