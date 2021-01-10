const tasks = [
    {   id:1,
        src:`<html> <head> Hello </head> <body> Hi Guys </body> </html>`,
        description:"Replicate the web page",
        maxScore:10
    },
    {
        id:2,
        src:`<html><body>Keep it up</body></html>`,
        description:"Replcate it",
        maxScore:10
    },
    {
        id:3,
        src:`<html><body>Work In Progress</body></html>`,
        description:"Do Now!",
        maxScore:10
    }
];

export const getTasks=() => {
    return tasks;
}