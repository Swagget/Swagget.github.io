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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVWUP6AY%2F20260916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260916T203111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDTTO2FMnveCw04hba9npbMoeACaEXV6PT%2FYbHe%2FkD5IwIgYTxVB1ngnoDpe1%2FXLXv3AtLEeN1wgFDT5nnoKde%2BYA4q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEU6wxQlHWcKMBbzQircAyG%2Bq6Bw6xHzaQoLns4UtcXzdtXgw5feN5wjYygpUcVjZ%2FBsbYxz3KkeRRFSE4bzxxnLm99PB%2BLy099Do5NhqM9cvEDKWWeNkYxi2CwBi%2BiprFNPQDVnSqVV7Z9k6xwIMhuLsqweSEvYqluL2DbZlTge2j5Nrs4fkCByPTLzDNX%2BQ4wdfxF1qPyf%2Fe5npOjrj4RpxQEZO11cZZcaWPzWSXoFqnrRfm4KwXihMsfYWVlzP2HgmBXBoy3HZpRSdo6Vb8OoHsktE6HN%2FrK5l8GVXUeAbUJIEhAyOXeTT48zbeu1IFA5O6VL1rhs9vfPZmNAnmkPnj1NAE0pmnwVswHxunwbVGRrK957Yag2fOPRQeDAZOMm46Qap4yoVlKkeURJ0aJE2NWs9HQE7GyZ2DQok4HECcdUaasCSN2oqwlBjLwAKvmUq0RuwuWPczMT1H9d826IEMI0tSFwcKoZAgs%2Btx40o%2FQJ8QxEYGKyQftHfeOm3tM9w5zFzWIZTVB4pu%2B%2BH91bl8NIpTiw%2Bbi1qSj%2BAtdxi3NML528uJ6JJ7KBNQYN%2F2Xio%2BmUEze31VKbTiehC1LB5jbNFjhRbOd1dLDmynLg07YKFvsKyhGf2uTzgIozAUL1Hr1Nko38IXD1MOHdq9UGOqUBHmjV%2B3FUF6LrT3qWP9AOpOMA%2FrO5uynHm4B8zlTfMH2Z0mNuccJFr0f%2B5JRMwEvQnk8%2BuFpycDz1Vs3NjaDVPgaA4Zp9gPRY1Sq8x%2FdtBRs%2FCr6X79VQ5xmGZR0c0pHYyxXRyJ7ytWizMe1HJzpINjKA21a%2F0BXaP%2B3gu0yepyvHU%2FDUSDMafTnDwzDzgwHuDY73ubrqr0YgFnSBT%2BzGJzA5yeOJ&X-Amz-Signature=8e9913dee08f59a3928058b2a2d5c9d643850f48fab8cc76225f3110e9723011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

