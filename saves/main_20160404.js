// DATE CREATED: 20150618

// (NOTE) ADD TEXT BLUR IS - A LITTLE LATE? KINDA JARRING
// (NOTE) REFRESH W/ '/#' THROWS 'document.getElement... is null error'

// CONSOLE WATERMARK
console.log("       _       __             _        _                                 ");
console.log(" _ __ (_) ___ / _| ___  _ __ | |_ __ _(_)_ __   ___   ___ ___  _ __ ___  ");
console.log("| '_ \\| |/ __| |_ / _ \\| '_ \\| __/ _` | | '_ \\ / _ \\ / __/ _ \\| '_ ` _ \\ ");
console.log("| | | | | (__|  _| (_) | | | | || (_| | | | | |  __/| (_| (_) | | | | | | ");
console.log("|_| |_|_|\\___|_|  \\___/|_| |_|\\__\\__,_|_|_| |_|\\___(_\\___\\___/|_| |_| |_| \n\n");
console.log("------------------------------------------------------------------------------------");
console.log('DEVELOPER, EH? GET AT ME ON TWITTER @ARCOVELO');
console.log("ALSO, TRY THE COMMAND \'CURSE\' A FEW TIMES");
console.log("PROFESSIONAL HUH? ...GF DIDN'T THINK IT WAS VERY FUNNY");
console.log("------------------------------------------------------------------------------------\n\n");
console.log('document.referrer ' + document.referrer);

var urlQuery = '';
// CHECK URL QUERY AND RUN cmdCheck()
// var urlString = window.location.toString();
var urlString = '';
// console.log(urlString.split(urlSearchChar)[1] + ' is urlQuery');

// WRITE CURRENT YEAR
var year = new Date().getFullYear();
document.getElementById("year-container").innerHTML = year;

var theHeight = window.innerHeight;
var theHeightDiv;
var urlSearchChar = '#';
var cmdInput;
var cmdInputCombo = '';
var cmdInputIDName = 'scroll-home';
var cmdInputIdDom = document.getElementById(cmdInputIDName);
var cmdPrev = '';
var cmdPrevArray = [];
var cmdListUpdate = "";
var uiTabVal = 0;
var articleTotalHeight;
var scrollContainerHeight;
var scrollNo = 0;
var scrollHeightInc = 0;
var scrollDistCalc;
var scrollBarHeightCalc;
var scrollBarRenderHeightPx;
var vDuration;
var blurEnable = true;

var scrollTopStartId;
var scrollTopStartClass;
var scrollTopStart;
var scrollTopStartId;
var scrollTopStart;

var scrollOpStart = 20;
var downKeydownEnable = true;
var upKeydownEnable = true;
var scrollAmt = 8;
var scrollShiftEnable = true;

var articleHeadingCount = 0;
var articleNextEnable = true;
var articleFigureNo;
var cmdInputFigureDom;

// LET'S CACHE SOME DOM ELEMENTS TO VARS
// var containerCmd = document.getElementById('cmd-container');
var cmdListDom = document.getElementById('cmd-list');
var cmdInputHiddenDom = document.getElementById('cmd-input-hidden');

var scrollArrowsBotDom = document.querySelectorAll('.scroll-arrow-bot');
var scrollArrowsTopDom = document.querySelectorAll('.scroll-arrow-top');
var instructionsScrollDom = document.querySelectorAll('.instructions-scroll');

var articleInnerDom = document.querySelectorAll('.article-inner');
var articlesDom = document.getElementsByTagName('article');

var scrollBarMoveDom = document.querySelectorAll('.scroll-bar-move');
// (NOTE) IF .ARTICLE-INNER PADDING CHANGES THIS NEEDS TO CHANGE
var articleVertPad = 140;

var startHelpInfo = "<span class='font-note'>(NOTE)</span> \"Commands are issued uppercase automatically - no need for caps-lock/shift\" <br /><br /><span class='font-note'>(NOTE)</span>  \"If you ever lose cursor focus of the command line re-focus with the TAB key\" <br /><br /><span class='font-note'>(NOTE)</span>  \"You can always get back to the instructions with the <span class='font-note'>HOME</span> command\"\n\n";

var cmdArrayCurseWords = ['fuck', 'shit', 'asshole', 'cunt', 'fag', 'fuk', 'fck', 'fcuk', 'assfuck', 'assfucker', 'fucker', 'motherfucker', 'asscock', 'asshead', 'asslicker', 'asslick', 'assnigger', 'nigger', 'asssucker', 'bastard', 'bitch', 'bitchtits', 'bitches', 'bitch', 'brotherfucker', 'bullshit', 'bumblefuck', 'buttfucka', 'fucka', 'buttfucker', 'buttfucka', 'fagbag', 'fagfucker', 'faggit', 'faggot', 'faggotcock', 'fagtard', 'fatass', 'fuckoff', 'fuckstick', 'fucktard', 'fuckwad', 'fuckwit', 'dick', 'dickfuck', 'dickhead', 'dickjuice', 'dickmilk', 'doochbag', 'douchebag', 'douche', 'dickweed', 'dyke', 'dumbass', 'dumass', 'fuckboy', 'fuckbag', 'gayass', 'gayfuck', 'gaylord' , 'gaytard', 'nigga', 'niggers', 'niglet', 'paki', 'piss', 'prick', 'pussy', 'poontang', 'poonanny', 'poonany', 'porchmonkey', 'porch monkey', 'poon', 'queer', 'queerbait', 'queerhole', 'queef', 'renob', 'rimjob', 'ruski', 'sandnigger', 'sand nigger', 'schlong', 'shitass', 'shitbag', 'shitbagger', 'shitbreath', 'chinc', 'carpetmuncher', 'chink', 'choad', 'chode', 'clitface', 'clusterfuck', 'cockass', 'cockbite', 'cockface', 'skank', 'skeet', 'skullfuck', 'slut', 'slutbag', 'splooge', 'twatlips', 'twat', 'twats', 'twatwaffle', 'vaj', 'vajayjay', 'va-j-j', 'wank', 'wankjob', 'wetback', 'whore', 'whorebag', 'whoreface', 'shitfucker', 'ass', 'shitfucker', 'shitfuck'];

