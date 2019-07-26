// CODE here for your Lambda Classes
class Person {
    constructor(param) {
        this.name = param.name;
        this.age = param.age;
        this.location = param.location;   
    }
    speak () {
        return (`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor  extends Person{
    constructor(param){
        super(param);
        this.specialty = param.specialty;
        this.favLanguage = param.favLanguage;
        this.catchPhrase = param.catchPhrase;
    }
    demo (subject) {
        return (`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        return (`${student.name} recieves a perfect score on ${subject}`)
    }
}

class Student extends Person{
    constructor(param){
        super(param);
        this.previousBackground = param.previousBackground;
        this.className = param.className;
        this.favSubjects = param.favSubjects;
    }
    listSubjects(arr) {
        arr.forEach(PH => console.log(PH));
    }
    PRAssignment(param) {
        return (`${this.name} has submitted a PR for ${param}`)
    }
    sprintChallenge(param) {
        return (`${this.name} has begun sprint challenge on ${param}`)
    }

}

class ProjectManagers extends Instructor{
    constructor(param) {
        super(param);
        this.gradClassName = param.gradClassName;
        this.favInstructor = param.favInstructor;
    }
    standUp(channel) {
        return (`${this.name} announces to ${channel}, @ standy times!`)
    }
    debugsCode(student, subject) {
        return (`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
};

const Brit = new Instructor ({
    name: "Brit",
    age: 28,
    location: "Texas",
    specialty: "Teaching",
    favLanguage: "HTML",
    catchPhrase: "shalom",

});

const Ryan = new Student ({
    name: "Ryan",
    age: 26,
    location: "Florida",
    previousBackground: "Engineering",
    className: "Web22",
    favSubjects: "JavaScript"
});

const Autumn = new ProjectManagers ({
    name: "Autumn",
    age: 27,
    location: "Alaska",
    specialty: "TL'ing",
    favLanguage: "CSS",
    catchPhrase: "Zoom!",
    gradClassName: "Web22tl",
    favInstructor: "Dan"
});

console.log(Ryan.speak());
console.log(Brit.demo("Calculus"));
console.log(Brit.grade(Ryan, "Physics"));
Ryan.listSubjects(["Calculus", "Physics", "Controls", "SolidWorks"]);
console.log(Ryan.PRAssignment("JavaScript-IV"));
console.log(Ryan.sprintChallenge("a Tuesday!"));
console.log(Autumn.standUp('web22_Autumn'));
console.log(Autumn.debugsCode(Ryan, "Object Prototypes"));
