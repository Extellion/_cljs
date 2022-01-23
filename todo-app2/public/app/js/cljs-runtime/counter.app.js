goog.provide('counter.app');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["app reloaded"], 0));
counter.app.init = (function counter$app$init(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The app has started!"], 0));
});
if((typeof counter !== 'undefined') && (typeof counter.app !== 'undefined') && (typeof counter.app.current_count !== 'undefined')){
} else {
counter.app.current_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof counter !== 'undefined') && (typeof counter.app !== 'undefined') && (typeof counter.app.counters !== 'undefined')){
} else {
counter.app.counters = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
counter.app.vec_delete = (function counter$app$vec_delete(v,i){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(i + (1))));
});
counter.app.Counter = (function counter$app$Counter(i,counter__$1){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),counter__$1," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counter.app.counters,cljs.core.update,i,cljs.core.inc);
})], null),"+1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counter.app.counters,cljs.core.update,i,cljs.core.dec);
})], null),"-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(counter.app.counters,counter.app.vec_delete,i);
})], null),"X"], null)], null);
});
counter.app.app = (function counter$app$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"App counter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Counter number :",cljs.core.count(cljs.core.deref(counter.app.counters))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(counter.app.counters,cljs.core.conj,(0));
})], null),"Add a counter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function counter$app$app_$_iter__27877(s__27878){
return (new cljs.core.LazySeq(null,(function (){
var s__27878__$1 = s__27878;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27878__$1);
if(temp__5753__auto__){
var s__27878__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27878__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__27878__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__27880 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__27879 = (0);
while(true){
if((i__27879 < size__4651__auto__)){
var vec__27881 = cljs.core._nth(c__4650__auto__,i__27879);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27881,(0),null);
var counter__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27881,(1),null);
cljs.core.chunk_append(b__27880,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.Counter,i,counter__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null)));

var G__27887 = (i__27879 + (1));
i__27879 = G__27887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27880),counter$app$app_$_iter__27877(cljs.core.chunk_rest(s__27878__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27880),null);
}
} else {
var vec__27884 = cljs.core.first(s__27878__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27884,(0),null);
var counter__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27884,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.Counter,i,counter__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null)),counter$app$app_$_iter__27877(cljs.core.rest(s__27878__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.deref(counter.app.counters)));
})())], null)], null);
});
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.app], null),document.getElementById("app"));

//# sourceMappingURL=counter.app.js.map
