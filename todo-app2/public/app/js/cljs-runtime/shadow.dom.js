goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33867 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33867(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33868 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33868(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32587 = coll;
var G__32588 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32587,G__32588) : shadow.dom.lazy_native_coll_seq.call(null,G__32587,G__32588));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32677 = arguments.length;
switch (G__32677) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32697 = arguments.length;
switch (G__32697) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32729 = arguments.length;
switch (G__32729) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32752 = arguments.length;
switch (G__32752) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32785 = arguments.length;
switch (G__32785) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32824 = arguments.length;
switch (G__32824) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32850){if((e32850 instanceof Object)){
var e = e32850;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32850;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32874 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32875 = null;
var count__32876 = (0);
var i__32877 = (0);
while(true){
if((i__32877 < count__32876)){
var el = chunk__32875.cljs$core$IIndexed$_nth$arity$2(null,i__32877);
var handler_33893__$1 = ((function (seq__32874,chunk__32875,count__32876,i__32877,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32874,chunk__32875,count__32876,i__32877,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33893__$1);


var G__33894 = seq__32874;
var G__33895 = chunk__32875;
var G__33896 = count__32876;
var G__33897 = (i__32877 + (1));
seq__32874 = G__33894;
chunk__32875 = G__33895;
count__32876 = G__33896;
i__32877 = G__33897;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32874);
if(temp__5753__auto__){
var seq__32874__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32874__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32874__$1);
var G__33898 = cljs.core.chunk_rest(seq__32874__$1);
var G__33899 = c__4679__auto__;
var G__33900 = cljs.core.count(c__4679__auto__);
var G__33901 = (0);
seq__32874 = G__33898;
chunk__32875 = G__33899;
count__32876 = G__33900;
i__32877 = G__33901;
continue;
} else {
var el = cljs.core.first(seq__32874__$1);
var handler_33908__$1 = ((function (seq__32874,chunk__32875,count__32876,i__32877,el,seq__32874__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32874,chunk__32875,count__32876,i__32877,el,seq__32874__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33908__$1);


var G__33909 = cljs.core.next(seq__32874__$1);
var G__33910 = null;
var G__33911 = (0);
var G__33912 = (0);
seq__32874 = G__33909;
chunk__32875 = G__33910;
count__32876 = G__33911;
i__32877 = G__33912;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32896 = arguments.length;
switch (G__32896) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32919 = cljs.core.seq(events);
var chunk__32920 = null;
var count__32921 = (0);
var i__32922 = (0);
while(true){
if((i__32922 < count__32921)){
var vec__32933 = chunk__32920.cljs$core$IIndexed$_nth$arity$2(null,i__32922);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32933,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32933,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33917 = seq__32919;
var G__33918 = chunk__32920;
var G__33919 = count__32921;
var G__33920 = (i__32922 + (1));
seq__32919 = G__33917;
chunk__32920 = G__33918;
count__32921 = G__33919;
i__32922 = G__33920;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32919);
if(temp__5753__auto__){
var seq__32919__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32919__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32919__$1);
var G__33926 = cljs.core.chunk_rest(seq__32919__$1);
var G__33927 = c__4679__auto__;
var G__33928 = cljs.core.count(c__4679__auto__);
var G__33929 = (0);
seq__32919 = G__33926;
chunk__32920 = G__33927;
count__32921 = G__33928;
i__32922 = G__33929;
continue;
} else {
var vec__32939 = cljs.core.first(seq__32919__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32939,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32939,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33936 = cljs.core.next(seq__32919__$1);
var G__33937 = null;
var G__33938 = (0);
var G__33939 = (0);
seq__32919 = G__33936;
chunk__32920 = G__33937;
count__32921 = G__33938;
i__32922 = G__33939;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32943 = cljs.core.seq(styles);
var chunk__32944 = null;
var count__32945 = (0);
var i__32946 = (0);
while(true){
if((i__32946 < count__32945)){
var vec__32974 = chunk__32944.cljs$core$IIndexed$_nth$arity$2(null,i__32946);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32974,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32974,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33946 = seq__32943;
var G__33947 = chunk__32944;
var G__33948 = count__32945;
var G__33949 = (i__32946 + (1));
seq__32943 = G__33946;
chunk__32944 = G__33947;
count__32945 = G__33948;
i__32946 = G__33949;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32943);
if(temp__5753__auto__){
var seq__32943__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32943__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32943__$1);
var G__33950 = cljs.core.chunk_rest(seq__32943__$1);
var G__33951 = c__4679__auto__;
var G__33952 = cljs.core.count(c__4679__auto__);
var G__33953 = (0);
seq__32943 = G__33950;
chunk__32944 = G__33951;
count__32945 = G__33952;
i__32946 = G__33953;
continue;
} else {
var vec__32980 = cljs.core.first(seq__32943__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32980,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32980,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33954 = cljs.core.next(seq__32943__$1);
var G__33955 = null;
var G__33956 = (0);
var G__33957 = (0);
seq__32943 = G__33954;
chunk__32944 = G__33955;
count__32945 = G__33956;
i__32946 = G__33957;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32991_33958 = key;
var G__32991_33959__$1 = (((G__32991_33958 instanceof cljs.core.Keyword))?G__32991_33958.fqn:null);
switch (G__32991_33959__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33963 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_33963,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_33963,"aria-");
}
})())){
el.setAttribute(ks_33963,value);
} else {
(el[ks_33963] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33043){
var map__33052 = p__33043;
var map__33052__$1 = cljs.core.__destructure_map(map__33052);
var props = map__33052__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33052__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33053 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33053,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33053,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33053,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33056 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33056,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33056;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33058 = arguments.length;
switch (G__33058) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33179){
var vec__33180 = p__33179;
var seq__33181 = cljs.core.seq(vec__33180);
var first__33182 = cljs.core.first(seq__33181);
var seq__33181__$1 = cljs.core.next(seq__33181);
var nn = first__33182;
var first__33182__$1 = cljs.core.first(seq__33181__$1);
var seq__33181__$2 = cljs.core.next(seq__33181__$1);
var np = first__33182__$1;
var nc = seq__33181__$2;
var node = vec__33180;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33189 = nn;
var G__33190 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33189,G__33190) : create_fn.call(null,G__33189,G__33190));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33194 = nn;
var G__33195 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33194,G__33195) : create_fn.call(null,G__33194,G__33195));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33203 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33203,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33203,(1),null);
var seq__33210_33969 = cljs.core.seq(node_children);
var chunk__33211_33970 = null;
var count__33212_33971 = (0);
var i__33213_33972 = (0);
while(true){
if((i__33213_33972 < count__33212_33971)){
var child_struct_33973 = chunk__33211_33970.cljs$core$IIndexed$_nth$arity$2(null,i__33213_33972);
var children_33974 = shadow.dom.dom_node(child_struct_33973);
if(cljs.core.seq_QMARK_(children_33974)){
var seq__33303_33975 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33974));
var chunk__33305_33976 = null;
var count__33306_33977 = (0);
var i__33307_33978 = (0);
while(true){
if((i__33307_33978 < count__33306_33977)){
var child_33979 = chunk__33305_33976.cljs$core$IIndexed$_nth$arity$2(null,i__33307_33978);
if(cljs.core.truth_(child_33979)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33979);


var G__33980 = seq__33303_33975;
var G__33981 = chunk__33305_33976;
var G__33982 = count__33306_33977;
var G__33983 = (i__33307_33978 + (1));
seq__33303_33975 = G__33980;
chunk__33305_33976 = G__33981;
count__33306_33977 = G__33982;
i__33307_33978 = G__33983;
continue;
} else {
var G__33984 = seq__33303_33975;
var G__33985 = chunk__33305_33976;
var G__33986 = count__33306_33977;
var G__33987 = (i__33307_33978 + (1));
seq__33303_33975 = G__33984;
chunk__33305_33976 = G__33985;
count__33306_33977 = G__33986;
i__33307_33978 = G__33987;
continue;
}
} else {
var temp__5753__auto___33988 = cljs.core.seq(seq__33303_33975);
if(temp__5753__auto___33988){
var seq__33303_33989__$1 = temp__5753__auto___33988;
if(cljs.core.chunked_seq_QMARK_(seq__33303_33989__$1)){
var c__4679__auto___33990 = cljs.core.chunk_first(seq__33303_33989__$1);
var G__33991 = cljs.core.chunk_rest(seq__33303_33989__$1);
var G__33992 = c__4679__auto___33990;
var G__33993 = cljs.core.count(c__4679__auto___33990);
var G__33994 = (0);
seq__33303_33975 = G__33991;
chunk__33305_33976 = G__33992;
count__33306_33977 = G__33993;
i__33307_33978 = G__33994;
continue;
} else {
var child_33995 = cljs.core.first(seq__33303_33989__$1);
if(cljs.core.truth_(child_33995)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33995);


var G__33996 = cljs.core.next(seq__33303_33989__$1);
var G__33997 = null;
var G__33998 = (0);
var G__33999 = (0);
seq__33303_33975 = G__33996;
chunk__33305_33976 = G__33997;
count__33306_33977 = G__33998;
i__33307_33978 = G__33999;
continue;
} else {
var G__34000 = cljs.core.next(seq__33303_33989__$1);
var G__34001 = null;
var G__34002 = (0);
var G__34003 = (0);
seq__33303_33975 = G__34000;
chunk__33305_33976 = G__34001;
count__33306_33977 = G__34002;
i__33307_33978 = G__34003;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33974);
}


var G__34004 = seq__33210_33969;
var G__34005 = chunk__33211_33970;
var G__34006 = count__33212_33971;
var G__34007 = (i__33213_33972 + (1));
seq__33210_33969 = G__34004;
chunk__33211_33970 = G__34005;
count__33212_33971 = G__34006;
i__33213_33972 = G__34007;
continue;
} else {
var temp__5753__auto___34008 = cljs.core.seq(seq__33210_33969);
if(temp__5753__auto___34008){
var seq__33210_34009__$1 = temp__5753__auto___34008;
if(cljs.core.chunked_seq_QMARK_(seq__33210_34009__$1)){
var c__4679__auto___34010 = cljs.core.chunk_first(seq__33210_34009__$1);
var G__34011 = cljs.core.chunk_rest(seq__33210_34009__$1);
var G__34012 = c__4679__auto___34010;
var G__34013 = cljs.core.count(c__4679__auto___34010);
var G__34014 = (0);
seq__33210_33969 = G__34011;
chunk__33211_33970 = G__34012;
count__33212_33971 = G__34013;
i__33213_33972 = G__34014;
continue;
} else {
var child_struct_34015 = cljs.core.first(seq__33210_34009__$1);
var children_34016 = shadow.dom.dom_node(child_struct_34015);
if(cljs.core.seq_QMARK_(children_34016)){
var seq__33343_34017 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34016));
var chunk__33345_34018 = null;
var count__33346_34019 = (0);
var i__33347_34020 = (0);
while(true){
if((i__33347_34020 < count__33346_34019)){
var child_34021 = chunk__33345_34018.cljs$core$IIndexed$_nth$arity$2(null,i__33347_34020);
if(cljs.core.truth_(child_34021)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34021);


var G__34023 = seq__33343_34017;
var G__34024 = chunk__33345_34018;
var G__34025 = count__33346_34019;
var G__34026 = (i__33347_34020 + (1));
seq__33343_34017 = G__34023;
chunk__33345_34018 = G__34024;
count__33346_34019 = G__34025;
i__33347_34020 = G__34026;
continue;
} else {
var G__34027 = seq__33343_34017;
var G__34028 = chunk__33345_34018;
var G__34029 = count__33346_34019;
var G__34030 = (i__33347_34020 + (1));
seq__33343_34017 = G__34027;
chunk__33345_34018 = G__34028;
count__33346_34019 = G__34029;
i__33347_34020 = G__34030;
continue;
}
} else {
var temp__5753__auto___34031__$1 = cljs.core.seq(seq__33343_34017);
if(temp__5753__auto___34031__$1){
var seq__33343_34033__$1 = temp__5753__auto___34031__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33343_34033__$1)){
var c__4679__auto___34034 = cljs.core.chunk_first(seq__33343_34033__$1);
var G__34035 = cljs.core.chunk_rest(seq__33343_34033__$1);
var G__34036 = c__4679__auto___34034;
var G__34037 = cljs.core.count(c__4679__auto___34034);
var G__34038 = (0);
seq__33343_34017 = G__34035;
chunk__33345_34018 = G__34036;
count__33346_34019 = G__34037;
i__33347_34020 = G__34038;
continue;
} else {
var child_34039 = cljs.core.first(seq__33343_34033__$1);
if(cljs.core.truth_(child_34039)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34039);


var G__34040 = cljs.core.next(seq__33343_34033__$1);
var G__34041 = null;
var G__34042 = (0);
var G__34043 = (0);
seq__33343_34017 = G__34040;
chunk__33345_34018 = G__34041;
count__33346_34019 = G__34042;
i__33347_34020 = G__34043;
continue;
} else {
var G__34044 = cljs.core.next(seq__33343_34033__$1);
var G__34045 = null;
var G__34046 = (0);
var G__34047 = (0);
seq__33343_34017 = G__34044;
chunk__33345_34018 = G__34045;
count__33346_34019 = G__34046;
i__33347_34020 = G__34047;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34016);
}


var G__34048 = cljs.core.next(seq__33210_34009__$1);
var G__34049 = null;
var G__34050 = (0);
var G__34051 = (0);
seq__33210_33969 = G__34048;
chunk__33211_33970 = G__34049;
count__33212_33971 = G__34050;
i__33213_33972 = G__34051;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33400 = cljs.core.seq(node);
var chunk__33401 = null;
var count__33402 = (0);
var i__33403 = (0);
while(true){
if((i__33403 < count__33402)){
var n = chunk__33401.cljs$core$IIndexed$_nth$arity$2(null,i__33403);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34052 = seq__33400;
var G__34053 = chunk__33401;
var G__34054 = count__33402;
var G__34055 = (i__33403 + (1));
seq__33400 = G__34052;
chunk__33401 = G__34053;
count__33402 = G__34054;
i__33403 = G__34055;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33400);
if(temp__5753__auto__){
var seq__33400__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33400__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33400__$1);
var G__34056 = cljs.core.chunk_rest(seq__33400__$1);
var G__34057 = c__4679__auto__;
var G__34058 = cljs.core.count(c__4679__auto__);
var G__34059 = (0);
seq__33400 = G__34056;
chunk__33401 = G__34057;
count__33402 = G__34058;
i__33403 = G__34059;
continue;
} else {
var n = cljs.core.first(seq__33400__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34060 = cljs.core.next(seq__33400__$1);
var G__34061 = null;
var G__34062 = (0);
var G__34063 = (0);
seq__33400 = G__34060;
chunk__33401 = G__34061;
count__33402 = G__34062;
i__33403 = G__34063;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33429 = arguments.length;
switch (G__33429) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33435 = arguments.length;
switch (G__33435) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33446 = arguments.length;
switch (G__33446) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34068 = arguments.length;
var i__4865__auto___34069 = (0);
while(true){
if((i__4865__auto___34069 < len__4864__auto___34068)){
args__4870__auto__.push((arguments[i__4865__auto___34069]));

var G__34070 = (i__4865__auto___34069 + (1));
i__4865__auto___34069 = G__34070;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33472_34071 = cljs.core.seq(nodes);
var chunk__33473_34072 = null;
var count__33474_34073 = (0);
var i__33475_34074 = (0);
while(true){
if((i__33475_34074 < count__33474_34073)){
var node_34075 = chunk__33473_34072.cljs$core$IIndexed$_nth$arity$2(null,i__33475_34074);
fragment.appendChild(shadow.dom._to_dom(node_34075));


var G__34077 = seq__33472_34071;
var G__34078 = chunk__33473_34072;
var G__34079 = count__33474_34073;
var G__34080 = (i__33475_34074 + (1));
seq__33472_34071 = G__34077;
chunk__33473_34072 = G__34078;
count__33474_34073 = G__34079;
i__33475_34074 = G__34080;
continue;
} else {
var temp__5753__auto___34081 = cljs.core.seq(seq__33472_34071);
if(temp__5753__auto___34081){
var seq__33472_34082__$1 = temp__5753__auto___34081;
if(cljs.core.chunked_seq_QMARK_(seq__33472_34082__$1)){
var c__4679__auto___34083 = cljs.core.chunk_first(seq__33472_34082__$1);
var G__34084 = cljs.core.chunk_rest(seq__33472_34082__$1);
var G__34085 = c__4679__auto___34083;
var G__34086 = cljs.core.count(c__4679__auto___34083);
var G__34087 = (0);
seq__33472_34071 = G__34084;
chunk__33473_34072 = G__34085;
count__33474_34073 = G__34086;
i__33475_34074 = G__34087;
continue;
} else {
var node_34088 = cljs.core.first(seq__33472_34082__$1);
fragment.appendChild(shadow.dom._to_dom(node_34088));


var G__34089 = cljs.core.next(seq__33472_34082__$1);
var G__34090 = null;
var G__34091 = (0);
var G__34092 = (0);
seq__33472_34071 = G__34089;
chunk__33473_34072 = G__34090;
count__33474_34073 = G__34091;
i__33475_34074 = G__34092;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33467){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33467));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33490_34094 = cljs.core.seq(scripts);
var chunk__33491_34095 = null;
var count__33492_34096 = (0);
var i__33493_34097 = (0);
while(true){
if((i__33493_34097 < count__33492_34096)){
var vec__33508_34098 = chunk__33491_34095.cljs$core$IIndexed$_nth$arity$2(null,i__33493_34097);
var script_tag_34099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33508_34098,(0),null);
var script_body_34100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33508_34098,(1),null);
eval(script_body_34100);


var G__34101 = seq__33490_34094;
var G__34102 = chunk__33491_34095;
var G__34103 = count__33492_34096;
var G__34104 = (i__33493_34097 + (1));
seq__33490_34094 = G__34101;
chunk__33491_34095 = G__34102;
count__33492_34096 = G__34103;
i__33493_34097 = G__34104;
continue;
} else {
var temp__5753__auto___34105 = cljs.core.seq(seq__33490_34094);
if(temp__5753__auto___34105){
var seq__33490_34106__$1 = temp__5753__auto___34105;
if(cljs.core.chunked_seq_QMARK_(seq__33490_34106__$1)){
var c__4679__auto___34107 = cljs.core.chunk_first(seq__33490_34106__$1);
var G__34108 = cljs.core.chunk_rest(seq__33490_34106__$1);
var G__34109 = c__4679__auto___34107;
var G__34110 = cljs.core.count(c__4679__auto___34107);
var G__34111 = (0);
seq__33490_34094 = G__34108;
chunk__33491_34095 = G__34109;
count__33492_34096 = G__34110;
i__33493_34097 = G__34111;
continue;
} else {
var vec__33515_34112 = cljs.core.first(seq__33490_34106__$1);
var script_tag_34113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33515_34112,(0),null);
var script_body_34114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33515_34112,(1),null);
eval(script_body_34114);


var G__34115 = cljs.core.next(seq__33490_34106__$1);
var G__34116 = null;
var G__34117 = (0);
var G__34118 = (0);
seq__33490_34094 = G__34115;
chunk__33491_34095 = G__34116;
count__33492_34096 = G__34117;
i__33493_34097 = G__34118;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33521){
var vec__33523 = p__33521;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33523,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33523,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33541 = arguments.length;
switch (G__33541) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33553 = cljs.core.seq(style_keys);
var chunk__33554 = null;
var count__33555 = (0);
var i__33556 = (0);
while(true){
if((i__33556 < count__33555)){
var it = chunk__33554.cljs$core$IIndexed$_nth$arity$2(null,i__33556);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34129 = seq__33553;
var G__34130 = chunk__33554;
var G__34131 = count__33555;
var G__34132 = (i__33556 + (1));
seq__33553 = G__34129;
chunk__33554 = G__34130;
count__33555 = G__34131;
i__33556 = G__34132;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33553);
if(temp__5753__auto__){
var seq__33553__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33553__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33553__$1);
var G__34133 = cljs.core.chunk_rest(seq__33553__$1);
var G__34134 = c__4679__auto__;
var G__34135 = cljs.core.count(c__4679__auto__);
var G__34136 = (0);
seq__33553 = G__34133;
chunk__33554 = G__34134;
count__33555 = G__34135;
i__33556 = G__34136;
continue;
} else {
var it = cljs.core.first(seq__33553__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34137 = cljs.core.next(seq__33553__$1);
var G__34138 = null;
var G__34139 = (0);
var G__34140 = (0);
seq__33553 = G__34137;
chunk__33554 = G__34138;
count__33555 = G__34139;
i__33556 = G__34140;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33558,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33562 = k33558;
var G__33562__$1 = (((G__33562 instanceof cljs.core.Keyword))?G__33562.fqn:null);
switch (G__33562__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33558,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33563){
var vec__33564 = p__33563;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33564,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33564,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33557){
var self__ = this;
var G__33557__$1 = this;
return (new cljs.core.RecordIter((0),G__33557__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33559,other33560){
var self__ = this;
var this33559__$1 = this;
return (((!((other33560 == null)))) && ((((this33559__$1.constructor === other33560.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33559__$1.x,other33560.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33559__$1.y,other33560.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33559__$1.__extmap,other33560.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33558){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33567 = k33558;
var G__33567__$1 = (((G__33567 instanceof cljs.core.Keyword))?G__33567.fqn:null);
switch (G__33567__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33558);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33557){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33594 = cljs.core.keyword_identical_QMARK_;
var expr__33595 = k__4511__auto__;
if(cljs.core.truth_((pred__33594.cljs$core$IFn$_invoke$arity$2 ? pred__33594.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33595) : pred__33594.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33595)))){
return (new shadow.dom.Coordinate(G__33557,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33594.cljs$core$IFn$_invoke$arity$2 ? pred__33594.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33595) : pred__33594.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33595)))){
return (new shadow.dom.Coordinate(self__.x,G__33557,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33557),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33557){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33557,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33561){
var extmap__4542__auto__ = (function (){var G__33604 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33561,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33561)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33604);
} else {
return G__33604;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33561),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33561),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33620,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33630 = k33620;
var G__33630__$1 = (((G__33630 instanceof cljs.core.Keyword))?G__33630.fqn:null);
switch (G__33630__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33620,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33631){
var vec__33677 = p__33631;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33677,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33677,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33619){
var self__ = this;
var G__33619__$1 = this;
return (new cljs.core.RecordIter((0),G__33619__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33622,other33623){
var self__ = this;
var this33622__$1 = this;
return (((!((other33623 == null)))) && ((((this33622__$1.constructor === other33623.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33622__$1.w,other33623.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33622__$1.h,other33623.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33622__$1.__extmap,other33623.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33620){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33683 = k33620;
var G__33683__$1 = (((G__33683 instanceof cljs.core.Keyword))?G__33683.fqn:null);
switch (G__33683__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33620);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33619){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33684 = cljs.core.keyword_identical_QMARK_;
var expr__33685 = k__4511__auto__;
if(cljs.core.truth_((pred__33684.cljs$core$IFn$_invoke$arity$2 ? pred__33684.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33685) : pred__33684.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33685)))){
return (new shadow.dom.Size(G__33619,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33684.cljs$core$IFn$_invoke$arity$2 ? pred__33684.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33685) : pred__33684.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33685)))){
return (new shadow.dom.Size(self__.w,G__33619,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33619),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33619){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33619,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33624){
var extmap__4542__auto__ = (function (){var G__33691 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33624,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33624)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33691);
} else {
return G__33691;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33624),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33624),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__34167 = (i + (1));
var G__34168 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34167;
ret = G__34168;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33699){
var vec__33700 = p__33699;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33700,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33700,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33705 = arguments.length;
switch (G__33705) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34172 = ps;
var G__34173 = (i + (1));
el__$1 = G__34172;
i = G__34173;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33754 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33754,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33754,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33754,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33761_34180 = cljs.core.seq(props);
var chunk__33762_34181 = null;
var count__33763_34182 = (0);
var i__33764_34183 = (0);
while(true){
if((i__33764_34183 < count__33763_34182)){
var vec__33782_34184 = chunk__33762_34181.cljs$core$IIndexed$_nth$arity$2(null,i__33764_34183);
var k_34185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33782_34184,(0),null);
var v_34186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33782_34184,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34185);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34185),v_34186);


var G__34187 = seq__33761_34180;
var G__34188 = chunk__33762_34181;
var G__34189 = count__33763_34182;
var G__34190 = (i__33764_34183 + (1));
seq__33761_34180 = G__34187;
chunk__33762_34181 = G__34188;
count__33763_34182 = G__34189;
i__33764_34183 = G__34190;
continue;
} else {
var temp__5753__auto___34191 = cljs.core.seq(seq__33761_34180);
if(temp__5753__auto___34191){
var seq__33761_34192__$1 = temp__5753__auto___34191;
if(cljs.core.chunked_seq_QMARK_(seq__33761_34192__$1)){
var c__4679__auto___34193 = cljs.core.chunk_first(seq__33761_34192__$1);
var G__34194 = cljs.core.chunk_rest(seq__33761_34192__$1);
var G__34195 = c__4679__auto___34193;
var G__34196 = cljs.core.count(c__4679__auto___34193);
var G__34197 = (0);
seq__33761_34180 = G__34194;
chunk__33762_34181 = G__34195;
count__33763_34182 = G__34196;
i__33764_34183 = G__34197;
continue;
} else {
var vec__33789_34198 = cljs.core.first(seq__33761_34192__$1);
var k_34199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33789_34198,(0),null);
var v_34200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33789_34198,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34199);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34199),v_34200);


var G__34201 = cljs.core.next(seq__33761_34192__$1);
var G__34202 = null;
var G__34203 = (0);
var G__34204 = (0);
seq__33761_34180 = G__34201;
chunk__33762_34181 = G__34202;
count__33763_34182 = G__34203;
i__33764_34183 = G__34204;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33801 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33801,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33801,(1),null);
var seq__33804_34205 = cljs.core.seq(node_children);
var chunk__33806_34206 = null;
var count__33807_34207 = (0);
var i__33808_34208 = (0);
while(true){
if((i__33808_34208 < count__33807_34207)){
var child_struct_34209 = chunk__33806_34206.cljs$core$IIndexed$_nth$arity$2(null,i__33808_34208);
if((!((child_struct_34209 == null)))){
if(typeof child_struct_34209 === 'string'){
var text_34210 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34210),child_struct_34209].join(''));
} else {
var children_34211 = shadow.dom.svg_node(child_struct_34209);
if(cljs.core.seq_QMARK_(children_34211)){
var seq__33830_34212 = cljs.core.seq(children_34211);
var chunk__33832_34213 = null;
var count__33833_34214 = (0);
var i__33834_34215 = (0);
while(true){
if((i__33834_34215 < count__33833_34214)){
var child_34216 = chunk__33832_34213.cljs$core$IIndexed$_nth$arity$2(null,i__33834_34215);
if(cljs.core.truth_(child_34216)){
node.appendChild(child_34216);


var G__34217 = seq__33830_34212;
var G__34218 = chunk__33832_34213;
var G__34219 = count__33833_34214;
var G__34220 = (i__33834_34215 + (1));
seq__33830_34212 = G__34217;
chunk__33832_34213 = G__34218;
count__33833_34214 = G__34219;
i__33834_34215 = G__34220;
continue;
} else {
var G__34221 = seq__33830_34212;
var G__34222 = chunk__33832_34213;
var G__34223 = count__33833_34214;
var G__34224 = (i__33834_34215 + (1));
seq__33830_34212 = G__34221;
chunk__33832_34213 = G__34222;
count__33833_34214 = G__34223;
i__33834_34215 = G__34224;
continue;
}
} else {
var temp__5753__auto___34228 = cljs.core.seq(seq__33830_34212);
if(temp__5753__auto___34228){
var seq__33830_34229__$1 = temp__5753__auto___34228;
if(cljs.core.chunked_seq_QMARK_(seq__33830_34229__$1)){
var c__4679__auto___34230 = cljs.core.chunk_first(seq__33830_34229__$1);
var G__34231 = cljs.core.chunk_rest(seq__33830_34229__$1);
var G__34232 = c__4679__auto___34230;
var G__34233 = cljs.core.count(c__4679__auto___34230);
var G__34234 = (0);
seq__33830_34212 = G__34231;
chunk__33832_34213 = G__34232;
count__33833_34214 = G__34233;
i__33834_34215 = G__34234;
continue;
} else {
var child_34235 = cljs.core.first(seq__33830_34229__$1);
if(cljs.core.truth_(child_34235)){
node.appendChild(child_34235);


var G__34236 = cljs.core.next(seq__33830_34229__$1);
var G__34237 = null;
var G__34238 = (0);
var G__34239 = (0);
seq__33830_34212 = G__34236;
chunk__33832_34213 = G__34237;
count__33833_34214 = G__34238;
i__33834_34215 = G__34239;
continue;
} else {
var G__34240 = cljs.core.next(seq__33830_34229__$1);
var G__34241 = null;
var G__34242 = (0);
var G__34243 = (0);
seq__33830_34212 = G__34240;
chunk__33832_34213 = G__34241;
count__33833_34214 = G__34242;
i__33834_34215 = G__34243;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34211);
}
}


var G__34244 = seq__33804_34205;
var G__34245 = chunk__33806_34206;
var G__34246 = count__33807_34207;
var G__34247 = (i__33808_34208 + (1));
seq__33804_34205 = G__34244;
chunk__33806_34206 = G__34245;
count__33807_34207 = G__34246;
i__33808_34208 = G__34247;
continue;
} else {
var G__34248 = seq__33804_34205;
var G__34249 = chunk__33806_34206;
var G__34250 = count__33807_34207;
var G__34251 = (i__33808_34208 + (1));
seq__33804_34205 = G__34248;
chunk__33806_34206 = G__34249;
count__33807_34207 = G__34250;
i__33808_34208 = G__34251;
continue;
}
} else {
var temp__5753__auto___34252 = cljs.core.seq(seq__33804_34205);
if(temp__5753__auto___34252){
var seq__33804_34253__$1 = temp__5753__auto___34252;
if(cljs.core.chunked_seq_QMARK_(seq__33804_34253__$1)){
var c__4679__auto___34254 = cljs.core.chunk_first(seq__33804_34253__$1);
var G__34255 = cljs.core.chunk_rest(seq__33804_34253__$1);
var G__34256 = c__4679__auto___34254;
var G__34257 = cljs.core.count(c__4679__auto___34254);
var G__34258 = (0);
seq__33804_34205 = G__34255;
chunk__33806_34206 = G__34256;
count__33807_34207 = G__34257;
i__33808_34208 = G__34258;
continue;
} else {
var child_struct_34259 = cljs.core.first(seq__33804_34253__$1);
if((!((child_struct_34259 == null)))){
if(typeof child_struct_34259 === 'string'){
var text_34260 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34260),child_struct_34259].join(''));
} else {
var children_34261 = shadow.dom.svg_node(child_struct_34259);
if(cljs.core.seq_QMARK_(children_34261)){
var seq__33838_34262 = cljs.core.seq(children_34261);
var chunk__33840_34263 = null;
var count__33841_34264 = (0);
var i__33842_34265 = (0);
while(true){
if((i__33842_34265 < count__33841_34264)){
var child_34266 = chunk__33840_34263.cljs$core$IIndexed$_nth$arity$2(null,i__33842_34265);
if(cljs.core.truth_(child_34266)){
node.appendChild(child_34266);


var G__34267 = seq__33838_34262;
var G__34268 = chunk__33840_34263;
var G__34269 = count__33841_34264;
var G__34270 = (i__33842_34265 + (1));
seq__33838_34262 = G__34267;
chunk__33840_34263 = G__34268;
count__33841_34264 = G__34269;
i__33842_34265 = G__34270;
continue;
} else {
var G__34271 = seq__33838_34262;
var G__34272 = chunk__33840_34263;
var G__34273 = count__33841_34264;
var G__34274 = (i__33842_34265 + (1));
seq__33838_34262 = G__34271;
chunk__33840_34263 = G__34272;
count__33841_34264 = G__34273;
i__33842_34265 = G__34274;
continue;
}
} else {
var temp__5753__auto___34275__$1 = cljs.core.seq(seq__33838_34262);
if(temp__5753__auto___34275__$1){
var seq__33838_34276__$1 = temp__5753__auto___34275__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33838_34276__$1)){
var c__4679__auto___34277 = cljs.core.chunk_first(seq__33838_34276__$1);
var G__34278 = cljs.core.chunk_rest(seq__33838_34276__$1);
var G__34279 = c__4679__auto___34277;
var G__34280 = cljs.core.count(c__4679__auto___34277);
var G__34281 = (0);
seq__33838_34262 = G__34278;
chunk__33840_34263 = G__34279;
count__33841_34264 = G__34280;
i__33842_34265 = G__34281;
continue;
} else {
var child_34282 = cljs.core.first(seq__33838_34276__$1);
if(cljs.core.truth_(child_34282)){
node.appendChild(child_34282);


var G__34283 = cljs.core.next(seq__33838_34276__$1);
var G__34284 = null;
var G__34285 = (0);
var G__34286 = (0);
seq__33838_34262 = G__34283;
chunk__33840_34263 = G__34284;
count__33841_34264 = G__34285;
i__33842_34265 = G__34286;
continue;
} else {
var G__34287 = cljs.core.next(seq__33838_34276__$1);
var G__34288 = null;
var G__34289 = (0);
var G__34290 = (0);
seq__33838_34262 = G__34287;
chunk__33840_34263 = G__34288;
count__33841_34264 = G__34289;
i__33842_34265 = G__34290;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34261);
}
}


var G__34291 = cljs.core.next(seq__33804_34253__$1);
var G__34292 = null;
var G__34293 = (0);
var G__34294 = (0);
seq__33804_34205 = G__34291;
chunk__33806_34206 = G__34292;
count__33807_34207 = G__34293;
i__33808_34208 = G__34294;
continue;
} else {
var G__34295 = cljs.core.next(seq__33804_34253__$1);
var G__34296 = null;
var G__34297 = (0);
var G__34298 = (0);
seq__33804_34205 = G__34295;
chunk__33806_34206 = G__34296;
count__33807_34207 = G__34297;
i__33808_34208 = G__34298;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34303 = arguments.length;
var i__4865__auto___34306 = (0);
while(true){
if((i__4865__auto___34306 < len__4864__auto___34303)){
args__4870__auto__.push((arguments[i__4865__auto___34306]));

var G__34307 = (i__4865__auto___34306 + (1));
i__4865__auto___34306 = G__34307;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33847){
var G__33848 = cljs.core.first(seq33847);
var seq33847__$1 = cljs.core.next(seq33847);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33848,seq33847__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33850 = arguments.length;
switch (G__33850) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__29405__auto___34309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_33855){
var state_val_33856 = (state_33855[(1)]);
if((state_val_33856 === (1))){
var state_33855__$1 = state_33855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33855__$1,(2),once_or_cleanup);
} else {
if((state_val_33856 === (2))){
var inst_33852 = (state_33855[(2)]);
var inst_33853 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33855__$1 = (function (){var statearr_33857 = state_33855;
(statearr_33857[(7)] = inst_33852);

return statearr_33857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33855__$1,inst_33853);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29193__auto__ = null;
var shadow$dom$state_machine__29193__auto____0 = (function (){
var statearr_33858 = [null,null,null,null,null,null,null,null];
(statearr_33858[(0)] = shadow$dom$state_machine__29193__auto__);

(statearr_33858[(1)] = (1));

return statearr_33858;
});
var shadow$dom$state_machine__29193__auto____1 = (function (state_33855){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_33855);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e33859){var ex__29196__auto__ = e33859;
var statearr_33860_34323 = state_33855;
(statearr_33860_34323[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_33855[(4)]))){
var statearr_33861_34324 = state_33855;
(statearr_33861_34324[(1)] = cljs.core.first((state_33855[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34325 = state_33855;
state_33855 = G__34325;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
shadow$dom$state_machine__29193__auto__ = function(state_33855){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29193__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29193__auto____1.call(this,state_33855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29193__auto____0;
shadow$dom$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29193__auto____1;
return shadow$dom$state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_33862 = f__29406__auto__();
(statearr_33862[(6)] = c__29405__auto___34309);

return statearr_33862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
