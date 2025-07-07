---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

{% include base_path %}

## Fast Collaborative Prescribed Performance Control of Connected Vehicle Platoons with Multilevel Thresholds and Boundary Adaptive Constraints

With the rapid advancement of connected and automated vehicles, vehicular platoon control (VPC) has become a key technology for improving traffic flow, reducing emissions, and enhancing road safety. In practical platoon systems, it is essential to guarantee both steady-state and transient performance, especially under diverse driving scenarios and actuator limitations.

<p align="center">
  <img src="/images/platoon.png" alt="" width="600">
</p>

**Key contributions:**

This project develops advanced Prescribed Performance Control (PPC) strategies featuring dynamic, self-adaptive error boundaries. The proposed algorithms enable the platoon to flexibly adjust performance constraints in real time, ensuring high control accuracy and safety across a wide range of conditions—from smooth cruising to emergency braking. This approach significantly enhances both robustness and ride comfort while maintaining traffic efficiency.

To address the challenges posed by actuator nonlinearities, a boundary-adaptive PPC method is introduced, effectively overcoming the trade-off between overly conservative and overly narrow constraints. Additionally, a fixed-time nonlinear compensator is designed, offering a simple yet powerful solution to fully eliminate nonlinear deviations within a guaranteed time, regardless of initial conditions.

The project further advances platoon control by achieving fixed-time asymptotic convergence of spacing errors, ensuring that errors not only remain bounded but also approach zero within a fixed time. The effectiveness of these methods has been validated through both extensive simulations and real-world experiments using a ROS-based robotic platform.

**Related papers**
- **Wei Liu**, Zhenyu Gao, Zhongyang Wei, Lu Zhang, Ge Guo, Shahid Mumtaz. “Compensator-Based Fixed-Time Prescribed Performance Control of Vehicular Platoon with Input Nonlinearities: A Performance Boundary Self-Adjusting Approach." *IEEE Transactions on Intelligent Transportation Systems*, 2025. [Link](https://ieeexplore.ieee.org/document/11059991/)

- Zhenyu, Gao, **Wei Liu**, Zhongyang Wei, Ge Guo. “Adaptive Finite-time Prescribed Performance Control of Vehicular Platoons with Multilevel Threshold and Asymptotic Convergence." *IEEE Transactions on Intelligent Transportation Systems*, 2025. [Link](https://ieeexplore.ieee.org/document/10878275/)

- Zhenyu Gao, **Wei Liu**, Zhongyang Wei, Lu Zhang, Ge Guo. "Adaptive Finite-Time Prescribed Performance Accurate Tracking Control of Vehicular Platoons with Multilevel Threshold." *2024 8th CAA International Conference on Vehicular Control and Intelligence (CVCI)*, 2024. (**This paper has been shortlisted for the Best Paper Award**). [Link](https://ieeexplore.ieee.org/document/10830255/)


## Fast Cooperative Control of 2-D Networked Vehicular Platoons with Prescribed Performance Constraints

In modern intelligent transportation systems, coordinating multiple vehicles into tightly coupled platoons has become a cornerstone for enhancing road capacity, reducing fuel consumption and emissions, and improving overall traffic safety. While most classical approaches address only one‑dimensional, single‑lane scenarios with limited performance guarantees or rely heavily on precise initial conditions, real‑world operations demand flexible, robust control across two‑dimensional maneuvers such as merging, lane changes and obstacle avoidance under model uncertainties and external disturbances. Ensuring both fast transient response and tight steady‑state accuracy in such 2‑D platoons calls for new modeling and control paradigms.
<div style="text-align: center;">
<img src="/images/车队变道.png" alt="" width="400" style="display:inline-block; margin-right:10px;"/>
<img src="/images/多车道融合.png" alt="" width="400" style="display:inline-block;"/></div>

**Key contributions:**

Develop a more general third‑order vehicle‑platoon model that captures realistic longitudinal and lateral dynamics. Through extensive simulations, validate the proposed two‑dimensional control schemes in diverse practical scenarios (for example multi‑lane merging and obstacle avoidance) to demonstrate their effectiveness in real‑life applications.

Recognizing that both transient behavior and steady‑state accuracy are critical for cooperative control, design novel performance functions that require no knowledge of each vehicle’s initial state yet guarantee that the platoon’s dynamic and transient performance remains within user‑specified bounds.

To accommodate the complexity of the third‑order model, introduce a sliding‑mode control strategy with built‑in convergence‑time constraints. This method accelerates the system’s settling speed and ensures both individual vehicle stability and overall platoon string stability within a predetermined time frame.

**Related papers**
- Zhenyu Gao, Zhongyang Wei, **Wei Liu**, Ge Guo. “Adaptive Finite-Time Prescribed Performance Control with Small Overshoot for Uncertain 2-D Plane Vehicular Platoons." *IEEE Transactions on Vehicular Technology*, 2024. [Link](https://ieeexplore.ieee.org/document/10684117/)

- Zhenyu Gao, Zhongyang Wei, **Wei Liu**, Lu Zhang, Shixi Wen, Ge Guo. “Global Prescribed Performance Control for 2-D Plane Vehicular Platoons with Small Overshoot: A Fixed-Time Composite Sliding Mode Control Approach.” *IEEE Transactions on Intelligent Transportation Systems*, (Under review).
