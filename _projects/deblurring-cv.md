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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN25T46M%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T051444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDgPSsGzRimy5kkFTsaptBOYGy0sNawwB02Z4i4N1WPtAIgTpUPO%2BlED0I8ZCBLPML9PLSWOzUARIhG5a7IwYsJWdcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbCF5PFTGazrrnVuyrcA%2FqXAeTNNe9WpST23spALNr%2BFk5L9gZAcEG3%2B6xADK9sEt9MHPv3YjxKH%2B2bwYRGTU81QZWRgxLgjvCQq%2F7ZGxD1SgVvW9Zkd7qfiSW2N03AWKa5pVfXC83sLCJsiK0ylQNye1xkPNJQ5SW%2Feye5pkrRFqss3adED0QeY6So%2Be8YfI7H0Vf1y1WptXhSd0pdodWBchvIOixzcZNcBaoJ5cjr7LZkQqBCL4PiX5HLopcYA3YdAi73WttRE8oIF%2FS6amkOG2qX0EvvcHVK1ri1Wl1wnQpb3%2FyPqGEAY1AxHDQcVDSdW03KJ6Oh%2Frh%2FGCoTAMvQiS4yPvbQq92BCt6bqA88U2FuVQ7oqkDLOHHrr%2FYQxZitrLGF2T16ckYuY3XanbRu96siN5LSQVZK8c6FYw24%2FLOFusLa%2BzyVJwHOjEu%2BgCNXpB2WFuSGTNFHPvLHpjfeXbH%2FSVzHZ%2Fc%2B625qEpxofOVExPRSNfXl2OLOlBWR1C%2FLKK0viNvwlCOAh5KPWWZSCx%2F8BOr4pwT48w17vI0XJbqco6WlPxB2N4ezvIxOyroAMFAyJljd1lMBr%2FgQugihxXAS1Vg9kzmY72MXndhUCSgxL7daKCaVzmzX0j4IA6JCM53NBAc9YzNhMOPButMGOqUBB2vLuSZF5hC5tQ7qH4Rv317BOJZ4URuRaEH6JcIgV2zjJNd7HeAEjJ72o1bdAN79DKxDm2q1n7xmvX4OBxzKWdx%2Fq6cryfbKe%2BaglhhxTeUWfWcP95Vb7%2FLrzd3t0vbFNp7YUgX0vw80HtRy4ILQgSTHYxjlhpDjyuLN0rMMoAw4NEdWO2%2FlcqiE5S8L7Kmt09dvabBiuj4CvJdAKWA42hmBbLw5&X-Amz-Signature=41dcdc2a741a4ec7accdceea2d8fb0353f0ca6b019436d223666de4bb633570b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

