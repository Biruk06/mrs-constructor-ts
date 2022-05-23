// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "mrsc" is now active!');

	const disposable = vscode.commands.registerCommand('mrsc.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from mrsc!');
	});

	const disposable1 = vscode.commands.registerCommand('mrsc.pull_strapi', () => {
		vscode.window.showInformationMessage('pull from Strapi');	
	});
	
	const disposable2 = vscode.commands.registerCommand('mrsc.publish_strapi', () => {
		vscode.window.showInformationMessage('publish on Strapi');
	});
	context.subscriptions.push(disposable, disposable1, disposable2);
}




// this method is called when your extension is deactivated
export function deactivate() {}
