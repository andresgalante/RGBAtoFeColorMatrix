# [RGBA to feColorMatrix converter](blog.andresgalante.com/RGBAtoFeColorMatrix)

[feColorMatrix](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix) is an SVG filter that changes colors based on a transformation matrix. Every pixel's color value (represented by an [R,G,B,A] vector) is matrix multiplied to create a new color.

This filter is really powerful and allows granular per channel color manipulation. Una Kravets wrote an [excellent article](http://alistapart.com/article/finessing-fecolormatrix) explaining how to use it.

## Scope

This project aims to easily translate an RGBA value into an SVG color matrix.

Bare in mind you can do much more than this with the matrix, but if you want to colorize an SVG element following an exact RGBA value, then this converter will help you out.

## Web Component

This project makes use of the awesome [polymer project](https://www.polymer-project.org/1.0/).

`rgba-matrix` element has the following attributes:
```
    <rgba-matrix r="1" g="1" b="1" a="1"></rgba-matrix>
```

The polymer element exposes a set matrix method for setting rgba values:
```
    document.querySelector('rgba-matrix').setMatrix(r,g,b,a);
```

RGB Values will be converted to decimal from 0 to 255.

Example:
```
    document.querySelector('rgba-matrix').setMatrix(100,200,300,0.5);
```

Will result in:
```
    <rgba-matrix r="0.39" g="0.78" b="1.18" a="0.5"></rgba-matrix>
```

## Development

You’ll need npm to install the dev dependencies. First make sure you have [node installed](https://nodejs.org/en/) on your system.

1. To install the dependencies run:
```
npm install
```

2. To start a server and sass compiler, run:
```
gulp
```

3. Open [http://localhost:3000/](http://localhost:3000/)

Enjoy!

## [Appreciation](https://www.youtube.com/watch?v=Jo-0ytcEXKg)
Thanks to [Brian Leathem](https://github.com/bleathem), [Patrick Riley](https://github.com/priley86) and the [Red Hat UXD team](https://twitter.com/RedHatUXD) for the [breakaway sprint](https://www.youtube.com/watch?v=kHue-HaXXzg) :smile:

## Next steps

I want to use service worker to load my dependencies.
