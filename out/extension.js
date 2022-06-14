"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const node_fetch_1 = require("node-fetch");
function activate(context) {
    console.log('Congratulations, your extension "mrsc" is now active!');
    const disposable = vscode.commands.registerCommand('mrsc.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from mrsc!');
    });
    const disposable1 = vscode.commands.registerCommand('mrsc.pull_strapi', async () => {
        vscode.window.showInformationMessage('pull from Strapi');
        const response = await (0, node_fetch_1.default)('https://api.github.com/users/github');
        const data = await response.json();
        console.log(data);
        vscode.window.showInformationMessage(String(data));
    });
    const disposable2 = vscode.commands.registerCommand('mrsc.publish_strapi', () => {
        vscode.window.showInformationMessage('publish on Strapi');
    });
    context.subscriptions.push(disposable, disposable1, disposable2);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map