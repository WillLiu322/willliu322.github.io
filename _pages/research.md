---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}

## Fast Collaborative Prescribed Performance Control of Connected Vehicle Platoons with Multilevel Thresholds and Boundary Adaptive Constraints

The rapid advancement of connected and automated vehicles has made **vehicular platoon control (VPC)** a critical technology for enhancing traffic flow, reducing emissions, and improving road safety. In practical platoon systems, it's essential to guarantee both steady-state and transient performance, especially across diverse driving scenarios and under actuator limitations.

<p align="center">
  <img src="/images/platoon.png" alt="Illustration of a vehicle platoon on a road" width="600">
</p>

**Key Contributions:**
* Engineered a **dynamic-threshold prescribed performance control (PPC) algorithm** that adapts the stringency of performance constraints to diverse driving scenarios (e.g., highway cruising vs. urban congestion), eliminating the subjectivity inherent in manual boundary design.
* Proposed a **boundary-adaptive PPC scheme** to robustly handle actuator dead-zone and saturation nonlinearities, effectively balancing the trade-off between loose constraints (poor precision) and tight constraints (control singularities).
* Designed a **fixed-time nonlinear compensator** to completely eliminate nonlinear input deviations, achieving this with reduced design complexity.
* Extended traditional finite-time PPC methods by designing a **fixed-time asymptotic tracking control algorithm**. This ensures inter-vehicle spacing errors not only converge to a small region but ultimately reach zero, with a convergence time that is fixed and independent of initial conditions.
* Constructed an intelligent transportation experimental platform utilizing **ROS-powered vehicles**, enabling real-world deployment and validation of the proposed algorithms.

**Related Papers:**
* **Wei Liu**, Zhenyu Gao, Zhongyang Wei, Lu Zhang, Ge Guo, Shahid Mumtaz. “Compensator-Based Fixed-Time Prescribed Performance Control of Vehicular Platoon with Input Nonlinearities: A Performance Boundary Self-Adjusting Approach." *IEEE Transactions on Intelligent Transportation Systems*, 2025. [[Link](https://ieeexplore.ieee.org/document/11059991/)]
* Zhenyu, Gao, **Wei Liu**, Zhongyang Wei, Ge Guo. “Adaptive Finite-time Prescribed Performance Control of Vehicular Platoons with Multilevel Threshold and Asymptotic Convergence." *IEEE Transactions on Intelligent Transportation Systems*, 2025. [[Link](https://ieeexplore.ieee.org/document/10878275/)]
* Zhenyu Gao, **Wei Liu**, Zhongyang Wei, Lu Zhang, Ge Guo. "Adaptive Finite-Time Prescribed Performance Accurate Tracking Control of Vehicular Platoons with Multilevel Threshold." *2024 8th CAA International Conference on Vehicular Control and Intelligence (CVCI)*, 2024. (**Shortlisted for the Best Paper Award**). [[Link](https://ieeexplore.ieee.org/document/10830255/)]

---

## Fast Cooperative Control of 2-D Networked Vehicular Platoons with Prescribed Performance Constraints

In modern intelligent transportation systems, coordinating multiple vehicles into tightly coupled platoons is fundamental for enhancing road capacity, reducing fuel consumption and emissions, and improving overall traffic safety. While most classical approaches are limited to one-dimensional, single-lane scenarios with restricted performance guarantees or reliance on precise initial conditions, real-world operations demand flexible, robust control for **two-dimensional maneuvers** like merging, lane changes, and obstacle avoidance, even under model uncertainties and external disturbances. Ensuring both rapid transient response and high steady-state accuracy in such 2-D platoons necessitates new modeling and control paradigms.

<div style="text-align: center;">
<img src="/images/车队变道.png" alt="Image of vehicles performing a lane change" width="400" style="display:inline-block; margin-right:10px;"/>
<img src="/images/多车道融合.png" alt="Image of vehicles merging across multiple lanes" width="400" style="display:inline-block;"/></div>

**Key Contributions:**

* Developed a more general **third-order vehicle-platoon model** that accurately captures realistic longitudinal and lateral dynamics, enabling comprehensive simulation and validation of proposed 2D control schemes in diverse practical scenarios (e.g., multi-lane merging, obstacle avoidance).
* Designed **novel performance functions** that are independent of each vehicle's initial state. These functions guarantee the platoon’s dynamic and transient performance remains within user-specified bounds, addressing both transient behavior and steady-state accuracy critical for cooperative control.
* Introduced a **sliding-mode control strategy with built-in convergence-time constraints** to accommodate the complexity of the third-order model. This method significantly accelerates the system’s settling speed while ensuring both individual vehicle stability and overall platoon string stability within a predetermined timeframe.

**Related Papers:**
* Zhenyu Gao, Zhongyang Wei, **Wei Liu**, Ge Guo. “Adaptive Finite-Time Prescribed Performance Control with Small Overshoot for Uncertain 2-D Plane Vehicular Platoons." *IEEE Transactions on Vehicular Technology*, 2024. [[Link](https://ieeexplore.ieee.org/document/10684117/)]
* Zhenyu Gao, Zhongyang Wei, **Wei Liu**, Lu Zhang, Shixi Wen, Ge Guo. “Global Prescribed Performance Control for 2-D Plane Vehicular Platoons with Small Overshoot: A Fixed-Time Composite Sliding Mode Control Approach.” *IEEE Transactions on Intelligent Transportation Systems*, (Under review).
