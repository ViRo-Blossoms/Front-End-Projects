class Task {
    constructor (name, notes) {
        this.name = name;
        this.notes = notes;
        //class Capitalize
        //constructor (thingIPassedIn)
        //this.whatever = thingIPassedIn
        // }
        //function()
    }

    read () {
        return `${this.name}  ${this.notes}`; 
        //Template literals are so cool fr
        //we remember this being a pain in regular Java
    }
}

class List {
    constructor (name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        if (task instanceof Task) {
            this.tasks.push(task);
        }
        else {
            throw new Error(
                `You can only add a task to a list: This is not a task: ${task}`);
        } //We don't think we got this to trip so... Yippee? 
    }

    read () {
        return `The ${this.name} List has ${this.tasks.length} tasks on it.`;
    } //Had a weird one where tasks.l was coming back as Object.object,
      //but it fixed itself after no input- we gotta invest in newer hardware
}

//We did something like this in the BE course! we don't believe we did it as a
//class but the principal seems to be the same- as long as the input isn't
//0 or a non-menu option, keep the menu up and listen for where to go next
//Seems easier actually, since there isnt a half dozen imports 

//REMINDER ask how imports work for javascript
class Menu { 
    constructor() {
        this.lists = [];
        this.selectedList = null;
    }

    start() {
        let selection = this.showMMOptions();
        while (selection != 0) {
            switch(selection) {
                case '1' :
                    this.createList();
                    break;
                case '2' :
                    this.viewList();
                    break;
                case '3' :
                    this.deleteList();
                    break;
                case '4' :
                    this.displayLists();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMMOptions();
        }    
        alert('See ya!');
    }

    showMMOptions () {
        return prompt(`
            0 Exit
            1 Create a new list
            2 Read a list
            3 Delete a list
            4 Check all lists
            `);
    } //The thing under tilde, not apostrophe

    ShowListMMOptions(listInfo) {
        return prompt(`
            0 Back
            1 Write down a task
            2 Erase a task
            ------------------------
            ${listInfo}
            `);
    }

    displayLists() {
        let listString = '';
        for (let i = 0; i < this.lists.length; i++) {
            listString += i+ ' ' + this.lists[i].name + '\n';
        }
        alert(listString);
    } //Loop through the lists, and make a big string with a return between em

    createList() {
        let name = prompt('Enter name for the new list: ');
        this.lists.push(new List(name));
    } //the th.lis.push(New List()) is actually genius, we love compact code

    viewList() { //This looked scary at first but it's just a big mash of
                 //the displayLists and Main menu concepts 
        let index = prompt("Enter the index of the list you wanna look at: ");
        //^ Get the index, which you find in the displaylist
        if (index > -1 && index < this.lists.length) {
            this.selectedList = this.lists[index]; //Find it in the array
                                // and make it selected for ease of access
            let desc = 'The ' + this.selectedList.name + ' List' +'\n';
            //Displaylist Loop with the function call v
            desc += ' ' + this.selectedList.read() + '\n ';
            for (let i = 0; i < this.selectedList.tasks.length; i++) {
                desc += i + ' - ' + this.selectedList.tasks[i].read() + '\n';
            }
            let selection1 = this.ShowListMMOptions(desc);
            switch (selection1) {
                case '1' : 
                    this.createTask();
                    break;
                case '2' :
                    this.deleteTask();
            } // MM switch case!
        }
    }

    deleteList() {
        let index = prompt('Enter the index of the list you wanna delete');
        if (index > -1 && index < this.lists.length) {
            this.lists.splice(index,1);
        }
    } //Maybe it's the SQL talking but we like that if you do
    // Create > create > delete > create you'll still only have options to
    //pick one or zero, the power of shifting arrays on display!

    createTask() {
        let name = prompt('Name the task: ');
        let notes = prompt('Notes for ' + name + ': ');
        this.selectedList.addTask(new Task(name, notes));
    }

    deleteTask() {
        let index = prompt('Whats the index of the task you wanna erase?: ');
        if (index > -1 && index < this.selectedList.tasks.length) {
            this.selectedList.tasks.splice(index, 1);
        }
    }

} //CLASS

let menu = new Menu();
menu.start(); // instantiate menu as an opject, then run it