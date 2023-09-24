# Chrome/Edge browser extension with .NET Blazor

## .NET Project Template
I used the [Blazor.BrowserExtension](https://github.com/mingyaulee/Blazor.BrowserExtension) project template to create this project.

## About
This browser extension is a simple eye dropper, that allows you to select a color from any web page.   
It also allows you to copy the color in various formats.

## Installation
As this project is just a proof of concept, it is not available in any browser extension store.  
But you can clone this repository, build it and install it manually in your browser:
- Clone the project
- Build it with your favourite IDE
- Install it in your browser:
  - Chrome: [Load the extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest)
  - Edge: [Load the extension](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/getting-started/extension-sideloading)

## Javascript Interop
Because WASM Blazor is running in a sandbox, it is not possible to access the DOM directly. (which is true for any WASM application)  
To get around this, we can use Javascript Interop. In the JS file `wwwroot/js/eyeDropper.js` 
we have a function `getColor` that returns the color of a pixel on the screen. In our `Pages/Popup.razor` file we use the
`@inject IJSRuntime JSRuntime` directive to inject the JS runtime. We can then call the `getColor` function from our C# code.  
  
This is a common use case and probably will happen quite often in browser extensions that are written in Blazor.