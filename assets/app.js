$(document).ready(function () {
  //functions for materialize
  $(".dropdown-trigger").dropdown({
      alignment: 'left',
      coverTrigger: false,
      inDuration: 200,
      outDuration: 400
  });
  //populating content
  function populateIntro() {
      var introTitle = $("<p id='intro-headText'><span class='blue-text'>Hello!</span></p>");
      var introContent = $("<p id='intro-text'>My name is <span class='blue-text'>Markus</span>. <br>I'm an inspiring <span class='blue-text'>full stack web developer</span>. <br>Welcome to my portfolio site!</p>");
      var introDiv = $("<div class='content'></div>");
      introDiv.attr("value", 1);
      introDiv.append(introTitle).append(introContent);
      return introDiv;
  }

  function populateAbout() {
      var aboutTitle = $("<p id='about-headText'><span class='red-text'>About Me</span>:</p>");
      var aboutContent = $("<p id='about-text'>I graduated from Monmouth University with a Bachelor's degree in Finance. I have a strong and extensive background in sales and operations. Computers have always been fascinating to me and how we can create web sites that people can see or applications that people can use. I take my knowledge, critical thinking, and problem solving skills with me as I venture into the world of programming.</p>")
      var aboutDiv = $("<div class='content'></div>");
      aboutDiv.attr("value", 2);
      aboutDiv.append(aboutTitle).append(aboutContent);
      return aboutDiv;
  }

  function populateContact() {
      var contactTitle = $("<p id='contact-headText' class='red-text'>Contact</p>");
      var contactContent1 = $("<p class='contact-text' class='left-align'>Social Media: </p>");
      var contactContent2 = $("<p class='contact-text' class='left-align' style='padding-bottom: 5%'>Email: <br><span class='red-text'><a href='mailto:markusmaasikas@hotmail.com'>markusmaasikas@hotmail.com</a></span></p>")
      var imgrow = $("<div class='row'></div>");
      var githubImgDiv=$("<div class='col s6'><a href='https://github.com/estomm01' target='_blank'><img class='responsive-img ourImage' src='./assets/github.gif'></a></div>");
      var linkedinImgDiv=$("<div class='col s6'><a href='https://www.linkedin.com/in/markus-maasikas-a6654630' target='_blank'><img class='responsive-img ourImage' src='./assets/linkedin.png'></a></div>");
      imgrow.append(githubImgDiv).append(linkedinImgDiv);
      var contactDiv = $("<div class='content'></div>");
      contactDiv.attr("value",4);
      contactDiv.append(contactTitle).append(contactContent1).append(imgrow).append(contactContent2);
      return contactDiv;
  }

  function populatePortfolio() {
      var portfolioTitle = $("<p id='portfolio-headText' class='red-text'>Portfolio</p>");
      //make cards from materialize card
      var projcard1 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='./assets/show spotter.png'></div><div class='card-content'><span style='font-size:1.40em;' class='card-title white-text red'>Show Spotter</span><p class='card-textcontent'>A search engine were you can find events within a given radius.</p></div><a style='font-size:1.40em;padding:1px;' class='red-text' href='https://show-spotter.herokuapp.com' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 30px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/estomm01' target='_blank'>GitHub</a></p></div></div>");

      var projcard2 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='./assets/crystal3.png'></div><div class='card-content'><span style='font-size:1.40em;' class='card-title white-text red'>Crystal-Unit-4-Game</span><p class='card-textcontent'>A web application game. </p></div><a style='font-size:1.40em;padding: 1px;' class='red-text' href='https://estomm01.github.io/unit-4-game/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/estomm01' target='_blank'>GitHub</a></p></div></div>");

      var projcard3 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='./assets/train4.png'></div><div class='card-content'><span style='font-size:1.40em;' class='card-title white-text red'>Train Scheduler</span><p class='card-textcontent'>An application</p></div><a style='font-size:1.40em;padding:1px;' class='red-text' href='https://estomm01.github.io/Train-Scheduler/' target='_blank'>View Project</a></div></div>");

      var projcard4 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='./assets/giffy1.png'></div><div class='card-content'><span style='font-size:1.40em;' class='card-title white-text red'>Giftastic Web App</span><p class='card-textcontent'>A web page using the GIPHY API to generate button categories which then generate gifs</p></div><a style='font-size:1.40em;padding:1px;' class='red-text' href='https://estomm01.github.io/Giftastic/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/estomm01/Giftastic-webpage' target='_blank'>GitHub</a></p></div></div>");

      var projcard5 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='./assets/trivia.png'><span style='font-size:1.40em;' class='card-title white-text red'>Trivia Question Game</span></div><div class='card-content'><p class='card-textcontent'>A timed multiple choice trivia question game created using JavaScript, jQuery, Moment, and CSS for design</p></div><a style='font-size:1.40em;padding:1px;' class='red-text' href='https://estomm01.github.io/TriviaGame/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/estomm01' target='_blank'>GitHub</a></p></div></div>");

      var cardrow = $("<div class='row'></div>");
      cardrow.append(projcard1).append(projcard2);
      var cardrow2 = $("<div class='row'></div>");
      cardrow2.append(projcard3).append(projcard4);
      var portfolioDiv = $("<div class='content'></div>");
      portfolioDiv.attr("value",3);
      portfolioDiv.append(portfolioTitle).append(cardrow);
      portfolioDiv.append(cardrow2);
      return portfolioDiv;
  }

  function changeDiv(cValue,valueNew,newDiv){
      if(cValue != valueNew){
          $("div[value=" + cValue + "]").fadeOut(1000,function(){
              newDiv.fadeIn(500);
          });
      }
  }
  var currentValue = 1;
  var intro = populateIntro();
  var about = populateAbout();
  var portfolio = populatePortfolio();
  var contact = populateContact();
  $("#attachDiv").append(intro).append(about).append(portfolio).append(contact);
  //when user first loads page, only show intro

  about.hide();
  portfolio.hide();
  contact.hide();
  //click functions
  $("#homePage").click(function(){
      changeDiv(currentValue,1,intro);
      currentValue = 1;
  })
  $("#topTitle").click(function(){
      $("#homePage").trigger('click');
  })
  $("#aboutPage").click(function(){
      changeDiv(currentValue,2,about);
      currentValue = 2;
  })
  $("#portfolioPage").click(function(){
      changeDiv(currentValue,3,portfolio);
      currentValue = 3;
  })
  $("#contactPage").click(function(){
      changeDiv(currentValue,4,contact);
      currentValue = 4;
  })
})
