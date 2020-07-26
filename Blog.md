My name is **Ilori Stephen A**, I am a full-stack software developer in **West Africa, Lagos Nigeria.** In this tutorial, I will show you how to build a **Web Scraper** using **Node.js and Puppeteer.**

**Node.js** _is a javascript runtime built on chrome's v8 engine_. Node.js is a very powerful technology to have under one's belt. There is a lot you can do with the technology and I spoke about **How To Build A CLI App Using Node.js** in one lecture. You can read about that on [How To Build A CLI App Using Node.js](https://blog.learningdollars.com).

However, in this lesson, I will teach you how to build a **Web Scraper** with **Node.js**. But before we begin, I am sure you'd like to know why you'd want to build a **Web Scraper** in the first place. Well, let's get to that in the next line.

## Why Would You Want To Build A Web Scraper

Javascript is perfect for a lot of things, I mean there is so much one can do with the technology. It has a whole lot of frameworks under it. I personally think Javascript has the most framework. But the one that meets the eye most happens to be **Node.js**.

**Node.js** is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.

**Node.js** uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Well, that's the introduction to **Node.js**, let's talk about **Scrapers**. A **Web Scraper** as defined by me is an **Automation Process** that helps in fetching **Contents From The Web** by simulating **HTTP HEADERS and HTTP VERBS**. That's how simple it is.

A **Web Scraper** is perfect for a lot things. Say for instance, you want to fetch some data from a website, download some Images, fetch some data and convert them to csv or other data format. Doing that yourself would take a lot of effort. I mean, manually copying and pasting contents to convert them into **JSON**?

It's not the 70's and even if it were, I am sure someone would come up with something, and that something would be a **Web Scraper**. With a **Web Scraper**, you can download **Media Contents**, from a website, **automate** a **login process**, **fetch data** from a website and convert them into other **data formats** and use them for something else.

That sounds great I am sure. Well, we will be getting to building a **Web Scraper** soon.

## Glossary

While I was preparing for this lesson, I did my research and I came across several **Tech Terms** or **Tech Jargons** related to this lesson. Below are some of the Technical Jargons I came across for this lesson.

1. **NPM**: Npm stands for Node Package Manager and it is the default package manager for the Javascript runtime environment (Node.js).

2. **Modules**: A module is part of a program, and programs are composed of one or more independently developed modules that are not combined until the program is linked.

3. **Cli**: A CLI stands for **Command Line Interface** and it is a **text-based interface** for interacting with the computer. A **Cli** would be your **CMD** in **Windows**, and **Terminal** in **Linux**.

4. **HTTP VERBS**: You can think of **HTTP VERBS** as **protocols** that are used in handling **HTTP Requests.**

We just concluded our **Technical Jargons** or **Glossary** section. Now, it's time to talk about our project requirement.

## Project Requirements

In order to get the best out of this lecture, the following requirements need to be satisfied.

In order to get the best out of this lecture, the following requirements need to be satisfied.

1. Node.js: The most recent version of **Node.js** installed or at least, an **LTS** version of **Node.js** downloaded from their website [Node.js](https://www.nodejs.org). 

2. Npm Installed: The most recent version of **Npm** should be installed, there are several package managers for **Javascript**, but for this lesson, I recommend **Npm**. You can verify its installation by running **npm -v** in your **Terminal** or **CMD**.

3. A Text Editor: A text editor to write your codes with. You can download either Visual studio code, Atom, or Bracket.

4. Basic Javascript Knowledge: In order to get the best out of this lecture, you need to have a basic or intermediate knowledge of javascript.

With the requirements all satisfied, we can then now begin building our **Scraper**. We would begin by creating a new folder. You can name the folder whatever you want but for this lesson, I am sticking to **web-scraper**. Inside of the just created folder, we should have a simple working directory that looks like the following.

### Project Directory

    */ web-scraper (Project)
        */ app (Folder. Our Application logic lives here.)
            /AuthenticationScraper.js
            /BasicScraper.js
            /ScraperToJson.js
        / public
            /img
            /json
            /pdf
            
        index.js
        package.json

## 1. Editing Our Package.json File (Root Directory)

Open the `package.json` file in the **Project's Root Directory** and copy and paste the following code snippet below. This will install all of the needed dependencies for the project. 

After editing the `package.json`, open the project in your terminal and run the command `npm install`. This will create a `node_modules folder` inside of the project. 

[gist][/gist]

## 2. Editing Our Index.js File (Root Directory)

The `index.js` file is the `entry-point` into our application. This file loads up other files and executes certain commands passed as arguements through the terminal.

Open the `index.js` file and paste the github gist below into the file.

[gist][/gist]

This file makes use of the `yargs Module` to parse command line arguements. We are using this approach because it is the easiest way to practise **Web Scraping**. You can also create a **Web View** for this but for this lesson, everything will be done from the `terminal or cmd`.

## 3. Editing Our BasicScraper.js File (App Directory)

This file covers how to build a `simple scraper with Headers and without Headers`. It contains a **Class** called **BasicScraper** and it contains **two methods** namely; _scrape and scrapeWithHeaders_.

With that said, open or create this file inside of the `app directory` and paste the following github gist into the file.

[gist][/gist]

This Class loads in two modules namely; _cheerio and request-promise_. This two modules makes the job a whole lot easier for use. Let's talk about the **scrape** method provided inside of this Class.

### The scrape Method

This method contains an Options object which holds all of the configs necessary to make an **HTTP REQUEST**. Inside of the Options Object, there is a `key` called `transform` which contains a function that makes use of the `Cheerio Module`. 

This makes it so that the response from the request is passed into the function and transformed. You can find more knowledge by reading the documentations for the [`Request Promise Library`](https://npm.com)

Afer that, we make use of the RequestPromise library in making an **HTTP REQUEST**. This returns a promise and we chain on to the promise and perform other operations.

Inside of the `.then callback`, we make use of the transformed response by using the `cheerio` method to traverse the html using `Css Selectors` inside of the method to pick selected elements and fetch their data.

At the end of the Operation, we should have an `Array` of `Objects` returned which is then now printed to the console. There us a `.catch block` which is executed when an exception is `thrown`.

### The scrapeWithHeaders Method

This method scrapes a website using `HTTP HEADERS`. unlike the `scrape` method, You have to pass in the `HEADERS` manually. Well, this is relatively easy as the only thing you need to do is make a request with your browser to [WebScraper.io](https://webscraper.io/test-sites/e-commerce/static/computers/tablets) and open your browser `Dev Tools` with **ctrl + shift + i** if you are on **Google Chrome, Opera Mini and Mozilla**.

Click the network tab and click on the request with a type of document. You should click the first request with this type. After that, A pane will be opened. Scroll down through the pane and click on the Request Section under this pane and come back to your editor.

[Dev Tools Screenshot](https://cloudinary.com)

And that is how we arrived at the `Headers Object` inside of the `Options Object` in the `scrapeWithHeaders Method`. There is also a `gzip` key which has a value of `true`. Because the website is served with `gzip` enabled, this makes it so that the content or the response we get back isn't gibberish and.

The rest of the operation under this method is the same as the `scrape method`.

In conclusion, the `BasicScraper.js file` sends an `HTTP REQUEST` to the [webscraper.io Example Websites Tablet Category.](https://webscraper.io/test-sites/e-commerce/static/computers/tablets) Our scraper only fetches information such as `the product price, product name, description, reviews and ratings`.

With that said and done, we just built our very first and simple web scraper. In the next paragraph we will talk about saving the response we get back from the operation into a json file, generating screenshots and pdfs.

## 4. Editing Our ScraperToJson.js File (App Directory)

Inside of this file, we will discuss how to save the response from a scraper to json, generate pdfs and take screenshots of the web page being scraped. This file loads in a few modules such as `fs, cheerio, request-promise, and puppeteer.`

Open the app directory, `create or open the ScraperToJson.js File` and paste the code snippets below into the file.

[gist][/gist]

Inside of this file lives a class called the same name as the file name. This class contains `4 Methods` namely; `toJson, toPng, autoScroll and toPdf`. Inside of this class, we will be scraping the `tablets catalog under computers` from [Jumia Website](https://www.jumia.com.ng/laptops/)

### The toJson Method

This method contains an `Options Object` like the previous example. We are making a request to the website without any `HEADERS` provided. `HEADERS` will be generated on the fly when our request is made. 

The `Options Object` also contains a `transform key` which makes use of the `Cheerio Module` to transform the response body we get back from the request.

After creating our `Options Object`, we can now proceed to making our `HTTP REQUEST` with the `RequestPromise` library. This library returns a promise and we chained a `.then and a .catch callback method`.

Inside of the `.then callback method`, we begin by using some `Css Selectors` to traverse the `Html response` received from the request which has been transformed into a `Cheerio Object.`

We traverse the `Html Response` received, iterate through the contents and create a `JSON Response` which is written to the file system by using the `Fs Module we required or imported into the ScraperToJson Scope.` 

The `.catch method` is used to handle exceptions which might have occurred from the `request`. We also made use of the callback method passed to the `Fs.writeFile Method` which helps us determine if an error occurred during the operation. In the absence of any, a new File called `jumia.json` is created inside of the `json directory in the public folder.` and a `Json Response` is also printed to the `terminal`.

### The toPng Method

This method is quite different from other methods we have been creating. This method makes use of the `Puppeteer Module or Library by google` to automate a web browser. There are several browser automation library out there but I find `Google's Puppeteer` the easiest.

All of the code inside the `toPng` Method except the `autoScroll Method` are `Puppeteer's Method.` You can visit and read about their docs on [Puppeteer](https://puppeteer.com).

The method creates an launches a new Browser Instance, creates a new page and points the page to Jumia E-commerce url, waits for the Images to load, scrolls every 5 seconds, takes a screenshot and then close the browser.

### The autoScroll Method

The `autoScroll Method` takes in a `Page object` whcih is created from the `Puppeteer Library` and calls the `Puppeteer evaluate method` on it. Inside of this method, we create a `setInterval` which scrolls the Page every 5 seconds by incrementing the `Page current height` with `100`. The operation stops once the totalHeight scrolled is equal to the Page's Height.

### The toPdf Method

The `toPdf Method` is a lot similar to the `toPng Method`, only that the `toPdf Method` generates a `Pdf` instead of a screenshot. There is nothing new here in the codebase. The only new snippet introduced is the `Page.pdf Method` which generates a `Pdf` of the current Page using the Options Object Provided as an arguement.

That is how easy it is to automate a webpage. `Google's Puppeteer` has a whole of method to offer which makes scraping or automation fun. You can head over to their docs on [Google Puppeteer](https://google.com).

In conclusion, we just save the response from our scraper to `Json, generate Png Images and Pdf Files`. In the next chapter, we will talk about how to `automate` a `login` process.

## 5. Editing Our AuthenticationScraper.js File (App Directory)

Inside of this File, we have a class that contains one Method. This class depends on the `Puppeteer Module or Library`. In this file, we will be using the E-commerce website from the last chapter [Jumia](https://jumia.com.ng).With that said, Open the app directory and create or edit the `AuthenticationScraper.js` file.

With that out of the way, copy and paste the Git gist below into the file.

[gist][/gist]

This Class contains just one method. The `login Method` and this method makes use of the `Puppeteer library` to login a user by emulating user behaviours on the browser such as Clicks and inputs. We can also authenticate a user by using the `request-promise library` but I will be leaving you to try that so you can improve your **web scraping** skills.

With that pointed out, below are some of the screenshots of running this project in our terminal. You can get some knowledge about the command required by checking the `index.js file`, `package.json scripts key` or running the command `npm run help` in the terminal with the project current directory opened.

In conclusion, that's how you build a **Web Scraper**. I hope I was able to make things simple enough for you to understand. With that said, let's talk about the learning tools next.

## Learning Tools

There are a lot of learning tools online. But in case you are looking, I recommend you visit the following URL.

1. **Node.js** Official Website [Node.js](https://nodejs.org/en/docs/). This is the #1 goto place to learn how **Node.js** works. It holds a whole lot of documentation which explains different methods in **Node.js** 

2. Brad Traversy is my #1 goto mentor to learn any new programming language or how to create features in any programming language. You can google the name **Brad Traversy** and follow the search results up especially the youtube links.

3. You can also visit [**Udemy**](https://www.udemy.com). They have a ton of video lectures there to teach you anything you want to know. They even have some free tutorials. I highly recommend that you visit them to get some more knowledge.

## Learning Strategy

I used the learning tools above and a few PDF documentations to achieve this. Anytime I faced some bugs, I would use **Stack Overflow** to check for solutions. **Stack Overflow** really proved useful as I was able to find the **autoScroll** method we used in the **ScraperToJson** file there. Asides that, I got most of the knowledge about this topic by purchasing a video course on Udemy.

## Reflective Analysis

It was a simple process for me but I was able to gain some deeper insights into **Node.js** and programming in general. It was also the first time I'd be creating a **Scraper**.

There is a whole lot you can do with **Web Scraping** but you just can't go on scraping every single websites out there. Some websites has placed some restrictions in place to prevent this. So, I think it's polite to write them a mail before proceeding.

If the website you intend to scrape has an **A.P.I**, I think it's better to use the **A.P.I** instead. But if the **A.P.I** doesn't provide what you need, you can then go ahead and ask them before you proceed to scraping their webiste.

You can improvise and improve the functionalities of this program or application by creating a **Method** in any of the Classes that takes the response from the scraper and covert it into **CSV or XML**. You can also create another method that _handles authentication_ without using **Google's Puppeteer**.

## Conclusion

This project mainly focuses on building a **Web Scraper** in **Node.js**. If you ever thought **Node.js** was scary or something, I used to think the same way not until I realize that it's just javascript running in a different environment. 

This is just one of the few things you can create with **Node.js** plus, building a **Web Scraper** is a nice skill to have under your belt. You can get the best of **Node.js** by extending this application further. I believe in you to create something great. Once again, my name is Ilori Stephen. Thank you for reading.

[Get the complete project from github](https://github.com/learningdollars/ilori-cli-node).