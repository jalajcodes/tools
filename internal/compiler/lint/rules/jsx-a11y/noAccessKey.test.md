# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `jsx-a11y/noAccessKey`

### `0`

```

 lint/jsx-a11y/noAccessKey/reject/1/file.tsx:1:24 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unterminated string constant

    <input accessKey='key />
                            ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```javascript
undefined
```

### `1`

```

 lint/jsx-a11y/noAccessKey/reject/2/file.tsx:1:7 lint/jsx-a11y/noAccessKey  FIXABLE  ━━━━━━━━━━━━━━━

  ✖ Avoid the accessKey attribute to reduce inconsistencies between keyboard shortcuts and screen
    reader keyboard comments.

    <input accessKey={key} />
           ^^^^^^^^^^^^^^^

  ℹ Assigning keyboard shortcuts using the accessKey attribute leads to inconsistent keyboard
    actions across applications.

  ℹ Safe fix

  - <input·accessKey={key}·/>
  + <input·/>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```tsx
<input />;

```

### `2`

```
✔ No known problems!

```

### `2: formatted`

```tsx
<input />;

```

### `3`

```
✔ No known problems!

```

### `3: formatted`

```tsx
<input accessKey={undefined} />;

```

### `4`

```
✔ No known problems!

```

### `4: formatted`

```tsx
<Input accessKey={key} />;

```
