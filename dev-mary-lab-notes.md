# Guest Speaker Notes

## 1. Key Insights

### - **Knowledge Management System**
   - The system includes **feedback on actions taken in the app**, ensuring that actions persist.

### - **Remote Server Access**
   - Uses **SSH** (Secure Shell) to access his server remotely.
   - Built an **in-house infrastructure** using **Dynamic DNS**:
     - **Dynamic IPs** change frequently. How does DNS keep up with these IP changes?
     - **UNA network** does not allow dynamic IPs — Why might this be?

### - **Backend Architecture**
   - The **CIS API**, a Python application.
   - Uses **MongoDB** for database management.
   - Not using **EJS** (Embedded JavaScript), but rather a competing framework called **Svelte**, similar to **React**.

### - **Security Concerns**
   - **Hackers** often target backend code. Therefore, the company avoids **in-house hosting**.
   - Uses **deployment services** to mitigate risks like **weather** disruptions and other physical issues.
   - Infrastructure is hosted in the **Cloud** using **Cloudzy**, running on **Windows Server 2016**.

### - **GitHub Actions for CI/CD**
   - **GitHub Actions** automatically deploy merged pull requests:
     - Actions copy code to the backend server and initiate the deployment process.
   - Look into **more GitHub Actions** for additional automation potential.

---

## 2. Learning More About GitHub Actions

GitHub Actions is a powerful tool built directly into GitHub that automates tasks related to your software development lifecycle. 
It allows you to automate, customize, and execute workflows right from your GitHub repository. 
These workflows are typically triggered by specific events such as a commit, a pull request, or an issue being opened.

### - **Utilizing GitHub Actions**
   -Create a Workflow File
   -Define Workflow Triggers
   -Set Up Jobs and Steps
   -Use Pre-Built Actions or Write Custome Scripts
   -Run Security or Build Test 

GitHub Actions is a versatile tool for automating your development workflows. 
From CI/CD pipelines to vulnerability testing and more, you can leverage it to improve code quality, enhance security, and streamline your development process. 
By integrating security tests directly into your workflows, you can proactively identify and mitigate potential vulnerabilities in your codebase or dependencies.
For Dev Mary I could utilize GitHub Actions to enhance my code so that it may run faster/more efficiently.
Actions could alert me if there were issues with the deployment after a Pull Request to the main branch. 
Actions can generate documentation when new features are added to Dev Mary.

---

## 3. More Questions for Quan

- What are the key benefits of using **Cloudzy** for cloud infrastructure?
- Could you explain the differences between Svelte and React for front-end frameworks?
- Could you explain more of what your GitHub Actions are all set to do and what events are set to trigger an Action?



