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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VCL45G%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHO%2BNmKS7Ifuqg%2B2NOu%2B4kL%2BzsQj83PpG4s%2FL6WEY8sWAiAtj0Nnv6aetdJIW1ZWOTph%2FRZQ9X34kVyKEe8WuRBm2yqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbjZtCu4qdtviqj1kKtwDTavchdyjIaMPMDRfqp%2FYsS9EO7fMxbRAQRFUP4K5RTuhZREtAhuORSAK8C2RewC5Y6Gwou6pqUyyvuRZ97PnuGNQ7KjOeEJzsnXf%2F94IuUMzQTiDEk2TA%2FaUhXU13Yz%2FSwktcBAnugMMJi59xNqNcHsVvyGkUKHXvW3YBQ6YCZTJuuOWjgkm%2Bjgg32t3fi%2FKkVTVbVtQlvDIoSejlG2ZBXHtRLt7l19TTaErVrGv3AS2M%2BpU%2FtCBsWH%2B5f%2BqXRvnBWehZHGwO9zmZPbY4KxYGVkkHTE8mk1n8G8hZKImr02CfTThkzbhnO1cX0RKPzLWpBsrBiIhwqlu5CHTEX802nbWggHeJUG1gD9lIyxLIl0tu6vmb5LI44GcQ19x85cxjatpxn2T9Fng40m0E4c7TyTy2hKIv1SvcN%2B9bEPrLwK1CD96uuLWwdn9BPvFw3s39bbwnDrNJZ0Ic4BjOKlcguvuSUEbJ6rf7HQOlYPdE%2FM01y4KSeMf%2BlYnIYjt3GNdwsmGTX%2B9qKp3ZpQy7%2BCTV6LM1nyq1GqAGwKG1wBrAW0rzTTwIhZNoiFYyS5GJ5%2BImuh74PbpXUMV57HV9vCO06rzJJK2eZDmLxlpTKYHLIm%2BGOExRTGHmx2fcTQw7MOW0QY6pgHaBbAwKmqI8U525vZhBkyvowo0QPC%2BKMMqximQkbXjowVY3fQVMYNMWlf4LQ%2BXWK62hshvyGNps%2F2oL7Xxjb1T%2F16v7BN1Zk6nN3Bt74upcpzrDwS4rpi3jbKbrrn9Qa2AK%2B0ZWo7winc6gBSep4Wjf0mDoaeCI1SmLjkUpo0aopgkakpGE4C7HDrgTbJeQwCai2UJ7myM3ee8P8HXsqc%2FrBEfY4dB&X-Amz-Signature=9fcbb41dc1a93ce482e18ffb6bd854e1fc8ca3a99b4ce1a93aa24558f167d162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

