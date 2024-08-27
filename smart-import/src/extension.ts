import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('extension.autoImport', async (fileUri: vscode.Uri) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor || !fileUri) {
            vscode.window.showErrorMessage('No active editor or file selected');
            return;
        }

        // Calculate relative path
        const fromPath = path.relative(
            path.dirname(editor.document.uri.fsPath),
            fileUri.fsPath
        );

        // Generate the import statement
        const importStatement = `import something from "${fromPath.replace(/\\/g, '/')}";\n`;

        // Insert the import statement at the top of the file
        await editor.edit(editBuilder => {
            editBuilder.insert(new vscode.Position(0, 0), importStatement);
        });

        vscode.window.showInformationMessage(`Imported ${fromPath}`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
