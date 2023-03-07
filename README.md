
# -- React modal --

This is an update of well-known JQuery's plugin of their modals, but in React !




## Installation


```js
npm i julien-react-modal
```


## Import

Just import it where you want to use it !

```js
import { Modal } from 'julien-react-modal/dist/Modal'
```

And then call it in your component

```js
<Modal></Modal>
```

## Props

The plugin has a few props

```js
title ?: string,
transitionTime ?: string,
children ?: any,
btnContent ?: string,
isOpen ?: boolean
```

title: Adds a title to the modal

transitionTime: Add a transitionTime to the opening of the modal

btnContent: Custom text to the btn on which you want to click to display the modal

isOpen: Boolean to open the modal, isn't necessary to open it with the btn

children: Content of the modal

