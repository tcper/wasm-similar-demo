"use strict";(self.webpackChunkwasm_similar_demo=self.webpackChunkwasm_similar_demo||[]).push([[3444,3047],{595:function(e){function t(e){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,r,i){if(n.language===a){var o=n.tokenStack=[];n.code=n.code.replace(r,(function(e){if("function"===typeof i&&!i(e))return e;for(var r,s=o.length;-1!==n.code.indexOf(r=t(a,s));)++s;return o[s]=e,r})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var r=0,i=Object.keys(n.tokenStack);!function o(s){for(var l=0;l<s.length&&!(r>=i.length);l++){var u=s[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var g=i[r],c=n.tokenStack[g],p="string"===typeof u?u:u.content,f=t(a,g),d=p.indexOf(f);if(d>-1){++r;var k=p.substring(0,d),m=new e.Token(a,e.tokenize(c,n.grammar),"language-"+a,c),E=p.substring(d+f.length),S=[];k&&S.push.apply(S,o([k])),S.push(m),E&&S.push.apply(S,o([E])),"string"===typeof u?s.splice.apply(s,[l,1].concat(S)):u.content=S}}else u.content&&o(u.content)}return s}(n.tokens)}}}})}(e)}e.exports=t,t.displayName="markupTemplating",t.aliases=[]},7191:function(e,t,n){var a=n(595);function r(e){e.register(a),function(e){e.languages.tt2=e.languages.extend("clike",{comment:/#.*|\[%#[\s\S]*?%\]/,keyword:/\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|TAGS|THROW|TRY|SWITCH|UNLESS|USE|WHILE|WRAPPER)\b/,punctuation:/[[\]{},()]/}),e.languages.insertBefore("tt2","number",{operator:/=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|or|not)\b/,variable:{pattern:/[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*/i}}),e.languages.insertBefore("tt2","keyword",{delimiter:{pattern:/^(?:\[%|%%)-?|-?%]$/,alias:"punctuation"}}),e.languages.insertBefore("tt2","string",{"single-quoted-string":{pattern:/'[^\\']*(?:\\[\s\S][^\\']*)*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,greedy:!0,alias:"string",inside:{variable:{pattern:/\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i}}}}),delete e.languages.tt2.string,e.hooks.add("before-tokenize",(function(t){e.languages["markup-templating"].buildPlaceholders(t,"tt2",/\[%[\s\S]+?%\]/g)})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"tt2")}))}(e)}e.exports=r,r.displayName="tt2",r.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tt2.7f7e1713.chunk.js.map