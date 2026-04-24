---
title: "Lathe Machine Damage Analysis"
collection: projects
category: data-science
permalink: /projects/lathe-machine
excerpt: 'Connected vibration sensors to lathe machines and applied time series forecasting to predict drill bit wear from vibration amplitude.'
date: 2023-10-10
techstack: 'Python, ExponentialSmoothing, HoltWinters, statsmodels, Time Series Forecasting'
codeurl: 'https://github.com/Swagget/lathe-machine-damage-analysis'
---

Connected a vibration sensor to a lathe machine to predict the level of wear using the amplitude of vibrations.

The data was obtained by connecting a vibration sensor to lathe machines at Manipal University Jaipur. Sensors were connected to machines where the drill bits had been replaced recently and ones that needed switching.

The points where drill bits were changed were used as targets to predict when a machine would require a drill bit replacement.

ExponentialSmoothing, SimpleExpSmoothing, and HoltWinters time-series forecasting algorithms were used to predict the vibrations and the increasing wear and tear of the machines.

Counterintuitively, the vibrations were found to be decreasing over time. This is likely because the timeframe of the data was insufficient to capture an increasing trajectory of vibrations.
