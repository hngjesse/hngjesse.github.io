# Hng Jesse

**Physicist • Developer • Modbus Loggers coder**  
[LinkedIn](https://www.linkedin.com/in/hngys/) | [GitHub](https://github.com/hngjesse) | [Current Project](https://hngjesse.github.io/Modbus_loggers/)

---

## About Me

I’m a quantum physicist passionate about data-driven systems, automation, and computational modeling.  
I completed my MPhil at the [University of Nottingham Malaysia](https://www.nottingham.edu.my/), where I studied two-qubit entanglement dynamics in [open quantum systems](https://en.wikipedia.org/wiki/Open_quantum_system) [[1]](#ref1).

Currently, I work on bifacial solar energy projects, focusing on developing robust and reliable **Linux-based Modbus data logging systems**. My main interest lies in the [Modbus protocol](https://en.wikipedia.org/wiki/Modbus), which is widely used in **solar monitoring technologies**.

My short-term goal is to create a self-contained Modbus data logger that can run on any Linux system using either Modbus TCP or RTU. The vision is to provide a simple installer and setup script that lets users start logging immediately — only needing to specify basic serial parameters (baud rate, parity, stop bits, etc.) in a **JSON/YAML** configuration file.

---

## Featured Projects

### [Modbus Logger](https://github.com/hngjesse/Modbus_loggers)

A **Python-based Modbus data logging system** built for industrial solar applications.  
It operates over **RS485 (Modbus RTU)** and automatically logs readings from multiple devices like DC meters and inverters. Designed for **Linux**, it provides a lightweight and reliable solution for long-term monitoring.

> Full details available on my [Modbus Logger Project Page](https://hngjesse.github.io/Modbus_loggers/)

**Key features:**
- Continuous data logging with minimal configuration  
- Customizable device settings via configuration file  
- Automatic `.log` and `.csv` data storage  
- Built for embedded Linux environments (e.g., mini PCs)

#### Background Story
This project originated from a real challenge, which is recovering inaccessible solar data from a mini PC that used an outdated Windows-based system connected to a remote server in China.  
After uncovering a large hidden binary file containing raw Modbus data, I rebuilt the entire data acquisition system from scratch in **Python**, transitioning it to **Linux** for better stability and transparency.

---

### [Three-Body Simulation](https://github.com/hngjesse/Three_body_simulation)

A numerical physics project exploring the chaotic dynamics of the classical three-body problem using a **fifth-order Runge–Kutta (RK4(5))** method.  
It simulates the gravitational interaction between three bodies, visualizing complex orbital patterns and center-of-mass motion.

**Highlights:**
- Built from scratch using the Butcher Tableau formulation  
- Demonstrates chaotic motion and sensitivity to initial conditions  
- Educational example of computational physics and nonlinear dynamics

---

### [Realistic Football Trajectory Simulation](https://github.com/hngjesse/Realistic_football_simulation)

A 3D physics simulation that models football trajectories with real aerodynamic effects — including **drag, lift (Magnus effect),** and **spin-induced curve**.

**Features:**
- Built in MATLAB using Euler integration  
- Configurable initial velocity, spin, and lift parameters  
- Simulates “banana kick” trajectories realistically  
- Demonstrates physics behind curved free kicks  

---

### Other Projects
Explore more repositories on my [GitHub profile](https://github.com/hngjesse).

---

## Contact

📧 Email: [hngjesse@gmail.com](mailto:hngjesse@gmail.com)  
🔗 GitHub: [github.com/hngjesse](https://github.com/hngjesse)

---

## Reference
<a id="ref1"></a>
[1] B. A. Tay and Y. S. H’ng, *Entanglement generation across exceptional points in a two-qubit open quantum system: The role of initial states*, **Phys. Rev. E 112**, 024133 (2025). [DOI link](https://doi.org/10.1103/24cd-939t)

---

© 2025 Hng Jesse — Built using GitHub README.md.