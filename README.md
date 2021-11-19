<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# minBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the minimum value of a strided array via a callback function.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-min-by
```

</section>

<section class="usage">

## Usage

```javascript
var minBy = require( '@stdlib/stats-base-min-by' );
```

#### minBy( N, x, stride, clbk\[, thisArg] )

Calculates the minimum value of strided array `x` via a callback function.

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var v = minBy( x.length, x, 1, accessor );
// returns -10.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array], [`typed array`][mdn-typed-array], or an array-like object (excluding strings and functions). 
-   **stride**: index increment.
-   **clbk**: callback function.
-   **thisArg**: execution context (_optional_).

The invoked callback is provided four arguments:

-   **value**: array element.
-   **aidx**: array index.
-   **sidx**: strided index (`offset + aidx*stride`).
-   **array**: input array/collection.

To set the callback execution context, provide a `thisArg`.

```javascript
function accessor( v ) {
    this.count += 1;
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var context = {
    'count': 0
};

var v = minBy( x.length, x, 1, accessor, context );
// returns -10.0

var cnt = context.count;
// returns 8
```

The `N` and `stride` parameters determine which elements in `x` are accessed at runtime. For example, to access every other element

```javascript
var floor = require( '@stdlib/math-base-special-floor' );

function accessor( v ) {
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
var N = floor( x.length / 2 );

var v = minBy( N, x, 2, accessor );
// returns -4.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var floor = require( '@stdlib/math-base-special-floor' );

function accessor( v ) {
    return v * 2.0;
}

// Initial array...
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var N = floor( x0.length/2 );

// Access every other element...
var v = minBy( N, x1, 2, accessor );
// returns -12.0
```

#### minBy.ndarray( N, x, stride, offset, clbk\[, thisArg] )

Calculates the minimum value of strided array `x` via a callback function and using alternative indexing semantics.

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

var v = minBy.ndarray( x.length, x, 1, 0, accessor );
// returns -10.0
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offset` parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of `x`

```javascript
function accessor( v ) {
    return v * 2.0;
}

var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];

var v = minBy.ndarray( 3, x, 1, x.length-3, accessor );
// returns -12.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   A provided callback function should return a numeric value.
-   If a provided callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is **ignored**.
-   When possible, prefer using [`dmin`][@stdlib/stats/base/dmin], [`smin`][@stdlib/stats/base/smin], and/or [`min`][@stdlib/stats/base/min], as, depending on the environment, these interfaces are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array-filled-by' );
var minBy = require( '@stdlib/stats-base-min-by' );

function accessor( v ) {
    return v * 2.0;
}

var x = filledarrayBy( 10, 'float64', discreteUniform( -50, 50 ) );
console.log( x );

var v = minBy( x.length, x, 1, accessor );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/base/dmin`][@stdlib/stats/base/dmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/max-by`][@stdlib/stats/base/max-by]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a strided array via a callback function.</span>
-   <span class="package-name">[`@stdlib/stats/base/min`][@stdlib/stats/base/min]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array.</span>
-   <span class="package-name">[`@stdlib/stats/base/nanmin-by`][@stdlib/stats/base/nanmin-by]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a strided array via a callback function, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/base/smin`][@stdlib/stats/base/smin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a single-precision floating-point strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-min-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-min-by

[test-image]: https://github.com/stdlib-js/stats-base-min-by/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-min-by/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-min-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-min-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-min-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-min-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-min-by/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/stats/base/dmin]: https://github.com/stdlib-js/stats-base-dmin

[@stdlib/stats/base/max-by]: https://github.com/stdlib-js/stats-base-max-by

[@stdlib/stats/base/min]: https://github.com/stdlib-js/stats-base-min

[@stdlib/stats/base/nanmin-by]: https://github.com/stdlib-js/stats-base-nanmin-by

[@stdlib/stats/base/smin]: https://github.com/stdlib-js/stats-base-smin

<!-- </related-links> -->

</section>

<!-- /.links -->