// PARSE POST H1s AND PUSH TO ARRAY FOR cmdCheck()
var cmdArrayMenuItems = [];
var mainMenuHeadings = document.querySelectorAll('.menu-main-h1');
for (i=0; i<mainMenuHeadings.length; i++) {
  var headingObj = mainMenuHeadings[i].innerHTML;
  var headingString = String(headingObj.toLowerCase());
  cmdArrayMenuItems.push(headingString);
}

var cmdArrayNavigation = ["back"];
var cmdArrayHome = ["home", "help", "refresh", "index", "welcome", "splash"];

/*** END OF VARS ***/

// for (var i=0; i<articlesDom.length; i++) {
//   var text = document.createTextNode("<div>FOO</div>");
//   articlesDom[i].parentNode.insertBefore(text, articlesDom[i]);
// }

// FOCUS INPUT ON CLICK ANYWHERE
document.addEventListener('click', function() {
  cliInputFocus();
  console.log('CLICK focus');
});

function loadWelcome() {
  // console.log(urlQuery.length + ' is urlQuery.length');
  console.log('loadWelcome()');
  urlString = window.location.toString();

  // IF NO URL QUERY, urlQuery WILL STILL = '';
  if (urlString.split(urlSearchChar)[1] !== undefined) {
    console.log('there is a urlQuery');
    urlQuery = urlString.split(urlSearchChar)[1];
    setTimeout(function() {
      console.log('cmdCheck(urlQuery) with "' + urlQuery + '"');
      // cmdCheck(urlQuery, 2000);
      // (NOTE) THIS WORKS, BUT IS SUPER FUGLYY, NEED TO FIX
      cmdCheck('home', 2000);
      setTimeout(function() {
        cmdCheck(urlQuery, 400);
      }, 200);
    }, 2000);
  }
  // urlQuery IS UNDEFINED, I.E. BLANK
  else {
    console.log('no urlQuery, running "home"');
    setTimeout(function() {
      cmdCheck('home', 2000);
    }, 2200);
  }

  cmdListDom.innerHTML = startHelpInfo;

  // PRINT OUT START INSTRUCTIONS
  // (NOTE) NEEDS SOME WORK
  // function startPrint(id, sentence) {
  //   var f;
  //   f= function(i){
  //       id.innerHTML+=sentence[i];
  //       if(i+1==sentence.length)
  //          return;
  //       window.setTimeout(function(){f(i+1);},50);
  //   }
  //   f(0);
  // }

  // startPrint(cmdListDom, startHelpInfo);

}

  var cursor;

  for (i=0; i<articleInnerDom.length; i++) {
    articleInnerDom[i].style.maxHeight = (theHeight/1.6);
  }

  hideShowScrollArrows('top', 'none');

  // BACKSPACE LOGIC
  var backEnable = true;
  document.addEventListener('keydown', function (e) {

    // (NOTE) NOT SURE IF CALLING THIS ON EVERY KEYDOWN IS A BAD MOVE
    cliInputFocus();
    // BACKSPACE KEY
    if (e.which == 8) {
      e.preventDefault();

      if (backEnable) {
        var cmdVal = cmdInputHiddenDom.value;
        cmdInputHiddenDom.value = cmdVal.substring(0, cmdVal.length-1);
        backEnable = false;
      }
      cmdInputHiddenDom.addEventListener('keyup', function(e) {
        backEnable = true;
      });

    }

  });

  // SCROLL .ARTICLE-INNER ON UP & DOWN ARROW
  document.addEventListener('keydown', function (e) {

    // KEY TAB
    if (e.which == 9) {
      e.preventDefault();
    }

    // KEY SHIFT
    // if (e.which == 16) {
    //   e.preventDefault();
    //
    //   cliInputFocus();
    //
    //   if (scrollShiftEnable) {
    //     scrollShiftEnable = false;
    //     scrollAmt = 16;
    //   }
    //
    //   document.addEventListener('keyup', function(f) {
    //     if (f.which == 16) {
    //       f.preventDefault();
    //
    //       if (!scrollShiftEnable) {
    //         scrollShiftEnable = true;
    //
    //         scrollAmt = 8;
    //
    //         cliInputFocus();
    //
    //         // var scrollDecel = setInterval( function() {
    //         //   if (scrollAmt > 8 && scrollAmt !== 8) {
    //         //     scrollAmt--;
    //         //     console.log(scrollAmt + ' is scrollAmt');
    //         //   }
    //         //   else {
    //         //     clearInterval(scrollDecel);
    //         //     console.log('interval cleared');
    //         //   }
    //         // }, 70);
    //
    //       }
    //     }
    //   });
    //
    // }

    // (NOTE) NEED DO DISABLE BOTH BELOW UNTIL KEYUP TO PREVENT MULTIPLE FIRES
    // ARROW RIGHT
    else if (e.which == 39) {
      e.preventDefault();

      // cmdInputFigureDom = cmdInputIdDom.querySelectorAll('figure');
      // console.log(cmdInputIDName + ' cmdInputIDName');
      // if (cmdInputFigureDom.length > 0) {
        // for (i=0; i<cmdInputFigureDom.length + 1; i++) {
        //   cmdInputIdDom.querySelectorAll('figure')[i].style.display = 'none';
        //   console.log('hiding figures on right key down');
        // }
        // cmdInputIdDom.querySelectorAll('figure')[articleHeadingCount].style.display = 'table-cell';
      // }

      if (articleHeadingCount < cmdInputIdDom.querySelectorAll('h3').length - 1 && articleNextEnable) {

        for ( i=0; i<articleFigureNo; i++) {
          cmdInputIdDom.getElementsByClassName('no-dot')[i].className = 'no-dot';
        }
        cmdInputIdDom.getElementsByClassName('no-dot')[articleHeadingCount + 1].className = 'no-dot no-dot-sel';

        articleHeadingCount++;
        articleNextEnable = false;

        Velocity(cmdInputIdDom.querySelectorAll('figure')[articleHeadingCount],'scroll', { container: cmdInputIdDom.getElementsByClassName('article-inner')[0], offset: -70, easing: 'ease-out', duration: 600, axis: 'x', opacity: 1 });

        Velocity(cmdInputIdDom.querySelectorAll('h3')[articleHeadingCount],'scroll', { container: cmdInputIdDom.getElementsByClassName('article-inner')[0], offset: -70, easing: 'ease-out', delay: 200, duration: 10} );

      }

      document.addEventListener('keyup', function(f) {
        if (f.which == 39) {
          if (!articleNextEnable) {
            articleNextEnable = true;

            for (i = 0; i < scrollBarMoveDom.length; i++) {
              scrollBarMoveDom[i].style.top = '0px';
            }

            // scrollTopStartId = document.getElementById(cmdInputIDName);
            // scrollTopStartClass = scrollTopStartId.getElementsByClassName('article-inner')[0];
            // scrollTopStart = scrollTopStartClass.scrollTop;
            //
            // // (NOTE) DELAYED BY ONE INPUT EVENT
            // // SCROLL BAR MOVE BY CALCULATE DISTANCE SCROLLED AS PERCENT
            // scrollDistCalc = scrollTopStart / (articleTotalHeight - scrollContainerHeight);
            // var scrollDistPx = (scrollContainerHeight + articleVertPad - scrollBarRenderHeightPx) * scrollDistCalc;
            // for (i = 0; i < scrollBarMoveDom.length; i++) {
            //   scrollBarMoveDom[i].style.top = scrollDistPx + 'px';
            // }

          }
        }
      });

    }

    // ARROW LEFT
    else if (e.which == 37) {
      e.preventDefault();

      if (articleHeadingCount > 0 && articleNextEnable) {

        for ( i=0; i<articleFigureNo; i++) {
          cmdInputIdDom.getElementsByClassName('no-dot')[i].className = 'no-dot';
        }
        cmdInputIdDom.getElementsByClassName('no-dot')[articleHeadingCount - 1].className = 'no-dot no-dot-sel';

        articleHeadingCount--;
        articleNextEnable = false;

        Velocity(cmdInputIdDom.querySelectorAll('figure')[articleHeadingCount],'scroll', { container: cmdInputIdDom.getElementsByClassName('article-inner')[0], offset: -70, easing: 'ease-out', duration: 600, axis: 'x', opacity: 1 } );

        Velocity(cmdInputIdDom.querySelectorAll('h3')[articleHeadingCount],'scroll', { container: cmdInputIdDom.getElementsByClassName('article-inner')[0], offset: -70, easing: 'ease-out', delay: 200, duration: 10} );

        // cmdInputIdDom.getElementsByClassName('article-inner')[0].scrollTop = 0;

      }

      document.addEventListener('keyup', function(f) {
        if (f.which == 37) {
          if (!articleNextEnable) {
            articleNextEnable = true;

            for (i = 0; i < scrollBarMoveDom.length; i++) {
              scrollBarMoveDom[i].style.top = '0px';
            }

            // scrollTopStartId = document.getElementById(cmdInputIDName);
            // scrollTopStartClass = scrollTopStartId.getElementsByClassName('article-inner')[0];
            // scrollTopStart = scrollTopStartClass.scrollTop;
            //
            // // (NOTE) DELAYED BY ONE INPUT EVENT
            // // SCROLL BAR MOVE BY CALCULATE DISTANCE SCROLLED AS PERCENT
            // scrollDistCalc = scrollTopStart / (articleTotalHeight - scrollContainerHeight);
            // var scrollDistPx = (scrollContainerHeight + articleVertPad - scrollBarRenderHeightPx) * scrollDistCalc;
            // for (i = 0; i < scrollBarMoveDom.length; i++) {
            //   scrollBarMoveDom[i].style.top = scrollDistPx + 'px';
            // }

          }
        }
      });

    }

    // SCROLL DOWN
    else if (e.which == 40) {

      var scrollCallD;
      var scrollTopPlus;

      function scrollAnimD() {
        scrollTopStartClass.scrollTop += scrollAmt;
        scrollTopStart = scrollTopStartClass.scrollTop;
        scrollNo++;

        // KILL INSTRUCTIONS
        if (scrollNo > 20) {
          hideShowInstructionsScroll('none');
        }

        // SCROLL BAR MOVE BY CALCULATE DISTANCE SCROLLED AS PERCENT
        scrollDistCalc = scrollTopStart / (articleTotalHeight - scrollContainerHeight);
        var scrollDistPx = (scrollContainerHeight + articleVertPad - scrollBarRenderHeightPx) * scrollDistCalc;
        for (i = 0; i < scrollBarMoveDom.length; i++) {
          scrollBarMoveDom[i].style.top = scrollDistPx + 'px';
        }

        scrollCallD = requestAnimationFrame(scrollAnimD);
        // UPDATE W/ SCROLL
        scrollTopPlus = scrollTopStartClass.scrollTop;
        // SHOW TOP ARROW WHEN MOVE FROM TOP
        if (scrollTopPlus > 0) {
          hideShowScrollArrows('top', 'block');
        }
      }

      // DISABLE SLEW OF KEYDOWN EVENTS, START SCROLL ANIM
      if (downKeydownEnable) {
        downKeydownEnable = false;
        // SET SCROLL DOM IDENTIFIER ONCE PER DOWN KEYDOWN
        scrollTopStartId = document.getElementById(cmdInputIDName);
        scrollTopStartClass = scrollTopStartId.getElementsByClassName('article-inner')[0];
        // scrollTopStart = scrollTopStartClass.scrollTop;

        scrollCallD = requestAnimationFrame(scrollAnimD);

      }

      // if (blurEnable) {
      //   for (var i=0; i<articleInnerDom.length; i++) {
      //     articleInnerDom[i].style.opacity = scrollOpStart/10;
      //   }
      // }
      // else {
      //   for (var i=0; i<articleInnerDom.length; i++) {
      //     articleInnerDom[i].style.opacity = 1;
      //   }
      // }
      // if (scrollOpStart/20 > 0.9) {
      //   scrollOpStart--;
      // }

      // ADD & REMOVE BLINKING CLASS - VANILLA JS
      for (var i=0; i<scrollArrowsBotDom.length; i++) {
        scrollArrowsBotDom[i].className = 'scroll-arrow-bot scroll-arrow-active-bot';
      }
      // LISTEN FOR DOWN RELEASE
      document.addEventListener('keyup', function(f) {
        if (f.which == 40) {
          downKeydownEnable = true;

          for (var i=0; i<scrollArrowsBotDom.length; i++) {
            scrollArrowsBotDom[i].className = 'scroll-arrow-bot';
          }
          for (var i=0; i<articleInnerDom.length; i++) {
            articleInnerDom[i].className = 'article-inner';
            // articleInnerDom[i].style.opacity = 1;
          }
          // STOP SCROLL ANIM
          window.cancelAnimationFrame(scrollCallD);
        }
        // scrollOpStart = 20;
      });

      // IF SCROLL TO BOTTOM
      if (scrollTopStart + scrollContainerHeight > articleTotalHeight - 2) {
        hideShowScrollArrows('bot', 'none');
        // blurEnable = false;
        articleInnerDom[i].className = 'article-inner';
        console.log('we\'ve hit bottom of article');
        // articleHeadingCount = cmdInputIdDom.querySelectorAll('h3').length - 1;
      }
      // else {
      //   blurEnable = true;
      // }

    }
    // SCROLL UP
    else if (e.which == 38) {

      var scrollCallU;
      var scrollTopMinus;

      function scrollAnimU() {
        scrollTopStartClass.scrollTop -= scrollAmt;
        scrollTopStart = scrollTopStartClass.scrollTop;
        scrollNo++;
        // KILL INSTRUCTIONS
        if (scrollNo > 20) {
          hideShowInstructionsScroll('none');
        }

        // SCROLL BAR MOVE BY CALCULATE DISTANCE SCROLLED AS PERCENT
        scrollDistCalc = scrollTopStart / (articleTotalHeight - scrollContainerHeight);
        var scrollDistPx = (scrollContainerHeight + articleVertPad - scrollBarRenderHeightPx) * scrollDistCalc;
        for (i = 0; i < scrollBarMoveDom.length; i++) {
          scrollBarMoveDom[i].style.top = scrollDistPx + 'px';
        }

        scrollCallU = requestAnimationFrame(scrollAnimU);

        // UPDATE W/ SCROLL
        scrollTopMinus = scrollTopStartClass.scrollTop;
        // GOES TO 0 WHEN AT TOP
        if (scrollTopMinus < 3) {
          hideShowScrollArrows('top', 'none');
          // blurEnable = false;
          console.log('we\'ve hit top of article');
          // articleHeadingCount = 0;
        }
      }

      // RUN ONCE ON KEYDOWN IF ENABLED
      if (upKeydownEnable) {
        upKeydownEnable = false;
        // SET SCROLL DOM IDENTIFIER ONCE PER UP KEYDOWN
        scrollTopStartId = document.getElementById(cmdInputIDName);
        scrollTopStartClass = scrollTopStartId.getElementsByClassName('article-inner')[0];

        scrollCallU = requestAnimationFrame(scrollAnimU);
      }

      // PREVENT INCR IF ALREADY AT TOP
      // if (scrollTopStart !== 0) {
      //   blurEnable = true;
      //   scrollNo++;
      // }
      // CHANGE OPACITY WHILE SCROLLING
      // if (blurEnable) {
      //   for (var i=0; i<articleInnerDom.length; i++) {
      //     articleInnerDom[i].style.opacity = scrollOpStart/10;
      //   }
      // }
      // else {
      //   for (var i=0; i<articleInnerDom.length; i++) {
      //     articleInnerDom[i].style.opacity = 1;
      //   }
      // }
      // INC DOWN OPACITY
      // if (scrollOpStart/20 > 0.9) {
      //   scrollOpStart--;
      // }

      // ADD & REMOVE BLINKING CLASS - VANILLA JS
      for (var i=0; i<scrollArrowsTopDom.length; i++) {
        scrollArrowsTopDom[i].className = 'scroll-arrow-top scroll-arrow-active-top';
      }

      // LISTEN FOR UP KEY RELEASE
      document.addEventListener('keyup', function(f) {
        if (f.which == 38) {
          upKeydownEnable = true;

          for (var i=0; i<scrollArrowsTopDom.length; i++) {
            scrollArrowsTopDom[i].className = 'scroll-arrow-top';
          }
          for (var i=0; i<articleInnerDom.length; i++) {
            articleInnerDom[i].className = 'article-inner';
            // articleInnerDom[i].style.opacity = 1;
          }
          window.cancelAnimationFrame(scrollCallU);
        }
        // scrollOpStart = 20;
      });

      // DONT SHOW ARROW IF STUCK AT TOP B/C POST DOESN'T SCROLL
      if (scrollBarHeightCalc < 100) {
        hideShowScrollArrows('bot', 'block');
      }

    }
    // SCROLL HOME, ONLY IF POST SCROLLS
    else if (e.which == 36 && scrollBarHeightCalc < 100) {
      e.preventDefault();

      // articleHeadingCount = 0;
      // INC scrollNo, IF NOT AT TOP ALREADY
      var scrollTopStartId = document.getElementById(cmdInputIDName);
      scrollTopStartId.getElementsByClassName('article-inner')[0].scrollTop = 0;

      scrollNo += 5;
      if (scrollNo > 20 && scrollTopStartId.getElementsByClassName('article-inner')[0].scrollTop !== 0) {
        hideShowInstructionsScroll('none');
      }
      // MOVE SCROLL BAR
      for (i = 0; i < scrollBarMoveDom.length; i++) {
        scrollBarMoveDom[i].style.top = '0';
      }
      hideShowScrollArrows('bot', 'block');
      hideShowScrollArrows('top', 'none');
    }
    // SCROLL END, ONLY IF POST SCROLLS
    else if (e.which == 35 && scrollBarHeightCalc < 100) {
      e.preventDefault();

      // articleHeadingCount = cmdInputIdDom.querySelectorAll('h3').length - 1;
      var scrollTopStartId = document.getElementById(cmdInputIDName);
      scrollTopStartId.getElementsByClassName('article-inner')[0].scrollTop = articleTotalHeight - scrollContainerHeight;

      scrollNo += 5;
      if (scrollNo > 20 && scrollTopStartId.getElementsByClassName('article-inner')[0].scrollTop !== articleTotalHeight - scrollContainerHeight) {
        hideShowInstructionsScroll('none');
      }
      // MOVE SCROLL BAR
      for (i = 0; i < scrollBarMoveDom.length; i++) {
        scrollBarMoveDom[i].style.top = (scrollContainerHeight + articleVertPad - scrollBarRenderHeightPx) + 'px';
      }
      hideShowScrollArrows('bot', 'none');
      hideShowScrollArrows('top', 'block');
    }
  });

  // BLOCK CURSOR CODE
  cursor = window.setInterval(function() {
    var cursorBlock = document.getElementById('cursor');
    if (cursorBlock.style.visibility === 'visible') {
      cursorBlock.style.visibility = 'hidden';
    } else {
      cursorBlock.style.visibility = 'visible';
    }
  }, 500);

  // CHANGE UI W/ TAB
  // (NOTE) MESSING UP CSS SCRUB VALUES/SYNC
  // jQuery('html').keyup(function(e) {
  document.addEventListener('keyup', function(e) {

    cmdInputHiddenDom.addEventListener('keyup', function() {
      document.getElementById('cmd').getElementsByTagName('span')[0].innerHTML = this.value;
    });

    if (e.which === 9) {
      e.preventDefault();
    }

  });

  // (NOTE) NEED TO DISABLE 'BACKPACE' AS BROWSER BACK, BUT KEEP ON INPUT FIELD

  document.querySelector('html').addEventListener('keydown', function (e) {
    // DISABLE CMD (17) KEY
    // (NOTE) NEED TO DISABLE IF WHEN BOTTOM ??
    // if (e.which == 17) {
    //   e.preventDefault();
    // }
  });

  // FOCUS INPUT ON 'TAB'
  document.addEventListener('keyup', function(e) {
    if (e.which === 9) {
      cliInputFocus();
      console.log('TAB focus');
    }
  });

  // RUN ON KEYUP, IF ELSES, ADD TXT TO CMD LIST, cmdCheck();
  cmdInputHiddenDom.addEventListener('keyup', function(e) {

      // CACHE INPUT, CONVERT TO LOWER CASE
      cmdInput = document.getElementById("cmd-input-hidden").value.toLowerCase();

      // IF KEY IS ENTER
      if(e.keyCode === 13 &&  cmdInput !== "" && cmdInput) {

        if ( cmdInput === cmdPrev ) {
          cmdClear();
        }
        // LAUNCH FULLSCREEN
        else if(cmdInput === "fullscreen") {
          // launchIntoFullscreen(document.documentElement);
          cmdListDom.innerHTML = cmdListUpdate + "&nbsp; > FULLSCREEN<br><br>";
          cmdClear();
          // window.location += '?cmd=fullscreen';
          document.getElementById('full-confirm').style.display = 'block';
        }
        else if(cmdInput === "curse") {
          // LETS CREATE A RANDOM CURSE WORD
          var randCurse = cmdArrayCurseWords[Math.floor(Math.random() * cmdArrayCurseWords.length)];
          cmdListUpdate = '';
          cmdListUpdate = randCurse + '<br><br>';
          cmdListDom.innerHTML = cmdListUpdate;
          cmdClear();
        }
        else if(cmdInput === "clear") {
          cmdListUpdate = "";
          cmdListDom.innerHTML = cmdListUpdate;
          cmdClear();
        }
        // IF IS MENU ITEMS
        else if(cmdArrayMenuItems.indexOf(cmdInput) > -1) {

          cmdCheck(cmdInput, 400);
          // ENTER INTO CMD LIST
          cmdListUpdate += "> " + cmdInput + "<br><br>";
          cmdListDom.innerHTML = cmdListUpdate;
          cmdClear();
        }
        // LIST ALL
        else if(cmdInput === "ls" || cmdInput === "dir" || cmdInput === "ls -al" || cmdInput === "ls -alt") {

          // (NOTE) CHANGE TO FOR LOOP, ITER THROUGH ARRAY
          cmdListUpdate += "> " + cmdInput + "<br><br>" + "&nbsp; > ABOUT<br>" + "&nbsp; > SKILLS<br>" + "&nbsp; > SITES<br>" + "&nbsp; > GAMES<br>" + "&nbsp; > WEB<br>" + "&nbsp; > ART<br>" + "&nbsp; > CONTACT<br>";
          cmdListDom.innerHTML = cmdListUpdate;
          cmdClear();
          cmdCheck("ls", 400);

        }
        // CURSE WORDS
        else if(cmdArrayCurseWords.indexOf(cmdInput) > -1) {

          cmdListUpdate += "> " + cmdInput + "<br><br>";
          cmdListDom.innerHTML = cmdListUpdate;
          cmdClear();
          cmdCheck("curse", 400);

        }
        // GREETING
        else if (cmdInput === "hi" || cmdInput === "hello" || cmdInput === "enter") {

          cmdListUpdate += "> " + cmdInput + "<br><br>";
          cmdListDom.innerHTML = cmdListUpdate;
          cmdClear();
          cmdCheck("confused", 400);

        }

        // BACK
        else if (cmdInput === 'back') {

          cmdCheck(cmdPrevArray[(cmdPrevArray.length-2)], 400);
          cmdClear();

          // ENTER INTO CMD LIST
          cmdListUpdate += "> " + cmdInput + "<br><br>";
          cmdListDom.innerHTML = cmdListUpdate;

        }


        // HELP, HOME
        else if (cmdArrayHome.indexOf(cmdInput) > -1) {

          cmdCheck("home", 400);
          cmdClear();
          // document.getElementById('header-nav').innerHTML = 'HOME';

          // ENTER INTO CMD LIST
          cmdListUpdate = "";
          cmdListDom.innerHTML = startHelpInfo + "<br><br>" + "> " + cmdInput;

        }
        else if (cmdInput.indexOf('go') > -1) {
          if (cmdInput === "go twitter") {
            window.open("http://www.twitter.com/arcovelo", "_blank");
            cmdListUpdate += "> " + cmdInput + "<br><br>";
            cmdListDom.innerHTML = cmdListUpdate;
            cmdClear();
          }
          else if(cmdInput === "go resume") {
            window.open("http://nicfontaine.com/images/nf_resume_20160313.pdf", "_blank");
            cmdListUpdate += "> " + cmdInput + "<br><br>";
            cmdListDom.innerHTML = cmdListUpdate;
            cmdClear();
          }
          else if (cmdInput === 'go 3midesign') {
            window.open('https://nicfontaine.com/sites/3mi', '_blank');
            cmdListUpdate += "> " + cmdInput + "<br><br>";
            cmdListDom.innerHTML = cmdListUpdate;
            cmdClear();
          }
          else if (cmdInput === 'go silvermuse') {
            window.open('http://silvermuse.net', '_blank');
            cmdListUpdate += "> " + cmdInput + "<br><br>";
            cmdListDom.innerHTML = cmdListUpdate;
            cmdClear();
          }
          else if (cmdInput === 'go ihl') {
            window.open('http://www.ianhaneylopez.com', '_blank');
            cmdListUpdate += "> " + cmdInput + "<br><br>";
            cmdListDom.innerHTML = cmdListUpdate;
            cmdClear();
          }
          else if (cmdInput === 'go nic2013') {
            window.open('https://nicfontaine.com/sites/2013', '_blank');
            cmdListUpdate += "> " + cmdInput + "<br><br>";
            cmdListDom.innerHTML = cmdListUpdate;
            cmdClear();
          }
          else if (cmdInput === 'go gforms') {
            window.open('http://pastebin.com/2akzksDH', '_blank');
            cmdListUpdate += "> " + cmdInput + "<br><br>";
            cmdListDom.innerHTML = cmdListUpdate;
            cmdClear();
          }

        }
        // ERROR COMMAND
        else {

          cmdListUpdate += "> " + cmdInput + " - [ error ]" + "<br><br>";
          cmdListDom.innerHTML = cmdListUpdate;
          cmdClear();
          cmdCheck("else", 400);
          document.getElementById('cmd-error-in-post').innerHTML = " " + cmdInput + " ";

        }

      }

  });

