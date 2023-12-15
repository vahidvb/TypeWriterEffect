Type Writer Effect
==================

A tiny JavaScript library for adding typewriting effects to HTML pages – very easy and simple.

## Demo

Explore the demo on [CodePen](https://codepen.io/vahidvb/pen/wLqBZj)

## Usage

Download or clone the Git repository, and then add the JS and CSS files in your HTML `<head></head>`

```bash
<link rel="stylesheet" href="TypeWriterEffect.css">
```

```bash
<script src="TypeWriterEffect.js"></script>
```
#### Commands for clone
```bash
mkdir TypeWriterEffect
cd TypeWriterEffect/
git clone https://github.com/vahidvb/TypeWriterEffect.git
```
Now, you simply need to add a "typing" class to any HTML element.

## Details

- Typing repeatedly ( class="**typing**" )
  ```html
  <div class="typing">Typing repeatedly</div>
  ```
- Typing without repetition ( class="**no-repeat**" )
  ```html
  <div class="typing no-repeat">Typing without repetition</div>
  ```
- Typing without repetition and stopping the blinking after typing ( class="**typing no-repeat no-blink-after**" )
  ```html
  <div class="typing no-repeat no-blink-after">Typing without repetition and stopping the blinking after typing</div>
  ```

### Adding a delay before repetition

Also, you can simply set your duration in milliseconds using the typing-delay attribute

```html
<div class="typing" typing-delay="300">Typing with repetition and custom delay</div>
```

The default value is 5000 ms or 5 seconds
