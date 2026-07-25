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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5SKOSIZ%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T105915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQClelW7h12Sf4UcMN6UbhWPrjSPUBfWAapMI%2BrICfX2aAIhALSCdJvaNZJAtTSIqka%2F3Pu%2Fyk5Zf9zyFqrNT8U9EMuhKv8DCBwQABoMNjM3NDIzMTgzODA1IgyvM2cFCsRj%2Bebrw7Mq3AMVRmDyB%2FL9SDSHRIO18qiJRAE2qJqSSQc19UWZU7V8XQTaQ7iIlNNRvdrf%2B6DbCYb9JZ7QYxQ9xe1Pvw9XuXqVd9QDRlVV%2B7mCmuC8WaiitWo2SBhE8h4Gp2WTS4hn5js%2BG1o2PJSHFTmOdQkY7z%2FWG4R1tGsF7azPeIcFldRZyM6edTvgyvTMCYsl%2FZV7Rzjk3UwST5qgyYqkUnqJnIrx%2BoYvODhjYjw%2BDkg3YrwBHRuezut482UNeO6F0BOrDFGnOg39Xkkl9lO8spR0AvJkqFDnxDVtjFjBciQHdz9voJCURocAzZuRcC6dMFuD2D6wkE944oYxEDfQ2PaeHfkiB77tc2usDZV4iRB%2FCL%2FGCtCJFFadt2gMLwEPnzERrAAUPQpQQLGrm%2BKzvRU0kR6%2BC6xGrkoJf%2FGGb4fObqhA7IzESF9ylpPcJPhI4NdxN060dAjKiA89KvoUVm%2Ft7x3FqpDejn22QaB9ZERvdBbZXEVhtLbgN6cn7J6Y%2B20XGwjueSoqhX%2F%2FM498JzKGvT9tl2v1obmF4jnTtJ%2FT%2F37umdNXVIxlBdeFhNROp6R4zYnAqP3GyK5PvOrgv8gBECca9mweGcNavTDYL4C5Kp8RbDV486yC1ItE1VISADDkoZLTBjqkAbYhofVZWuwjWlb8uY1nwG0y5UiTlDaWkT7OpDHlJElCTCnFzff0NcyA0ua4qulUlgKxJrwh%2B9m%2Ft6UM1ePf4SwZpNquJRfey%2FO%2F4ncasASBV%2BnHG3%2B5LzfaSEzJ3wMrKlOkqJn7%2BPT32uTwSurhTEBRPdHrw%2FvY0t8O%2FtXBMyDYLDwRLtR6aohunWM%2Ff%2F0sB2HpauY4iGR7GMWjss%2FO6XLgxZ%2Fk&X-Amz-Signature=f93400fb4bf03bb50702f0e224d57a228ce529be3778a2bd561cf12ae4145ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

