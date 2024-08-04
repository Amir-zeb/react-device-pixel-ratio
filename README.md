# React Device Pixel Ratio Adjustments

This repository contains a custom React hook that adjusts container styles based on the device pixel ratio. This is particularly useful for handling high-density screens and ensuring responsive design across various devices.

## Live Demo

Check out the live demo [here](https://amir-zeb.github.io/react-device-pixel-ratio/).

## Features

- Adjusts container width based on device pixel ratio.
- Applies styles conditionally depending on the device's screen width.
- Listens to window resize events to dynamically update the styles.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/amir-zeb/react-device-pixel-ratio.git
    ```

2. Navigate to the project directory:
    ```sh
    cd react-device-pixel-ratio
    ```

3. Install dependencies:
    ```sh
    npm install 
    ```

## Usage

- Import the Hook: Import the custom hook in your React component file.
- Use the Hook: Call the custom hook in your component without needing to handle any return value.
- Add an Element with ID main-content: Ensure your component contains an element with the ID main-content to apply the styles.

## Example

1. Import the Hook:
    ```sh
    import useDevicePixelRatio from './path/to/useDevicePixelRatio';
    ```

2. Use the Hook in Your Component:
    ```sh
    const MyComponent = () => {
        useDevicePixelRatio(768);

        return (
            <div id="main-content">
            {/* Your component content */}
            </div>
        );
    };
    ```