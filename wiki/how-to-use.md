---
title: How To Use?
path: /how-to-use
---

## It's very simple!

The only requirements are:
1. A github account ([Sign up](https://github.com/join))
2. Basic knowlage of Markdown, which I'll cover below!

---

To create a new page ad a `topic.md` (.md for markdown) file in the `/wiki/` folder.

Create a new page with "frontmatter".
```
---
title: How To Use
path: /how-to-use
---
```

I escaping this codeblock with three "backticks" (like this \` ). 

\`\`\` </br>
Code Block </br>
\`\`\`


Otherwise --- is a line break

---

Wrapping text in single backticks indicate `code` (like \`code\`)

The `title` in the frontmatter will be used automaticlly as an `<h1>` header. If you want to add another you can do that like `# This is an h1 header!`

# This is an h1 header!

I used ## to make an `<h2>` header, which is smaller. 
## h2 header's are smaller!

###### More #s makes smaller headers (this is h6).
####### You will know if you use to many! 


Headers are useful for organizing content visually and creating tables of contents.

### The Great Escape! 
Writing HTML code and markdown for refrence requires escaping the code. You can do this with backticks and backslashes. To write \<h1> I use a backslash before the opening < (like \\\<h1> ). Because it is code it's better to use backticks to give it code highlighting, like this `<h1>`. If you need to escape the backticks use a backslash (like this \\\` ). In that last example I escape the backslash and backtick with backslashes (like this \\\\\\\` ).

Escapeing is most complicated part of this document! <br />
The rest is all very intuitive!

### Text formating 

```
_Italic text_
**Bold text**
_Italic text with **Bold** inside_
```

_Italic text_
**Bold text**
_Italic text with **Bold** inside_

Notice that you need to put a line break betwen lines you want to be distinct.

```
_Italic text_

**Bold text**

_Italic text with **Bold** inside_
```
_Italic text_

**Bold text**

_Italic text with **Bold** inside_

#### If that is not what you want - use HTML line breaks!

```
_Italic text_ </br>
**Bold text** </br>
_Italic text with **Bold** inside_ </br>
```
_Italic text_ </br>
**Bold text** </br>
_Italic text with **Bold** inside_ 

```
~~Strikethrough~~
```
~~Strikethrough~~

```
> Blockquotes are very useful.
```
> Blockquotes are very useful.


---
### Lists!

```
* Item 1
  * Item 1a
* Item 2
```
* Item 1
  * Item 1a
* Item 2


```
1. Item 1
   1. Item 1a
```
1. Item 1
   1. Item 1a

---

### Links and Images!


`![Blackcoin Logo](/images/logo.png)` <br />
![Blackcoin Logo](/images/logo.png)

`[BlackcoinNL](http://blackcoin.nl)` <br />
[BlackcoinNL](http://blackcoin.nl)


### Tables
```
Bitcoin | Blackcoin
------------ | -------------
Awesome | Awesome
Secured by Proof of Work | Secured by Proof of Stake
Energy Expensive | Energy Efficent
```

Bitcoin | Blackcoin
------------ | -------------
Awesome | Awesome
Secured by Proof of Work | Secured by Proof of Stake
Energy Expensive | Energy Efficent

---
### Task Lists!

```
- [x] create wiki site
- [x] write "how to" page
- [x] buy more Blackcoin
- [ ] go for a walk
```

- [x] create wiki site
- [x] write "how to" page
- [x] buy more Blackcoin
- [ ] go for a walk 

