webpackJsonp([72111748943164],{367:function(n,s){n.exports={data:{markdownRemark:{html:'<p>The single-spa ecosystem is quickly growing to support as many frameworks and build tools as possible.</p>\n<h2>Help for frameworks</h2>\n<p>There is a growing number of projects that help you bootstrap, mount,\nand unmount your applications that are written with popular frameworks. Feel free\nto contribute to this list with your own project:</p>\n<ul>\n<li><a href="https://github.com/CanopyTax/single-spa-angular1">single-spa-angular1</a></li>\n<li><a href="https://github.com/CanopyTax/single-spa-react">single-spa-react</a></li>\n<li><a href="https://github.com/CanopyTax/single-spa-angular2">single-spa-angular2</a></li>\n<li><a href="https://github.com/CanopyTax/single-spa-vue">single-spa-vue</a></li>\n<li><a href="https://github.com/CanopyTax/single-spa-ember">single-spa-ember</a></li>\n<li><a href="https://github.com/CanopyTax/single-spa-preact">single-spa-preact</a></li>\n<li><a href="https://github.com/CanopyTax/single-spa-inferno">single-spa-inferno</a></li>\n<li><a href="https://github.com/CanopyTax/single-spa-svelte">single-spa-svelte</a></li>\n<li><a href="https://github.com/pcmnac/single-spa-cycle">single-spa-cycle</a></li>\n</ul>\n<h2>Webpack 2+</h2>\n<p>With webpack 2+, we can take advantage of its support for <a href="https://webpack.js.org/guides/code-splitting/">code splitting</a> with <a href="https://webpack.js.org/api/module-methods/#import">import()</a>\nin order to easily lazy-load registered applications when they are needed. When registering\nregistered applications from inside of your single spa config, try the following for your\n<a href="">loading functions</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>registerApplication<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'single-spa\'</span><span class="token punctuation">;</span>\n\n<span class="token function">registerApplication</span><span class="token punctuation">(</span><span class="token string">\'app-name\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'./my-app.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> activeWhen<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">activeWhen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">\'/my-app\'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>SystemJS</h2>\n<p>Since SystemJS is a Promise-based <a href="https://whatwg.github.io/loader">loader</a>, the way to\nlazy load your registered applications is straightforward:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>registerApplication<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'single-spa\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Import the registered application with a SystemJS.import call</span>\n<span class="token function">registerApplication</span><span class="token punctuation">(</span><span class="token string">\'app-name-1\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> SystemJS<span class="token punctuation">.</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'./my-app.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> activeWhen<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Alternatively, use the more out-of-date System.import (instead of SystemJS.import)</span>\n<span class="token function">registerApplication</span><span class="token punctuation">(</span><span class="token string">\'app-name-2\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> System<span class="token punctuation">.</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'./my-other-app.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> activeWhen<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">activeWhen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">\'/my-app\'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Webpack 1</h2>\n<p>With webpack 1, there is no support for Promise-based code splitting. Instead, we have to either wrap\na require.ensure in a Promise, or just give up on lazy loading completely.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>registerApplication<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'single-spa\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> app1 <span class="token keyword">from</span> <span class="token string">\'./app1\'</span><span class="token punctuation">;</span> <span class="token comment">// Not lazy loading with code splitting :(</span>\n\n<span class="token comment">// Giving up on lazy loading and code splitting :(</span>\n<span class="token function">registerApplication</span><span class="token punctuation">(</span><span class="token string">\'app-1\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>app1<span class="token punctuation">)</span><span class="token punctuation">,</span> activeWhen<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Still doing code splitting! But verbose :(</span>\n<span class="token function">registerApplication</span><span class="token punctuation">(</span><span class="token string">\'app-2\'</span><span class="token punctuation">,</span> app2InPromise<span class="token punctuation">,</span> activeWhen<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* Unfortunately, this logic cannot be abstracted into a generic\n * function that handles wrapping require.ensure in a promise for\n * any dynamically imported module. This is because webpack needs to\n * be able to statically analyze the code and find all of the require.ensure\n * calls at build-time, so you can\'t pass variables into require.ensure.\n */</span>\n<span class="token keyword">function</span> <span class="token function">app2InPromise</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t\trequire<span class="token punctuation">.</span><span class="token function">ensure</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'./app-2.js\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> require <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">try</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./app-2.js\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t\t<span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\t<span class="token punctuation">}</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">activeWhen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">\'/my-app\'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',fileAbsolutePath:"/home/travis/build/CanopyTax/single-spa.js.org/content/docs/ecosystem/ecosystem.v3.md",frontmatter:{path:"/docs/v3/ecosystem.html",title:"single-spa Ecosystem",prevLink:"/docs/v3/introduction.html",nextLink:null}}},pathContext:{}}}});
//# sourceMappingURL=path---docs-v-3-ecosystem-html-8d6ec8d57d6e7c7340a2.js.map