//}(jQuery));

function cliInputFocus() {
  cmdInputHiddenDom.focus();
  console.log('cliInputFocus()');
}

function cmdCheck(x, y) {

  urlCmdHash = window.location.toString();
  var urlClean = urlCmdHash.split(urlSearchChar)[0];
  // CREATE ID NAME STRING FOR SCROLL ANCHOR
  cmdInputCombo = "#scroll-" + x;
  console.log(cmdInputCombo + ' is cmdInputCombo');

  if (x === 'home') {
    console.log('cmdCheck("home")');
    // document.location = urlClean + '#_';
    // document.location = urlClean;

    // window.location.replace("#");
    // if (typeof window.history.replaceState == 'function') {
    //   history.replaceState({}, '', window.location.href.slice(0, -1));
    // }
  }
  // if (x !== 'home') {
  else {
    history.replaceState(undefined, undefined, '#' + x);
    document.location = urlClean + '#' + x;
    // REMOVE HASH FROM HISTORY, TO SAVE BROWSER FUNCTIONALITY
  }

  // RESET SCROLL WHEN RUN COMMAND, JS
  for (var i=0; i<articleInnerDom.length; i++) {
    articleInnerDom[i].scrollTop = 0;
  }

  // RESET H3 VELOCITY SCROLL ORDER
  articleHeadingCount = 0;

  if (x !== '') {
    cmdInputIDName = 'scroll-' + x;
    cmdInputIdDom = document.getElementById(cmdInputIDName);
  }

  // CACHE HEIGHT OF QUERIED .POST
  // (NOTE) CONSOLE CLAIMS THIS IS NULL - ONLY ON HOME QUERY
  var hashHeight = cmdInputIdDom.clientHeight;
  // hashHeight *= -1;

  articleFigureNo = cmdInputIdDom.querySelectorAll('figure').length;

  if (articleFigureNo > 1) {
    // CLEAR DOTS TO PREVENT STACKING FROM MULTIPLE CMDS
    var myNode = cmdInputIdDom.getElementsByClassName('article-no-dots')[0];
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
    for ( i=0; i<articleFigureNo; i++) {
      if (i !== articleHeadingCount) {
        // cmdInputIdDom.getElementsByTagName('figure')[i].style.opacity = '0';
        Velocity(cmdInputIdDom.getElementsByTagName('figure')[i], {opacity: 1});
      }
      var itm = document.getElementById('dot-container').lastChild;
      var cln = itm.cloneNode(true);
      cmdInputIdDom.getElementsByClassName('article-no-dots')[0].appendChild(cln);
    }
    // SET FIRST DOT HIGHLIGHT
    cmdInputIdDom.getElementsByClassName('no-dot')[0].className = 'no-dot no-dot-sel';
  }

  setArticleHeight();

  cmdInputIdDom.style.top = '0';

  if (x !== 'back') {
    cmdPrevArray.push(x);
  }

  // SCROLL TO INPUT
  // (NOTE) FOR THE urlQuery ISSUE, I THINK THIS IS JUST LOADING TOO FAST IN ORDER

  Velocity(cmdInputIdDom,'scroll', {duration: 250}, {easing: 'ease-in-out'}, {offset: 0});

  // VERTICALLY CENTER .POST
  cmdInputIdDom.style.top = (theHeight - hashHeight)/1.74 + 'px';

  cmdHideArticles();

  // FADE IN CMD ARTICLE
  Velocity(cmdInputIdDom, {opacity: 1}, {duration: y});

  // SCROLL BAR & ARROW CODE FROM HERE BELOW
  hideShowScrollArrows('top', 'none');
  // blurEnable = false;

  if (articleTotalHeight > scrollContainerHeight) {
    hideShowScrollArrows('bot', 'block');
    // blurEnable = true;
  }

  // CACHE ARTICLE HEIGHT FOR SCROLLTOP MEASUREMENT ON ARROW KEYDOWN
  var cmdClassCache = cmdInputIdDom.getElementsByClassName('article-inner')[0];
  scrollContainerHeight = cmdClassCache.clientHeight-articleVertPad;

  // GET HEIGHT OF CONTENTS OF ARTICLE MINUS PADDING
  articleTotalHeight = cmdClassCache.scrollHeight-articleVertPad;

  // RESET SCROLLBARMOVE POS
  for (i = 0; i < scrollBarMoveDom.length; i++) {
    scrollBarMoveDom[i].style.top = 0;
  }

  // HIDE ALL BUT FIRST FIGURE
  // cmdInputFigureDom = cmdInputIdDom.querySelectorAll('figure');
  // // console.log(cmdInputIDName + ' cmdInputIDName');
  // if (cmdInputFigureDom.length > 0) {
  //   for (i=0; i<cmdInputFigureDom.length; i++) {
  //     cmdInputIdDom.querySelectorAll('figure')[i].style.display = 'none';
  //   }
  //   cmdInputIdDom.querySelectorAll('figure')[0].style.display = 'table-cell';
  // }

  // (NOTE) HAVENT YET FINISHED BELOW
  if (articleTotalHeight === scrollContainerHeight) {
    hideShowInstructionsScroll('none');
  }
  else if (scrollNo < 20 && articleTotalHeight > scrollContainerHeight) {
    hideShowInstructionsScroll('block');
  }
}

