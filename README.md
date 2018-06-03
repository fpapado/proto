# Proto

> Pick the things you need to focus on, and forget about the rest.

## What is this?
A starter template for quickly deploying static websites.

The main idea is to allow you to pick the things you need to focus on, and forget about the rest.
It is based on a few principles:
- Prototypes have an end;
- Prototypes and random stuff should be fun **explore**, **develop** and **share**;
- Specifics will change, but patterns are trasnferable;
- A prototyping system will be different for each user. This specific system might not be for you, and that is ok :)

Based on x0 and styled-system.
Inspired by [x0-styled](https://github.com/mrmrs/x0-styled).

As this project uses css-in-js, all css is inlined to the head.

## Concepts
Here are the main development concepts:
- React handles the views and HTML output;
- Routing mirrors the filesystem;
- Styled-system takes care of outputting styles from the **values** in your design;
- The output is a static site;
- Sharing is instant using `zeit.co/now`.

The tech world often calls these setups "opinions".
I do not find that characterisation frutiful.
I would rather think of this setup as "my happy place".
Over time, the prototyping setup I use changes, in a self-sustaining loop between "learning to make something new" and "learning a new way to make something".
In other words, it allows me to focus on the things I am interested in at a certain moment, by leveraging familiar patterns.

Different versions of the setup will be tagged in [Releases]() for future reference.

### I have not used this setup before, can I build with it?
Yes! How relaxed you will be doing so will depend on how familiar you are with each of the development concepts/tools above.
If you have worked with React before, I think that styled-system will probably be the new variable.
If you have not worked with React before, but know CSS and HTML, I am also optimistic about it.

I generally try to keep as many "unknowns" static when building something new. Usually that tends to be the thing I am building, and not the technology.
However, it is equally beautiful to keep the technology as an "unknown" and keep the project as a "known" (e.g. you might have implemented similar functionality before).
If your scenario falls in the latter case, I hope your time prototyping will be worth it.

## How do I install this?
You don't.
Instead, you are encouraged to clone the repository and make it your own.

If you have [git]() installed, you can clone and disassociate it from the command line:
```
git clone https://github.com/fpapado/prototypon myprojectname
cd myprojectname
rm -rf .git/
```

I also like using [degit]() for doing exactly those steps:
```shell
degit https://github.com/fpapado/prototypon myprojectname
```

I would love to chat about what you've built or how your own setup has diverged!

## Getting Started
After downloading the directory and navigating to it in your terminal, run:

```
npm install && npm run dev
```

Then open your browser at localhost:8000

You can edit `pages/Index.js` and you should see those adjustments update live in the browser.

If you want to customise the title and description of your site, look under the `x0` field in `package.json`.

## Adding a new page
x0 crates routes based on the filesystem, mirroring the setup under the `files/` directory.

Fist add a new page in the `pages/` directory. 
You can copy Index.js and rename it to something else, like Example.js

See [x0's docs on Routing](https://github.com/c8r/x0#routing) for more details.

## Building
When you are ready to build for production, run:

```shell
npm run build
```

This will create the static site under the `site/` directory.
It will also write a `bundle.js` file, which will rehydrate (i.e. "pick up / take over") the client application in `index.html`.

[Read more about x0 in their docs](https://compositor.io/x0/docs)

## Styling
The main part of this repository is under the `elements/` directory.
React components under that directory are thin wrappers on top of HTML elements (e.g. `<p>`, `<div>`).
They provide extra "styling superpowers" from [styled-system](https://jxnblk.com/styled-system/).
The design system values are mapped to css classnames dynamically, using the [emotion](https://github.com/emotion-js/emotion) css-in-js library.
In that sense, CSS is more like the target, but the essence is in the values.

In the shortest way I can put it:
A "theme" file exists under `theme.js`. It covers some basic **design values** and scales in your system, such as typography, spacing, and colours.
Components in your system use those values, and combine to make greater things.
To make working with these values more ergonomic, styled-system links them to React props.

For example, consider a Card component:

```jsx
const Card = ({children}) =>
  // Div with padding scale value of 3 and colours
  <Div p={3} bg="white.1" color="black.1">
    <Img width={100} src="somesource" alt="descriptive image text" />
    <P>Content for the card</P>
  </Div>
```

### Further reading on styling
If you have not used styled-system before, I highly recommend [their documentation](https://jxnblk.com/styled-system/getting-started).

Varun Vachar has another great on styling as props, that motivates things from the ground up:
https://varun.ca/styled-system/

The page under [localhost:8080/elements](localhost:8080/elements) has a playground.

## Deploying
There are many ways to deploy a static site.
The tool the example site uses is [Zeit's now](zeit.co/now).

You can customise the specifics by modifying `now.json`.
Look at their docs for the [full now.json specification](https://zeit.co/docs/features/configuration#now.json).

You also have to install their CLI once, probably globally:

```shell
npm run install -g now
```

Then, whenever you want to deploy:

```shell
npm run deploy:now
```

This part of the project is easy to remove, and mostly a convenience.


## Credits
Based on work by @mrmrs, @jxnblk, and @johno.
I have drawn a lot of ideas from them in the past few years.
Though I will likely never meet them, their work has been inspiring.

The initial set up was by @mrmrs on the x0-styled repository:
https://github.com/mrmrs/x0-styled
