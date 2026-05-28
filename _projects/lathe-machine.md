---
title: "Lathe Machine"
collection: projects
category: data-science
permalink: /projects/lathe-machine
excerpt: "Connected a vibration sensor to a lathe machine to predict the level of wear using the amplitude of vibrations."
date: 2019-05-01
techstack: "Data Generation, Time Series Forecasting, Machine Learning, Data Science, Fun!"
codeurl: "https://github.com/Swagget/lathe-machine-damage-analysis"
source: notion
---

# lathe-machine-damage-analysis


Connected a vibration sensor to a lathe machine to predict the level of wear using the amplitude of vibrations.


The data was obtained by connecting a vibration sensor to lathe machines at Manipal University Jaipur. We connected sensors to machines where the drill bits have been replaced recently and ones that need to be switched.
We used the points where the drill bits were changed to test when a machine would require changing the drill bit.


Used ExponentialSmoothing, SimpleExpSmoothing, HoltWinters time-series forecasting algorithms to predict the vibrations and the increasing wear and tear of the machines.


We discovered that counterintuitively the vibrations were decreasing over time, this is likely because the timeframe of the data isn't sufficient to calculate an increasing trajectory of vibrations.


Connected a vibration sensor to a lathe machine to predict the level of wear using the amplitude of vibrations.

