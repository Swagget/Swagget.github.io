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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YW473OJ%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T200154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHu%2FNliczVOrcmC5wttfMwAj75JWyqHKooiADsnlXkRyAiBU0so9Sb2IabiEHqdBHiqQk7FlP28%2BW1YSj7fAtwPa5ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMZRU3PO3Penk3Rmx9KtwDIIxkHfXsaUiw0gVV6zW1J5HEa3oWvkWdEDp7oXM0Q08RGoSvCCFhIa9%2BsVbpmN0Rjg7cy4XGnTV7z2Hp198OYBUb72riWs3TjYYppBh2b5ZqFe4xqjRLsj9IzN%2F7GCannqqu1olrpNktv4rsuScKD%2FpYAARoO2xTgb8zJ0cvKp9Kvm3YmYgu7P8RbOu9IDyWfrawDAPXsILSQ8Clgf2U2rR%2BovR0ts97rHr69bKSB9fLo%2B6smgZlJCRSO4AzjgNybmcqbYBfD%2FKXMGxLG6l4Zt%2FlCUX%2B0%2F4V0Bu%2F0b7mZtpgg2f9Vqk%2FJF%2FNRDiRGZfMk51AY4QS5i%2B6ynZnKWHM6XGtOyPRFgxkMXAhtuCapgq4cFtH4B5SFp%2BzJ1%2B9z001ITlwcq2TryCssgAjr2UfNWPRQijES%2F34UeMonq7sqihKKyckSgatQhD3IufnC99zJn0kNDhPqOBAL7Hr4vaVpNotyleDeSP%2FxClQ94AmxrdpJnv%2F9Dz6Tmfu2DHULgzrH8REImWMFldPcNr7XCyxfPBIVG4Tz4Q%2FFo0s9dehBk2fq0Y6koXPLGCOhbwIgmD7naH%2Bu%2BQ5hkNCFsjkD8ZuFnGyMGIZKlN1gthQCDUPLEvYiNaH55Q%2Fsrm%2BB0wwluuY0wY6pgFe1epy8Ywu6xhNGq54OlpbvN5H07%2BRsNAf5xF7EYoS1aL%2FB66Uh8fmmL2%2BKSeYfh72GQiWmQng20k9yGa7y995McfosynIAFKFPAfDnB9rzt7SkTCNYsKz6XePLhVMz73L0qA5lHJjjUzFqATgcoMa1lVbUWvCZZRdwFTUb6ljQUOyT6dWiKdTB8z%2BDk03UkEqf%2FkHx29JoBhpOWiByFsIQi5OIDTz&X-Amz-Signature=d742a4b48294a19b68c2b688f8de7ad0cd01b8a757ad49bf608210847edd3959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

