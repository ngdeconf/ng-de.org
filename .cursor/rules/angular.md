# Angular v19+ Development Standards and Best Practices: A Comprehensive Guide

## 1. Core Architecture Guidelines

We follow these core architectural patterns:

- **Standalone Components:** All components, directives, and pipes are standalone by default (Angular v19+)
- **Strong Typing:** Implement proper TypeScript types, interfaces, and models throughout the codebase
- **Single Responsibility Principle (SRP):** Each component and service should have a single, well-defined responsibility
- **Rule of One:** Keep files focused on a single concept or functionality
- **Reactive State Management:** Use Signals for reactive and efficient state management
- **Dependency Injection:** Utilize Angular's DI system for service management
- **Lazy Loading:** Implement Deferrable Views and route-level lazy loading with `loadComponent`
- **Directive Composition:** Use the Directive Composition API for reusable component behavior

## 2. Angular Style Guide Compliance

Following the official Angular Style Guide:

- **Code Size:** Limit files to 400 lines of code
- **Single Purpose Files:** Define one entity (component, service, etc.) per file
- **Naming Conventions:** Use consistent, descriptive names for all symbols
- **Folder Structure:** Organize by feature-based folders
- **File Separation:** Extract templates and styles to their own files for components
- **Property Decoration:** Properly decorate input and output properties
- **Component Selectors:** Use custom prefixes and kebab-case for component selectors (e.g., `app-feature-name`)

## 3. Input Signals

For component inputs, follow these guidelines:

- **Modern Signal-Based Inputs:** Use the `input()` function instead of `@Input()` decorator:

  ```typescript
  // Preferred
  value = input(0);  // Creates InputSignal

  // Instead of
  @Input() value = 0;
  ```

- **Required Inputs:** Use `input.required()` for mandatory inputs:

  ```typescript
  value = input.required<number>();
  ```

- **Input Transformations:** Apply transformations when needed:

  ```typescript
  disabled = input(false, { transform: booleanAttribute });
  value = input(0, { transform: numberAttribute });
  ```

- **Two-Way Binding:** Use model inputs for two-way binding:

  ```typescript
  value = model(0);  // Creates a model input with change propagation

  // Update model values with .set() or .update()
  increment() {
    this.value.update(v => v + 1);
  }
  ```

- **Input Aliases:** Use aliases when necessary:
  ```typescript
  value = input(0, { alias: 'sliderValue' });
  ```

## 4. Component Development

When creating components:

- **Naming Pattern:** Use consistent naming - `feature.type.ts` (e.g., `hero-list.component.ts`)
- **Template Inline:** Inline `.html`-templates
- **Style Inline:** Inline styles
- **Signal-Based Inputs:** Use `input()` function for component inputs
- **Two-Way Binding:** Use `model()` function for two-way binding
- **Lifecycle Hooks:** Implement appropriate lifecycle hook interfaces (OnInit, OnDestroy, etc.)
- **Element Selectors:** Keep components as elements (`selector: 'app-hero-detail'`)
- **Logic Delegation:** Move complex logic to services
- **Input Initialization:** Provide default values or mark as required
- **Lazy Loading:** Use `@defer` for heavy components or features
- **Error Handling:** Implement proper error boundaries with try-catch blocks
- **Modern Control Flow:** Use `@if`, `@for`, `@switch` instead of structural directives
- **State Representation:** Implement proper loading and error states
- **Derived State:** Use `computed()` for derived state calculations

## 5. Styling Standards

Our styling conventions:

- **Tailwind** Instead of writing own styles, use tailwind as much as possible. If you write custom styles, please explain why.
- **Component Encapsulation:** Use component-specific styles with proper encapsulation
- **CSS Methodology:** Follow BEM methodology for CSS class naming when not using Angular Material
- **Component Libraries:** Use Angular Material or other component libraries consistently
- **Theming:** Implement proper theming and color systems
- **Accessibility:** Follow a11y standards in all components
- **Dark Mode:** Support dark mode where appropriate

