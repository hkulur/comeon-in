# Design System

This is a just a crude representation of a component library. Which presents scope to customize and create component library.

## Priniciple

This means to be common repo where are the basic components specific to UX design system reside. Where in other projects make use of this to build on top of it.

## Build

```bash
yarn build:lib
```

Which creates converts JSX to react readable format and placed in `lib` folder. Which other modules can refer.

## Storybook Documentation

Added POC for storybook implementation to capture documentation of the design system

```bash
yarn storybook
```

## Testing

```bash
yarn test
```

## Linting

```bash
yarn lint
```