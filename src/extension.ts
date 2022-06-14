/* eslint-disable @typescript-eslint/naming-convention */
import * as vscode from 'vscode';
import fetch from 'node-fetch';
import axios from 'axios';



export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "mrsc" is now active!');



	const disposable = vscode.commands.registerCommand('mrsc.auth_strapi', async () => {
		vscode.window.showInformationMessage('authentication in Strapi!');
	
		  axios
		  .post('http://localhost:1337/admin/auth/login', 
		  {
			identifier: 'sergei20000620@gmail.com',
			password: 'Sergei-06',
		  })
		  .then((response) => {
			// Handle success.
			console.log('[hw] Data: ', response.data);
		  })
		  .catch((error) => {
			// Handle error.
			console.log('[hw] An error occurred:', error.response);
		  });		  

	});



	const disposable1 = vscode.commands.registerCommand('mrsc.pull_strapi', async () => {
		vscode.window.showInformationMessage('pull from Strapi');	
		console.log('pull');

		const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU1MTQwNzI1LCJleHAiOjE2NTc3MzI3MjV9.6gm-Dtv2eSQddMqAFNk3AfhGjbvac4HkMOrsbI2gOZk';

		// Request API.
		axios
		  .get('http://localhost:1337/calendar-events', {
			headers: {
			  Authorization: `Bearer ${token}`,
			},
		  })
		  .then((response) => {
			// Handle success.
			console.log('[pull] Data: ', response.data);
		  })
		  .catch((error) => {
			// Handle error.
			console.log('[pull] An error occurred:', error.response);
		  });
		
		  

	});
	
	const disposable2 = vscode.commands.registerCommand('mrsc.publish_strapi', async () => {
		vscode.window.showInformationMessage('publish on Strapi');
		console.log('publish');
		
		const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU1MTQwNzI1LCJleHAiOjE2NTc3MzI3MjV9.6gm-Dtv2eSQddMqAFNk3AfhGjbvac4HkMOrsbI2gOZk';

		// Request API.
		axios
		  .post('http://localhost:1337/calendar-events', 
		  {		  
			comment: 'congratulation',
			createdDate: 1655170771225,
			endTime: 1655181000000, 
			startTime: 1655170771225
		  },	
		  {headers: {
			  Authorization: `Bearer ${token}`,
			},
		  })
		  .then((response) => {
			// Handle success.
			console.log('[publish] Data: ', response.data);
		  })
		  .catch((error) => {
			// Handle error.
			console.log('[publish] An error occurred:', error.response);
		  });
		

		});
	context.subscriptions.push(disposable, disposable1, disposable2);
}



export function deactivate() {}