## 6. Services and Dependency Injection

For services and DI:

- **Service Declaration:** Use `@Injectable()` decorator with `providedIn: 'root'` for singleton services
- **Data Services:** Make data services responsible for API calls and data operations
- **Error Handling:** Implement proper error handling in services
- **DI Hierarchy:** Follow the Angular DI hierarchy appropriately
- **Service Contracts:** Use interfaces to define service contracts
- **Focused Responsibilities:** Keep services focused on specific tasks

## 7. Directives and Pipes

When creating directives and pipes:

- **Attribute Directives:** Use for presentation logic without templates
- **Host Property:** Use the `host` property for bindings and listeners:

  ```typescript
  @Directive({
    standalone: true,
    selector: '[appHighlight]',
    host: {
      // Host bindings
      '[class.highlighted]': 'isHighlighted',
      '[style.color]': 'highlightColor',

      // Host listeners
      '(click)': 'onClick($event)',
      '(mouseenter)': 'onMouseEnter()',
      '(mouseleave)': 'onMouseLeave()',

      // Static properties
      'role': 'button',
      '[attr.aria-label]': 'ariaLabel'
    }
  })
  ```

- **Selector Prefixes:** Use custom prefixes for directive selectors
- **Pure Pipes:** Make pipes pure when possible for better performance
- **Pipe Naming:** Follow naming conventions for pipes (camelCase)

## 8. State Management

For state management:

- **Signals:** Use Signals as the primary state management solution
- **Component Inputs:** Use signal inputs with `input()` for component inputs
- **Two-Way Binding:** Use model inputs with `model()` for two-way binding
- **Local State:** Use writable signals with `signal()` for local component state
- **Derived State:** Use computed signals with `computed()` for derived state
- **Side Effects:** Use `effect()` for handling side effects
- **Error Handling:** Implement proper error handling in signal computations
- **Signal Conversion:** Use `toSignal()` and `toObservable()` for interoperability with RxJS

## 9. Testing Standards

For testing:

- **Test Coverage:** Maintain high test coverage for all components and services
- **Unit Tests:** Write focused unit tests for services, pipes, and components
- **Component Testing:** Test components with TestBed and component harnesses
- **Mocking:** Use proper mocking techniques for dependencies
- **Test Organization:** Follow AAA pattern (Arrange, Act, Assert) for test organization
- **Test Naming:** Use descriptive test names that explain the expected behavior

## 10. Performance Optimization

For optimal performance:

- **Change Detection:** Use OnPush change detection strategy for components
- **Lazy Loading:** Implement lazy loading for routes and components
- **Virtual Scrolling:** Use virtual scrolling for long lists
- **Memoization:** Memoize expensive computations
- **Bundle Size:** Monitor and optimize bundle size
- **Server-Side Rendering:** Implement SSR for improved initial load performance
- **Web Workers:** Offload intensive operations to web workers when appropriate

## 11. Security Practices

Security best practices:

- **XSS Prevention:** Always sanitize user input
- **CSRF Protection:** Implement CSRF tokens for forms
- **Content Security Policy:** Use appropriate CSP headers
- **Authentication:** Implement secure authentication practices
- **Authorization:** Use proper authorization checks
- **Sensitive Data:** Never expose sensitive data in client-side code

## 12. Accessibility Standards

Accessibility requirements:

- **ARIA Attributes:** Use appropriate ARIA attributes
- **Keyboard Navigation:** Ensure all interactive elements are keyboard accessible
- **Color Contrast:** Maintain proper color contrast ratios
- **Screen Readers:** Test with screen readers
- **Focus Management:** Implement proper focus management
- **Alternative Text:** Provide alt text for images

## 13. Documentation

Documentation standards:

- **Code Comments:** Use JSDoc comments for public APIs
- **README Files:** Maintain up-to-date README files for projects and major features
- **API Documentation:** Document public APIs thoroughly
- **Changelog:** Maintain a changelog for version updates
- **Usage Examples:** Provide usage examples for components and services
