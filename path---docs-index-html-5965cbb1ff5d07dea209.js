webpackJsonp([52226143763650],{366:function(n,a){n.exports={data:{markdownRemark:{html:'<p><a href="https://join.slack.com/t/single-spa/shared_invite/enQtMjk3OTcwNTM2OTAyLTM5ZmZkZWJjYjNiMWNmZWU0M2NjOWRmYzNiNDQ2OWQxNjUwZGY3N2UyNTU5NWYzMTkxMzIzNmQwOWZiZDBiZTQ">Join the chat on Slack</a></p>\n<h2>A javascript metaframework</h2>\n<p>Build micro frontends that coexist and can each be written with their own framework. This allows you to:</p>\n<ul>\n<li><a href="">Use multiple frameworks</a> on the same page <a href="">without refreshing the page</a>\n(<a href="https://github.com/CanopyTax/single-spa-react">React</a>, <a href="https://github.com/CanopyTax/single-spa-angular1">AngularJS</a>, <a href="https://github.com/CanopyTax/single-spa-angular2">Angular</a>, <a href="https://github.com/CanopyTax/single-spa-ember">Ember</a>, or whatever you\'re using)</li>\n<li>Write code using a new framework, without rewriting your existing app</li>\n<li>Lazy load code for improved initial load time.</li>\n</ul>\n<h2>Demo and examples</h2>\n<p>A <a href="https://single-spa.surge.sh">live demo</a> is available and the source code for that demo is available in the <a href="https://github.com/CanopyTax/single-spa-examples">single-spa-examples</a> repository.</p>\n<p>Also, you can check out <a href="https://github.com/joeldenning/simple-single-spa-webpack-example">a simple webpack starter project</a> which is simpler and hopefully easier to get started with.</p>\n<h2>Architectural Overview</h2>\n<p>Single-spa takes inspiration from React component lifecycles by applying lifecycles to entire applications.\nIt started out of a desire to use React + react-router instead of being forever stuck with our AngularJS + ui-router application, but now single-spa supports almost any framework coexisting with any other. Since Javascript is notorious for the short-life of its many frameworks, we decided to make it easy to use whichever frameworks you want.</p>\n<p>Apps built with single-spa are made up of the following pieces:</p>\n<ol>\n<li>Many <a href="">applications</a>, each of which is sort of like an entire SPA itself. Applications respond to url routing events and must know how to bootstrap, mount, and unmount themselves from the DOM. The main difference between a SPA and an application is that applications must coexist together and do not each have their own html page.\nFor example, your React or Angular applications are applications which are either active or dormant. When active, they listen to url routing events and put content on the DOM. When dormant, they do not listen to url routing events and are totally removed from the DOM.</li>\n<li>\n<p>A <a href="">single-spa-config</a>. The single-spa-config is the html page, plus the javascript that registers applications with single-spa. Each application is registered with three things:</p>\n<ol>\n<li>A name</li>\n<li>A function to load the application\'s code</li>\n<li>A function that determines when the application is active/dormant.</li>\n</ol>\n</li>\n</ol>\n<h2>How hard will it be to use single-spa?</h2>\n<p>single-spa works with es5, es6+, typescript, webpack, systemjs, gulp, grunt, bower, ember-cli, or really anything build system you can think of. You can npm install it, jspm install it, or even just use a <code>&#x3C;script></code> tag if you prefer. If you\'re not starting your application from scratch, you\'ll have to <a href="">migrate your SPA</a> to become a single-spa application.</p>\n<p>single-spa works in Chrome, Firefox, Safari, IE11, and Edge.</p>\n<h2>Isn\'t single-spa sort of a redundant name?</h2>\n<p>Yep</p>\n<h2>Documentation</h2>\n<p>Welcome! This website contains the docs for single-spa itself.  However, if you\'re looking for help with specific frameworks or build systems (React, Angular, Webpack, Ember, etc), check out the <a href="">ecosystem wiki</a></p>\n<p>Also, check out <a href="https://medium.com/@joeldenning/a-step-by-step-guide-to-single-spa-abbbcb1bedc6">this step by step guide</a>.</p>\n<h2>Simple Usage</h2>\n<p>For a full example, check out <a href="https://github.com/joeldenning/simple-single-spa-webpack-example">this simple webpack example</a>.</p>\n<p>To create a single-spa application, you will need to do three things:</p>\n<ol>\n<li>Create an html file:</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>single-spa-config.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<ol start="2">\n<li>Create a single-spa-config. Check out the <a href="https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-config.md">docs</a> for more detail.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// single-spa-config.js</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> singleSpa <span class="token keyword">from</span> <span class="token string">\'single-spa\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> appName <span class="token operator">=</span> <span class="token string">\'app1\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* The loading function is a function that returns a promise that resolves with the javascript application module.\n * The purpose of it is to facilitate lazy loading -- single-spa will not download the code for a application until it needs to.\n * In this example, import() is supported in webpack and returns a Promise, but single-spa works with any loading function that returns a Promise.\n */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">loadingFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'./app1/app1.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* Single-spa does some top-level routing to determine which application is active for any url. You can implement this routing any way you\'d like.\n * One useful convention might be to prefix the url with the name of the app that is active, to keep your top-level routing simple.\n */</span>\n<span class="token keyword">const</span> <span class="token function-variable function">activityFunction</span> <span class="token operator">=</span> location <span class="token operator">=></span> location<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">\'/app1\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nsingleSpa<span class="token punctuation">.</span><span class="token function">registerApplication</span><span class="token punctuation">(</span>appName<span class="token punctuation">,</span> loadingFunction<span class="token punctuation">,</span> activityFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>\nsingleSpa<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<ol start="3">\n<li>Create an application. Check out the <a href="https://github.com/CanopyTax/single-spa/blob/master/docs/applications.md">docs</a> for more detail.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">//app1.js</span>\n\n<span class="token keyword">let</span> domEl<span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> Promise\n\t\t<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t\t\tdomEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\tdomEl<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">\'app1\'</span><span class="token punctuation">;</span>\n\t\t\tdocument<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>domEl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">mount</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> Promise\n\t\t<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t\t\t<span class="token comment">// This is where you would normally use a framework to mount some ui to the dom. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-ecosystem.md.</span>\n\t\t\tdomEl<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">\'App 1 is mounted!\'</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">unmount</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> Promise\n\t\t<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t\t<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t\t\t<span class="token comment">// This is normally where you would tell the framework to unmount the ui from the dom. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-ecosystem.md</span>\n\t\t\tdomEl<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Project roadmap</h2>\n<p>We\'re trying out github\'s Projects feature (<a href="https://github.com/CanopyTax/single-spa/projects">here</a>) and are keeping it up-to-date with the fancy things in the works for single-spa.</p>\n<h2>API</h2>\n<p>See <a href="/docs/single-spa-api.md">single-spa api</a> and <a href="/docs/applications.md#application-lifecycle">application api</a>.</p>\n<h2>Who\'s Using This?</h2>\n<ul>\n<li><a href="https://www.canopytax.com">CanopyTax</a></li>\n<li><a href="https://dealersocket.com/">Dealer Socket</a></li>\n</ul>\n<p>Edit this page <a href="https://github.com/CanopyTax/single-spa.js.org/tree/master/content/docs/index/index.md">here</a> if you would like to add yourself.</p>',fileAbsolutePath:"/home/travis/build/CanopyTax/single-spa.js.org/content/docs/index/index.md",frontmatter:{path:"/docs/index.html",title:"single-spa Documentation",prevLink:null,nextLink:"/docs/v3/introduction.html"}}},pathContext:{}}}});
//# sourceMappingURL=path---docs-index-html-5965cbb1ff5d07dea209.js.map