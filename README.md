# RGBA to feColorMatrix converter

[feColorMatrix](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix) is an SVG filter that changes colors based on a transformation matrix. Every pixel's color value (represented by an [R,G,B,A] vector) is matrix multiplied to create a new color.

This filter is really powerful and allows granular per channel color manipulation. Una Kravets wrote an [excellent article](http://alistapart.com/article/finessing-fecolormatrix) explaining how to use the it.

## Scope

This project aims to easily translate an RGBA value into a color matrix.

Bare in mind you can do much more than this with the matrix, but if you want to colorize an element following an exact RGBA value, then this converter will generate the matrix.

## Development

You’ll need npm to install the dev dependencies. First make sure you have [node installed](https://nodejs.org/en/) on your system.

To install the dependencies run:
```
npm install
```

To start a server and sass compiler, run:
```
gulp
```

Enjoy!

## Next steps
I want to create a library out of this project.
