
---

# Rick and Morty API - Angular 18

This project is a web application to manage and display Rick and Morty characters, developed with **Angular 18**, applying SOLID principles, Clean Architecture, Vertical Slice Architecture, and best practices to ensure maintainability, scalability, and clean code.

## Technologies Used

- **Angular 18** for the frontend framework
- **RxJS** for reactive programming and asynchronous handling
- **Bootstrap** for responsive styling
- **HttpClientModule** to manage HTTP requests
- **FormsModule** and **ReactiveFormsModule** for form handling

## Applied SOLID Principles

- **Single Responsibility Principle (SRP):** Each component and service handles a specific part of the application. For example, `CharacterListComponent` handles displaying characters, while `CharacterService` manages API requests.
- **Open/Closed Principle (OCP):** Components are designed to be extendable without altering existing code, like adding additional properties to the character model.
- **Liskov Substitution Principle (LSP):** Components and services can replace base components without altering the application’s functionality.
- **Interface Segregation Principle (ISP):** Specific interfaces allow services to depend only on required properties.
- **Dependency Inversion Principle (DIP):** The application relies on abstractions, such as injecting services into components, rather than directly coupling with implementations.

## Design Patterns Used

- **Creational Pattern - Factory Pattern:** This pattern is used to create character entities in services, centralizing data handling for structured, flexible code.
- **Structural Pattern - Dependency Injection:** Angular’s DI system provides services into components, creating modular and testable code.
- **Behavioral Pattern - Repository Pattern:** Services encapsulate data access and isolate it from business logic, simplifying the interaction with the backend API.
- **Behavioral Pattern - DTO (Data Transfer Object):** DTOs structure and validate data when interacting with APIs.

## Clean Architecture

This project follows Clean Architecture principles to separate business logic, infrastructure, and presentation layers, enhancing code quality and testability. 

Layers:
- **Domain:** Business entities and rules
- **Application:** Use cases or application logic
- **Infrastructure:** Repositories and external service adapters
- **Presentation:** Angular components and services for UI

## Vertical Slice Architecture

The code is organized by feature (or “slice”) rather than by layer. Each module (e.g., `characters`) manages its responsibilities independently, enhancing scalability and maintainability.

## Project Structure

The project is structured using Angular's module system, organized by feature.

```plaintext
src/
├── app/
│   ├── characters/                   # Character module and components
│   │   ├── components/               # UI components (list, form, modals)
│   │   ├── services/                 # Services for API interaction
│   │   └── models/                   # Character interfaces and models
│   ├── core/                         # Core module for shared services and config
│   ├── shared/                       # Shared module for reusable components
│   ├── app-routing.module.ts         # App-wide routing
│   └── app.module.ts                 # Root module
```

## Clean Code Principles

The project follows Clean Code principles to ensure clarity, simplicity, and maintainability.

- **Clear Naming:** All components, variables, and functions are named descriptively.
- **Small and Specific Functions:** Functions are limited to specific tasks to maintain readability.
- **Consistent Formatting:** Uses a consistent style throughout the codebase, enhancing readability.

## **Frontend (Angular 18):**

1. **List Characters:** Develop an interface to display a list of characters with pagination.
2. **Create and Edit Characters:** Implement forms for creating and editing character details.
3. **Delete Characters:** Include a modal for confirming character deletion.
4. **BEM Methodology:** Utilize the BEM methodology for CSS and adopt a component architecture based on atomic design principles (atomic, molecular, organism).
5. **Reusable Components:** Focus on building modular, reusable components for the UI.
6. **Server-Side Rendering (SSR):** Set up SSR capabilities for better performance and SEO.

## Application Endpoints and Usage

The Angular app interfaces with the backend API for the following:

1. **List Characters:** Displays a list of characters with filtering options.
2. **View Character Details:** Shows details for each character.
3. **Create a Character:** Provides a form to add a new character.
4. **Edit a Character:** Updates existing character details.
5. **Delete a Character:** Removes a character from the list.

## Installation and Running

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application in development mode:**

   ```bash
   ng serve
   ```

4. **Navigate to** `http://localhost:4200/` to access the application in your browser.

---

## Deploying on Google App Engine

### Steps to Deploy

1. **Configure the `app.yaml` file**: Create an `app.yaml` file in the project root with the following content:

   ```yaml
   runtime: nodejs20
   instance_class: F2
   env: standard
   handlers:
     - url: /
       static_files: dist/rick-and-morty-angular/index.html
       upload: dist/rick-and-morty-angular/index.html
     - url: /
       static_dir: dist/rick-and-morty-angular
   ```

2. **Build the application for production**: Generate an optimized build for production by running:

   ```bash
   ng build --prod
   ```

   This command will create a `dist/rick-and-morty-angular` folder containing the production build.

3. **Deploy the application on App Engine**:

   ```bash
   gcloud app deploy
   ```

4. **Access the application**: Once deployed, you can open your application in the browser:

   ```bash
   gcloud app browse
   ```

---
