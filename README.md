# 💾 testing-library

> Simple and complete testing utilities that encourage good universal testing practices

### 📦 Setup

Add the package in your project:

```
yarn add @soyjavi/testing-react
```

## Visual Regression Testing helper

Regression Testing is used to verify that any system changes do not interfere with existing features and/or code structure. There's a reason regression tests are part of almost every test suite in software development. It is common for devs to change or add a section of code, and having it unintentionally disrupt something that was previously working just fine.

Visual Regression Testing applies the same logic but confines testing to the visual aspects of the software. In other words, it checks that code changes do not break any aspect of the software's visual interface.

A visual regression test checks what the user will see after any code changes have been executed by comparing screenshots taken before and after code changes. This is why visual regression tests are also sometimes called visual snapshot tests.

### How to create a _visual_ test

To facilitate the development of your visual tests, we have created the `describe` function which allows you to configure the properties we want to test. Let's see an example with the `<Button>` component:

`Button.visual.js`

```js
import { describeVisual } from '@soyjavi/testing-react';

describeVisual({
  component: 'Button',
  props: {
    default: undefined,
    busy: true,
    text: 'children',
    disabled: true,
    icon: 'close',
    large: true,
    small: true,
    upperCase: false,
    'variant:PRIMARY': 'PRIMARY',
    'variant:SECONDARY': 'SECONDARY',
    'variant:CIRCULAR_PRIMARY': 'CIRCULAR_PRIMARY',
    'variant:CIRCULAR_SECONDARY': 'CIRCULAR_SECONDARY',
    wide: false,
  },
});
```

> [Snapshots](https://) of `Button.visual.js`

If we look closely, we are simply setting a value for each of the properties of the `<Button>` component. In case you need to test more than one value for the same property, you can use the pattern `nameProperty:value` as the name of the _property_. You can see it in:

```js
...
'variant:PRIMARY': 'PRIMARY',
'variant:SECONDARY': 'SECONDARY',
'variant:CIRCULAR_PRIMARY': 'CIRCULAR_PRIMARY',
'variant:CIRCULAR_SECONDARY': 'CIRCULAR_SECONDARY',
...
```

The `describe` function also allows you to run your _visual_ tests on different device sizes. To do this we simply have to set the `screen` property with the size we need (S, M or L):

`Box.visual.js`

```js
describeVisual({
  component: 'Box',
  props: {
    default: undefined,
  },
  screen: 'M',
});
```

> [Snapshots](https://) of `Box.visual.js`

## How to run your _visual_ tests

First you need to have the _Storyteller_ running:

```shell
yarn start
```

In another terminal you must execute the _script_:

```shell
yarn test:visual
```

![Screen Shot 2021-08-24 at 7 37 02 AM](https://user-images.githubusercontent.com/559654/130537078-576c2cf1-b681-4d69-835d-e0631820b33f.png)

In the event that you have modified the scaffold of a certain component, you will most likely have to update its Image Snapshots, for this you simply have to execute the script of package.json:

```
yarn test:visual -u
```
