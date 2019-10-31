//added the defer keyword to my script tag, to avoid script pre-loading problems


///////////////////////////////////////
//PROGRAM NAME:
//PROGRAM BY
///////////////////////////////////////


//GLOBAL DATA SETS


const gVals = {



}



// CLASSES





//FUNCTIONS DEFINITIONS

const myFuncs = {

    //////////////////////
    //random number function
    //by Alex Merced
    ////////////////////////
    randNum: (num) => {

        return Math.floor(Math.random()*(num+1));

    },

    ///////////////////
    //random number in a range function
    //by Alex Merced
    ///////////////////

    randRange: (floor,ceiling) => {
        let num = 0;
        while(num < floor || num > ceiling){
            num = randNum(ceiling);

        }
        return num;
    }
}


//DOM VARIABLES

const domVals = {



}



//EVENT LISTENERS






//THE PROGRAM

fetch('https://cdn.contentful.com/spaces/wiothdq64tqj/environments/master/entries?access_token=fbY3krPsiW8hWQ4m7GysjrfCfBdeCP9gBLqh3klbO20')
  .then((resp) => resp.json()) // Transform the data into json
  .then ((data) => {

      let theinfo = data;
      console.log(theinfo.items[0].fields.blogTitle);
      theinfo.items.reverse().map((author) => {

      $blogContent = $('<div>'),
      $blogContent.html(`

          <div class="nes-container with-title is-centered">
          <p class="title">${author.fields.blogTitle}</p>
          <p>${author.fields.blogContent}</p>
          </div>

          `);
      $('main').append($blogContent);
  })


  })
