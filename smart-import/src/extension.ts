import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('extension.autoImport', async (fileUri: vscode.Uri) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor || !fileUri) {
            vscode.window.showErrorMessage('No active editor or file selected');
            return;
        }

        // Calculate the relative path
        const fromPath = path.relative(
            path.dirname(editor.document.uri.fsPath),
            fileUri.fsPath
        ).replace(/\\/g, '/'); // Ensure cross-platform compatibility

        // Determine whether to use 'import' or 'require'
        const fileExtension = path.extname(fileUri.fsPath);
        let importStatement: string;

        if (fileExtension === '.js' || fileExtension === '.ts') {
            if (editor.document.languageId === 'javascript' || editor.document.languageId === 'typescript') {
                // Use 'import' for JavaScript and TypeScript files
                importStatement = `import something from "${fromPath}";\n`;
            } else {
                // Default to 'require' for other cases (common in Node.js)
                importStatement = `const something = require("${fromPath}");\n`;
            }
        } else {
            vscode.window.showErrorMessage('The file type is not supported for import.');
            return;
        }

        // Insert the import statement at the top of the file
        await editor.edit(editBuilder => {
            editBuilder.insert(new vscode.Position(0, 0), importStatement);
        });

        vscode.window.showInformationMessage(`Imported ${fromPath}`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
