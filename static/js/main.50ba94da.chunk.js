(this["webpackJsonpinstaescuela-frontend"]=this["webpackJsonpinstaescuela-frontend"]||[]).push([[0],{174:function(e,n,t){},176:function(e,n,t){},297:function(e,n,t){"use strict";t.r(n);var a,r,o=t(0),c=t.n(o),i=t(32),s=t.n(i),l=(t(174),t(20)),d=t(25),m=t(9),b=(t(175),t(176),t(27),t(10)),u=t(300),p=t(301),j=t.p+"static/media/instagram.c1cb19ae.svg",g=t(51),h={getNumber:function(e){var n=0;return e>=1e3&&e<1e6?(n=e/1e3,n=h.round(n,1),"".concat(n," K")):e>=1e6?(n=e/1e6,n=h.round(n,1),"".concat(n," M")):e},getHashtagFromPost:function(e){for(var n=[],t=0;t<e.length;t++){var a=e[t].caption.split("#");n=[].concat(Object(g.a)(n),[a])}return n},round:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=e>=0?1:-1;return e*=t,0===n?t*Math.round(e):(e=e.toString().split("e"),t*((e=(e=Math.round(+(e[0]+"e"+(e[1]?+e[1]+n:n)))).toString().split("e"))[0]+"e"+(e[1]?+e[1]-n:-n)))},formatDate:function(e){var n;try{var t=new Date(e.split(/.[0-9]*Z/)[0]),a=parseInt(e.split("T")[1].split(":")[0]),r=a>12?a-12:a;n="".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getDate(),", ").concat(t.getFullYear()," ").concat(r,":").concat(t.getMinutes()," ").concat(a>12?"PM":"AM")}catch(o){n=""}return n},replaceAll:function(e,n,t){return null===e?"":e.split(n).join(t)}},x=h,v=t(1),f=b.a.div(a||(a=Object(m.a)(["\n    display: flex;  \n    align-items: center;\n    .avatar-container {\n        width: 2em;\n        display: flex;\n        overflow: hidden;\n        border-radius: 50%;\n    }\n    .title {\n        font-weight: 600;\n        margin-left: .5em;\n    }\n"]))),O=b.a.div(r||(r=Object(m.a)(["\n    padding: 1em 0;\n    width: 100%;\n    h3 {\n        font-size: 2.25em;\n        font-weight: 600;\n        margin: 0;\n    }\n    .tab-content {\n        background-color: #fff;\n        border-radius: 0 .75em .75em .75em;\n        padding: 3em;\n        display: flex;\n        justify-content: space-between;\n        .avatar-container {\n            position: relative;\n            width: min-content;\n            height: min-content;\n            >span {\n                border-radius: 50%;\n                overflow: hidden;\n                width: 12em;\n                display: flex;\n            }\n            .ig-logo {\n                width: 3em;\n                border-radius: 50%;\n                position: absolute;\n                bottom: 0;\n                right: 0;\n                border: 2px solid #fff;\n            }\n        }\n        .description {\n            padding: 0 2em 0 2em;\n            display: flex;\n            flex-direction: column;\n            color: var(--secondary-text-color);\n            font-size: 1.25em;\n            width: 60%;\n            .name {\n                color: var(--main-text-color)\n            }\n            .account {\n                display: flex;\n                align-items: center;\n                .type {\n                    padding: .25em 1em;\n                    background-color: var(--hastag-bg-color);\n                    color: var(--secondary-text-color);\n                    border-radius: .5em;\n                    height: max-content;\n                    margin-left: .5em;\n                }\n            }\n        }\n        .numbers-info {\n            .numbers {\n                display: flex;\n                h3 {\n                    display: block ruby; \n                }\n                >div {\n                    padding: 1em;\n                    span {\n                        color: var(--secondary-text-color);\n                    }\n                }\n            }\n            .engagement-data {\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                >div {\n                    text-align: center;\n                    width: max-content;\n                }\n                .engagement-values {\n                    display: flex;\n                    flex-direction: column;\n                    margin-top: 1em;\n                    font-weight: 600;\n                    width: max-content;\n                    .range-active {\n                        border: 1px solid var(--soft-border-color);\n                        border-radius: .25em;\n                        background-color: var(--hastag-bg-color);\n                        padding: .25em 1em;\n                        &.successfully{\n                            //border-color: var(--successfully-color);\n                        }\n                        &.error{\n                            //border-color: var(--error-color);\n                        }\n                    }\n                }\n            }\n        }\n    }\n    .ant-tabs-top > .ant-tabs-nav, .ant-tabs-bottom > .ant-tabs-nav, .ant-tabs-top > div > .ant-tabs-nav, .ant-tabs-bottom > div > .ant-tabs-nav {\n        margin: 0;\n    }\n    .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab, .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab {\n        border-radius: .75em .75em 0 0 ;\n        padding: 1em;\n    }\n    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {\n        color: var(--main-text-color);\n    }\n    .progress-children {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        .title {\n            font-size: .5em;\n        }\n        .value {\n            margin-bottom: .25em;\n        }\n    }\n"]))),y=[{min:100,max:500,percent:11.5},{min:500,max:1e3,percent:8.4},{min:1e3,max:5e3,percent:5.7},{min:5e3,max:1e4,percent:4.2},{min:1e4,max:5e4,percent:3.8},{min:5e4,max:5e10,percent:1.9}],w=u.a.TabPane,N=function(e){var n=e.accounts,t=e.onChange,a=e.activeKey,r=e.removeAccount;return Object(v.jsx)(O,{children:Object(v.jsx)(u.a,{hideAdd:!0,onChange:function(e){t(parseInt(e))},activeKey:"".concat(a),type:"editable-card",onEdit:function(e){r(parseInt(e))},children:n.map((function(e,n){return Object(v.jsx)(w,{tab:(t=e,Object(v.jsxs)(f,{children:[Object(v.jsx)("span",{className:"avatar-container",children:Object(v.jsx)("img",{src:t.profile_picture_url,alt:""})}),Object(v.jsx)("span",{className:"title",children:t.username})]})),children:Object(v.jsxs)("div",{className:"tab-content",children:[Object(v.jsxs)("div",{className:"avatar-container",children:[Object(v.jsx)("span",{children:Object(v.jsx)("img",{src:e.profile_picture_url,alt:""})}),Object(v.jsx)("span",{className:"ig-logo",children:Object(v.jsx)("img",{src:j,alt:""})})]}),Object(v.jsxs)("div",{className:"description",children:[Object(v.jsxs)("span",{className:"account",children:[Object(v.jsx)("h3",{children:e.username}),Object(v.jsx)("span",{className:"type",children:e.type})]}),Object(v.jsx)("span",{className:"name",children:e.name}),Object(v.jsx)("span",{style:{whiteSpace:"pre-line"},children:e.biography}),Object(v.jsx)("span",{children:Object(v.jsx)("a",{href:e.website,target:"_blank",children:e.website})})]}),Object(v.jsxs)("div",{className:"numbers-info",children:[Object(v.jsxs)("div",{className:"numbers",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:x.getNumber(e.followers_count)}),Object(v.jsx)("span",{children:"Followers"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:x.getNumber(e.follows_count)}),Object(v.jsx)("span",{children:"Followings"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h3",{children:x.getNumber(e.media_count)}),Object(v.jsx)("span",{children:"Posts"})]})]}),Object(v.jsxs)("div",{className:"engagement-data",children:[Object(v.jsx)("div",{children:Object(v.jsx)(p.a,{type:"circle",percent:x.round(e.engagement)/3.8*100,width:100,status:x.round(e.engagement)/3.8*100<100?"exception":"",format:function(){return Object(v.jsxs)("div",{className:"progress-children",children:[Object(v.jsx)("span",{className:"value",children:x.round(e.engagement)}),Object(v.jsx)("span",{className:"title",children:"Engagement"}),Object(v.jsx)("span",{className:"title",children:"rate"})]})}})}),Object(v.jsx)("div",{className:"engagement-values",children:y.map((function(n,t){var a=e.followers_count>n.min&&e.followers_count<n.max;return Object(v.jsx)("div",{className:a?"range-active error":"",children:n.max>5e9?"More than ".concat(x.getNumber(n.min)," followers: ").concat(n.percent):"From ".concat(x.getNumber(n.min)," to ").concat(x.getNumber(n.max)," followers: ").concat(n.percent)},t)}))})]})]})]})},"".concat(n));var t}))})})};N.defaultProps={accounts:[]};t(42),b.a.div(k||(k=Object(m.a)(["\n    padding: 0 1em;\n    background-color: var(--secondary-bg-color);\n    border-radius: .5em;\n    margin-bottom: 1em;\n    display: flex;\n    width: 100%;\n    .menu-item {\n        font-weight: 600;\n        width: max-content;\n        padding: 1em 1em;\n        margin: 0 .5em;\n        display: block ruby;\n        color: var(--main-text-color);\n    }\n    .menu-item-active {\n        border-bottom: 2px solid var(--main-color);\n    }\n\n"]))),t(103),t(159),t(304);var k,_,C,P=t(167),z=b.a.input(_||(_=Object(m.a)(["\n    padding: .5em 2.5em .5em 1.5em;\n    background-color: var(--hastag-bg-color);\n    border: 1px solid var(--soft-border-color);\n    border-radius: .5em;\n    width: 100%;\n    &:focus {\n        outline: none;\n    }\n"]))),A=b.a.div(C||(C=Object(m.a)(["\n    position: relative;\n    .icon-container {\n        position: absolute;\n        right: 1em;\n        top: .5em;\n        cursor: pointer;\n    }\n"]))),D=function(e){var n=e.placeholder,t=e.onChange,a=e.onSearch,r=e.value,o=e.style,c=e.search,i=e.name;return Object(v.jsxs)(A,{style:o,children:[Object(v.jsx)(z,{placeholder:n,onChange:function(e){var n=e.target.value;t({value:n,name:i})},value:r}),c?Object(v.jsx)("span",{className:"icon-container",onClick:a,children:Object(v.jsx)(P.a,{})}):""]})};D.defaultProps={placeholder:"",value:"",name:""};var B,E,F=b.a.div(B||(B=Object(m.a)(["\n    position: relative;\n    display: flex;\n    align-items: center;\n    .avatar-image {\n        width: 3em;\n        height: 3em;\n        border-radius: 50%;\n        overflow: hidden;\n        position: relative;\n    }\n    .ig-logo {\n        width: 1em;\n        height: 1em;\n        border-radius: 50%;\n        overflow: hidden;\n        display: flex;\n        position: absolute;\n        left: 2.5em;\n        bottom: 0;\n    }\n    .user-name {\n        font-weight: 600;\n        margin-left: 1em;\n        font-size: 1em;\n    }\n"]))),S=function(e){var n=e.src,t=e.userName;return Object(v.jsxs)(F,{children:[Object(v.jsx)("div",{className:"avatar-image",children:Object(v.jsx)("img",{src:n,alt:""})}),Object(v.jsx)("div",{className:"ig-logo",children:Object(v.jsx)("img",{src:j,alt:""})}),Object(v.jsx)("div",{className:"user-name",children:t})]})},H=t(65),M=b.a.div(E||(E=Object(m.a)(["\n\n"]))),I=function(e){var n=e.children,t=e.onClick,a=e.style,r=e.primary,o=e.disabled;return Object(v.jsx)(M,{onClick:function(){t&&t()},style:a,children:Object(v.jsx)(H.a,{style:{width:"100%"},type:r?"danger":"",disabled:o,children:n})})};I.defaultProps={onClick:function(){}};var L,T,J,R=I,V=(t(123),b.a.div(L||(L=Object(m.a)(["\n\n    padding: 2em 4em;\n    background: var(--secondary-bg-color);\n    width: 100%;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: space-between;\n    .left-box {\n        display: flex;\n        .search-box {\n            margin-left: 1em;\n        }\n    }\n    .right-box {\n        display: flex;\n    }\n"]))),b.a.div(T||(T=Object(m.a)(["\n    background-color: var(--secondary-bg-color);\n    display: flex;\n    flex-direction: column;\n    padding: 1em;\n    border-radius: .5em;\n    border: 1px solid var(--soft-border-color);\n"]))),t(302)),W=t(303),K=b.a.div(J||(J=Object(m.a)(["\n    padding: 0em;\n    border-radius: .5em;\n    box-shadow: 10px -10px 150px rgba(0, 0, 0, 0.1);\n    background-color: var(--secondary-bg-color);\n    width: 100%;\n    box-sizing: border-box;\n    .title {\n        padding: 1em;\n        border-bottom: 1px solid var(--soft-border-color);\n        font-weight: 600;\n    }\n    .content {\n        padding: 1em;\n    }\n"]))),G=function(e){var n=e.children,t=e.title;return Object(v.jsxs)(K,{children:[t?Object(v.jsx)("div",{className:"title",children:t}):"",Object(v.jsx)("div",{className:"content",children:n})]})};G.defaultProps={title:null};var Y,Z,q=G,Q=(t(305),t(306),b.a.div(Y||(Y=Object(m.a)(["\n    width: 100%;\n    margin-bottom: 1em;\n    .average-card {\n        padding: 0 1em 1em 1em;\n        h2 {\n            font-size: 3em;\n            font-weight: 600;\n            margin: .5em 0em .25em 0;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n        .title-container {\n            font-weight: 600;\n            display:  flex;\n            align-items: center;\n            font-size: 1.25em;\n            .icon-container {\n                color: var(--secondary-text-color);\n                margin-left: .5em;\n            }\n        }\n        .arrow-up, .arrow-down {\n            width: 1.25em;\n            height: 1.25em;\n            font-size: .5em;\n            padding: 1em;\n            border-radius: 50%;\n            box-sizing: border-box;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n        }\n        .arrow-down {\n            color: var(--less-color);\n            background-color: var(--less-bg-color);\n        }\n        .arrow-up {\n            color: var(--more-color);\n            background-color: var(--more-bg-color);\n        }\n    }\n"]))),b.a.div(Z||(Z=Object(m.a)(["\n    margin: .5em;\n    border-radius: 1em;\n    box-shadow: 10px -10px 150px rgba(0, 0, 0, 0.1);\n    background-color: var(--secondary-bg-color);\n    width: 100%;\n    .content {\n        padding: 1em;\n    }\n    .header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 1em;\n        border-bottom: 1px solid var(--soft-border-color);\n        .date {\n            color: var(--secondary-text-color)\n        }\n    }\n    .post-image {\n        position: relative;\n        display: flex;\n        .image-footer {\n            position: absolute;\n            bottom: .5em;\n            left: 1em;\n            display: flex;\n            .engagement, .media-type {\n                background-color: var(--secondary-bg-color);\n                box-shadow: 2px 5px 15px 3px rgba(0, 0, 0, 0.09);\n                padding: .5em 1em;\n                margin-right: 1em;\n                font-weight: 600;\n            }\n        }\n    }\n"])))),U=function(e){var n=e.data,t=e.avatar,a=e.userName;return n?Object(v.jsx)(Q,{children:Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("div",{children:Object(v.jsx)(S,{src:t,userName:a})}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{className:"date",children:x.formatDate(n.timestamp)+""})]}),Object(v.jsxs)("span",{className:"post-image",children:["VIDEO"!==n.media_type?Object(v.jsx)("img",{src:n.media_url,alt:""}):Object(v.jsx)("video",{src:n.media_url,alt:"",controls:"controls"}),Object(v.jsxs)("div",{className:"image-footer",children:["VIDEO"!==n.media_type?Object(v.jsx)("div",{className:"media-type",children:"IMAGE"===n.media_type?"Photo":"Carousel"}):Object(v.jsx)("div",{className:"media-type",children:"Video"}),Object(v.jsxs)("div",{className:"engagement",children:["".concat(x.round(n.engagement),"%")," Engagement"]})]})]}),Object(v.jsx)("div",{className:"content",children:n.caption})]})}):""};U.defaultProps={data:null};var X,$=U,ee=b.a.div(X||(X=Object(m.a)(["\n    .lazy-load-post-container {\n        width: 100%;\n        text-align: center;\n        padding: 2em;\n    }\n"]))),ne=function(e){var n=e.posts,t=e.avatar,a=Object(o.useState)(15),r=Object(d.a)(a,2),c=r[0],i=r[1];return Object(v.jsxs)(ee,{children:[Object(v.jsx)(V.a,{gutter:[15,15],children:n.slice(0,c).map((function(e,n){return Object(v.jsx)(W.a,{xs:{span:24},md:{span:12},lg:{span:8},style:{display:"flex"},children:Object(v.jsx)($,{data:e,avatar:t,userName:"instaescuela"})},n)}))}),c!==n.length?Object(v.jsx)("div",{className:"lazy-load-post-container",children:Object(v.jsx)(R,{onClick:function(){c+15<n.length?i(c+15):i(n.length)},children:"Load more posts"})}):""]})};ne.defaultProps={posts:[]};var te,ae=t(299),re=b.a.div(te||(te=Object(m.a)(["\n    padding: 1em;\n    background-color: var(--secondary-bg-color);\n    border-radius: .5em;\n    width: 100%;\n    .stats-container {\n        .bold {\n            font-weight: 600;\n        }\n        .less, .more {\n            padding: .25em;\n            border-radius: .25em;\n            margin-left: .25em;\n        }\n        .less {\n            color: var(--less-color);\n            background-color: var(--less-bg-color);\n        }\n        .more {\n            color: var(--more-color);\n            background-color: var(--more-bg-color);\n        }\n        .ant-table-thead > tr > th {\n            font-weight: 600;\n        }\n    }\n"]))),oe=[{title:"Date",dataIndex:"date",key:"date"},{title:"Follower Count",dataIndex:"followers_count",key:"followers_count",render:function(e){var n=0;return e.count!==e.prev_count&&0!==e.prev_count&&(n=e.count-e.prev_count),Object(v.jsxs)("span",{className:"bold",children:[e.count,0!==n?Object(v.jsx)("span",{className:n>0?"more":"less",children:"".concat(n>0?"+":"").concat(n)}):""]})}},{title:"Following Count",dataIndex:"following_count",key:"following_count",render:function(e){var n=0;return e.count!==e.prev_count&&0!==e.prev_count&&(n=e.count-e.prev_count),Object(v.jsxs)("span",{className:"bold",children:[e.count,0!==n?Object(v.jsx)("span",{className:n>0?"more":"less",children:"".concat(n>0?"+":"").concat(n)}):""]})}},{title:"Media Count",dataIndex:"media_count",key:"media_count",render:function(e){var n=0;return e.count!==e.prev_count&&0!==e.prev_count&&(n=e.count-e.prev_count),Object(v.jsxs)("span",{className:"bold",children:[e.count,0!==n?Object(v.jsx)("span",{className:n>0?"more":"less",children:"".concat(n>0?"+":"").concat(n)}):""]})}},{title:"Engagement Rate",dataIndex:"engagement_rate",key:"engagement_rate",render:function(e){var n=0;return e.prev_count&&x.round(e.count)!==x.round(e.prev_count)&&0!==e.prev_count&&(n=x.round(e.count)-x.round(e.prev_count)),Object(v.jsxs)("span",{className:"bold",children:["".concat(x.round(e.count),"%"),0!==n?Object(v.jsx)("span",{className:n>0?"more":"less",children:"".concat(n>0?"+":"").concat(x.round(n))}):""]})}}],ce=function(e){var n=e.stats,t=Object(g.a)(n.map((function(e,n){return{key:n,date:x.formatDate(e.date).split(/(\d)*:/)[0],followers_count:e.followers_count,following_count:e.follows_count,media_count:e.media_count,engagement_rate:e.engagement_rate}}))).reverse();return Object(v.jsxs)(re,{children:[Object(v.jsx)("h3",{children:"Historic stats"}),Object(v.jsx)("div",{className:"stats-container",children:Object(v.jsx)(ae.a,{dataSource:t,columns:oe})})]})};ce.defaultProps={stats:[]};b.a.div(ie||(ie=Object(m.a)(["\n\n"])));var ie,se,le=t(72),de=b.a.div(se||(se=Object(m.a)(["\n    .g2-html-annotation {\n        overflow: auto !important;\n        height: 1.5em;\n    }\n"]))),me=["#16BBE5","#1CA7C2","#5C90A8","#55BD9A","#FCAD73","#F6D48D","#285981","#CF5E91","#C65880","#A26FA4"];var be=function(e){var n=e.data,t=e.id,a=function(){var e=Object(o.useState)([0,0]),n=Object(d.a)(e,2),t=n[0],a=n[1];return Object(o.useLayoutEffect)((function(){function e(){a([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}(),r=Object(d.a)(a,2),c=r[0],i=(r[1],{labels:Object(g.a)(n.map((function(e){return e.type}))),datasets:[{label:"My First Dataset",data:Object(g.a)(n.map((function(e){return e.value}))),backgroundColor:[].concat(me),hoverOffset:4}]}),s={legend:{position:c>1140?"right":"bottom"},cutoutPercentage:70};return Object(v.jsx)(de,{children:Object(v.jsx)(le.Doughnut,{data:Object(l.a)({},i),options:s,width:50,height:50})},t)};be.defaultProps={data:[],id:0};var ue,pe=be,je=b.a.div(ue||(ue=Object(m.a)(["\n    width: 100%;\n    .hashtag-container {\n        width: 100%;\n        display: inline-block;\n        .hashtag-item {\n            width: max-content;\n            display: flex;\n            float: left;\n            padding: .25em .5em;\n            margin: .25em;\n            background-color: var(--hastag-bg-color);\n            border-radius: .5em;\n            border: 1px solid var(--soft-border-color);\n        }\n    }\n"]))),ge=function(e){var n=e.hashtag,t=e.count,a=e.key;return Object(v.jsx)(je,{children:Object(v.jsxs)(V.a,{gutter:[15,15],children:[Object(v.jsx)(W.a,{xs:{span:24},md:{span:12},lg:{span:12},style:{display:"flex"},children:Object(v.jsx)(q,{title:"Top 10 hashtags",children:Object(v.jsx)("div",{className:"hashtag-container",children:n.slice(0,10).map((function(e,n){return Object(v.jsx)("span",{className:"hashtag-item",children:"#".concat(e.caption," ").concat(x.round(e.count/t*100),"%")},n)}))})})}),Object(v.jsx)(W.a,{xs:{span:24},md:{span:12},lg:{span:12},children:Object(v.jsx)(q,{title:"Hashtags",children:Object(v.jsx)(pe,{data:n.slice(0,10).map((function(e){return{value:e.count,type:"#"+e.caption}})),id:a})})}),Object(v.jsx)(W.a,{xs:{span:24},md:{span:24},lg:{span:24},children:Object(v.jsx)(q,{title:"Hashtag used in the last 90 posts",children:Object(v.jsx)("div",{className:"hashtag-container",children:n.map((function(e,n){return Object(v.jsxs)("span",{className:"hashtag-item",children:["#",e.caption]},n)}))})})})]})})};ge.defaultProps={hashtag:[],hashtag_count:0,key:0};var he,xe=t(104),ve=t(307),fe=b.a.div(he||(he=Object(m.a)(["\n\n"]))),Oe=function(e){var n=e.title,t=e.data,a=e.id,r=Object(o.useState)({labels:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],datasets:[{label:n,fill:!1,lineTension:.1,backgroundColor:"#ff4d4f",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t}]}),c=Object(d.a)(r,2),i=c[0],s=c[1];return Object(o.useEffect)((function(){s(Object(l.a)(Object(l.a)({},i),{},{datasets:[Object(l.a)(Object(l.a)({},i.datasets[0]),{},{data:t})]}))}),[t]),Object(v.jsx)(fe,{children:Object(v.jsx)(le.Bar,{data:Object(l.a)({},i),options:Object(l.a)({},{legend:{display:!1},tooltips:{callbacks:{label:function(e){return e.yLabel}}}})})},a)};Oe.defaultProps={title:"",id:0};var ye,we=Oe,Ne=b.a.div(ye||(ye=Object(m.a)(["\n\n"]))),ke=function(e){var n=e.title,t=e.data;console.log(t);var a={labels:Object(g.a)(new Array(30).fill(0).map((function(e,n){return"".concat(n+1)}))),datasets:[{label:n,fill:!1,lineTension:.1,backgroundColor:"#ff4d4f",borderColor:"#ff4d4f",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#ff4d4f",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#ff4d4f",pointHoverBorderColor:"#ff4d4f",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t}]};return Object(v.jsx)(Ne,{children:Object(v.jsx)(le.Line,{options:Object(l.a)({},{legend:{display:!1},tooltips:{callbacks:{label:function(e){return e.yLabel}}}}),data:Object(l.a)({},a)})})};ke.defaultProps={title:""};var _e,Ce,Pe=ke,ze=b.a.div(_e||(_e=Object(m.a)(["\n    \n    .average-card {\n        padding: 0 1em 1em 1em;\n        h2 {\n            font-size: 3em;\n            font-weight: 600;\n            margin: .5em .5em .25em 0;\n        }\n        .title-container {\n            font-weight: 600;\n            display:  flex;\n            align-items: center;\n            font-size: 1.25em;\n            .icon-container {\n                color: var(--secondary-text-color);\n                margin-left: .5em;\n            }\n        }\n    }\n"]))),Ae=[{min:100,max:500,percent:11.5},{min:500,max:1e3,percent:8.4},{min:1e3,max:5e3,percent:5.7},{min:5e3,max:1e4,percent:4.2},{min:1e4,max:5e4,percent:3.8},{min:5e4,max:5e10,percent:1.9}],De=b.a.div(Ce||(Ce=Object(m.a)(["\n    width: 100%;\n    padding: 1em 1em 2em 1em;\n    .engagement-bar {\n        height: 1.5em;\n        width: 100%;\n        border-radius: .25em;\n        background-color: var(--error-color);\n        position: relative;\n        .status-bar-container {\n            position: absolute;\n            top: -.25em;\n            left: 0;\n            left: ",';\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            color: var(--error-color);\n            .status-bar {\n                width: 1em;\n                height: 2em;\n                background-color: var(--secondary-bg-color);\n                border: 1px solid var(--soft-border-color);\n                border-radius: .25em; \n                position: relative;\n                &::before {\n                    content: "";\n                    position: absolute;\n                    height: 1em;\n                    border-left: 2px dotted var(--less-color);\n                    z-index: 1;\n                    width: 2px;\n                    top: -1em;\n                    left: calc(1em / 2 - 2px);\n                }\n                &::after {\n                    content: "";\n                    position: absolute;\n                    height: 1em;\n                    border-left: 2px dotted var(--less-color);\n                    z-index: 1;\n                    width: 2px;\n                    bottom: -1em;\n                    left: calc(1em / 2 - 2px);\n                }\n            }\n            .engagement-value {\n                padding: .25em .5em;\n                margin-top: 1.25em;\n                border-radius: .25em;\n                background-color: var(--less-bg-color);\n                font-weight: 600;\n                position: absolute;\n                bottom: -3.5em;\n            }\n        }\n    }\n    .range-values {\n        display: flex;\n        justify-content: space-between;\n        width: 100%;\n        margin-top: .5em;\n        color: var(--error-color);\n        font-weight: 600;\n    }\n    &.positive {\n        .engagement-bar {\n            background-color: var(--successfully-color);\n            .status-bar-container {\n                .status-bar {\n                    &::before {\n                        border-left: 2px dotted var(--more-color);\n                    }\n                    &::after {\n                        border-left: 2px dotted var(--more-color);\n                    }\n                }\n                .engagement-value {\n                    color: var(--successfully-color);\n                    background-color: var(--more-bg-color);\n                }\n            }\n        }\n        .range-values {\n            color: var(--successfully-color);\n            .min {\n\n            }\n            .max {\n                position: absolute;\n                left: ',";\n            }\n        }\n    }\n"])),(function(e){return e.barPercent?e.barPercent:"auto"}),(function(e){return e.maxValuePosition?e.maxValuePosition:"0"})),Be=function(e){var n=e.averageLikes,t=e.averageComment,a=e.averageEngagement,r=e.postingHabits,o=e.engagement,c=e.followers,i=e.key,s=Ae.filter((function(e){return e.max>c&&c>e.min}))[0],l=o>s.percent,d=x.round(o/s.percent*100,0);return Object(v.jsx)(ze,{children:Object(v.jsxs)(V.a,{gutter:[15,15],children:[Object(v.jsx)(W.a,{xs:{span:24},md:{span:24},lg:{span:24},children:Object(v.jsx)(q,{title:"Engagement rate",children:Object(v.jsxs)(De,{barPercent:"calc(".concat(d>100?100:d,"% - .5em)"),maxValuePosition:"".concat(d>100?100/d*100:100,"%"),className:l?"positive":"",children:[Object(v.jsx)("div",{className:"engagement-bar ",children:Object(v.jsxs)("div",{className:"status-bar-container",children:[Object(v.jsx)("span",{className:"status-bar"}),Object(v.jsx)("span",{className:"engagement-value",children:x.round(o)})]})}),Object(v.jsxs)("div",{className:"range-values",children:[Object(v.jsx)("span",{className:"min",children:"0"}),Object(v.jsx)("span",{className:"max",children:s.percent})]})]})})}),Object(v.jsx)(W.a,{xs:{span:24},md:{span:12},lg:{span:12},children:Object(v.jsx)(q,{children:Object(v.jsxs)("div",{className:"average-card",children:[Object(v.jsx)("h2",{children:x.round(n)}),Object(v.jsxs)("div",{className:"title-container",children:["Average likes",Object(v.jsx)(xe.a,{placement:"top",title:"The average number of likes received on all types of 90 last posts",children:Object(v.jsx)("span",{className:"icon-container",children:Object(v.jsx)(ve.a,{})})})]})]})})}),Object(v.jsx)(W.a,{xs:{span:24},md:{span:12},lg:{span:12},children:Object(v.jsx)(q,{children:Object(v.jsxs)("div",{className:"average-card",children:[Object(v.jsx)("h2",{children:x.round(t)}),Object(v.jsxs)("div",{className:"title-container",children:["Average comments",Object(v.jsx)(xe.a,{placement:"top",title:"The average number of comments received on all types of 90 last posts",children:Object(v.jsx)("span",{className:"icon-container",children:Object(v.jsx)(ve.a,{})})})]})]})})}),Object(v.jsx)(W.a,{xs:{span:24},md:{span:12},lg:{span:12},children:Object(v.jsx)(q,{title:"Average engagement",children:Object(v.jsx)(Pe,{data:a})})}),Object(v.jsx)(W.a,{xs:{span:24},md:{span:12},lg:{span:12},children:Object(v.jsx)(q,{title:"Posting habits",children:Object(v.jsx)(we,{title:"Posting habits ",data:r,id:i})})})]})})};Be.defaultProps={key:0,averageEngagement:[]};t(64),b.a.div(Ee||(Ee=Object(m.a)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    min-height: 100vh;\n    padding: 2em 5em;\n    box-sizing: border-box;\n    .title {\n        font-size: 4.5em;\n        color: var(--main-color);\n    }\n"]))),b.a.div(Fe||(Fe=Object(m.a)(["\n    background-color: var(--secondary-bg-color);\n    display: flex;\n    flex-direction: column;\n    padding: 1em;\n    border-radius: .5em;\n    border: 1px solid var(--soft-border-color);\n"]))),t(90),b.a.div(Se||(Se=Object(m.a)(["\n    width: 40%;\n    text-align: center;\n"]))),b.a.div(He||(He=Object(m.a)(["\n    width: 40%;\n    text-align: center;\n    transition: all .5s;\n    @media only screen and (max-width:800px){\n        width: 80%;\n    }\n    @media only screen and (max-width:500px){\n        width: 100%;\n    }\n"])));var Ee,Fe,Se,He,Me,Ie=Object(o.createContext)([]);b.a.div(Me||(Me=Object(m.a)(["\n    padding: 2em 4em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    @media only screen and (max-width:800px){\n      padding: 1em;\n    }\n    @media only screen and (max-width:500px){\n      padding: 1em;\n    }\n"])));var Le=function(){var e=Object(o.useState)({accounts:[],userActive:null,indexActive:0}),n=Object(d.a)(e,2),t=n[0],a=(n[1],Object(o.useState)("")),r=Object(d.a)(a,2),c=(r[0],r[1]);return Object(o.useEffect)((function(){c(window.location.pathname)}),[window.location.pathname]),Object(v.jsx)(Ie.Provider,{value:t,children:Object(v.jsx)("div",{className:"App",children:"test"})})},Te=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,308)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),o(e),c(e)}))};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(Le,{})}),document.getElementById("root")),Te()}},[[297,1,2]]]);
//# sourceMappingURL=main.50ba94da.chunk.js.map