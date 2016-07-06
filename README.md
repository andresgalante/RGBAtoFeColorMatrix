# RGBA to feColorMatrix converter

[feColorMatrix](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix) is an SVG filter that changes colors based on a transformation matrix. Every pixel's color value (represented by an [R,G,B,A] vector) is matrix multiplied to create a new color.

This filter is really powerful and allows granular per channel color manipulation. Una Kravets wrote an excellent article explaning how to use the matrix http://alistapart.com/article/finessing-fecolormatrix

## Scope

Although you can do much more than This project aims to translate an RGBA color to a color matrix.
