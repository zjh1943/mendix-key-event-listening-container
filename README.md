## KeyEventListeningContainer

A container to listen Key events in Mendix. The events can be from the DOM elements inside this container or from the `document.window`.

## Features
1. Very easy to use in Mendix. No pure code needed.
2. Can listen key events both locally(from the elements inside the container) and globally(from the `document.window`). 
3. You can add as many events as you want, if you want each listener for each type of key event.
4. Modifier keys are supported. e.g. SHIFT, ALT, CTRL, META.

## Usage

1. Install this `KeyEventListeningContainer` pluggable widget into your Mendix Project.
2. Add `KeyEventListeningContainer` widget into the page.
3. Set properties of the `KeyEventListeningContainer` container widget.
4. Add other widgets into the `KeyEventListeningContainer` container widget. Only if 
5. 

## Demo project
[link to sandbox]

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
