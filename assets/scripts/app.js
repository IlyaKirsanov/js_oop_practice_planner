class Tooltip { }

class ProjectItem {

	constructor(id, updateProjectsListsFunction) {
		this.id = id;
		this.updateProjectsListsHandler = updateProjectsListsFunction;
		this.connectMoreInfoButton();
		this.connectSwitchButton();
	}

	connectMoreInfoButton(){}

	connectSwitchButton(){
		const projectItemElement = document.getElementById(this.id);
		const switchBtn = projectItemElement.querySelector('button:last-of-type');
		switchBtn.addEventListener('click', this.updateProjectsListsHandler);
	}
}

class ProjectList {

	projects = [];

	constructor(type) {
		this.type = type;
		
		const prjItems = document.querySelectorAll(`#${type}-projects li`);
		for (const prjItem of prjItems) {
			this.projects.push(new ProjectItem(prjItem.id ,this.switchProject.bind(this)));
		}
		console.log(this.projects);
	}

	setSwitchHandlerFunction(switchHandlerFunction){
		this.switchHandler = switchHandlerFunction;
	}

	addProject(){
		console.log(this);
	}

	switchProject(projectId){
		// const projectIndex = this.projects.findIndex(project => {
		// 	return project.id === projectId;
		// })
		//this.projects.splice(projectIndex, 1);
		this.switchHandler(this.projects.find(project => project.id === projectId))
		this.projects = this.projects.filter(project => project.id !== projectId)
	}
}

class App {
	static init() {
		const activeProjectsList = new ProjectList('active', );
		const finishedProjectsList = new ProjectList('finished');
		activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
		finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
	}
}

App.init();