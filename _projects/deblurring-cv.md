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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZP7CZAQ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T235037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICal6odCUwp5vxB7MYtchsi2rimgUdmj%2B5XIDLUiOlD6AiAW01SYxqRqMiXhBd99eBPiPIfehGjgicYrUblE6Zrn0CqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FW3129LZ1AkLNdn0KtwDRcLClb8%2F7A2ZafrfUkghlljahESgxLplUF2p1Wi2z8lJO%2BekNJdIg8uAcfQlpRWrGQ0JgiegDh7inwzvAfI5IN91YAjwVuZj6jsPqvkTA%2FUno%2BDktSuZG5T%2BhdV%2BXiYaQImEO2f4jrmXqzKy%2FSsfrkUd8jV45klVI5aQ8RkNBt%2BOHADUL8NFg2eNOuwfTp66nEb%2Fp6t5GntZqlx3HG%2BXT%2B%2FsVtbOxwsFbR81%2BDFlLfithMrKhKfUvSRQhLYaKLY8pgPfhg%2FwlZMz2NYWBciqSuS%2Bm5pmtAHW4SWcR1YJDhlsN6JHCh6pHKdf8Okfu0d7I7w2PmVoDd4NadvqVCXEX0%2Bi1f6rIvDsbndY2CbdmGdK8p%2BlTNiWg5Rc7S0RwJm1KxENJ%2Fm9u27k9%2BlHsBy1r0EglwiuMvzgq2RnKFvSNUVH5OvAakuj%2FX3SWqRAU6L3ewW%2BmmhMF2rcYgURSUMcXlc7Mn1v4lKo7fLrpQjuzZhmE%2Fh%2F%2BT0OsvvwHagfJUCekHsLC%2BKDqV%2FzqPbDKszjQwGeYY7%2Fi4M8NXyl8S4FqztGao%2BW0G%2BWHgqYZnNtWbtfYKqrADAdhjSxm2jFMQw17GsPIcaeepfetvggQcEUCYQsR%2F4aJ99tyV%2B7370wysWv0wY6pgHrbDvkn3tiR7bGBRUwmI53Ri27PdhzYxhuRvhdubVpDOIb%2Bq337c83pBs6p9JQkwi00DHjEMeBMcasxerAO7MuXoW9cTYksq7qzPpzIhlgyv8gozYMJgmdw77p44u7gaDQzOoYhu3v%2Fl6BR6nCI1tJTQFggbG9PzNUq8NIPmamzNuemdC6SFvNFXDr4FF%2Fsf%2FN7erzqVSa2KRZUYoUIg0YNyfdipEP&X-Amz-Signature=e281be397a8117ce675ceaa233c8e4e6b3b2f85a37f4b8a7c013e0174a646900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

