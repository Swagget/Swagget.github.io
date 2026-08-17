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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662JKGPFD%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T201242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCMEf38LqBQcRC66iKuo3HRt6BKqXlzV7lusSBgiwysAiEA5BSZBEgWMZuWKk7aVFQrEi71OsQ4atHOglBHkO2aZn4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMejZfsIZ8Q00051TCrcA4G%2FpTeNPgGrrS0lg3wmIFpbdgjXemHXlCuw%2FoslCSrxqWf4aLGz3hh5RvT4jqFNe6ftC4pWGGU2pw7GrTLjZLXoaY9PMql6BxA5USht3E3oD4xlyqjZ2ZeG8k6qtI4aNFCOGxzrgvP5jZittzjFJskMo8zXFdyNU%2FnM8kN9fFYwhVQp0RTkNPzr1zxgWnjjzIOGSMc%2F9HKnzg7j9%2Fgf%2F4nkl5UbqKxRQGdM8lxKU8cnI0no2z4Ae9N2%2BY0Qly9au0a6xI1LNMmLccHX%2Fm3Haqv1Lvu26EhrM3rLszXOBNS3eKIyBDYN%2FXQ5XjQjDvmkpo0jQYkNppjOJTuYb0zhx4CJRuo1QK4ziUFd5rxVgg5Apd0kJ%2FwIdnpGj%2BqJakhszZ88nT3wr43Lc%2FKbCrbPWiqdBAJemmnepWqI1FvlXAQtxo0xlahbqK%2FjDcZIlypgBApBiZtv2kuP5yi9hUz0%2FiHpF%2FLnmr4ML7Gbc5KVKdLH6xld85V7wqxrCRIYx7oQH%2BICCB0uB%2Fjj%2BcBpjGxYkzzQ3EmTSwy%2Foi3MkBd8VzVVPVSJJ3cskH7ube8FnX%2FUlENsIM0iqr5%2F6O0UmfOZ4xINV8iEXW%2FalhYJOuONGvQp%2BQiOD3Dthtp8e%2Bl3MMCwjdQGOqUBwISNfW7%2FqAv4El4V9t%2FbWFwrM9%2FNdeQKBRbk1y%2FtjBOUK1%2BqigpwEuQR5ocCHi64V3oZRxyrYbPSHII%2BJHhufdhSiDfCAR0kOGYohpm34e3aYhUtuI0%2B9QC8HDG3Sqg%2Be4PNSOQR7aOkPn%2F62Nt8bssAmDB%2FNBXXphyPchlamFixEpM%2FCj3TUFhXUuL3uIlua%2B0AIew4BZVwBqywDgGSJEJa0DCC&X-Amz-Signature=0df5339539b9719020524feef451417074e18f0b972897b05926805f70ad0d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

