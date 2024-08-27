# SmartImport

## Overview

**SmartImport** simplifies adding `import` or `require` statements to your code. By right-clicking a file and selecting "Smart Import" from the context menu, the extension calculates the relative path and automatically inserts the correct syntax for your module imports at the top of your currently open file.

## Features

- **Context Menu Integration**: Quickly add import or require statements by right-clicking a file and selecting "Smart Import".
- **Dynamic Import Method**: Automatically uses `import` or `require` based on the file type and editor language.
- **Relative Path Calculation**: Ensures correct module location using `path.relative`.
- **Cross-Platform Compatibility**: Converts backslashes (`\`) to forward slashes (`/`) for all OS compatibility.
- **User Feedback**: Confirms import addition with a message in the information bar.

## Usage

1. Open a file in VS Code.
2. In the Explorer pane, right-click on the file containing the exports that you want to import.
3. Select "Smart Import" from the context menu.
4. The appropriate `import` or `require` statement will be automatically inserted at the top of the currently active file.

### Example

If you right-click on `myModule.js` in the Explorer and select "Smart Import" while `index.js` is the active editor, the following statement will be added to the top of `index.js`:

```javascript
import something from "./path/to/myModule";
```

### Installation

1. Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your system.
2. Clone the repository and navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Compile the extension by running `npm run compile`.
5. Package the extension with `vsce package`.
6. Install the packaged extension in VS Code using `code --install-extension smart-import-0.0.1.vsix`.
