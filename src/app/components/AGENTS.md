# AGENTS.md

## Component Template

### @for instead of \*ngFor

- you MUST NOT use \*ngFor
- you MUST use @for

**BEFORE**

```html
<div *ngFor="let step of processSteps; let last = last" class="relative">
  <!-- ... -->
</div>
```

**AFTER**

- You must track each variable
- If variable has no `id` use `track: $index` and WARN me that you applied this workaround

```html
@for(step of processSteps; track: step.id) {
<div class="relative">
  <!-- ... -->
</div>
}
```

- remove NgFor-Directive if present

**BEFORE**

```ts
@Component({
  imports: [NgFor]
})
export class MyComponent {}
```

**AFTER**

```ts
@Component({
  selector: 'ngde-call-for-papers'
})
export class MyComponent {}
```

## Component Methods

- `private` Methods need to be place after `public` methods
- Methods being used in the Component's template have access-modifier `protected`
