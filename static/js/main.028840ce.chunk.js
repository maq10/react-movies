(this["webpackJsonpreact-movies"]=this["webpackJsonpreact-movies"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),i=n(6),s=n.n(i),a=(n(15),n(1)),o=n.n(a),l=n(2),d=n(7),u=n(8),j=n(4),v=n(10),h=n(9),p=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.omdbapi.com","c0fc751e",n="".concat("https://www.omdbapi.com","/?apikey=").concat("c0fc751e","&s=").concat(t),e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.omdbapi.com","c0fc751e",n="".concat("https://www.omdbapi.com","/?apikey=").concat("c0fc751e","&i=").concat(t),e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return"".concat(e.substring(0,t),"...")},f=n(0),x=function(e){return Object(f.jsxs)("div",{className:"movie-card",onClick:e.onClick,children:[Object(f.jsx)("img",{alt:"movie poster",src:e.posterUrl}),Object(f.jsx)("p",{children:m(e.title,15)}),Object(f.jsx)("p",{children:e.type})]})},O=function(e){var t=e.posterUrl,n=e.title,r=e.rated,c=e.runtime,i=e.genre,s=void 0===i?"Unknown":i,a=e.rating,o=void 0===a?0:a,l=e.plot,d=e.actors;return Object(f.jsxs)("div",{className:"movie-details",children:[Object(f.jsx)("div",{className:"poster",children:Object(f.jsx)("img",{alt:"movie poster",src:t})}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("p",{className:"title",children:n}),Object(f.jsx)("p",{className:"rating",children:null!==o&&void 0!==o?o:"N/A"})]}),Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:[c," min"]}),Object(f.jsx)("li",{children:r}),Object(f.jsx)("li",{children:s})]}),Object(f.jsxs)("div",{className:"info-section",children:[Object(f.jsx)("p",{className:"title",children:"Plot"}),Object(f.jsx)("p",{children:l})]}),Object(f.jsxs)("div",{className:"info-section",children:[Object(f.jsx)("p",{className:"title",children:"Actors"}),Object(f.jsx)("p",{children:d})]})]})]})},w=function(e){var t=e.list,n=void 0===t?[]:t,r=e.render;return n.map((function(e){return Object(f.jsx)(f.Fragment,{children:r(e)})}))},g=(n(18),function(e){var t=e.show,n=void 0!==t&&t,r=e.onClose,c=e.children;return Object(f.jsx)("div",{className:"modal",style:{display:n?"flex":"none"},children:Object(f.jsxs)("div",{className:"modal-content",children:[Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:r,children:"X"})}),c]})})}),k=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={searchTerm:"batman",isLoading:!1,movies:null,error:null,showModal:!1,currentMovie:null},r.setModalState=r.setModalState.bind(Object(j.a)(r)),r}return Object(u.a)(n,[{key:"setModalState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.setState({showModal:e})}},{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({isLoading:!0}),setTimeout(Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(t.state.searchTerm);case 3:n=e.sent,t.setState({isLoading:!1,movies:n,error:null}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.setState({isLoading:!1,movies:[],error:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),1e3);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"onMovieCardClicked",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:n=e.sent,this.setState({currentMovie:n,showModal:!0});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,n=this,r=this.state.currentMovie;return Object(f.jsx)(f.Fragment,{children:this.state.isLoading?Object(f.jsx)("h1",{children:"Loading data"}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(w,{list:null===(e=this.state.movies)||void 0===e?void 0:e.Search,render:function(e){return Object(f.jsx)(x,{title:e.Title,posterUrl:e.Poster,type:e.Type,onClick:function(){return n.onMovieCardClicked(e.imdbID)}})}}),Object(f.jsx)(g,{show:this.state.showModal,onClose:function(){return n.setModalState(!1)},children:Object(f.jsx)(O,{posterUrl:null===r||void 0===r?void 0:r.Poster,title:null===r||void 0===r?void 0:r.Title,rated:null===r||void 0===r?void 0:r.Rated,runtime:null===r||void 0===r?void 0:r.Runtime,genre:null===r||void 0===r?void 0:r.Genre,rating:null===r||void 0===r||null===(t=r.Ratings[0])||void 0===t?void 0:t.Value,plot:null===r||void 0===r?void 0:r.Plot,actors:null===r||void 0===r?void 0:r.Actors})})]})})}}]),n}(c.a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),y()}},[[19,1,2]]]);
//# sourceMappingURL=main.028840ce.chunk.js.map