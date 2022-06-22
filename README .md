Protractor 
[![Build Status](https://travis-ci.org/angular/protractor.svg?branch=master)](https://travis-ci.org/angular/protractor) 
[![CircleCI Status](https://circleci.com/gh/angular/protractor.svg?style=shield)](https://circleci.com/gh/angular/protractor) [![Join the chat at https://gitter.im/angular/protractor](https://badges.gitter.im/angular/protractor.svg)](https://gitter.im/angular/protractor)
==========

[Protractor](http://angular.github.io/protractor) is an end-to-end test framework for [Angular](http://angular.io/) and [AngularJS](http://angularjs.org) applications.

 Protractor is a [Node.js](http://nodejs.org/) program built on top of [WebDriverJS](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs).
 
  Protractor runs tests against your application running in a real browser, interacting with it as a user would.

Protractor can also be used to test non-angular applications


Why we need Protractor:
-------------

- Selenium webdriver does not have `methods/features` to locate elements based on Angular specific `properties/locators`.
            Protractor is a `wrapper` over `Selenium webdriverjs` and provides support to find angular specific elements

- Synchronization issues while `automating Angular (JS)` applications with Selenium webdriver

- A lot of web applications these days are created with `Angular` and `AngularJS`

**`Synchronous programming`**:

In a `synchronous programming model`, things happen one at a time. 
Each operation has to wait for the previous one to be completed, before it can be executed.

**`Asynchronous programming`**:

An `asynchronous model` allows multiple things to happen at the same time. Operations can be executed WHILE the query is being processed.

## Compatibility

Protractor 5 is compatible with nodejs v6 and newer.

Protractor works with AngularJS versions greater than 1.0.6/1.1.4, and is compatible with Angular applications.

 Note that for Angular apps, the `binding` and `model` locators are not supported. We recommend using `by.css`.

 


Getting Started
---------------
See the [Protractor Website](http://www.protractortest.org) for most documentation.

To get set up and running quickly:



Installation:
---------------


- **Step 1** : Download and install node.js
         https://nodejs.org/en/download/

    To get this version, you can use the apt package manager. Refresh your local package index first by typing:

        `sudo apt update`

    Then install Node.js:

        `sudo apt install nodejs`

    Check that the install was successful by querying node for its version number:

        `node -v`
         
        `npm -v`
 
- **Step 2** : Install Protractor

    Use npm to install Protractor globally with:

        `npm install -g protractor`

    This will install two command line tools, `protractor` and `webdriver-manager`.

    Try running `protractor --version` to make sure it's working.

- **Step 3** : Run command


        `webdriver-manager update`

    The `webdriver-manager` is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:


    Now start up a server with:

        `webdriver-manager start`

This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at http://localhost:4444/wd/hub.

Configuration:
---------------

Find conf.js file at 

npm\node_modules\protractor\example

Now create the configuration file. Copy the following into `conf.js`:

    `exports.config = {
    specs: ['../tests/calculator.js'],
    baseUrl: 'http://juliemr.github.io/protractor-demo/',
    };`

This configuration tells Protractor where your test files (`specs`) are, and where to talk to your Selenium Server (`seleniumAddress`). It will use the defaults for all other configuration. Chrome is the default browser.

Run the test:
---------------

Now run the test with:

    `protractor conf/conf.js`

You should see a Chrome browser window open up and navigate to the todo list in the AngularJS page, then close itself (this should be very fast!). The test output should be `1 test, 3 assertions, 0 failures`. Congratulations, you've run your first Protractor test!

Cloning a repository:
---------------
- On GitHub.com, navigate to the main page of the repository.

- Above the list of files, 
       click `Code` button

- Copy the URL for the repository.


- Open Terminal.

- Change the current working directory to the location where you want the cloned directory.

- Type `git clone`, and then paste the URL you copied earlier.

        `$ git clone https://github.com/umerQA/Protractor_CIP.git`

- Press Enter to create your local clone.

        `$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`
         > `Cloning into Spoon-Knife`...
         > `remote: Counting objects: 10, done.`
         > `remote: Compressing objects: 100% (8/8), done.`
         > `remove: Total 10 (delta 1), reused 10 (delta 1)`
         > `Unpacking objects: 100% (10/10), done.`



Open Protractor code on Visual Studio Code:
---------------

- **Step 1**: Download and install Visual Studio Code
    https://code.visualstudio.com/download#

- **Step 2** : Open VS Code

- **Step 3** : Open a local clone project folder and open in VS Code explorer

- **Step 4** : Inside Protractor_CIP folder there are 3 folders
        
        `conf`
        `tests`
        `locators`

    **note** : protractor uses jasmine test framework by default
    Just in case you need to install jasmine use the command
        `npm install --save-dev jasmine`

- **Step 5** : In conf.js update location of spec file.

    For example in my case:        
            `specs: ['../tests/calculator.js'],`

- **Step 6** : Open Terminal from Visual Studio Code.
        
     Run conf.js in protractor
        
            `protractor conf/conf.js`

How to upload project on Git (version control):
---------------

- **Step 1**: Check if git is installed on your system
    
        `git --version`

- **Step 2**: Install git on your system
        
        https://git-scm.com/download/

- **Step 3**: Go to https://github.com/ and signup & login

- **Step 4**: Create a new repository on GitHub

- **Step 5**: Commit changes to git
    
        `git commit - m "commit Message"`

- **Step 8**: Add remote repository url

    Note: If prompted add username and email

    1. Set your username:git config --global user.name “test.name”
    2. Set your email address:git config --global user.email “automation.devops@gmail.com”

- **Step 9**: Push changes to GitHub
    
        `git push origin "branch_name"`

- **Step 10**: Whenever you make changes, commit and push

    My Protractor Framework Project on GitHub https://github.com/umerQA/Protractor_CIP.git...


Getting Help
------------

Check the [Protractor FAQ](https://github.com/angular/protractor/blob/master/docs/faq.md) and read through the [Top 20 questions on StackOverflow](http://stackoverflow.com/questions/tagged/protractor?sort=votes&pageSize=20).



