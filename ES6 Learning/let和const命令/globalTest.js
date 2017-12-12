/**ES5 的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。

浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。
浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。
Node 里面，顶层对象是global，但其他环境都不支持。**/

//现在有一个提案，在语言标准的层面，引入global作为顶层对象。
// CommonJS 的写法
require('system.global/shim')();

// ES6 模块的写法
import shim from 'system.global/shim';
const global = shim();
