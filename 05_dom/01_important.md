# .innerText vs .textContent

Both `.innerText` and `.textContent` are used to retrieve or set the text content of an element in the DOM, but they behave differently in certain scenarios.

### 1. **`.textContent`**

- Retrieves all the text, including text hidden by CSS.
- Ignores style, so if an element or its children are hidden with `display: none`, `.textContent` will still retrieve their text.
- It is faster as it just returns or sets the raw text content without considering CSS or layout.

#### Example:

```html
<div style="display:none;">Hidden Text</div>
```

- `element.textContent` will return `"Hidden Text"`.

### 2. **`.innerText`**

- Considers CSS and layout. It will not retrieve the text of hidden elements.
- As it renders the text as it would appear to the user, it recalculates the layout and takes styles into account (like `display: none` or `visibility: hidden`).
- It is slower due to these additional computations.

#### Example:

```html
<div style="display:none;">Hidden Text</div>
```

- `element.innerText` will return an empty string because the text is not visible.

### Key Differences:

- **Performance**: `.textContent` is faster because it doesn’t care about CSS.
- **Hidden elements**: `.textContent` includes text from hidden elements, while `.innerText` does not.
- **Line breaks**: `.innerText` respects line breaks in the rendered layout, while `.textContent` doesn't include them explicitly.

### When to use:

- Use `.textContent` when you want the raw text regardless of visibility or formatting.
- Use `.innerText` when you need the visible text as seen by the user.
