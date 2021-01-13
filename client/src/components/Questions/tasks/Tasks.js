const tasks = [
    {   id:1,
        name:"Dropdown Menu",
        src:`<html>
        <head>
        <style>
        .dropdown {
          position: relative;
          display: inline-block;
        }
        
        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          padding: 12px 16px;
          z-index: 1;
        }
        
        .dropdown:hover .dropdown-content {
          display: block;
        }
        </style>
        </head>
        <body>
        
        <h2>Dropdown</h2>
        <p>Hover the mouse over the below button.</p>
        
        <div class="dropdown">
          <button>DROPDOWN</button>
          <div class="dropdown-content">
          <p>Hello World!</p>
          </div>
        </div>
        
        </body>
        </html>
        `,
        description:"\nInstructions: \n\n1. Try to replicate the dropdown button shown on the\n rightmost pane. \n2.Page formatting attributes like color, font-size etc, will\n not be checked. \n3.Text on the result and question pane must match.\n\nMarks Distribution:\n\n1.Working of Button : 8 \n2.Text Displayed : 2\n\n Happy Coding!",
        maxScore:10
    },
    {
        id:2,
        name:"Form",
        src:`<html>
        <style>
        input[type=text], select {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }
        div {
          border-radius: 5px;
          background-color: #f2f2f2;
          padding: 20px;
        }
        </style>
        <body>
        
        <h3>Form</h3>
        
        <div>
          <form>
            <label>First Name</label>
            <input type="text" placeholder="Your name..">
        
            <label>Last Name</label>
            <input type="text" placeholder="Your last name..">
        
            <label>Country</label>
            <select>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </form>
        </div>
        
        </body>
        </html>
        `,
        description:"\nInstructions \n\n1.Try to replicate the form shown on question pane. \n2.Text on result pane and question pane must match. \n3.Formatting must be almost same. \n4.Also check the Country dropdown options.\n\nFormatting Values \n\n1.Background colour of form : #f2f2f2 \n2.Use border radius as 4px or 5px \n\n Marks Distribution \n\n1.Form Working : 2.5 \n2.Formatting : 10 \n3.Text Displayed : 2.5",
        maxScore:15
    },
    {
        id:3,
        name:"Web Page",
        src:`<html><body>Work In Progress</body></html>`,
        description:"1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi1.hllo \n2.hi",
        maxScore:10
    }
];

export const getTasks=() => {
    return tasks;
}