// HIDE & SHOW SCROLL ARROWS W/ 'top', 'bot', 'none', 'block'
function hideShowScrollArrows(x,y) {

  if (x === 'top') {
    for (i=0; i<scrollArrowsTopDom.length; i++) {
      scrollArrowsTopDom[i].style.display = y;
    }
  }
  else if (x === 'bot') {
    for (i=0; i<scrollArrowsBotDom.length; i++) {
      scrollArrowsBotDom[i].style.display = y;
    }
  }

}

// HIDE & SHOW INSTRUCTIONS SCROLL 'none', 'block'
function hideShowInstructionsScroll(x) {

  // if (x === 'none') {
    for (i=0; i<instructionsScrollDom.length; i++) {
      instructionsScrollDom[i].style.display = x;
    }
  // }
  // else if (x === 'block') {
    // for (i=0; i<instructionsScrollDom.length; i++) {
    //   instructionsScrollDom[i].style.display = 'block';
    // }
  // }

}

function setArticleHeight() {

  console.log('setArticleHeight()');

  setTimeout(function() {
    theHeight = window.innerHeight;
    console.log(theHeight + ' is window.innerHeight');
    theHeightDiv = theHeight/1.45;

    for (i=0; i<articleInnerDom.length; i++) {
      articleInnerDom[i].style.maxHeight = theHeightDiv + 'px';
    }

    console.log(theHeightDiv + ' is theHeightDiv');

    var cmdClassCache = cmdInputIdDom.getElementsByClassName('article-inner')[0];
    scrollContainerHeight = cmdClassCache.clientHeight-articleVertPad;

    hideShowScrollArrows('bot', 'none');
    // blurEnable = false;

    if (articleTotalHeight > scrollContainerHeight) {
      hideShowScrollArrows('bot', 'block');
      // blurEnable = true;
    }

    // (NOTE) NEED TO UPDATE POST CSS 'TOP' VAL. B/C OF EXTRA HEIGHT

    scrollBarHeightCalc = 100 * (scrollContainerHeight / articleTotalHeight);
    // console.log('scrollBarHeightCalc = ' + scrollBarHeightCalc);

    for (i = 0; i < scrollBarMoveDom.length; i++) {
      scrollBarMoveDom[i].style.height = scrollBarHeightCalc + '%';
    }

    // CACHE HEIGHT OF SCROLL BAR IF POSTS IS SCROLLABLE
    if (scrollBarHeightCalc < 100) {
      var scrollBarClassCache = cmdInputIdDom.getElementsByClassName('scroll-bar-move')[0];
      scrollBarRenderHeightPx = scrollBarClassCache.clientHeight;
    }
  }, 50);

}

