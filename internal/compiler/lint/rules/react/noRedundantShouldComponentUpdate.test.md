# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `react/noRedundantShouldComponentUpdate`

### `0`

```

 lint/react/noRedundantShouldComponentUpdate/reject/1/file.tsx:1
lint/react/noRedundantShouldComponentUpdate ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not implement shouldComponentUpdate when extending React.PureComponent.

  > 1 │ class Hello extends React.PureComponent {
      │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  > 2 │   shouldComponentUpdate() {}
  > 3 │ }
      │ ^

  ℹ When the shouldComponentUpdate method is implemented, extending React.PureComponent provides
    no benefit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```tsx
class Hello extends React.PureComponent {
	shouldComponentUpdate() {}
}

```

### `1`

```

 lint/react/noRedundantShouldComponentUpdate/reject/2/file.tsx:1
lint/react/noRedundantShouldComponentUpdate ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not implement shouldComponentUpdate when extending React.PureComponent.

  > 1 │ class Hello extends PureComponent {
      │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  > 2 │   shouldComponentUpdate() {}
  > 3 │ }
      │ ^

  ℹ When the shouldComponentUpdate method is implemented, extending React.PureComponent provides
    no benefit.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```tsx
class Hello extends PureComponent {
	shouldComponentUpdate() {}
}

```

### `2`

```
✔ No known problems!

```

### `2: formatted`

```tsx
class Hello extends React.PureComponent {
	componentDidMount() {}
}

```

### `3`

```
✔ No known problems!

```

### `3: formatted`

```tsx
class Hello extends PureComponent {
	componentDidMount() {}
}

```
