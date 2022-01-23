goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__27640 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__27641 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__27641);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__27645 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__27646 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__27646);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__27645);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__27640);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__27659 = arguments.length;
switch (G__27659) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__27671 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27671,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27671,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__27686_27703 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__27687_27704 = null;
var count__27688_27705 = (0);
var i__27689_27706 = (0);
while(true){
if((i__27689_27706 < count__27688_27705)){
var vec__27696_27707 = chunk__27687_27704.cljs$core$IIndexed$_nth$arity$2(null,i__27689_27706);
var container_27708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27696_27707,(0),null);
var comp_27709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27696_27707,(1),null);
reagent.dom.re_render_component(comp_27709,container_27708);


var G__27710 = seq__27686_27703;
var G__27711 = chunk__27687_27704;
var G__27712 = count__27688_27705;
var G__27713 = (i__27689_27706 + (1));
seq__27686_27703 = G__27710;
chunk__27687_27704 = G__27711;
count__27688_27705 = G__27712;
i__27689_27706 = G__27713;
continue;
} else {
var temp__5753__auto___27714 = cljs.core.seq(seq__27686_27703);
if(temp__5753__auto___27714){
var seq__27686_27715__$1 = temp__5753__auto___27714;
if(cljs.core.chunked_seq_QMARK_(seq__27686_27715__$1)){
var c__4679__auto___27716 = cljs.core.chunk_first(seq__27686_27715__$1);
var G__27717 = cljs.core.chunk_rest(seq__27686_27715__$1);
var G__27718 = c__4679__auto___27716;
var G__27719 = cljs.core.count(c__4679__auto___27716);
var G__27720 = (0);
seq__27686_27703 = G__27717;
chunk__27687_27704 = G__27718;
count__27688_27705 = G__27719;
i__27689_27706 = G__27720;
continue;
} else {
var vec__27699_27721 = cljs.core.first(seq__27686_27715__$1);
var container_27722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27699_27721,(0),null);
var comp_27723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27699_27721,(1),null);
reagent.dom.re_render_component(comp_27723,container_27722);


var G__27724 = cljs.core.next(seq__27686_27715__$1);
var G__27725 = null;
var G__27726 = (0);
var G__27727 = (0);
seq__27686_27703 = G__27724;
chunk__27687_27704 = G__27725;
count__27688_27705 = G__27726;
i__27689_27706 = G__27727;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
