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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RYT4BUB%2F20260916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260916T070321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCIKvGKsiKO%2FjBolhmCRiSfJqraG%2BO%2F8SWbZBQzc%2B1RfgIhAPyfZK69Y8XtYQstfYtD7RZJufYOV26buQl%2BtuM3TwgwKv8DCA8QABoMNjM3NDIzMTgzODA1Igw0XLuJJxwfCxjWobcq3APuqJhTwRSYHZ8uY8upm7NVz6SL3hZcL3I09NUGGSUnU2ayQ8aqmJm0J4ud62dqCeoaEF%2BDTabAfCf7X9X576W5AAS6gEX5Et7Hf5AhQWhkkBUmg6xDTZolPn86I31agM6LQflKrUNB4zyQtjv%2BwfU8q7gU79XL7qsDLx2ePhNGLLrg0amywizadz7C4gum%2FVK7zBavwlVueSzsT26TAOjGSL8QtH80Oc9n%2Brak14a0GW2K8aBpHyRlpkWJQ4fZcbLIjcjDHBPp0t9dZD%2F4WXecphyogVGZ2U8WlMef%2BG5bBvjZSTmbbPznzmK8Ho2kB%2BOVRZQI0pakl5I0mMFUi05mcA1GRIL8crau59wKnzr6FGigCX4XqUMkYE6W5BpC8LrLSYWfU6gm6MQ9N6nbbZcm%2F8iTIIW2cepDpOojWN%2F28eSl5CNfBrh7co2O2toPI6Tk%2BqoewnTzVBuZTJqcBgpC6x5ARn0VXzHcNvC7h6KIEqhtk7BFOsfdkhvlBG0ek10O1QK85bkJkWId%2BEpe0GgXj%2BfJoYHyOtPJ43%2BZbS08BQpCRivdtJviO5xFJL%2BaWLxCv5b8kHC%2FM8A7ENnKvxtImjhyezRJEp3jKYtBt2YpLl75fgAdMzA3mF1WIjCx26jVBjqkAXJ1Xz9klw80qHP0KHHv2h6UGyg7kxXwUzTHHiI1PLgMrC1U490zlnUhazv29ZWd21hvFz%2FY9vQVtcUb%2Bf6TxkNxL%2F8AcJgdR%2BdEivHdh%2FF8xlTM53Wgour72crz5nLDPQRh6xCOthICo6Hm0%2FMZnfgPLOW9I6K9hwxLlGFCq%2F5bAtt4cTmLxNArGT5q5AmxRaHGXDAnpio%2FbPjcbc7S1e%2FFyffZ&X-Amz-Signature=9a116a56fcfd7f3b0722500f3f38c0bc7e829a7c5d54b3681b0b92257e141023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

