goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35524,p__35525){
var map__35527 = p__35524;
var map__35527__$1 = cljs.core.__destructure_map(map__35527);
var svc = map__35527__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35527__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35527__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35527__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35528 = p__35525;
var map__35528__$1 = cljs.core.__destructure_map(map__35528);
var msg = map__35528__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35528__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35528__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35528__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35528__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35539,p__35540){
var map__35541 = p__35539;
var map__35541__$1 = cljs.core.__destructure_map(map__35541);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35541__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35542 = p__35540;
var map__35542__$1 = cljs.core.__destructure_map(map__35542);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35542__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35543,p__35544){
var map__35545 = p__35543;
var map__35545__$1 = cljs.core.__destructure_map(map__35545);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35545__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35545__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35546 = p__35544;
var map__35546__$1 = cljs.core.__destructure_map(map__35546);
var msg = map__35546__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35546__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35562,tid){
var map__35563 = p__35562;
var map__35563__$1 = cljs.core.__destructure_map(map__35563);
var svc = map__35563__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35563__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35571 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35572 = null;
var count__35573 = (0);
var i__35574 = (0);
while(true){
if((i__35574 < count__35573)){
var vec__35592 = chunk__35572.cljs$core$IIndexed$_nth$arity$2(null,i__35574);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35592,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35592,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35603 = seq__35571;
var G__35604 = chunk__35572;
var G__35605 = count__35573;
var G__35606 = (i__35574 + (1));
seq__35571 = G__35603;
chunk__35572 = G__35604;
count__35573 = G__35605;
i__35574 = G__35606;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35571);
if(temp__5753__auto__){
var seq__35571__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35571__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35571__$1);
var G__35607 = cljs.core.chunk_rest(seq__35571__$1);
var G__35608 = c__4679__auto__;
var G__35609 = cljs.core.count(c__4679__auto__);
var G__35610 = (0);
seq__35571 = G__35607;
chunk__35572 = G__35608;
count__35573 = G__35609;
i__35574 = G__35610;
continue;
} else {
var vec__35595 = cljs.core.first(seq__35571__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35611 = cljs.core.next(seq__35571__$1);
var G__35612 = null;
var G__35613 = (0);
var G__35614 = (0);
seq__35571 = G__35611;
chunk__35572 = G__35612;
count__35573 = G__35613;
i__35574 = G__35614;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35566_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35566_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35567_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35567_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35568_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35568_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35569_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35569_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35600){
var map__35601 = p__35600;
var map__35601__$1 = cljs.core.__destructure_map(map__35601);
var svc = map__35601__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35601__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35601__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