function cmdClear() {

  cmdInputHiddenDom.value = "";
  document.getElementById("cmd").getElementsByTagName("span").innerHTML = "";

}

function cmdHideArticles() {

  for (i=0; i<articlesDom.length; i++) {
    var artIter = articlesDom[i];
    if (artIter.id !== cmdInputIDName) {
      Velocity(artIter, {opacity: 0}, {duration: 100});
    }
  }

}

function promptFullscreen() {
  launchIntoFullscreen(document.documentElement);
}

// TRIGGER ON FULLSCREEN SIZE CHANGE
// window.onresize = function (event) {
//   var fMaxHeight = window.screen.height,
//     fMaxWidth = window.screen.width,
//     fCurHeight = window.innerHeight,
//     fCurWidth = window.innerWidth;
//
//     console.log(fCurHeight);
//
//   if (fMaxWidth == fCurWidth && fMaxHeight > fCurHeight) {
//     console.log('fullscreen check triggered');
//     // setTimeout(function() {
//     // }, 1400);
//     loadWelcome();
//     cmdCheck(cmdPrev, 0);
//     // setArticleHeight();
//   }
// }

// FULLSCREEN FUNCTION
// (NOTE) NEED TO REFRESH W/ QUERY TO RESET SCREEN SIZE
function launchIntoFullscreen(element) {

  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }

  setArticleHeight();

  document.getElementById('full-confirm').style.display = 'none';
  document.querySelector('html').style.cursor = 'none';
  // cmdListDom.innerHTML = cmdListUpdate + "&nbsp; > FULLSCREEN<br><br>";
  // cmdClear();

}
