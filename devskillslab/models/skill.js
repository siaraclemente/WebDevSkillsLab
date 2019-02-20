const skills = [
    {skill: 'Python',
     definition: 
     'Python is a high-level programming language designed to be easy to read and simple to implement. It is open source, which means it is free to use, even for commercial applications. Python is considered a scripting language, like Ruby or Perl and is often used for creating Web applications and dynamic Web content.'     
      },
    {skill: 'Javascript',
     definition: 
     'JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites. Like server-side scripting languages, such as PHP and ASP, JavaScript code can be inserted anywhere within the HTML of a webpage.'  
     },
    {skill: 'HTML/CSS',
    definition: 
    'HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.'
    }
];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    return skills[id];
  }
  
  function getAll() {
    return skills;
  }