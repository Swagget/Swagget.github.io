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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654D4VYK5%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T034731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDJTjAg58ok6KGiH6HzeIb518C%2FM6d9h02Nzn8%2BFI%2FIJQIgOBNks%2FQRbkJC6hQ%2FwmrYO%2FPq91tchnare1K712gq7o4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdpZ1RGAfMAiJwi1ircAxpQeqUP4FSmpuOHt3%2FSpWBSH%2BG7PEXCOIlB9YoIq62bVG8mrcQW3fhUDj8CPAcZHFwyGyeSH33yO9ErNfw4yFGVbKeexf0OlsxGZaAviIyx3%2BCnFP21hjUngeWyC4Lq2OlJoFD7pNO2hnLnAKGXl%2Fy7K8h74TZl%2BkHyJypNZfiBwPQgEgWMwD7hQxrJtHz4VJQiEIxOYmK55fwDWwSyQJ7h1%2BGV38mkdOoebcxLHPdw%2BNTYSfu7tCoaMTurOsM9GGb8Fyf5SCAKl%2Fbo%2Blg3oP3YTV0jiEcqiELvdSt7Rmd%2Fmv%2F%2FdW6XulVehV68F87EUFXsuoSUEk7z94cx7WxaetkMNEOEIfPlz2M9VhDxJa1DkiKdSHumZac1Hyu5bbotxccL05kKYJp77PdgaQNu91Srbv26PC%2Fl%2FSnNJWP7qJIZcwQOUMGQDl2YyuE%2BmFNfE5r%2FeVFz0wmGxYu9nWfGZm4hK2czkbCz51NWy%2BbOQF5YPbvkI%2FEyEGE5bSDuQDSvR3225YKyiRuxFKBiiteDbbr%2F3I1UimK74xDQoCX2HgeF3g2Gg9EPjZLBU4EaAhAp8kFumAJhAEfRunp5aQsWP%2F2z5i7em%2BQQZeCK%2BaO94F43vsyqe5Nh%2FYxmaZ0jMLek3dEGOqUBXQtrNGt6Bwnpl%2BhgompMYtRpndcVlXT5ds2HARPl%2FloyTi4seijKSW5xMLn3FqMw8fnajpMQ9DmYyY49NRCpolEtAL9fvgnQgOeyHyPZbTfVK5ZDMXsjep2HMJaVZkz%2BoXvZLzQ7%2Fws%2BlmqAX58SikudO5%2BWzWhSyCDwR8YQxUX3PHfdcQaSoa2weaiJ70QH3lTSbHWwcozXLUocjF1zDKY0DUCL&X-Amz-Signature=f624fb19c225ae9915c2232be0bf56d876204a13c2e63ffa77cbc5aa550d3e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

