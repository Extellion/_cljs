goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29528 = arguments.length;
switch (G__29528) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29537 = (function (f,blockable,meta29538){
this.f = f;
this.blockable = blockable;
this.meta29538 = meta29538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29539,meta29538__$1){
var self__ = this;
var _29539__$1 = this;
return (new cljs.core.async.t_cljs$core$async29537(self__.f,self__.blockable,meta29538__$1));
}));

(cljs.core.async.t_cljs$core$async29537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29539){
var self__ = this;
var _29539__$1 = this;
return self__.meta29538;
}));

(cljs.core.async.t_cljs$core$async29537.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29537.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29538","meta29538",-1408828491,null)], null);
}));

(cljs.core.async.t_cljs$core$async29537.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29537");

(cljs.core.async.t_cljs$core$async29537.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29537");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29537.
 */
cljs.core.async.__GT_t_cljs$core$async29537 = (function cljs$core$async$__GT_t_cljs$core$async29537(f__$1,blockable__$1,meta29538){
return (new cljs.core.async.t_cljs$core$async29537(f__$1,blockable__$1,meta29538));
});

}

return (new cljs.core.async.t_cljs$core$async29537(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29608 = arguments.length;
switch (G__29608) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29611 = arguments.length;
switch (G__29611) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29624 = arguments.length;
switch (G__29624) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32552 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32552) : fn1.call(null,val_32552));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32552) : fn1.call(null,val_32552));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29632 = arguments.length;
switch (G__29632) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___32567 = n;
var x_32568 = (0);
while(true){
if((x_32568 < n__4741__auto___32567)){
(a[x_32568] = x_32568);

var G__32569 = (x_32568 + (1));
x_32568 = G__32569;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29648 = (function (flag,meta29649){
this.flag = flag;
this.meta29649 = meta29649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29650,meta29649__$1){
var self__ = this;
var _29650__$1 = this;
return (new cljs.core.async.t_cljs$core$async29648(self__.flag,meta29649__$1));
}));

(cljs.core.async.t_cljs$core$async29648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29650){
var self__ = this;
var _29650__$1 = this;
return self__.meta29649;
}));

(cljs.core.async.t_cljs$core$async29648.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29648.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29649","meta29649",565989446,null)], null);
}));

(cljs.core.async.t_cljs$core$async29648.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29648");

(cljs.core.async.t_cljs$core$async29648.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29648");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29648.
 */
cljs.core.async.__GT_t_cljs$core$async29648 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29648(flag__$1,meta29649){
return (new cljs.core.async.t_cljs$core$async29648(flag__$1,meta29649));
});

}

return (new cljs.core.async.t_cljs$core$async29648(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29664 = (function (flag,cb,meta29665){
this.flag = flag;
this.cb = cb;
this.meta29665 = meta29665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29666,meta29665__$1){
var self__ = this;
var _29666__$1 = this;
return (new cljs.core.async.t_cljs$core$async29664(self__.flag,self__.cb,meta29665__$1));
}));

(cljs.core.async.t_cljs$core$async29664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29666){
var self__ = this;
var _29666__$1 = this;
return self__.meta29665;
}));

(cljs.core.async.t_cljs$core$async29664.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29664.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29665","meta29665",364159191,null)], null);
}));

(cljs.core.async.t_cljs$core$async29664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29664");

(cljs.core.async.t_cljs$core$async29664.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async29664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29664.
 */
cljs.core.async.__GT_t_cljs$core$async29664 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29664(flag__$1,cb__$1,meta29665){
return (new cljs.core.async.t_cljs$core$async29664(flag__$1,cb__$1,meta29665));
});

}

return (new cljs.core.async.t_cljs$core$async29664(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29671_SHARP_){
var G__29681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29671_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29681) : fret.call(null,G__29681));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29672_SHARP_){
var G__29682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29672_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29682) : fret.call(null,G__29682));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32589 = (i + (1));
i = G__32589;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32594 = arguments.length;
var i__4865__auto___32595 = (0);
while(true){
if((i__4865__auto___32595 < len__4864__auto___32594)){
args__4870__auto__.push((arguments[i__4865__auto___32595]));

var G__32596 = (i__4865__auto___32595 + (1));
i__4865__auto___32595 = G__32596;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29690){
var map__29691 = p__29690;
var map__29691__$1 = cljs.core.__destructure_map(map__29691);
var opts = map__29691__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29685){
var G__29686 = cljs.core.first(seq29685);
var seq29685__$1 = cljs.core.next(seq29685);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29686,seq29685__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29700 = arguments.length;
switch (G__29700) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29405__auto___32601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_29729){
var state_val_29730 = (state_29729[(1)]);
if((state_val_29730 === (7))){
var inst_29724 = (state_29729[(2)]);
var state_29729__$1 = state_29729;
var statearr_29745_32603 = state_29729__$1;
(statearr_29745_32603[(2)] = inst_29724);

(statearr_29745_32603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (1))){
var state_29729__$1 = state_29729;
var statearr_29746_32604 = state_29729__$1;
(statearr_29746_32604[(2)] = null);

(statearr_29746_32604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (4))){
var inst_29705 = (state_29729[(7)]);
var inst_29705__$1 = (state_29729[(2)]);
var inst_29708 = (inst_29705__$1 == null);
var state_29729__$1 = (function (){var statearr_29748 = state_29729;
(statearr_29748[(7)] = inst_29705__$1);

return statearr_29748;
})();
if(cljs.core.truth_(inst_29708)){
var statearr_29749_32605 = state_29729__$1;
(statearr_29749_32605[(1)] = (5));

} else {
var statearr_29750_32606 = state_29729__$1;
(statearr_29750_32606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (13))){
var state_29729__$1 = state_29729;
var statearr_29755_32607 = state_29729__$1;
(statearr_29755_32607[(2)] = null);

(statearr_29755_32607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (6))){
var inst_29705 = (state_29729[(7)]);
var state_29729__$1 = state_29729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29729__$1,(11),to,inst_29705);
} else {
if((state_val_29730 === (3))){
var inst_29726 = (state_29729[(2)]);
var state_29729__$1 = state_29729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29729__$1,inst_29726);
} else {
if((state_val_29730 === (12))){
var state_29729__$1 = state_29729;
var statearr_29756_32608 = state_29729__$1;
(statearr_29756_32608[(2)] = null);

(statearr_29756_32608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (2))){
var state_29729__$1 = state_29729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29729__$1,(4),from);
} else {
if((state_val_29730 === (11))){
var inst_29717 = (state_29729[(2)]);
var state_29729__$1 = state_29729;
if(cljs.core.truth_(inst_29717)){
var statearr_29763_32613 = state_29729__$1;
(statearr_29763_32613[(1)] = (12));

} else {
var statearr_29764_32614 = state_29729__$1;
(statearr_29764_32614[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (9))){
var state_29729__$1 = state_29729;
var statearr_29765_32616 = state_29729__$1;
(statearr_29765_32616[(2)] = null);

(statearr_29765_32616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (5))){
var state_29729__$1 = state_29729;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29768_32620 = state_29729__$1;
(statearr_29768_32620[(1)] = (8));

} else {
var statearr_29771_32621 = state_29729__$1;
(statearr_29771_32621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (14))){
var inst_29722 = (state_29729[(2)]);
var state_29729__$1 = state_29729;
var statearr_29773_32622 = state_29729__$1;
(statearr_29773_32622[(2)] = inst_29722);

(statearr_29773_32622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (10))){
var inst_29714 = (state_29729[(2)]);
var state_29729__$1 = state_29729;
var statearr_29777_32624 = state_29729__$1;
(statearr_29777_32624[(2)] = inst_29714);

(statearr_29777_32624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29730 === (8))){
var inst_29711 = cljs.core.async.close_BANG_(to);
var state_29729__$1 = state_29729;
var statearr_29779_32628 = state_29729__$1;
(statearr_29779_32628[(2)] = inst_29711);

(statearr_29779_32628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29193__auto__ = null;
var cljs$core$async$state_machine__29193__auto____0 = (function (){
var statearr_29786 = [null,null,null,null,null,null,null,null];
(statearr_29786[(0)] = cljs$core$async$state_machine__29193__auto__);

(statearr_29786[(1)] = (1));

return statearr_29786;
});
var cljs$core$async$state_machine__29193__auto____1 = (function (state_29729){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_29729);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e29791){var ex__29196__auto__ = e29791;
var statearr_29793_32637 = state_29729;
(statearr_29793_32637[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_29729[(4)]))){
var statearr_29795_32638 = state_29729;
(statearr_29795_32638[(1)] = cljs.core.first((state_29729[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32643 = state_29729;
state_29729 = G__32643;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$state_machine__29193__auto__ = function(state_29729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29193__auto____1.call(this,state_29729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29193__auto____0;
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29193__auto____1;
return cljs$core$async$state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_29800 = f__29406__auto__();
(statearr_29800[(6)] = c__29405__auto___32601);

return statearr_29800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29836){
var vec__29837 = p__29836;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29837,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29837,(1),null);
var job = vec__29837;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29405__auto___32648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_29852){
var state_val_29853 = (state_29852[(1)]);
if((state_val_29853 === (1))){
var state_29852__$1 = state_29852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29852__$1,(2),res,v);
} else {
if((state_val_29853 === (2))){
var inst_29849 = (state_29852[(2)]);
var inst_29850 = cljs.core.async.close_BANG_(res);
var state_29852__$1 = (function (){var statearr_29859 = state_29852;
(statearr_29859[(7)] = inst_29849);

return statearr_29859;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29852__$1,inst_29850);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0 = (function (){
var statearr_29860 = [null,null,null,null,null,null,null,null];
(statearr_29860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__);

(statearr_29860[(1)] = (1));

return statearr_29860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1 = (function (state_29852){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_29852);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e29862){var ex__29196__auto__ = e29862;
var statearr_29863_32652 = state_29852;
(statearr_29863_32652[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_29852[(4)]))){
var statearr_29864_32654 = state_29852;
(statearr_29864_32654[(1)] = cljs.core.first((state_29852[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32655 = state_29852;
state_29852 = G__32655;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__ = function(state_29852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1.call(this,state_29852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_29865 = f__29406__auto__();
(statearr_29865[(6)] = c__29405__auto___32648);

return statearr_29865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29867){
var vec__29868 = p__29867;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29868,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29868,(1),null);
var job = vec__29868;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___32657 = n;
var __32659 = (0);
while(true){
if((__32659 < n__4741__auto___32657)){
var G__29873_32661 = type;
var G__29873_32662__$1 = (((G__29873_32661 instanceof cljs.core.Keyword))?G__29873_32661.fqn:null);
switch (G__29873_32662__$1) {
case "compute":
var c__29405__auto___32664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32659,c__29405__auto___32664,G__29873_32661,G__29873_32662__$1,n__4741__auto___32657,jobs,results,process,async){
return (function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = ((function (__32659,c__29405__auto___32664,G__29873_32661,G__29873_32662__$1,n__4741__auto___32657,jobs,results,process,async){
return (function (state_29886){
var state_val_29887 = (state_29886[(1)]);
if((state_val_29887 === (1))){
var state_29886__$1 = state_29886;
var statearr_29888_32666 = state_29886__$1;
(statearr_29888_32666[(2)] = null);

(statearr_29888_32666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (2))){
var state_29886__$1 = state_29886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29886__$1,(4),jobs);
} else {
if((state_val_29887 === (3))){
var inst_29884 = (state_29886[(2)]);
var state_29886__$1 = state_29886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29886__$1,inst_29884);
} else {
if((state_val_29887 === (4))){
var inst_29876 = (state_29886[(2)]);
var inst_29877 = process(inst_29876);
var state_29886__$1 = state_29886;
if(cljs.core.truth_(inst_29877)){
var statearr_29889_32670 = state_29886__$1;
(statearr_29889_32670[(1)] = (5));

} else {
var statearr_29890_32672 = state_29886__$1;
(statearr_29890_32672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (5))){
var state_29886__$1 = state_29886;
var statearr_29891_32675 = state_29886__$1;
(statearr_29891_32675[(2)] = null);

(statearr_29891_32675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (6))){
var state_29886__$1 = state_29886;
var statearr_29892_32678 = state_29886__$1;
(statearr_29892_32678[(2)] = null);

(statearr_29892_32678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29887 === (7))){
var inst_29882 = (state_29886[(2)]);
var state_29886__$1 = state_29886;
var statearr_29893_32679 = state_29886__$1;
(statearr_29893_32679[(2)] = inst_29882);

(statearr_29893_32679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32659,c__29405__auto___32664,G__29873_32661,G__29873_32662__$1,n__4741__auto___32657,jobs,results,process,async))
;
return ((function (__32659,switch__29192__auto__,c__29405__auto___32664,G__29873_32661,G__29873_32662__$1,n__4741__auto___32657,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0 = (function (){
var statearr_29896 = [null,null,null,null,null,null,null];
(statearr_29896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__);

(statearr_29896[(1)] = (1));

return statearr_29896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1 = (function (state_29886){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_29886);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e29897){var ex__29196__auto__ = e29897;
var statearr_29898_32681 = state_29886;
(statearr_29898_32681[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_29886[(4)]))){
var statearr_29899_32686 = state_29886;
(statearr_29899_32686[(1)] = cljs.core.first((state_29886[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32687 = state_29886;
state_29886 = G__32687;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__ = function(state_29886){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1.call(this,state_29886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__;
})()
;})(__32659,switch__29192__auto__,c__29405__auto___32664,G__29873_32661,G__29873_32662__$1,n__4741__auto___32657,jobs,results,process,async))
})();
var state__29407__auto__ = (function (){var statearr_29907 = f__29406__auto__();
(statearr_29907[(6)] = c__29405__auto___32664);

return statearr_29907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
});})(__32659,c__29405__auto___32664,G__29873_32661,G__29873_32662__$1,n__4741__auto___32657,jobs,results,process,async))
);


break;
case "async":
var c__29405__auto___32690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32659,c__29405__auto___32690,G__29873_32661,G__29873_32662__$1,n__4741__auto___32657,jobs,results,process,async){
return (function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = ((function (__32659,c__29405__auto___32690,G__29873_32661,G__29873_32662__$1,n__4741__auto___32657,jobs,results,process,async){
return (function (state_29922){
var state_val_29923 = (state_29922[(1)]);
if((state_val_29923 === (1))){
var state_29922__$1 = state_29922;
var statearr_29924_32693 = state_29922__$1;
(statearr_29924_32693[(2)] = null);

(statearr_29924_32693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29923 === (2))){
var state_29922__$1 = state_29922;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29922__$1,(4),jobs);
} else {
if((state_val_29923 === (3))){
var inst_29920 = (state_29922[(2)]);
var state_29922__$1 = state_29922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29922__$1,inst_29920);
} else {
if((state_val_29923 === (4))){
var inst_29912 = (state_29922[(2)]);
var inst_29913 = async(inst_29912);
var state_29922__$1 = state_29922;
if(cljs.core.truth_(inst_29913)){
var statearr_29929_32698 = state_29922__$1;
(statearr_29929_32698[(1)] = (5));

} else {
var statearr_29932_32700 = state_29922__$1;
(statearr_29932_32700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29923 === (5))){
var state_29922__$1 = state_29922;
var statearr_29933_32703 = state_29922__$1;
(statearr_29933_32703[(2)] = null);

(statearr_29933_32703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29923 === (6))){
var state_29922__$1 = state_29922;
var statearr_29934_32706 = state_29922__$1;
(statearr_29934_32706[(2)] = null);

(statearr_29934_32706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29923 === (7))){
var inst_29918 = (state_29922[(2)]);
var state_29922__$1 = state_29922;
var statearr_29935_32709 = state_29922__$1;
(statearr_29935_32709[(2)] = inst_29918);

(statearr_29935_32709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32659,c__29405__auto___32690,G__29873_32661,G__29873_32662__$1,n__4741__auto___32657,jobs,results,process,async))
;
return ((function (__32659,switch__29192__auto__,c__29405__auto___32690,G__29873_32661,G__29873_32662__$1,n__4741__auto___32657,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0 = (function (){
var statearr_29936 = [null,null,null,null,null,null,null];
(statearr_29936[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__);

(statearr_29936[(1)] = (1));

return statearr_29936;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1 = (function (state_29922){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_29922);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e29937){var ex__29196__auto__ = e29937;
var statearr_29938_32714 = state_29922;
(statearr_29938_32714[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_29922[(4)]))){
var statearr_29939_32716 = state_29922;
(statearr_29939_32716[(1)] = cljs.core.first((state_29922[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32719 = state_29922;
state_29922 = G__32719;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__ = function(state_29922){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1.call(this,state_29922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__;
})()
;})(__32659,switch__29192__auto__,c__29405__auto___32690,G__29873_32661,G__29873_32662__$1,n__4741__auto___32657,jobs,results,process,async))
})();
var state__29407__auto__ = (function (){var statearr_29940 = f__29406__auto__();
(statearr_29940[(6)] = c__29405__auto___32690);

return statearr_29940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
});})(__32659,c__29405__auto___32690,G__29873_32661,G__29873_32662__$1,n__4741__auto___32657,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29873_32662__$1)].join('')));

}

var G__32724 = (__32659 + (1));
__32659 = G__32724;
continue;
} else {
}
break;
}

var c__29405__auto___32726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_29968){
var state_val_29969 = (state_29968[(1)]);
if((state_val_29969 === (7))){
var inst_29964 = (state_29968[(2)]);
var state_29968__$1 = state_29968;
var statearr_29970_32730 = state_29968__$1;
(statearr_29970_32730[(2)] = inst_29964);

(statearr_29970_32730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (1))){
var state_29968__$1 = state_29968;
var statearr_29971_32732 = state_29968__$1;
(statearr_29971_32732[(2)] = null);

(statearr_29971_32732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (4))){
var inst_29943 = (state_29968[(7)]);
var inst_29943__$1 = (state_29968[(2)]);
var inst_29944 = (inst_29943__$1 == null);
var state_29968__$1 = (function (){var statearr_29976 = state_29968;
(statearr_29976[(7)] = inst_29943__$1);

return statearr_29976;
})();
if(cljs.core.truth_(inst_29944)){
var statearr_29981_32735 = state_29968__$1;
(statearr_29981_32735[(1)] = (5));

} else {
var statearr_29982_32736 = state_29968__$1;
(statearr_29982_32736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (6))){
var inst_29943 = (state_29968[(7)]);
var inst_29948 = (state_29968[(8)]);
var inst_29948__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29955 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29956 = [inst_29943,inst_29948__$1];
var inst_29957 = (new cljs.core.PersistentVector(null,2,(5),inst_29955,inst_29956,null));
var state_29968__$1 = (function (){var statearr_29983 = state_29968;
(statearr_29983[(8)] = inst_29948__$1);

return statearr_29983;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29968__$1,(8),jobs,inst_29957);
} else {
if((state_val_29969 === (3))){
var inst_29966 = (state_29968[(2)]);
var state_29968__$1 = state_29968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29968__$1,inst_29966);
} else {
if((state_val_29969 === (2))){
var state_29968__$1 = state_29968;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29968__$1,(4),from);
} else {
if((state_val_29969 === (9))){
var inst_29961 = (state_29968[(2)]);
var state_29968__$1 = (function (){var statearr_29984 = state_29968;
(statearr_29984[(9)] = inst_29961);

return statearr_29984;
})();
var statearr_29988_32741 = state_29968__$1;
(statearr_29988_32741[(2)] = null);

(statearr_29988_32741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (5))){
var inst_29946 = cljs.core.async.close_BANG_(jobs);
var state_29968__$1 = state_29968;
var statearr_29989_32743 = state_29968__$1;
(statearr_29989_32743[(2)] = inst_29946);

(statearr_29989_32743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29969 === (8))){
var inst_29948 = (state_29968[(8)]);
var inst_29959 = (state_29968[(2)]);
var state_29968__$1 = (function (){var statearr_29990 = state_29968;
(statearr_29990[(10)] = inst_29959);

return statearr_29990;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29968__$1,(9),results,inst_29948);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0 = (function (){
var statearr_29997 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__);

(statearr_29997[(1)] = (1));

return statearr_29997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1 = (function (state_29968){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_29968);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e29998){var ex__29196__auto__ = e29998;
var statearr_29999_32754 = state_29968;
(statearr_29999_32754[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_29968[(4)]))){
var statearr_30000_32756 = state_29968;
(statearr_30000_32756[(1)] = cljs.core.first((state_29968[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32757 = state_29968;
state_29968 = G__32757;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__ = function(state_29968){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1.call(this,state_29968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_30002 = f__29406__auto__();
(statearr_30002[(6)] = c__29405__auto___32726);

return statearr_30002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));


var c__29405__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_30040){
var state_val_30041 = (state_30040[(1)]);
if((state_val_30041 === (7))){
var inst_30036 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30042_32762 = state_30040__$1;
(statearr_30042_32762[(2)] = inst_30036);

(statearr_30042_32762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (20))){
var state_30040__$1 = state_30040;
var statearr_30043_32765 = state_30040__$1;
(statearr_30043_32765[(2)] = null);

(statearr_30043_32765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (1))){
var state_30040__$1 = state_30040;
var statearr_30044_32766 = state_30040__$1;
(statearr_30044_32766[(2)] = null);

(statearr_30044_32766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (4))){
var inst_30005 = (state_30040[(7)]);
var inst_30005__$1 = (state_30040[(2)]);
var inst_30006 = (inst_30005__$1 == null);
var state_30040__$1 = (function (){var statearr_30045 = state_30040;
(statearr_30045[(7)] = inst_30005__$1);

return statearr_30045;
})();
if(cljs.core.truth_(inst_30006)){
var statearr_30046_32771 = state_30040__$1;
(statearr_30046_32771[(1)] = (5));

} else {
var statearr_30047_32772 = state_30040__$1;
(statearr_30047_32772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (15))){
var inst_30018 = (state_30040[(8)]);
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30040__$1,(18),to,inst_30018);
} else {
if((state_val_30041 === (21))){
var inst_30031 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30052_32773 = state_30040__$1;
(statearr_30052_32773[(2)] = inst_30031);

(statearr_30052_32773[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (13))){
var inst_30033 = (state_30040[(2)]);
var state_30040__$1 = (function (){var statearr_30053 = state_30040;
(statearr_30053[(9)] = inst_30033);

return statearr_30053;
})();
var statearr_30055_32774 = state_30040__$1;
(statearr_30055_32774[(2)] = null);

(statearr_30055_32774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (6))){
var inst_30005 = (state_30040[(7)]);
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30040__$1,(11),inst_30005);
} else {
if((state_val_30041 === (17))){
var inst_30026 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
if(cljs.core.truth_(inst_30026)){
var statearr_30056_32778 = state_30040__$1;
(statearr_30056_32778[(1)] = (19));

} else {
var statearr_30057_32779 = state_30040__$1;
(statearr_30057_32779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (3))){
var inst_30038 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30040__$1,inst_30038);
} else {
if((state_val_30041 === (12))){
var inst_30015 = (state_30040[(10)]);
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30040__$1,(14),inst_30015);
} else {
if((state_val_30041 === (2))){
var state_30040__$1 = state_30040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30040__$1,(4),results);
} else {
if((state_val_30041 === (19))){
var state_30040__$1 = state_30040;
var statearr_30060_32786 = state_30040__$1;
(statearr_30060_32786[(2)] = null);

(statearr_30060_32786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (11))){
var inst_30015 = (state_30040[(2)]);
var state_30040__$1 = (function (){var statearr_30061 = state_30040;
(statearr_30061[(10)] = inst_30015);

return statearr_30061;
})();
var statearr_30062_32788 = state_30040__$1;
(statearr_30062_32788[(2)] = null);

(statearr_30062_32788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (9))){
var state_30040__$1 = state_30040;
var statearr_30063_32790 = state_30040__$1;
(statearr_30063_32790[(2)] = null);

(statearr_30063_32790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (5))){
var state_30040__$1 = state_30040;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30064_32792 = state_30040__$1;
(statearr_30064_32792[(1)] = (8));

} else {
var statearr_30065_32793 = state_30040__$1;
(statearr_30065_32793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (14))){
var inst_30018 = (state_30040[(8)]);
var inst_30020 = (state_30040[(11)]);
var inst_30018__$1 = (state_30040[(2)]);
var inst_30019 = (inst_30018__$1 == null);
var inst_30020__$1 = cljs.core.not(inst_30019);
var state_30040__$1 = (function (){var statearr_30066 = state_30040;
(statearr_30066[(8)] = inst_30018__$1);

(statearr_30066[(11)] = inst_30020__$1);

return statearr_30066;
})();
if(inst_30020__$1){
var statearr_30067_32795 = state_30040__$1;
(statearr_30067_32795[(1)] = (15));

} else {
var statearr_30068_32796 = state_30040__$1;
(statearr_30068_32796[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (16))){
var inst_30020 = (state_30040[(11)]);
var state_30040__$1 = state_30040;
var statearr_30072_32798 = state_30040__$1;
(statearr_30072_32798[(2)] = inst_30020);

(statearr_30072_32798[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (10))){
var inst_30012 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30073_32800 = state_30040__$1;
(statearr_30073_32800[(2)] = inst_30012);

(statearr_30073_32800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (18))){
var inst_30023 = (state_30040[(2)]);
var state_30040__$1 = state_30040;
var statearr_30077_32801 = state_30040__$1;
(statearr_30077_32801[(2)] = inst_30023);

(statearr_30077_32801[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30041 === (8))){
var inst_30009 = cljs.core.async.close_BANG_(to);
var state_30040__$1 = state_30040;
var statearr_30083_32803 = state_30040__$1;
(statearr_30083_32803[(2)] = inst_30009);

(statearr_30083_32803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0 = (function (){
var statearr_30084 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__);

(statearr_30084[(1)] = (1));

return statearr_30084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1 = (function (state_30040){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_30040);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e30087){var ex__29196__auto__ = e30087;
var statearr_30088_32811 = state_30040;
(statearr_30088_32811[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_30040[(4)]))){
var statearr_30090_32812 = state_30040;
(statearr_30090_32812[(1)] = cljs.core.first((state_30040[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32813 = state_30040;
state_30040 = G__32813;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__ = function(state_30040){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1.call(this,state_30040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29193__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_30092 = f__29406__auto__();
(statearr_30092[(6)] = c__29405__auto__);

return statearr_30092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));

return c__29405__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30094 = arguments.length;
switch (G__30094) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30101 = arguments.length;
switch (G__30101) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30109 = arguments.length;
switch (G__30109) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29405__auto___32841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_30147){
var state_val_30148 = (state_30147[(1)]);
if((state_val_30148 === (7))){
var inst_30143 = (state_30147[(2)]);
var state_30147__$1 = state_30147;
var statearr_30153_32844 = state_30147__$1;
(statearr_30153_32844[(2)] = inst_30143);

(statearr_30153_32844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (1))){
var state_30147__$1 = state_30147;
var statearr_30154_32845 = state_30147__$1;
(statearr_30154_32845[(2)] = null);

(statearr_30154_32845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (4))){
var inst_30124 = (state_30147[(7)]);
var inst_30124__$1 = (state_30147[(2)]);
var inst_30125 = (inst_30124__$1 == null);
var state_30147__$1 = (function (){var statearr_30155 = state_30147;
(statearr_30155[(7)] = inst_30124__$1);

return statearr_30155;
})();
if(cljs.core.truth_(inst_30125)){
var statearr_30156_32846 = state_30147__$1;
(statearr_30156_32846[(1)] = (5));

} else {
var statearr_30157_32847 = state_30147__$1;
(statearr_30157_32847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (13))){
var state_30147__$1 = state_30147;
var statearr_30158_32848 = state_30147__$1;
(statearr_30158_32848[(2)] = null);

(statearr_30158_32848[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (6))){
var inst_30124 = (state_30147[(7)]);
var inst_30130 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30124) : p.call(null,inst_30124));
var state_30147__$1 = state_30147;
if(cljs.core.truth_(inst_30130)){
var statearr_30159_32853 = state_30147__$1;
(statearr_30159_32853[(1)] = (9));

} else {
var statearr_30160_32854 = state_30147__$1;
(statearr_30160_32854[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (3))){
var inst_30145 = (state_30147[(2)]);
var state_30147__$1 = state_30147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30147__$1,inst_30145);
} else {
if((state_val_30148 === (12))){
var state_30147__$1 = state_30147;
var statearr_30162_32859 = state_30147__$1;
(statearr_30162_32859[(2)] = null);

(statearr_30162_32859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (2))){
var state_30147__$1 = state_30147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30147__$1,(4),ch);
} else {
if((state_val_30148 === (11))){
var inst_30124 = (state_30147[(7)]);
var inst_30134 = (state_30147[(2)]);
var state_30147__$1 = state_30147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30147__$1,(8),inst_30134,inst_30124);
} else {
if((state_val_30148 === (9))){
var state_30147__$1 = state_30147;
var statearr_30167_32864 = state_30147__$1;
(statearr_30167_32864[(2)] = tc);

(statearr_30167_32864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (5))){
var inst_30127 = cljs.core.async.close_BANG_(tc);
var inst_30128 = cljs.core.async.close_BANG_(fc);
var state_30147__$1 = (function (){var statearr_30168 = state_30147;
(statearr_30168[(8)] = inst_30127);

return statearr_30168;
})();
var statearr_30169_32866 = state_30147__$1;
(statearr_30169_32866[(2)] = inst_30128);

(statearr_30169_32866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (14))){
var inst_30141 = (state_30147[(2)]);
var state_30147__$1 = state_30147;
var statearr_30170_32867 = state_30147__$1;
(statearr_30170_32867[(2)] = inst_30141);

(statearr_30170_32867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (10))){
var state_30147__$1 = state_30147;
var statearr_30171_32868 = state_30147__$1;
(statearr_30171_32868[(2)] = fc);

(statearr_30171_32868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (8))){
var inst_30136 = (state_30147[(2)]);
var state_30147__$1 = state_30147;
if(cljs.core.truth_(inst_30136)){
var statearr_30172_32870 = state_30147__$1;
(statearr_30172_32870[(1)] = (12));

} else {
var statearr_30173_32871 = state_30147__$1;
(statearr_30173_32871[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29193__auto__ = null;
var cljs$core$async$state_machine__29193__auto____0 = (function (){
var statearr_30183 = [null,null,null,null,null,null,null,null,null];
(statearr_30183[(0)] = cljs$core$async$state_machine__29193__auto__);

(statearr_30183[(1)] = (1));

return statearr_30183;
});
var cljs$core$async$state_machine__29193__auto____1 = (function (state_30147){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_30147);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e30184){var ex__29196__auto__ = e30184;
var statearr_30186_32872 = state_30147;
(statearr_30186_32872[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_30147[(4)]))){
var statearr_30187_32873 = state_30147;
(statearr_30187_32873[(1)] = cljs.core.first((state_30147[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32878 = state_30147;
state_30147 = G__32878;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$state_machine__29193__auto__ = function(state_30147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29193__auto____1.call(this,state_30147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29193__auto____0;
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29193__auto____1;
return cljs$core$async$state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_30189 = f__29406__auto__();
(statearr_30189[(6)] = c__29405__auto___32841);

return statearr_30189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29405__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_30222){
var state_val_30223 = (state_30222[(1)]);
if((state_val_30223 === (7))){
var inst_30218 = (state_30222[(2)]);
var state_30222__$1 = state_30222;
var statearr_30228_32879 = state_30222__$1;
(statearr_30228_32879[(2)] = inst_30218);

(statearr_30228_32879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30223 === (1))){
var inst_30194 = init;
var inst_30195 = inst_30194;
var state_30222__$1 = (function (){var statearr_30232 = state_30222;
(statearr_30232[(7)] = inst_30195);

return statearr_30232;
})();
var statearr_30233_32880 = state_30222__$1;
(statearr_30233_32880[(2)] = null);

(statearr_30233_32880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30223 === (4))){
var inst_30202 = (state_30222[(8)]);
var inst_30202__$1 = (state_30222[(2)]);
var inst_30203 = (inst_30202__$1 == null);
var state_30222__$1 = (function (){var statearr_30235 = state_30222;
(statearr_30235[(8)] = inst_30202__$1);

return statearr_30235;
})();
if(cljs.core.truth_(inst_30203)){
var statearr_30245_32882 = state_30222__$1;
(statearr_30245_32882[(1)] = (5));

} else {
var statearr_30246_32883 = state_30222__$1;
(statearr_30246_32883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30223 === (6))){
var inst_30209 = (state_30222[(9)]);
var inst_30202 = (state_30222[(8)]);
var inst_30195 = (state_30222[(7)]);
var inst_30209__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30195,inst_30202) : f.call(null,inst_30195,inst_30202));
var inst_30210 = cljs.core.reduced_QMARK_(inst_30209__$1);
var state_30222__$1 = (function (){var statearr_30247 = state_30222;
(statearr_30247[(9)] = inst_30209__$1);

return statearr_30247;
})();
if(inst_30210){
var statearr_30254_32884 = state_30222__$1;
(statearr_30254_32884[(1)] = (8));

} else {
var statearr_30255_32885 = state_30222__$1;
(statearr_30255_32885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30223 === (3))){
var inst_30220 = (state_30222[(2)]);
var state_30222__$1 = state_30222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30222__$1,inst_30220);
} else {
if((state_val_30223 === (2))){
var state_30222__$1 = state_30222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30222__$1,(4),ch);
} else {
if((state_val_30223 === (9))){
var inst_30209 = (state_30222[(9)]);
var inst_30195 = inst_30209;
var state_30222__$1 = (function (){var statearr_30261 = state_30222;
(statearr_30261[(7)] = inst_30195);

return statearr_30261;
})();
var statearr_30262_32886 = state_30222__$1;
(statearr_30262_32886[(2)] = null);

(statearr_30262_32886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30223 === (5))){
var inst_30195 = (state_30222[(7)]);
var state_30222__$1 = state_30222;
var statearr_30264_32887 = state_30222__$1;
(statearr_30264_32887[(2)] = inst_30195);

(statearr_30264_32887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30223 === (10))){
var inst_30216 = (state_30222[(2)]);
var state_30222__$1 = state_30222;
var statearr_30266_32888 = state_30222__$1;
(statearr_30266_32888[(2)] = inst_30216);

(statearr_30266_32888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30223 === (8))){
var inst_30209 = (state_30222[(9)]);
var inst_30212 = cljs.core.deref(inst_30209);
var state_30222__$1 = state_30222;
var statearr_30267_32889 = state_30222__$1;
(statearr_30267_32889[(2)] = inst_30212);

(statearr_30267_32889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29193__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29193__auto____0 = (function (){
var statearr_30268 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30268[(0)] = cljs$core$async$reduce_$_state_machine__29193__auto__);

(statearr_30268[(1)] = (1));

return statearr_30268;
});
var cljs$core$async$reduce_$_state_machine__29193__auto____1 = (function (state_30222){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_30222);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e30269){var ex__29196__auto__ = e30269;
var statearr_30279_32890 = state_30222;
(statearr_30279_32890[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_30222[(4)]))){
var statearr_30283_32891 = state_30222;
(statearr_30283_32891[(1)] = cljs.core.first((state_30222[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32892 = state_30222;
state_30222 = G__32892;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29193__auto__ = function(state_30222){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29193__auto____1.call(this,state_30222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29193__auto____0;
cljs$core$async$reduce_$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29193__auto____1;
return cljs$core$async$reduce_$_state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_30284 = f__29406__auto__();
(statearr_30284[(6)] = c__29405__auto__);

return statearr_30284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));

return c__29405__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29405__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_30293){
var state_val_30294 = (state_30293[(1)]);
if((state_val_30294 === (1))){
var inst_30288 = cljs.core.async.reduce(f__$1,init,ch);
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30293__$1,(2),inst_30288);
} else {
if((state_val_30294 === (2))){
var inst_30290 = (state_30293[(2)]);
var inst_30291 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30290) : f__$1.call(null,inst_30290));
var state_30293__$1 = state_30293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30293__$1,inst_30291);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29193__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29193__auto____0 = (function (){
var statearr_30298 = [null,null,null,null,null,null,null];
(statearr_30298[(0)] = cljs$core$async$transduce_$_state_machine__29193__auto__);

(statearr_30298[(1)] = (1));

return statearr_30298;
});
var cljs$core$async$transduce_$_state_machine__29193__auto____1 = (function (state_30293){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_30293);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e30299){var ex__29196__auto__ = e30299;
var statearr_30300_32894 = state_30293;
(statearr_30300_32894[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_30293[(4)]))){
var statearr_30301_32895 = state_30293;
(statearr_30301_32895[(1)] = cljs.core.first((state_30293[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32897 = state_30293;
state_30293 = G__32897;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29193__auto__ = function(state_30293){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29193__auto____1.call(this,state_30293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29193__auto____0;
cljs$core$async$transduce_$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29193__auto____1;
return cljs$core$async$transduce_$_state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_30302 = f__29406__auto__();
(statearr_30302[(6)] = c__29405__auto__);

return statearr_30302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));

return c__29405__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30304 = arguments.length;
switch (G__30304) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29405__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_30335){
var state_val_30336 = (state_30335[(1)]);
if((state_val_30336 === (7))){
var inst_30314 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30337_32900 = state_30335__$1;
(statearr_30337_32900[(2)] = inst_30314);

(statearr_30337_32900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (1))){
var inst_30308 = cljs.core.seq(coll);
var inst_30309 = inst_30308;
var state_30335__$1 = (function (){var statearr_30338 = state_30335;
(statearr_30338[(7)] = inst_30309);

return statearr_30338;
})();
var statearr_30339_32901 = state_30335__$1;
(statearr_30339_32901[(2)] = null);

(statearr_30339_32901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (4))){
var inst_30309 = (state_30335[(7)]);
var inst_30312 = cljs.core.first(inst_30309);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30335__$1,(7),ch,inst_30312);
} else {
if((state_val_30336 === (13))){
var inst_30329 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30340_32902 = state_30335__$1;
(statearr_30340_32902[(2)] = inst_30329);

(statearr_30340_32902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (6))){
var inst_30317 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30317)){
var statearr_30341_32903 = state_30335__$1;
(statearr_30341_32903[(1)] = (8));

} else {
var statearr_30342_32904 = state_30335__$1;
(statearr_30342_32904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (3))){
var inst_30333 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30335__$1,inst_30333);
} else {
if((state_val_30336 === (12))){
var state_30335__$1 = state_30335;
var statearr_30344_32905 = state_30335__$1;
(statearr_30344_32905[(2)] = null);

(statearr_30344_32905[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (2))){
var inst_30309 = (state_30335[(7)]);
var state_30335__$1 = state_30335;
if(cljs.core.truth_(inst_30309)){
var statearr_30345_32906 = state_30335__$1;
(statearr_30345_32906[(1)] = (4));

} else {
var statearr_30346_32907 = state_30335__$1;
(statearr_30346_32907[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (11))){
var inst_30323 = cljs.core.async.close_BANG_(ch);
var state_30335__$1 = state_30335;
var statearr_30347_32908 = state_30335__$1;
(statearr_30347_32908[(2)] = inst_30323);

(statearr_30347_32908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (9))){
var state_30335__$1 = state_30335;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30348_32910 = state_30335__$1;
(statearr_30348_32910[(1)] = (11));

} else {
var statearr_30349_32911 = state_30335__$1;
(statearr_30349_32911[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (5))){
var inst_30309 = (state_30335[(7)]);
var state_30335__$1 = state_30335;
var statearr_30350_32912 = state_30335__$1;
(statearr_30350_32912[(2)] = inst_30309);

(statearr_30350_32912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (10))){
var inst_30331 = (state_30335[(2)]);
var state_30335__$1 = state_30335;
var statearr_30353_32913 = state_30335__$1;
(statearr_30353_32913[(2)] = inst_30331);

(statearr_30353_32913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30336 === (8))){
var inst_30309 = (state_30335[(7)]);
var inst_30319 = cljs.core.next(inst_30309);
var inst_30309__$1 = inst_30319;
var state_30335__$1 = (function (){var statearr_30358 = state_30335;
(statearr_30358[(7)] = inst_30309__$1);

return statearr_30358;
})();
var statearr_30359_32914 = state_30335__$1;
(statearr_30359_32914[(2)] = null);

(statearr_30359_32914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29193__auto__ = null;
var cljs$core$async$state_machine__29193__auto____0 = (function (){
var statearr_30367 = [null,null,null,null,null,null,null,null];
(statearr_30367[(0)] = cljs$core$async$state_machine__29193__auto__);

(statearr_30367[(1)] = (1));

return statearr_30367;
});
var cljs$core$async$state_machine__29193__auto____1 = (function (state_30335){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_30335);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e30368){var ex__29196__auto__ = e30368;
var statearr_30369_32915 = state_30335;
(statearr_30369_32915[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_30335[(4)]))){
var statearr_30370_32916 = state_30335;
(statearr_30370_32916[(1)] = cljs.core.first((state_30335[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32917 = state_30335;
state_30335 = G__32917;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$state_machine__29193__auto__ = function(state_30335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29193__auto____1.call(this,state_30335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29193__auto____0;
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29193__auto____1;
return cljs$core$async$state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_30371 = f__29406__auto__();
(statearr_30371[(6)] = c__29405__auto__);

return statearr_30371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));

return c__29405__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30373 = arguments.length;
switch (G__30373) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32927 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32927(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32928 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32928(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32932 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32932(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32936 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32936(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30398 = (function (ch,cs,meta30399){
this.ch = ch;
this.cs = cs;
this.meta30399 = meta30399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30400,meta30399__$1){
var self__ = this;
var _30400__$1 = this;
return (new cljs.core.async.t_cljs$core$async30398(self__.ch,self__.cs,meta30399__$1));
}));

(cljs.core.async.t_cljs$core$async30398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30400){
var self__ = this;
var _30400__$1 = this;
return self__.meta30399;
}));

(cljs.core.async.t_cljs$core$async30398.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30398.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30398.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30398.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30398.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30398.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30399","meta30399",-741249952,null)], null);
}));

(cljs.core.async.t_cljs$core$async30398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30398");

(cljs.core.async.t_cljs$core$async30398.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30398.
 */
cljs.core.async.__GT_t_cljs$core$async30398 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30398(ch__$1,cs__$1,meta30399){
return (new cljs.core.async.t_cljs$core$async30398(ch__$1,cs__$1,meta30399));
});

}

return (new cljs.core.async.t_cljs$core$async30398(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29405__auto___32950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_30634){
var state_val_30635 = (state_30634[(1)]);
if((state_val_30635 === (7))){
var inst_30623 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
var statearr_30636_32955 = state_30634__$1;
(statearr_30636_32955[(2)] = inst_30623);

(statearr_30636_32955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (20))){
var inst_30488 = (state_30634[(7)]);
var inst_30505 = cljs.core.first(inst_30488);
var inst_30506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30505,(0),null);
var inst_30507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30505,(1),null);
var state_30634__$1 = (function (){var statearr_30640 = state_30634;
(statearr_30640[(8)] = inst_30506);

return statearr_30640;
})();
if(cljs.core.truth_(inst_30507)){
var statearr_30641_32964 = state_30634__$1;
(statearr_30641_32964[(1)] = (22));

} else {
var statearr_30646_32965 = state_30634__$1;
(statearr_30646_32965[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (27))){
var inst_30449 = (state_30634[(9)]);
var inst_30544 = (state_30634[(10)]);
var inst_30557 = (state_30634[(11)]);
var inst_30542 = (state_30634[(12)]);
var inst_30557__$1 = cljs.core._nth(inst_30542,inst_30544);
var inst_30563 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30557__$1,inst_30449,done);
var state_30634__$1 = (function (){var statearr_30664 = state_30634;
(statearr_30664[(11)] = inst_30557__$1);

return statearr_30664;
})();
if(cljs.core.truth_(inst_30563)){
var statearr_30665_32970 = state_30634__$1;
(statearr_30665_32970[(1)] = (30));

} else {
var statearr_30667_32971 = state_30634__$1;
(statearr_30667_32971[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (1))){
var state_30634__$1 = state_30634;
var statearr_30668_32972 = state_30634__$1;
(statearr_30668_32972[(2)] = null);

(statearr_30668_32972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (24))){
var inst_30488 = (state_30634[(7)]);
var inst_30512 = (state_30634[(2)]);
var inst_30514 = cljs.core.next(inst_30488);
var inst_30458 = inst_30514;
var inst_30459 = null;
var inst_30460 = (0);
var inst_30461 = (0);
var state_30634__$1 = (function (){var statearr_30687 = state_30634;
(statearr_30687[(13)] = inst_30460);

(statearr_30687[(14)] = inst_30458);

(statearr_30687[(15)] = inst_30461);

(statearr_30687[(16)] = inst_30512);

(statearr_30687[(17)] = inst_30459);

return statearr_30687;
})();
var statearr_30693_32973 = state_30634__$1;
(statearr_30693_32973[(2)] = null);

(statearr_30693_32973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (39))){
var state_30634__$1 = state_30634;
var statearr_30701_32977 = state_30634__$1;
(statearr_30701_32977[(2)] = null);

(statearr_30701_32977[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (4))){
var inst_30449 = (state_30634[(9)]);
var inst_30449__$1 = (state_30634[(2)]);
var inst_30450 = (inst_30449__$1 == null);
var state_30634__$1 = (function (){var statearr_30703 = state_30634;
(statearr_30703[(9)] = inst_30449__$1);

return statearr_30703;
})();
if(cljs.core.truth_(inst_30450)){
var statearr_30704_32978 = state_30634__$1;
(statearr_30704_32978[(1)] = (5));

} else {
var statearr_30705_32979 = state_30634__$1;
(statearr_30705_32979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (15))){
var inst_30460 = (state_30634[(13)]);
var inst_30458 = (state_30634[(14)]);
var inst_30461 = (state_30634[(15)]);
var inst_30459 = (state_30634[(17)]);
var inst_30483 = (state_30634[(2)]);
var inst_30485 = (inst_30461 + (1));
var tmp30694 = inst_30460;
var tmp30695 = inst_30458;
var tmp30696 = inst_30459;
var inst_30458__$1 = tmp30695;
var inst_30459__$1 = tmp30696;
var inst_30460__$1 = tmp30694;
var inst_30461__$1 = inst_30485;
var state_30634__$1 = (function (){var statearr_30711 = state_30634;
(statearr_30711[(13)] = inst_30460__$1);

(statearr_30711[(14)] = inst_30458__$1);

(statearr_30711[(15)] = inst_30461__$1);

(statearr_30711[(18)] = inst_30483);

(statearr_30711[(17)] = inst_30459__$1);

return statearr_30711;
})();
var statearr_30714_32983 = state_30634__$1;
(statearr_30714_32983[(2)] = null);

(statearr_30714_32983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (21))){
var inst_30518 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
var statearr_30719_32984 = state_30634__$1;
(statearr_30719_32984[(2)] = inst_30518);

(statearr_30719_32984[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (31))){
var inst_30557 = (state_30634[(11)]);
var inst_30569 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30557);
var state_30634__$1 = state_30634;
var statearr_30723_32985 = state_30634__$1;
(statearr_30723_32985[(2)] = inst_30569);

(statearr_30723_32985[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (32))){
var inst_30544 = (state_30634[(10)]);
var inst_30542 = (state_30634[(12)]);
var inst_30543 = (state_30634[(19)]);
var inst_30541 = (state_30634[(20)]);
var inst_30571 = (state_30634[(2)]);
var inst_30572 = (inst_30544 + (1));
var tmp30716 = inst_30542;
var tmp30717 = inst_30543;
var tmp30718 = inst_30541;
var inst_30541__$1 = tmp30718;
var inst_30542__$1 = tmp30716;
var inst_30543__$1 = tmp30717;
var inst_30544__$1 = inst_30572;
var state_30634__$1 = (function (){var statearr_30724 = state_30634;
(statearr_30724[(10)] = inst_30544__$1);

(statearr_30724[(12)] = inst_30542__$1);

(statearr_30724[(21)] = inst_30571);

(statearr_30724[(19)] = inst_30543__$1);

(statearr_30724[(20)] = inst_30541__$1);

return statearr_30724;
})();
var statearr_30725_32987 = state_30634__$1;
(statearr_30725_32987[(2)] = null);

(statearr_30725_32987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (40))){
var inst_30593 = (state_30634[(22)]);
var inst_30599 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30593);
var state_30634__$1 = state_30634;
var statearr_30728_32988 = state_30634__$1;
(statearr_30728_32988[(2)] = inst_30599);

(statearr_30728_32988[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (33))){
var inst_30577 = (state_30634[(23)]);
var inst_30579 = cljs.core.chunked_seq_QMARK_(inst_30577);
var state_30634__$1 = state_30634;
if(inst_30579){
var statearr_30737_32989 = state_30634__$1;
(statearr_30737_32989[(1)] = (36));

} else {
var statearr_30738_32990 = state_30634__$1;
(statearr_30738_32990[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (13))){
var inst_30476 = (state_30634[(24)]);
var inst_30480 = cljs.core.async.close_BANG_(inst_30476);
var state_30634__$1 = state_30634;
var statearr_30743_32992 = state_30634__$1;
(statearr_30743_32992[(2)] = inst_30480);

(statearr_30743_32992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (22))){
var inst_30506 = (state_30634[(8)]);
var inst_30509 = cljs.core.async.close_BANG_(inst_30506);
var state_30634__$1 = state_30634;
var statearr_30745_32993 = state_30634__$1;
(statearr_30745_32993[(2)] = inst_30509);

(statearr_30745_32993[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (36))){
var inst_30577 = (state_30634[(23)]);
var inst_30587 = cljs.core.chunk_first(inst_30577);
var inst_30589 = cljs.core.chunk_rest(inst_30577);
var inst_30590 = cljs.core.count(inst_30587);
var inst_30541 = inst_30589;
var inst_30542 = inst_30587;
var inst_30543 = inst_30590;
var inst_30544 = (0);
var state_30634__$1 = (function (){var statearr_30758 = state_30634;
(statearr_30758[(10)] = inst_30544);

(statearr_30758[(12)] = inst_30542);

(statearr_30758[(19)] = inst_30543);

(statearr_30758[(20)] = inst_30541);

return statearr_30758;
})();
var statearr_30759_32994 = state_30634__$1;
(statearr_30759_32994[(2)] = null);

(statearr_30759_32994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (41))){
var inst_30577 = (state_30634[(23)]);
var inst_30602 = (state_30634[(2)]);
var inst_30603 = cljs.core.next(inst_30577);
var inst_30541 = inst_30603;
var inst_30542 = null;
var inst_30543 = (0);
var inst_30544 = (0);
var state_30634__$1 = (function (){var statearr_30764 = state_30634;
(statearr_30764[(10)] = inst_30544);

(statearr_30764[(25)] = inst_30602);

(statearr_30764[(12)] = inst_30542);

(statearr_30764[(19)] = inst_30543);

(statearr_30764[(20)] = inst_30541);

return statearr_30764;
})();
var statearr_30766_32995 = state_30634__$1;
(statearr_30766_32995[(2)] = null);

(statearr_30766_32995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (43))){
var state_30634__$1 = state_30634;
var statearr_30767_32996 = state_30634__$1;
(statearr_30767_32996[(2)] = null);

(statearr_30767_32996[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (29))){
var inst_30611 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
var statearr_30769_32997 = state_30634__$1;
(statearr_30769_32997[(2)] = inst_30611);

(statearr_30769_32997[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (44))){
var inst_30620 = (state_30634[(2)]);
var state_30634__$1 = (function (){var statearr_30770 = state_30634;
(statearr_30770[(26)] = inst_30620);

return statearr_30770;
})();
var statearr_30771_32998 = state_30634__$1;
(statearr_30771_32998[(2)] = null);

(statearr_30771_32998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (6))){
var inst_30529 = (state_30634[(27)]);
var inst_30528 = cljs.core.deref(cs);
var inst_30529__$1 = cljs.core.keys(inst_30528);
var inst_30530 = cljs.core.count(inst_30529__$1);
var inst_30531 = cljs.core.reset_BANG_(dctr,inst_30530);
var inst_30536 = cljs.core.seq(inst_30529__$1);
var inst_30541 = inst_30536;
var inst_30542 = null;
var inst_30543 = (0);
var inst_30544 = (0);
var state_30634__$1 = (function (){var statearr_30774 = state_30634;
(statearr_30774[(10)] = inst_30544);

(statearr_30774[(27)] = inst_30529__$1);

(statearr_30774[(12)] = inst_30542);

(statearr_30774[(19)] = inst_30543);

(statearr_30774[(20)] = inst_30541);

(statearr_30774[(28)] = inst_30531);

return statearr_30774;
})();
var statearr_30778_33000 = state_30634__$1;
(statearr_30778_33000[(2)] = null);

(statearr_30778_33000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (28))){
var inst_30577 = (state_30634[(23)]);
var inst_30541 = (state_30634[(20)]);
var inst_30577__$1 = cljs.core.seq(inst_30541);
var state_30634__$1 = (function (){var statearr_30782 = state_30634;
(statearr_30782[(23)] = inst_30577__$1);

return statearr_30782;
})();
if(inst_30577__$1){
var statearr_30785_33001 = state_30634__$1;
(statearr_30785_33001[(1)] = (33));

} else {
var statearr_30787_33002 = state_30634__$1;
(statearr_30787_33002[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (25))){
var inst_30544 = (state_30634[(10)]);
var inst_30543 = (state_30634[(19)]);
var inst_30548 = (inst_30544 < inst_30543);
var inst_30550 = inst_30548;
var state_30634__$1 = state_30634;
if(cljs.core.truth_(inst_30550)){
var statearr_30788_33003 = state_30634__$1;
(statearr_30788_33003[(1)] = (27));

} else {
var statearr_30789_33004 = state_30634__$1;
(statearr_30789_33004[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (34))){
var state_30634__$1 = state_30634;
var statearr_30790_33005 = state_30634__$1;
(statearr_30790_33005[(2)] = null);

(statearr_30790_33005[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (17))){
var state_30634__$1 = state_30634;
var statearr_30793_33006 = state_30634__$1;
(statearr_30793_33006[(2)] = null);

(statearr_30793_33006[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (3))){
var inst_30625 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30634__$1,inst_30625);
} else {
if((state_val_30635 === (12))){
var inst_30523 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
var statearr_30794_33007 = state_30634__$1;
(statearr_30794_33007[(2)] = inst_30523);

(statearr_30794_33007[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (2))){
var state_30634__$1 = state_30634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30634__$1,(4),ch);
} else {
if((state_val_30635 === (23))){
var state_30634__$1 = state_30634;
var statearr_30795_33008 = state_30634__$1;
(statearr_30795_33008[(2)] = null);

(statearr_30795_33008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (35))){
var inst_30609 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
var statearr_30796_33009 = state_30634__$1;
(statearr_30796_33009[(2)] = inst_30609);

(statearr_30796_33009[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (19))){
var inst_30488 = (state_30634[(7)]);
var inst_30495 = cljs.core.chunk_first(inst_30488);
var inst_30497 = cljs.core.chunk_rest(inst_30488);
var inst_30498 = cljs.core.count(inst_30495);
var inst_30458 = inst_30497;
var inst_30459 = inst_30495;
var inst_30460 = inst_30498;
var inst_30461 = (0);
var state_30634__$1 = (function (){var statearr_30801 = state_30634;
(statearr_30801[(13)] = inst_30460);

(statearr_30801[(14)] = inst_30458);

(statearr_30801[(15)] = inst_30461);

(statearr_30801[(17)] = inst_30459);

return statearr_30801;
})();
var statearr_30806_33010 = state_30634__$1;
(statearr_30806_33010[(2)] = null);

(statearr_30806_33010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (11))){
var inst_30458 = (state_30634[(14)]);
var inst_30488 = (state_30634[(7)]);
var inst_30488__$1 = cljs.core.seq(inst_30458);
var state_30634__$1 = (function (){var statearr_30811 = state_30634;
(statearr_30811[(7)] = inst_30488__$1);

return statearr_30811;
})();
if(inst_30488__$1){
var statearr_30812_33012 = state_30634__$1;
(statearr_30812_33012[(1)] = (16));

} else {
var statearr_30813_33013 = state_30634__$1;
(statearr_30813_33013[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (9))){
var inst_30526 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
var statearr_30820_33014 = state_30634__$1;
(statearr_30820_33014[(2)] = inst_30526);

(statearr_30820_33014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (5))){
var inst_30456 = cljs.core.deref(cs);
var inst_30457 = cljs.core.seq(inst_30456);
var inst_30458 = inst_30457;
var inst_30459 = null;
var inst_30460 = (0);
var inst_30461 = (0);
var state_30634__$1 = (function (){var statearr_30825 = state_30634;
(statearr_30825[(13)] = inst_30460);

(statearr_30825[(14)] = inst_30458);

(statearr_30825[(15)] = inst_30461);

(statearr_30825[(17)] = inst_30459);

return statearr_30825;
})();
var statearr_30826_33015 = state_30634__$1;
(statearr_30826_33015[(2)] = null);

(statearr_30826_33015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (14))){
var state_30634__$1 = state_30634;
var statearr_30828_33016 = state_30634__$1;
(statearr_30828_33016[(2)] = null);

(statearr_30828_33016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (45))){
var inst_30617 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
var statearr_30829_33017 = state_30634__$1;
(statearr_30829_33017[(2)] = inst_30617);

(statearr_30829_33017[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (26))){
var inst_30529 = (state_30634[(27)]);
var inst_30613 = (state_30634[(2)]);
var inst_30614 = cljs.core.seq(inst_30529);
var state_30634__$1 = (function (){var statearr_30830 = state_30634;
(statearr_30830[(29)] = inst_30613);

return statearr_30830;
})();
if(inst_30614){
var statearr_30831_33018 = state_30634__$1;
(statearr_30831_33018[(1)] = (42));

} else {
var statearr_30835_33019 = state_30634__$1;
(statearr_30835_33019[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (16))){
var inst_30488 = (state_30634[(7)]);
var inst_30492 = cljs.core.chunked_seq_QMARK_(inst_30488);
var state_30634__$1 = state_30634;
if(inst_30492){
var statearr_30840_33020 = state_30634__$1;
(statearr_30840_33020[(1)] = (19));

} else {
var statearr_30841_33021 = state_30634__$1;
(statearr_30841_33021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (38))){
var inst_30606 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
var statearr_30844_33022 = state_30634__$1;
(statearr_30844_33022[(2)] = inst_30606);

(statearr_30844_33022[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (30))){
var state_30634__$1 = state_30634;
var statearr_30847_33023 = state_30634__$1;
(statearr_30847_33023[(2)] = null);

(statearr_30847_33023[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (10))){
var inst_30461 = (state_30634[(15)]);
var inst_30459 = (state_30634[(17)]);
var inst_30473 = cljs.core._nth(inst_30459,inst_30461);
var inst_30476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30473,(0),null);
var inst_30477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30473,(1),null);
var state_30634__$1 = (function (){var statearr_30855 = state_30634;
(statearr_30855[(24)] = inst_30476);

return statearr_30855;
})();
if(cljs.core.truth_(inst_30477)){
var statearr_30856_33024 = state_30634__$1;
(statearr_30856_33024[(1)] = (13));

} else {
var statearr_30859_33025 = state_30634__$1;
(statearr_30859_33025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (18))){
var inst_30521 = (state_30634[(2)]);
var state_30634__$1 = state_30634;
var statearr_30861_33027 = state_30634__$1;
(statearr_30861_33027[(2)] = inst_30521);

(statearr_30861_33027[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (42))){
var state_30634__$1 = state_30634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30634__$1,(45),dchan);
} else {
if((state_val_30635 === (37))){
var inst_30449 = (state_30634[(9)]);
var inst_30577 = (state_30634[(23)]);
var inst_30593 = (state_30634[(22)]);
var inst_30593__$1 = cljs.core.first(inst_30577);
var inst_30594 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30593__$1,inst_30449,done);
var state_30634__$1 = (function (){var statearr_30865 = state_30634;
(statearr_30865[(22)] = inst_30593__$1);

return statearr_30865;
})();
if(cljs.core.truth_(inst_30594)){
var statearr_30866_33028 = state_30634__$1;
(statearr_30866_33028[(1)] = (39));

} else {
var statearr_30867_33029 = state_30634__$1;
(statearr_30867_33029[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30635 === (8))){
var inst_30460 = (state_30634[(13)]);
var inst_30461 = (state_30634[(15)]);
var inst_30463 = (inst_30461 < inst_30460);
var inst_30464 = inst_30463;
var state_30634__$1 = state_30634;
if(cljs.core.truth_(inst_30464)){
var statearr_30869_33030 = state_30634__$1;
(statearr_30869_33030[(1)] = (10));

} else {
var statearr_30870_33031 = state_30634__$1;
(statearr_30870_33031[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29193__auto__ = null;
var cljs$core$async$mult_$_state_machine__29193__auto____0 = (function (){
var statearr_30873 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30873[(0)] = cljs$core$async$mult_$_state_machine__29193__auto__);

(statearr_30873[(1)] = (1));

return statearr_30873;
});
var cljs$core$async$mult_$_state_machine__29193__auto____1 = (function (state_30634){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_30634);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e30874){var ex__29196__auto__ = e30874;
var statearr_30877_33032 = state_30634;
(statearr_30877_33032[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_30634[(4)]))){
var statearr_30878_33033 = state_30634;
(statearr_30878_33033[(1)] = cljs.core.first((state_30634[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33034 = state_30634;
state_30634 = G__33034;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29193__auto__ = function(state_30634){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29193__auto____1.call(this,state_30634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29193__auto____0;
cljs$core$async$mult_$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29193__auto____1;
return cljs$core$async$mult_$_state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_30893 = f__29406__auto__();
(statearr_30893[(6)] = c__29405__auto___32950);

return statearr_30893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30904 = arguments.length;
switch (G__30904) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33038 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33038(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33039 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33039(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33040 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33040(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33041 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33041(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33042 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33042(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33044 = arguments.length;
var i__4865__auto___33045 = (0);
while(true){
if((i__4865__auto___33045 < len__4864__auto___33044)){
args__4870__auto__.push((arguments[i__4865__auto___33045]));

var G__33046 = (i__4865__auto___33045 + (1));
i__4865__auto___33045 = G__33046;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30935){
var map__30936 = p__30935;
var map__30936__$1 = cljs.core.__destructure_map(map__30936);
var opts = map__30936__$1;
var statearr_30937_33047 = state;
(statearr_30937_33047[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30938_33048 = state;
(statearr_30938_33048[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_30944_33049 = state;
(statearr_30944_33049[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30929){
var G__30930 = cljs.core.first(seq30929);
var seq30929__$1 = cljs.core.next(seq30929);
var G__30931 = cljs.core.first(seq30929__$1);
var seq30929__$2 = cljs.core.next(seq30929__$1);
var G__30932 = cljs.core.first(seq30929__$2);
var seq30929__$3 = cljs.core.next(seq30929__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30930,G__30931,G__30932,seq30929__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30960 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30961){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30961 = meta30961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30962,meta30961__$1){
var self__ = this;
var _30962__$1 = this;
return (new cljs.core.async.t_cljs$core$async30960(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30961__$1));
}));

(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30962){
var self__ = this;
var _30962__$1 = this;
return self__.meta30961;
}));

(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30960.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30961","meta30961",17438845,null)], null);
}));

(cljs.core.async.t_cljs$core$async30960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30960");

(cljs.core.async.t_cljs$core$async30960.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30960.
 */
cljs.core.async.__GT_t_cljs$core$async30960 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30960(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30961){
return (new cljs.core.async.t_cljs$core$async30960(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30961));
});

}

return (new cljs.core.async.t_cljs$core$async30960(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29405__auto___33059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_31071){
var state_val_31072 = (state_31071[(1)]);
if((state_val_31072 === (7))){
var inst_31027 = (state_31071[(2)]);
var state_31071__$1 = state_31071;
if(cljs.core.truth_(inst_31027)){
var statearr_31080_33060 = state_31071__$1;
(statearr_31080_33060[(1)] = (8));

} else {
var statearr_31081_33061 = state_31071__$1;
(statearr_31081_33061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (20))){
var inst_31018 = (state_31071[(7)]);
var state_31071__$1 = state_31071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31071__$1,(23),out,inst_31018);
} else {
if((state_val_31072 === (1))){
var inst_30995 = calc_state();
var inst_30996 = cljs.core.__destructure_map(inst_30995);
var inst_30997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30996,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30996,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30996,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31000 = inst_30995;
var state_31071__$1 = (function (){var statearr_31087 = state_31071;
(statearr_31087[(8)] = inst_30997);

(statearr_31087[(9)] = inst_31000);

(statearr_31087[(10)] = inst_30998);

(statearr_31087[(11)] = inst_30999);

return statearr_31087;
})();
var statearr_31090_33062 = state_31071__$1;
(statearr_31090_33062[(2)] = null);

(statearr_31090_33062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (24))){
var inst_31004 = (state_31071[(12)]);
var inst_31000 = inst_31004;
var state_31071__$1 = (function (){var statearr_31092 = state_31071;
(statearr_31092[(9)] = inst_31000);

return statearr_31092;
})();
var statearr_31093_33063 = state_31071__$1;
(statearr_31093_33063[(2)] = null);

(statearr_31093_33063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (4))){
var inst_31018 = (state_31071[(7)]);
var inst_31022 = (state_31071[(13)]);
var inst_31017 = (state_31071[(2)]);
var inst_31018__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31017,(0),null);
var inst_31019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31017,(1),null);
var inst_31022__$1 = (inst_31018__$1 == null);
var state_31071__$1 = (function (){var statearr_31098 = state_31071;
(statearr_31098[(7)] = inst_31018__$1);

(statearr_31098[(13)] = inst_31022__$1);

(statearr_31098[(14)] = inst_31019);

return statearr_31098;
})();
if(cljs.core.truth_(inst_31022__$1)){
var statearr_31103_33064 = state_31071__$1;
(statearr_31103_33064[(1)] = (5));

} else {
var statearr_31104_33065 = state_31071__$1;
(statearr_31104_33065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (15))){
var inst_31044 = (state_31071[(15)]);
var inst_31005 = (state_31071[(16)]);
var inst_31044__$1 = cljs.core.empty_QMARK_(inst_31005);
var state_31071__$1 = (function (){var statearr_31106 = state_31071;
(statearr_31106[(15)] = inst_31044__$1);

return statearr_31106;
})();
if(inst_31044__$1){
var statearr_31107_33068 = state_31071__$1;
(statearr_31107_33068[(1)] = (17));

} else {
var statearr_31108_33069 = state_31071__$1;
(statearr_31108_33069[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (21))){
var inst_31004 = (state_31071[(12)]);
var inst_31000 = inst_31004;
var state_31071__$1 = (function (){var statearr_31128 = state_31071;
(statearr_31128[(9)] = inst_31000);

return statearr_31128;
})();
var statearr_31129_33070 = state_31071__$1;
(statearr_31129_33070[(2)] = null);

(statearr_31129_33070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (13))){
var inst_31037 = (state_31071[(2)]);
var inst_31038 = calc_state();
var inst_31000 = inst_31038;
var state_31071__$1 = (function (){var statearr_31134 = state_31071;
(statearr_31134[(9)] = inst_31000);

(statearr_31134[(17)] = inst_31037);

return statearr_31134;
})();
var statearr_31144_33071 = state_31071__$1;
(statearr_31144_33071[(2)] = null);

(statearr_31144_33071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (22))){
var inst_31064 = (state_31071[(2)]);
var state_31071__$1 = state_31071;
var statearr_31145_33072 = state_31071__$1;
(statearr_31145_33072[(2)] = inst_31064);

(statearr_31145_33072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (6))){
var inst_31019 = (state_31071[(14)]);
var inst_31025 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31019,change);
var state_31071__$1 = state_31071;
var statearr_31147_33073 = state_31071__$1;
(statearr_31147_33073[(2)] = inst_31025);

(statearr_31147_33073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (25))){
var state_31071__$1 = state_31071;
var statearr_31150_33074 = state_31071__$1;
(statearr_31150_33074[(2)] = null);

(statearr_31150_33074[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (17))){
var inst_31006 = (state_31071[(18)]);
var inst_31019 = (state_31071[(14)]);
var inst_31046 = (inst_31006.cljs$core$IFn$_invoke$arity$1 ? inst_31006.cljs$core$IFn$_invoke$arity$1(inst_31019) : inst_31006.call(null,inst_31019));
var inst_31047 = cljs.core.not(inst_31046);
var state_31071__$1 = state_31071;
var statearr_31154_33075 = state_31071__$1;
(statearr_31154_33075[(2)] = inst_31047);

(statearr_31154_33075[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (3))){
var inst_31068 = (state_31071[(2)]);
var state_31071__$1 = state_31071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31071__$1,inst_31068);
} else {
if((state_val_31072 === (12))){
var state_31071__$1 = state_31071;
var statearr_31159_33076 = state_31071__$1;
(statearr_31159_33076[(2)] = null);

(statearr_31159_33076[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (2))){
var inst_31004 = (state_31071[(12)]);
var inst_31000 = (state_31071[(9)]);
var inst_31004__$1 = cljs.core.__destructure_map(inst_31000);
var inst_31005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31004__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31004__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31004__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31071__$1 = (function (){var statearr_31161 = state_31071;
(statearr_31161[(12)] = inst_31004__$1);

(statearr_31161[(16)] = inst_31005);

(statearr_31161[(18)] = inst_31006);

return statearr_31161;
})();
return cljs.core.async.ioc_alts_BANG_(state_31071__$1,(4),inst_31007);
} else {
if((state_val_31072 === (23))){
var inst_31055 = (state_31071[(2)]);
var state_31071__$1 = state_31071;
if(cljs.core.truth_(inst_31055)){
var statearr_31164_33077 = state_31071__$1;
(statearr_31164_33077[(1)] = (24));

} else {
var statearr_31165_33078 = state_31071__$1;
(statearr_31165_33078[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (19))){
var inst_31050 = (state_31071[(2)]);
var state_31071__$1 = state_31071;
var statearr_31166_33079 = state_31071__$1;
(statearr_31166_33079[(2)] = inst_31050);

(statearr_31166_33079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (11))){
var inst_31019 = (state_31071[(14)]);
var inst_31034 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31019);
var state_31071__$1 = state_31071;
var statearr_31167_33080 = state_31071__$1;
(statearr_31167_33080[(2)] = inst_31034);

(statearr_31167_33080[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (9))){
var inst_31005 = (state_31071[(16)]);
var inst_31041 = (state_31071[(19)]);
var inst_31019 = (state_31071[(14)]);
var inst_31041__$1 = (inst_31005.cljs$core$IFn$_invoke$arity$1 ? inst_31005.cljs$core$IFn$_invoke$arity$1(inst_31019) : inst_31005.call(null,inst_31019));
var state_31071__$1 = (function (){var statearr_31168 = state_31071;
(statearr_31168[(19)] = inst_31041__$1);

return statearr_31168;
})();
if(cljs.core.truth_(inst_31041__$1)){
var statearr_31169_33081 = state_31071__$1;
(statearr_31169_33081[(1)] = (14));

} else {
var statearr_31170_33082 = state_31071__$1;
(statearr_31170_33082[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (5))){
var inst_31022 = (state_31071[(13)]);
var state_31071__$1 = state_31071;
var statearr_31171_33083 = state_31071__$1;
(statearr_31171_33083[(2)] = inst_31022);

(statearr_31171_33083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (14))){
var inst_31041 = (state_31071[(19)]);
var state_31071__$1 = state_31071;
var statearr_31172_33084 = state_31071__$1;
(statearr_31172_33084[(2)] = inst_31041);

(statearr_31172_33084[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (26))){
var inst_31060 = (state_31071[(2)]);
var state_31071__$1 = state_31071;
var statearr_31173_33085 = state_31071__$1;
(statearr_31173_33085[(2)] = inst_31060);

(statearr_31173_33085[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (16))){
var inst_31052 = (state_31071[(2)]);
var state_31071__$1 = state_31071;
if(cljs.core.truth_(inst_31052)){
var statearr_31182_33086 = state_31071__$1;
(statearr_31182_33086[(1)] = (20));

} else {
var statearr_31187_33087 = state_31071__$1;
(statearr_31187_33087[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (10))){
var inst_31066 = (state_31071[(2)]);
var state_31071__$1 = state_31071;
var statearr_31188_33088 = state_31071__$1;
(statearr_31188_33088[(2)] = inst_31066);

(statearr_31188_33088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (18))){
var inst_31044 = (state_31071[(15)]);
var state_31071__$1 = state_31071;
var statearr_31189_33089 = state_31071__$1;
(statearr_31189_33089[(2)] = inst_31044);

(statearr_31189_33089[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31072 === (8))){
var inst_31018 = (state_31071[(7)]);
var inst_31031 = (inst_31018 == null);
var state_31071__$1 = state_31071;
if(cljs.core.truth_(inst_31031)){
var statearr_31191_33090 = state_31071__$1;
(statearr_31191_33090[(1)] = (11));

} else {
var statearr_31192_33091 = state_31071__$1;
(statearr_31192_33091[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29193__auto__ = null;
var cljs$core$async$mix_$_state_machine__29193__auto____0 = (function (){
var statearr_31198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31198[(0)] = cljs$core$async$mix_$_state_machine__29193__auto__);

(statearr_31198[(1)] = (1));

return statearr_31198;
});
var cljs$core$async$mix_$_state_machine__29193__auto____1 = (function (state_31071){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_31071);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e31200){var ex__29196__auto__ = e31200;
var statearr_31201_33092 = state_31071;
(statearr_31201_33092[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_31071[(4)]))){
var statearr_31202_33093 = state_31071;
(statearr_31202_33093[(1)] = cljs.core.first((state_31071[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33096 = state_31071;
state_31071 = G__33096;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29193__auto__ = function(state_31071){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29193__auto____1.call(this,state_31071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29193__auto____0;
cljs$core$async$mix_$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29193__auto____1;
return cljs$core$async$mix_$_state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_31206 = f__29406__auto__();
(statearr_31206[(6)] = c__29405__auto___33059);

return statearr_31206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33098 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33098(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33105 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33105(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33106 = (function() {
var G__33107 = null;
var G__33107__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33107__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33107 = function(p,v){
switch(arguments.length){
case 1:
return G__33107__1.call(this,p);
case 2:
return G__33107__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33107.cljs$core$IFn$_invoke$arity$1 = G__33107__1;
G__33107.cljs$core$IFn$_invoke$arity$2 = G__33107__2;
return G__33107;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31247 = arguments.length;
switch (G__31247) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33106(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33106(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31261 = arguments.length;
switch (G__31261) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31256_SHARP_){
if(cljs.core.truth_((p1__31256_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31256_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31256_SHARP_.call(null,topic)))){
return p1__31256_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31256_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31270 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31270 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31271){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31271 = meta31271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31272,meta31271__$1){
var self__ = this;
var _31272__$1 = this;
return (new cljs.core.async.t_cljs$core$async31270(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31271__$1));
}));

(cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31272){
var self__ = this;
var _31272__$1 = this;
return self__.meta31271;
}));

(cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31270.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31271","meta31271",552647869,null)], null);
}));

(cljs.core.async.t_cljs$core$async31270.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31270");

(cljs.core.async.t_cljs$core$async31270.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31270");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31270.
 */
cljs.core.async.__GT_t_cljs$core$async31270 = (function cljs$core$async$__GT_t_cljs$core$async31270(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31271){
return (new cljs.core.async.t_cljs$core$async31270(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31271));
});

}

return (new cljs.core.async.t_cljs$core$async31270(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29405__auto___33127 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_31347){
var state_val_31348 = (state_31347[(1)]);
if((state_val_31348 === (7))){
var inst_31343 = (state_31347[(2)]);
var state_31347__$1 = state_31347;
var statearr_31349_33131 = state_31347__$1;
(statearr_31349_33131[(2)] = inst_31343);

(statearr_31349_33131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (20))){
var state_31347__$1 = state_31347;
var statearr_31350_33132 = state_31347__$1;
(statearr_31350_33132[(2)] = null);

(statearr_31350_33132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (1))){
var state_31347__$1 = state_31347;
var statearr_31351_33134 = state_31347__$1;
(statearr_31351_33134[(2)] = null);

(statearr_31351_33134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (24))){
var inst_31326 = (state_31347[(7)]);
var inst_31335 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31326);
var state_31347__$1 = state_31347;
var statearr_31353_33135 = state_31347__$1;
(statearr_31353_33135[(2)] = inst_31335);

(statearr_31353_33135[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (4))){
var inst_31278 = (state_31347[(8)]);
var inst_31278__$1 = (state_31347[(2)]);
var inst_31279 = (inst_31278__$1 == null);
var state_31347__$1 = (function (){var statearr_31354 = state_31347;
(statearr_31354[(8)] = inst_31278__$1);

return statearr_31354;
})();
if(cljs.core.truth_(inst_31279)){
var statearr_31355_33139 = state_31347__$1;
(statearr_31355_33139[(1)] = (5));

} else {
var statearr_31356_33140 = state_31347__$1;
(statearr_31356_33140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (15))){
var inst_31320 = (state_31347[(2)]);
var state_31347__$1 = state_31347;
var statearr_31357_33141 = state_31347__$1;
(statearr_31357_33141[(2)] = inst_31320);

(statearr_31357_33141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (21))){
var inst_31340 = (state_31347[(2)]);
var state_31347__$1 = (function (){var statearr_31358 = state_31347;
(statearr_31358[(9)] = inst_31340);

return statearr_31358;
})();
var statearr_31359_33143 = state_31347__$1;
(statearr_31359_33143[(2)] = null);

(statearr_31359_33143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (13))){
var inst_31302 = (state_31347[(10)]);
var inst_31304 = cljs.core.chunked_seq_QMARK_(inst_31302);
var state_31347__$1 = state_31347;
if(inst_31304){
var statearr_31362_33145 = state_31347__$1;
(statearr_31362_33145[(1)] = (16));

} else {
var statearr_31363_33147 = state_31347__$1;
(statearr_31363_33147[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (22))){
var inst_31332 = (state_31347[(2)]);
var state_31347__$1 = state_31347;
if(cljs.core.truth_(inst_31332)){
var statearr_31364_33149 = state_31347__$1;
(statearr_31364_33149[(1)] = (23));

} else {
var statearr_31365_33150 = state_31347__$1;
(statearr_31365_33150[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (6))){
var inst_31328 = (state_31347[(11)]);
var inst_31326 = (state_31347[(7)]);
var inst_31278 = (state_31347[(8)]);
var inst_31326__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31278) : topic_fn.call(null,inst_31278));
var inst_31327 = cljs.core.deref(mults);
var inst_31328__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31327,inst_31326__$1);
var state_31347__$1 = (function (){var statearr_31370 = state_31347;
(statearr_31370[(11)] = inst_31328__$1);

(statearr_31370[(7)] = inst_31326__$1);

return statearr_31370;
})();
if(cljs.core.truth_(inst_31328__$1)){
var statearr_31372_33152 = state_31347__$1;
(statearr_31372_33152[(1)] = (19));

} else {
var statearr_31373_33153 = state_31347__$1;
(statearr_31373_33153[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (25))){
var inst_31337 = (state_31347[(2)]);
var state_31347__$1 = state_31347;
var statearr_31378_33156 = state_31347__$1;
(statearr_31378_33156[(2)] = inst_31337);

(statearr_31378_33156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (17))){
var inst_31302 = (state_31347[(10)]);
var inst_31311 = cljs.core.first(inst_31302);
var inst_31312 = cljs.core.async.muxch_STAR_(inst_31311);
var inst_31313 = cljs.core.async.close_BANG_(inst_31312);
var inst_31314 = cljs.core.next(inst_31302);
var inst_31288 = inst_31314;
var inst_31289 = null;
var inst_31290 = (0);
var inst_31291 = (0);
var state_31347__$1 = (function (){var statearr_31379 = state_31347;
(statearr_31379[(12)] = inst_31291);

(statearr_31379[(13)] = inst_31288);

(statearr_31379[(14)] = inst_31289);

(statearr_31379[(15)] = inst_31290);

(statearr_31379[(16)] = inst_31313);

return statearr_31379;
})();
var statearr_31380_33159 = state_31347__$1;
(statearr_31380_33159[(2)] = null);

(statearr_31380_33159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (3))){
var inst_31345 = (state_31347[(2)]);
var state_31347__$1 = state_31347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31347__$1,inst_31345);
} else {
if((state_val_31348 === (12))){
var inst_31322 = (state_31347[(2)]);
var state_31347__$1 = state_31347;
var statearr_31385_33162 = state_31347__$1;
(statearr_31385_33162[(2)] = inst_31322);

(statearr_31385_33162[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (2))){
var state_31347__$1 = state_31347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31347__$1,(4),ch);
} else {
if((state_val_31348 === (23))){
var state_31347__$1 = state_31347;
var statearr_31387_33164 = state_31347__$1;
(statearr_31387_33164[(2)] = null);

(statearr_31387_33164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (19))){
var inst_31328 = (state_31347[(11)]);
var inst_31278 = (state_31347[(8)]);
var inst_31330 = cljs.core.async.muxch_STAR_(inst_31328);
var state_31347__$1 = state_31347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31347__$1,(22),inst_31330,inst_31278);
} else {
if((state_val_31348 === (11))){
var inst_31302 = (state_31347[(10)]);
var inst_31288 = (state_31347[(13)]);
var inst_31302__$1 = cljs.core.seq(inst_31288);
var state_31347__$1 = (function (){var statearr_31389 = state_31347;
(statearr_31389[(10)] = inst_31302__$1);

return statearr_31389;
})();
if(inst_31302__$1){
var statearr_31390_33166 = state_31347__$1;
(statearr_31390_33166[(1)] = (13));

} else {
var statearr_31393_33167 = state_31347__$1;
(statearr_31393_33167[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (9))){
var inst_31324 = (state_31347[(2)]);
var state_31347__$1 = state_31347;
var statearr_31396_33169 = state_31347__$1;
(statearr_31396_33169[(2)] = inst_31324);

(statearr_31396_33169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (5))){
var inst_31285 = cljs.core.deref(mults);
var inst_31286 = cljs.core.vals(inst_31285);
var inst_31287 = cljs.core.seq(inst_31286);
var inst_31288 = inst_31287;
var inst_31289 = null;
var inst_31290 = (0);
var inst_31291 = (0);
var state_31347__$1 = (function (){var statearr_31402 = state_31347;
(statearr_31402[(12)] = inst_31291);

(statearr_31402[(13)] = inst_31288);

(statearr_31402[(14)] = inst_31289);

(statearr_31402[(15)] = inst_31290);

return statearr_31402;
})();
var statearr_31404_33172 = state_31347__$1;
(statearr_31404_33172[(2)] = null);

(statearr_31404_33172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (14))){
var state_31347__$1 = state_31347;
var statearr_31408_33174 = state_31347__$1;
(statearr_31408_33174[(2)] = null);

(statearr_31408_33174[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (16))){
var inst_31302 = (state_31347[(10)]);
var inst_31306 = cljs.core.chunk_first(inst_31302);
var inst_31307 = cljs.core.chunk_rest(inst_31302);
var inst_31308 = cljs.core.count(inst_31306);
var inst_31288 = inst_31307;
var inst_31289 = inst_31306;
var inst_31290 = inst_31308;
var inst_31291 = (0);
var state_31347__$1 = (function (){var statearr_31472 = state_31347;
(statearr_31472[(12)] = inst_31291);

(statearr_31472[(13)] = inst_31288);

(statearr_31472[(14)] = inst_31289);

(statearr_31472[(15)] = inst_31290);

return statearr_31472;
})();
var statearr_31474_33178 = state_31347__$1;
(statearr_31474_33178[(2)] = null);

(statearr_31474_33178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (10))){
var inst_31291 = (state_31347[(12)]);
var inst_31288 = (state_31347[(13)]);
var inst_31289 = (state_31347[(14)]);
var inst_31290 = (state_31347[(15)]);
var inst_31296 = cljs.core._nth(inst_31289,inst_31291);
var inst_31297 = cljs.core.async.muxch_STAR_(inst_31296);
var inst_31298 = cljs.core.async.close_BANG_(inst_31297);
var inst_31299 = (inst_31291 + (1));
var tmp31405 = inst_31288;
var tmp31406 = inst_31289;
var tmp31407 = inst_31290;
var inst_31288__$1 = tmp31405;
var inst_31289__$1 = tmp31406;
var inst_31290__$1 = tmp31407;
var inst_31291__$1 = inst_31299;
var state_31347__$1 = (function (){var statearr_31478 = state_31347;
(statearr_31478[(12)] = inst_31291__$1);

(statearr_31478[(13)] = inst_31288__$1);

(statearr_31478[(14)] = inst_31289__$1);

(statearr_31478[(15)] = inst_31290__$1);

(statearr_31478[(17)] = inst_31298);

return statearr_31478;
})();
var statearr_31480_33185 = state_31347__$1;
(statearr_31480_33185[(2)] = null);

(statearr_31480_33185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (18))){
var inst_31317 = (state_31347[(2)]);
var state_31347__$1 = state_31347;
var statearr_31481_33188 = state_31347__$1;
(statearr_31481_33188[(2)] = inst_31317);

(statearr_31481_33188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (8))){
var inst_31291 = (state_31347[(12)]);
var inst_31290 = (state_31347[(15)]);
var inst_31293 = (inst_31291 < inst_31290);
var inst_31294 = inst_31293;
var state_31347__$1 = state_31347;
if(cljs.core.truth_(inst_31294)){
var statearr_31482_33191 = state_31347__$1;
(statearr_31482_33191[(1)] = (10));

} else {
var statearr_31483_33193 = state_31347__$1;
(statearr_31483_33193[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29193__auto__ = null;
var cljs$core$async$state_machine__29193__auto____0 = (function (){
var statearr_31484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31484[(0)] = cljs$core$async$state_machine__29193__auto__);

(statearr_31484[(1)] = (1));

return statearr_31484;
});
var cljs$core$async$state_machine__29193__auto____1 = (function (state_31347){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_31347);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e31486){var ex__29196__auto__ = e31486;
var statearr_31487_33199 = state_31347;
(statearr_31487_33199[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_31347[(4)]))){
var statearr_31490_33200 = state_31347;
(statearr_31490_33200[(1)] = cljs.core.first((state_31347[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33202 = state_31347;
state_31347 = G__33202;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$state_machine__29193__auto__ = function(state_31347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29193__auto____1.call(this,state_31347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29193__auto____0;
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29193__auto____1;
return cljs$core$async$state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_31496 = f__29406__auto__();
(statearr_31496[(6)] = c__29405__auto___33127);

return statearr_31496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31504 = arguments.length;
switch (G__31504) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31515 = arguments.length;
switch (G__31515) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31528 = arguments.length;
switch (G__31528) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29405__auto___33230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_31581){
var state_val_31582 = (state_31581[(1)]);
if((state_val_31582 === (7))){
var state_31581__$1 = state_31581;
var statearr_31586_33232 = state_31581__$1;
(statearr_31586_33232[(2)] = null);

(statearr_31586_33232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (1))){
var state_31581__$1 = state_31581;
var statearr_31587_33233 = state_31581__$1;
(statearr_31587_33233[(2)] = null);

(statearr_31587_33233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (4))){
var inst_31536 = (state_31581[(7)]);
var inst_31537 = (state_31581[(8)]);
var inst_31539 = (inst_31537 < inst_31536);
var state_31581__$1 = state_31581;
if(cljs.core.truth_(inst_31539)){
var statearr_31592_33236 = state_31581__$1;
(statearr_31592_33236[(1)] = (6));

} else {
var statearr_31593_33238 = state_31581__$1;
(statearr_31593_33238[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (15))){
var inst_31565 = (state_31581[(9)]);
var inst_31571 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31565);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31581__$1,(17),out,inst_31571);
} else {
if((state_val_31582 === (13))){
var inst_31565 = (state_31581[(9)]);
var inst_31565__$1 = (state_31581[(2)]);
var inst_31566 = cljs.core.some(cljs.core.nil_QMARK_,inst_31565__$1);
var state_31581__$1 = (function (){var statearr_31599 = state_31581;
(statearr_31599[(9)] = inst_31565__$1);

return statearr_31599;
})();
if(cljs.core.truth_(inst_31566)){
var statearr_31600_33240 = state_31581__$1;
(statearr_31600_33240[(1)] = (14));

} else {
var statearr_31601_33241 = state_31581__$1;
(statearr_31601_33241[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (6))){
var state_31581__$1 = state_31581;
var statearr_31603_33242 = state_31581__$1;
(statearr_31603_33242[(2)] = null);

(statearr_31603_33242[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (17))){
var inst_31573 = (state_31581[(2)]);
var state_31581__$1 = (function (){var statearr_31613 = state_31581;
(statearr_31613[(10)] = inst_31573);

return statearr_31613;
})();
var statearr_31614_33246 = state_31581__$1;
(statearr_31614_33246[(2)] = null);

(statearr_31614_33246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (3))){
var inst_31579 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31581__$1,inst_31579);
} else {
if((state_val_31582 === (12))){
var _ = (function (){var statearr_31615 = state_31581;
(statearr_31615[(4)] = cljs.core.rest((state_31581[(4)])));

return statearr_31615;
})();
var state_31581__$1 = state_31581;
var ex31612 = (state_31581__$1[(2)]);
var statearr_31616_33248 = state_31581__$1;
(statearr_31616_33248[(5)] = ex31612);


if((ex31612 instanceof Object)){
var statearr_31618_33249 = state_31581__$1;
(statearr_31618_33249[(1)] = (11));

(statearr_31618_33249[(5)] = null);

} else {
throw ex31612;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (2))){
var inst_31535 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31536 = cnt;
var inst_31537 = (0);
var state_31581__$1 = (function (){var statearr_31620 = state_31581;
(statearr_31620[(11)] = inst_31535);

(statearr_31620[(7)] = inst_31536);

(statearr_31620[(8)] = inst_31537);

return statearr_31620;
})();
var statearr_31622_33252 = state_31581__$1;
(statearr_31622_33252[(2)] = null);

(statearr_31622_33252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (11))){
var inst_31543 = (state_31581[(2)]);
var inst_31544 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31581__$1 = (function (){var statearr_31623 = state_31581;
(statearr_31623[(12)] = inst_31543);

return statearr_31623;
})();
var statearr_31624_33254 = state_31581__$1;
(statearr_31624_33254[(2)] = inst_31544);

(statearr_31624_33254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (9))){
var inst_31537 = (state_31581[(8)]);
var _ = (function (){var statearr_31625 = state_31581;
(statearr_31625[(4)] = cljs.core.cons((12),(state_31581[(4)])));

return statearr_31625;
})();
var inst_31550 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31537) : chs__$1.call(null,inst_31537));
var inst_31551 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31537) : done.call(null,inst_31537));
var inst_31553 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31550,inst_31551);
var ___$1 = (function (){var statearr_31626 = state_31581;
(statearr_31626[(4)] = cljs.core.rest((state_31581[(4)])));

return statearr_31626;
})();
var state_31581__$1 = state_31581;
var statearr_31627_33256 = state_31581__$1;
(statearr_31627_33256[(2)] = inst_31553);

(statearr_31627_33256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (5))){
var inst_31563 = (state_31581[(2)]);
var state_31581__$1 = (function (){var statearr_31628 = state_31581;
(statearr_31628[(13)] = inst_31563);

return statearr_31628;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31581__$1,(13),dchan);
} else {
if((state_val_31582 === (14))){
var inst_31568 = cljs.core.async.close_BANG_(out);
var state_31581__$1 = state_31581;
var statearr_31629_33261 = state_31581__$1;
(statearr_31629_33261[(2)] = inst_31568);

(statearr_31629_33261[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (16))){
var inst_31577 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31630_33262 = state_31581__$1;
(statearr_31630_33262[(2)] = inst_31577);

(statearr_31630_33262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (10))){
var inst_31537 = (state_31581[(8)]);
var inst_31556 = (state_31581[(2)]);
var inst_31557 = (inst_31537 + (1));
var inst_31537__$1 = inst_31557;
var state_31581__$1 = (function (){var statearr_31631 = state_31581;
(statearr_31631[(8)] = inst_31537__$1);

(statearr_31631[(14)] = inst_31556);

return statearr_31631;
})();
var statearr_31632_33266 = state_31581__$1;
(statearr_31632_33266[(2)] = null);

(statearr_31632_33266[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (8))){
var inst_31561 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31633_33267 = state_31581__$1;
(statearr_31633_33267[(2)] = inst_31561);

(statearr_31633_33267[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29193__auto__ = null;
var cljs$core$async$state_machine__29193__auto____0 = (function (){
var statearr_31634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31634[(0)] = cljs$core$async$state_machine__29193__auto__);

(statearr_31634[(1)] = (1));

return statearr_31634;
});
var cljs$core$async$state_machine__29193__auto____1 = (function (state_31581){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_31581);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e31636){var ex__29196__auto__ = e31636;
var statearr_31638_33276 = state_31581;
(statearr_31638_33276[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_31581[(4)]))){
var statearr_31639_33278 = state_31581;
(statearr_31639_33278[(1)] = cljs.core.first((state_31581[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33280 = state_31581;
state_31581 = G__33280;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$state_machine__29193__auto__ = function(state_31581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29193__auto____1.call(this,state_31581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29193__auto____0;
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29193__auto____1;
return cljs$core$async$state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_31646 = f__29406__auto__();
(statearr_31646[(6)] = c__29405__auto___33230);

return statearr_31646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31654 = arguments.length;
switch (G__31654) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29405__auto___33286 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_31699){
var state_val_31701 = (state_31699[(1)]);
if((state_val_31701 === (7))){
var inst_31669 = (state_31699[(7)]);
var inst_31670 = (state_31699[(8)]);
var inst_31669__$1 = (state_31699[(2)]);
var inst_31670__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31669__$1,(0),null);
var inst_31671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31669__$1,(1),null);
var inst_31672 = (inst_31670__$1 == null);
var state_31699__$1 = (function (){var statearr_31719 = state_31699;
(statearr_31719[(7)] = inst_31669__$1);

(statearr_31719[(8)] = inst_31670__$1);

(statearr_31719[(9)] = inst_31671);

return statearr_31719;
})();
if(cljs.core.truth_(inst_31672)){
var statearr_31720_33288 = state_31699__$1;
(statearr_31720_33288[(1)] = (8));

} else {
var statearr_31721_33289 = state_31699__$1;
(statearr_31721_33289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (1))){
var inst_31659 = cljs.core.vec(chs);
var inst_31660 = inst_31659;
var state_31699__$1 = (function (){var statearr_31722 = state_31699;
(statearr_31722[(10)] = inst_31660);

return statearr_31722;
})();
var statearr_31723_33293 = state_31699__$1;
(statearr_31723_33293[(2)] = null);

(statearr_31723_33293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (4))){
var inst_31660 = (state_31699[(10)]);
var state_31699__$1 = state_31699;
return cljs.core.async.ioc_alts_BANG_(state_31699__$1,(7),inst_31660);
} else {
if((state_val_31701 === (6))){
var inst_31691 = (state_31699[(2)]);
var state_31699__$1 = state_31699;
var statearr_31728_33294 = state_31699__$1;
(statearr_31728_33294[(2)] = inst_31691);

(statearr_31728_33294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (3))){
var inst_31693 = (state_31699[(2)]);
var state_31699__$1 = state_31699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31699__$1,inst_31693);
} else {
if((state_val_31701 === (2))){
var inst_31660 = (state_31699[(10)]);
var inst_31662 = cljs.core.count(inst_31660);
var inst_31663 = (inst_31662 > (0));
var state_31699__$1 = state_31699;
if(cljs.core.truth_(inst_31663)){
var statearr_31730_33297 = state_31699__$1;
(statearr_31730_33297[(1)] = (4));

} else {
var statearr_31731_33300 = state_31699__$1;
(statearr_31731_33300[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (11))){
var inst_31660 = (state_31699[(10)]);
var inst_31684 = (state_31699[(2)]);
var tmp31729 = inst_31660;
var inst_31660__$1 = tmp31729;
var state_31699__$1 = (function (){var statearr_31732 = state_31699;
(statearr_31732[(10)] = inst_31660__$1);

(statearr_31732[(11)] = inst_31684);

return statearr_31732;
})();
var statearr_31734_33302 = state_31699__$1;
(statearr_31734_33302[(2)] = null);

(statearr_31734_33302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (9))){
var inst_31670 = (state_31699[(8)]);
var state_31699__$1 = state_31699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31699__$1,(11),out,inst_31670);
} else {
if((state_val_31701 === (5))){
var inst_31689 = cljs.core.async.close_BANG_(out);
var state_31699__$1 = state_31699;
var statearr_31737_33310 = state_31699__$1;
(statearr_31737_33310[(2)] = inst_31689);

(statearr_31737_33310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (10))){
var inst_31687 = (state_31699[(2)]);
var state_31699__$1 = state_31699;
var statearr_31740_33311 = state_31699__$1;
(statearr_31740_33311[(2)] = inst_31687);

(statearr_31740_33311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31701 === (8))){
var inst_31669 = (state_31699[(7)]);
var inst_31670 = (state_31699[(8)]);
var inst_31671 = (state_31699[(9)]);
var inst_31660 = (state_31699[(10)]);
var inst_31678 = (function (){var cs = inst_31660;
var vec__31665 = inst_31669;
var v = inst_31670;
var c = inst_31671;
return (function (p1__31647_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31647_SHARP_);
});
})();
var inst_31679 = cljs.core.filterv(inst_31678,inst_31660);
var inst_31660__$1 = inst_31679;
var state_31699__$1 = (function (){var statearr_31742 = state_31699;
(statearr_31742[(10)] = inst_31660__$1);

return statearr_31742;
})();
var statearr_31743_33315 = state_31699__$1;
(statearr_31743_33315[(2)] = null);

(statearr_31743_33315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29193__auto__ = null;
var cljs$core$async$state_machine__29193__auto____0 = (function (){
var statearr_31745 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31745[(0)] = cljs$core$async$state_machine__29193__auto__);

(statearr_31745[(1)] = (1));

return statearr_31745;
});
var cljs$core$async$state_machine__29193__auto____1 = (function (state_31699){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_31699);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e31748){var ex__29196__auto__ = e31748;
var statearr_31749_33320 = state_31699;
(statearr_31749_33320[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_31699[(4)]))){
var statearr_31750_33321 = state_31699;
(statearr_31750_33321[(1)] = cljs.core.first((state_31699[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33322 = state_31699;
state_31699 = G__33322;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$state_machine__29193__auto__ = function(state_31699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29193__auto____1.call(this,state_31699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29193__auto____0;
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29193__auto____1;
return cljs$core$async$state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_31753 = f__29406__auto__();
(statearr_31753[(6)] = c__29405__auto___33286);

return statearr_31753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31755 = arguments.length;
switch (G__31755) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29405__auto___33329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_31784){
var state_val_31785 = (state_31784[(1)]);
if((state_val_31785 === (7))){
var inst_31766 = (state_31784[(7)]);
var inst_31766__$1 = (state_31784[(2)]);
var inst_31767 = (inst_31766__$1 == null);
var inst_31768 = cljs.core.not(inst_31767);
var state_31784__$1 = (function (){var statearr_31790 = state_31784;
(statearr_31790[(7)] = inst_31766__$1);

return statearr_31790;
})();
if(inst_31768){
var statearr_31794_33332 = state_31784__$1;
(statearr_31794_33332[(1)] = (8));

} else {
var statearr_31795_33334 = state_31784__$1;
(statearr_31795_33334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (1))){
var inst_31761 = (0);
var state_31784__$1 = (function (){var statearr_31796 = state_31784;
(statearr_31796[(8)] = inst_31761);

return statearr_31796;
})();
var statearr_31797_33336 = state_31784__$1;
(statearr_31797_33336[(2)] = null);

(statearr_31797_33336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (4))){
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31784__$1,(7),ch);
} else {
if((state_val_31785 === (6))){
var inst_31779 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31799_33339 = state_31784__$1;
(statearr_31799_33339[(2)] = inst_31779);

(statearr_31799_33339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (3))){
var inst_31781 = (state_31784[(2)]);
var inst_31782 = cljs.core.async.close_BANG_(out);
var state_31784__$1 = (function (){var statearr_31800 = state_31784;
(statearr_31800[(9)] = inst_31781);

return statearr_31800;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31784__$1,inst_31782);
} else {
if((state_val_31785 === (2))){
var inst_31761 = (state_31784[(8)]);
var inst_31763 = (inst_31761 < n);
var state_31784__$1 = state_31784;
if(cljs.core.truth_(inst_31763)){
var statearr_31801_33349 = state_31784__$1;
(statearr_31801_33349[(1)] = (4));

} else {
var statearr_31802_33350 = state_31784__$1;
(statearr_31802_33350[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (11))){
var inst_31761 = (state_31784[(8)]);
var inst_31771 = (state_31784[(2)]);
var inst_31772 = (inst_31761 + (1));
var inst_31761__$1 = inst_31772;
var state_31784__$1 = (function (){var statearr_31805 = state_31784;
(statearr_31805[(8)] = inst_31761__$1);

(statearr_31805[(10)] = inst_31771);

return statearr_31805;
})();
var statearr_31806_33352 = state_31784__$1;
(statearr_31806_33352[(2)] = null);

(statearr_31806_33352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (9))){
var state_31784__$1 = state_31784;
var statearr_31807_33353 = state_31784__$1;
(statearr_31807_33353[(2)] = null);

(statearr_31807_33353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (5))){
var state_31784__$1 = state_31784;
var statearr_31808_33357 = state_31784__$1;
(statearr_31808_33357[(2)] = null);

(statearr_31808_33357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (10))){
var inst_31776 = (state_31784[(2)]);
var state_31784__$1 = state_31784;
var statearr_31811_33358 = state_31784__$1;
(statearr_31811_33358[(2)] = inst_31776);

(statearr_31811_33358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31785 === (8))){
var inst_31766 = (state_31784[(7)]);
var state_31784__$1 = state_31784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31784__$1,(11),out,inst_31766);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29193__auto__ = null;
var cljs$core$async$state_machine__29193__auto____0 = (function (){
var statearr_31824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31824[(0)] = cljs$core$async$state_machine__29193__auto__);

(statearr_31824[(1)] = (1));

return statearr_31824;
});
var cljs$core$async$state_machine__29193__auto____1 = (function (state_31784){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_31784);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e31826){var ex__29196__auto__ = e31826;
var statearr_31827_33362 = state_31784;
(statearr_31827_33362[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_31784[(4)]))){
var statearr_31828_33364 = state_31784;
(statearr_31828_33364[(1)] = cljs.core.first((state_31784[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33365 = state_31784;
state_31784 = G__33365;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$state_machine__29193__auto__ = function(state_31784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29193__auto____1.call(this,state_31784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29193__auto____0;
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29193__auto____1;
return cljs$core$async$state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_31830 = f__29406__auto__();
(statearr_31830[(6)] = c__29405__auto___33329);

return statearr_31830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31836 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31836 = (function (f,ch,meta31837){
this.f = f;
this.ch = ch;
this.meta31837 = meta31837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31838,meta31837__$1){
var self__ = this;
var _31838__$1 = this;
return (new cljs.core.async.t_cljs$core$async31836(self__.f,self__.ch,meta31837__$1));
}));

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31838){
var self__ = this;
var _31838__$1 = this;
return self__.meta31837;
}));

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31848 = (function (f,ch,meta31837,_,fn1,meta31849){
this.f = f;
this.ch = ch;
this.meta31837 = meta31837;
this._ = _;
this.fn1 = fn1;
this.meta31849 = meta31849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31850,meta31849__$1){
var self__ = this;
var _31850__$1 = this;
return (new cljs.core.async.t_cljs$core$async31848(self__.f,self__.ch,self__.meta31837,self__._,self__.fn1,meta31849__$1));
}));

(cljs.core.async.t_cljs$core$async31848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31850){
var self__ = this;
var _31850__$1 = this;
return self__.meta31849;
}));

(cljs.core.async.t_cljs$core$async31848.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31848.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31848.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31848.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31833_SHARP_){
var G__31876 = (((p1__31833_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31833_SHARP_) : self__.f.call(null,p1__31833_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31876) : f1.call(null,G__31876));
});
}));

(cljs.core.async.t_cljs$core$async31848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31837","meta31837",404994191,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31836","cljs.core.async/t_cljs$core$async31836",671866074,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31849","meta31849",19854652,null)], null);
}));

(cljs.core.async.t_cljs$core$async31848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31848");

(cljs.core.async.t_cljs$core$async31848.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31848.
 */
cljs.core.async.__GT_t_cljs$core$async31848 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31848(f__$1,ch__$1,meta31837__$1,___$2,fn1__$1,meta31849){
return (new cljs.core.async.t_cljs$core$async31848(f__$1,ch__$1,meta31837__$1,___$2,fn1__$1,meta31849));
});

}

return (new cljs.core.async.t_cljs$core$async31848(self__.f,self__.ch,self__.meta31837,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31906 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31906) : self__.f.call(null,G__31906));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31837","meta31837",404994191,null)], null);
}));

(cljs.core.async.t_cljs$core$async31836.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31836");

(cljs.core.async.t_cljs$core$async31836.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31836");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31836.
 */
cljs.core.async.__GT_t_cljs$core$async31836 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31836(f__$1,ch__$1,meta31837){
return (new cljs.core.async.t_cljs$core$async31836(f__$1,ch__$1,meta31837));
});

}

return (new cljs.core.async.t_cljs$core$async31836(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31912 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31912 = (function (f,ch,meta31913){
this.f = f;
this.ch = ch;
this.meta31913 = meta31913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31914,meta31913__$1){
var self__ = this;
var _31914__$1 = this;
return (new cljs.core.async.t_cljs$core$async31912(self__.f,self__.ch,meta31913__$1));
}));

(cljs.core.async.t_cljs$core$async31912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31914){
var self__ = this;
var _31914__$1 = this;
return self__.meta31913;
}));

(cljs.core.async.t_cljs$core$async31912.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31912.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31912.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31912.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31912.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31912.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31913","meta31913",-2039530626,null)], null);
}));

(cljs.core.async.t_cljs$core$async31912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31912");

(cljs.core.async.t_cljs$core$async31912.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31912.
 */
cljs.core.async.__GT_t_cljs$core$async31912 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31912(f__$1,ch__$1,meta31913){
return (new cljs.core.async.t_cljs$core$async31912(f__$1,ch__$1,meta31913));
});

}

return (new cljs.core.async.t_cljs$core$async31912(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31947 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31947 = (function (p,ch,meta31948){
this.p = p;
this.ch = ch;
this.meta31948 = meta31948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31949,meta31948__$1){
var self__ = this;
var _31949__$1 = this;
return (new cljs.core.async.t_cljs$core$async31947(self__.p,self__.ch,meta31948__$1));
}));

(cljs.core.async.t_cljs$core$async31947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31949){
var self__ = this;
var _31949__$1 = this;
return self__.meta31948;
}));

(cljs.core.async.t_cljs$core$async31947.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31947.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31947.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31947.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31947.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31947.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31947.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31948","meta31948",1371061072,null)], null);
}));

(cljs.core.async.t_cljs$core$async31947.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31947.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31947");

(cljs.core.async.t_cljs$core$async31947.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31947");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31947.
 */
cljs.core.async.__GT_t_cljs$core$async31947 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31947(p__$1,ch__$1,meta31948){
return (new cljs.core.async.t_cljs$core$async31947(p__$1,ch__$1,meta31948));
});

}

return (new cljs.core.async.t_cljs$core$async31947(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31971 = arguments.length;
switch (G__31971) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29405__auto___33411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_31994){
var state_val_31995 = (state_31994[(1)]);
if((state_val_31995 === (7))){
var inst_31990 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
var statearr_31996_33415 = state_31994__$1;
(statearr_31996_33415[(2)] = inst_31990);

(statearr_31996_33415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (1))){
var state_31994__$1 = state_31994;
var statearr_31997_33416 = state_31994__$1;
(statearr_31997_33416[(2)] = null);

(statearr_31997_33416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (4))){
var inst_31975 = (state_31994[(7)]);
var inst_31975__$1 = (state_31994[(2)]);
var inst_31976 = (inst_31975__$1 == null);
var state_31994__$1 = (function (){var statearr_31999 = state_31994;
(statearr_31999[(7)] = inst_31975__$1);

return statearr_31999;
})();
if(cljs.core.truth_(inst_31976)){
var statearr_32000_33419 = state_31994__$1;
(statearr_32000_33419[(1)] = (5));

} else {
var statearr_32001_33421 = state_31994__$1;
(statearr_32001_33421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (6))){
var inst_31975 = (state_31994[(7)]);
var inst_31981 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31975) : p.call(null,inst_31975));
var state_31994__$1 = state_31994;
if(cljs.core.truth_(inst_31981)){
var statearr_32002_33422 = state_31994__$1;
(statearr_32002_33422[(1)] = (8));

} else {
var statearr_32003_33423 = state_31994__$1;
(statearr_32003_33423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (3))){
var inst_31992 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31994__$1,inst_31992);
} else {
if((state_val_31995 === (2))){
var state_31994__$1 = state_31994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31994__$1,(4),ch);
} else {
if((state_val_31995 === (11))){
var inst_31984 = (state_31994[(2)]);
var state_31994__$1 = state_31994;
var statearr_32022_33424 = state_31994__$1;
(statearr_32022_33424[(2)] = inst_31984);

(statearr_32022_33424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (9))){
var state_31994__$1 = state_31994;
var statearr_32028_33425 = state_31994__$1;
(statearr_32028_33425[(2)] = null);

(statearr_32028_33425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (5))){
var inst_31978 = cljs.core.async.close_BANG_(out);
var state_31994__$1 = state_31994;
var statearr_32029_33426 = state_31994__$1;
(statearr_32029_33426[(2)] = inst_31978);

(statearr_32029_33426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (10))){
var inst_31987 = (state_31994[(2)]);
var state_31994__$1 = (function (){var statearr_32030 = state_31994;
(statearr_32030[(8)] = inst_31987);

return statearr_32030;
})();
var statearr_32031_33427 = state_31994__$1;
(statearr_32031_33427[(2)] = null);

(statearr_32031_33427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31995 === (8))){
var inst_31975 = (state_31994[(7)]);
var state_31994__$1 = state_31994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31994__$1,(11),out,inst_31975);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29193__auto__ = null;
var cljs$core$async$state_machine__29193__auto____0 = (function (){
var statearr_32032 = [null,null,null,null,null,null,null,null,null];
(statearr_32032[(0)] = cljs$core$async$state_machine__29193__auto__);

(statearr_32032[(1)] = (1));

return statearr_32032;
});
var cljs$core$async$state_machine__29193__auto____1 = (function (state_31994){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_31994);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e32033){var ex__29196__auto__ = e32033;
var statearr_32034_33430 = state_31994;
(statearr_32034_33430[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_31994[(4)]))){
var statearr_32035_33431 = state_31994;
(statearr_32035_33431[(1)] = cljs.core.first((state_31994[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33432 = state_31994;
state_31994 = G__33432;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$state_machine__29193__auto__ = function(state_31994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29193__auto____1.call(this,state_31994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29193__auto____0;
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29193__auto____1;
return cljs$core$async$state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_32036 = f__29406__auto__();
(statearr_32036[(6)] = c__29405__auto___33411);

return statearr_32036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32038 = arguments.length;
switch (G__32038) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29405__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_32106){
var state_val_32107 = (state_32106[(1)]);
if((state_val_32107 === (7))){
var inst_32102 = (state_32106[(2)]);
var state_32106__$1 = state_32106;
var statearr_32108_33436 = state_32106__$1;
(statearr_32108_33436[(2)] = inst_32102);

(statearr_32108_33436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (20))){
var inst_32072 = (state_32106[(7)]);
var inst_32083 = (state_32106[(2)]);
var inst_32084 = cljs.core.next(inst_32072);
var inst_32058 = inst_32084;
var inst_32059 = null;
var inst_32060 = (0);
var inst_32061 = (0);
var state_32106__$1 = (function (){var statearr_32112 = state_32106;
(statearr_32112[(8)] = inst_32058);

(statearr_32112[(9)] = inst_32061);

(statearr_32112[(10)] = inst_32059);

(statearr_32112[(11)] = inst_32060);

(statearr_32112[(12)] = inst_32083);

return statearr_32112;
})();
var statearr_32113_33437 = state_32106__$1;
(statearr_32113_33437[(2)] = null);

(statearr_32113_33437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (1))){
var state_32106__$1 = state_32106;
var statearr_32114_33438 = state_32106__$1;
(statearr_32114_33438[(2)] = null);

(statearr_32114_33438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (4))){
var inst_32047 = (state_32106[(13)]);
var inst_32047__$1 = (state_32106[(2)]);
var inst_32048 = (inst_32047__$1 == null);
var state_32106__$1 = (function (){var statearr_32115 = state_32106;
(statearr_32115[(13)] = inst_32047__$1);

return statearr_32115;
})();
if(cljs.core.truth_(inst_32048)){
var statearr_32116_33439 = state_32106__$1;
(statearr_32116_33439[(1)] = (5));

} else {
var statearr_32117_33440 = state_32106__$1;
(statearr_32117_33440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (15))){
var state_32106__$1 = state_32106;
var statearr_32121_33441 = state_32106__$1;
(statearr_32121_33441[(2)] = null);

(statearr_32121_33441[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (21))){
var state_32106__$1 = state_32106;
var statearr_32122_33442 = state_32106__$1;
(statearr_32122_33442[(2)] = null);

(statearr_32122_33442[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (13))){
var inst_32058 = (state_32106[(8)]);
var inst_32061 = (state_32106[(9)]);
var inst_32059 = (state_32106[(10)]);
var inst_32060 = (state_32106[(11)]);
var inst_32068 = (state_32106[(2)]);
var inst_32069 = (inst_32061 + (1));
var tmp32118 = inst_32058;
var tmp32119 = inst_32059;
var tmp32120 = inst_32060;
var inst_32058__$1 = tmp32118;
var inst_32059__$1 = tmp32119;
var inst_32060__$1 = tmp32120;
var inst_32061__$1 = inst_32069;
var state_32106__$1 = (function (){var statearr_32146 = state_32106;
(statearr_32146[(8)] = inst_32058__$1);

(statearr_32146[(14)] = inst_32068);

(statearr_32146[(9)] = inst_32061__$1);

(statearr_32146[(10)] = inst_32059__$1);

(statearr_32146[(11)] = inst_32060__$1);

return statearr_32146;
})();
var statearr_32147_33443 = state_32106__$1;
(statearr_32147_33443[(2)] = null);

(statearr_32147_33443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (22))){
var state_32106__$1 = state_32106;
var statearr_32148_33445 = state_32106__$1;
(statearr_32148_33445[(2)] = null);

(statearr_32148_33445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (6))){
var inst_32047 = (state_32106[(13)]);
var inst_32056 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32047) : f.call(null,inst_32047));
var inst_32057 = cljs.core.seq(inst_32056);
var inst_32058 = inst_32057;
var inst_32059 = null;
var inst_32060 = (0);
var inst_32061 = (0);
var state_32106__$1 = (function (){var statearr_32149 = state_32106;
(statearr_32149[(8)] = inst_32058);

(statearr_32149[(9)] = inst_32061);

(statearr_32149[(10)] = inst_32059);

(statearr_32149[(11)] = inst_32060);

return statearr_32149;
})();
var statearr_32150_33447 = state_32106__$1;
(statearr_32150_33447[(2)] = null);

(statearr_32150_33447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (17))){
var inst_32072 = (state_32106[(7)]);
var inst_32076 = cljs.core.chunk_first(inst_32072);
var inst_32077 = cljs.core.chunk_rest(inst_32072);
var inst_32078 = cljs.core.count(inst_32076);
var inst_32058 = inst_32077;
var inst_32059 = inst_32076;
var inst_32060 = inst_32078;
var inst_32061 = (0);
var state_32106__$1 = (function (){var statearr_32152 = state_32106;
(statearr_32152[(8)] = inst_32058);

(statearr_32152[(9)] = inst_32061);

(statearr_32152[(10)] = inst_32059);

(statearr_32152[(11)] = inst_32060);

return statearr_32152;
})();
var statearr_32153_33448 = state_32106__$1;
(statearr_32153_33448[(2)] = null);

(statearr_32153_33448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (3))){
var inst_32104 = (state_32106[(2)]);
var state_32106__$1 = state_32106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32106__$1,inst_32104);
} else {
if((state_val_32107 === (12))){
var inst_32092 = (state_32106[(2)]);
var state_32106__$1 = state_32106;
var statearr_32154_33449 = state_32106__$1;
(statearr_32154_33449[(2)] = inst_32092);

(statearr_32154_33449[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (2))){
var state_32106__$1 = state_32106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32106__$1,(4),in$);
} else {
if((state_val_32107 === (23))){
var inst_32100 = (state_32106[(2)]);
var state_32106__$1 = state_32106;
var statearr_32155_33450 = state_32106__$1;
(statearr_32155_33450[(2)] = inst_32100);

(statearr_32155_33450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (19))){
var inst_32087 = (state_32106[(2)]);
var state_32106__$1 = state_32106;
var statearr_32156_33451 = state_32106__$1;
(statearr_32156_33451[(2)] = inst_32087);

(statearr_32156_33451[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (11))){
var inst_32072 = (state_32106[(7)]);
var inst_32058 = (state_32106[(8)]);
var inst_32072__$1 = cljs.core.seq(inst_32058);
var state_32106__$1 = (function (){var statearr_32157 = state_32106;
(statearr_32157[(7)] = inst_32072__$1);

return statearr_32157;
})();
if(inst_32072__$1){
var statearr_32158_33452 = state_32106__$1;
(statearr_32158_33452[(1)] = (14));

} else {
var statearr_32159_33453 = state_32106__$1;
(statearr_32159_33453[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (9))){
var inst_32094 = (state_32106[(2)]);
var inst_32095 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32106__$1 = (function (){var statearr_32160 = state_32106;
(statearr_32160[(15)] = inst_32094);

return statearr_32160;
})();
if(cljs.core.truth_(inst_32095)){
var statearr_32161_33454 = state_32106__$1;
(statearr_32161_33454[(1)] = (21));

} else {
var statearr_32162_33455 = state_32106__$1;
(statearr_32162_33455[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (5))){
var inst_32050 = cljs.core.async.close_BANG_(out);
var state_32106__$1 = state_32106;
var statearr_32163_33456 = state_32106__$1;
(statearr_32163_33456[(2)] = inst_32050);

(statearr_32163_33456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (14))){
var inst_32072 = (state_32106[(7)]);
var inst_32074 = cljs.core.chunked_seq_QMARK_(inst_32072);
var state_32106__$1 = state_32106;
if(inst_32074){
var statearr_32164_33457 = state_32106__$1;
(statearr_32164_33457[(1)] = (17));

} else {
var statearr_32165_33458 = state_32106__$1;
(statearr_32165_33458[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (16))){
var inst_32090 = (state_32106[(2)]);
var state_32106__$1 = state_32106;
var statearr_32166_33459 = state_32106__$1;
(statearr_32166_33459[(2)] = inst_32090);

(statearr_32166_33459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32107 === (10))){
var inst_32061 = (state_32106[(9)]);
var inst_32059 = (state_32106[(10)]);
var inst_32066 = cljs.core._nth(inst_32059,inst_32061);
var state_32106__$1 = state_32106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32106__$1,(13),out,inst_32066);
} else {
if((state_val_32107 === (18))){
var inst_32072 = (state_32106[(7)]);
var inst_32081 = cljs.core.first(inst_32072);
var state_32106__$1 = state_32106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32106__$1,(20),out,inst_32081);
} else {
if((state_val_32107 === (8))){
var inst_32061 = (state_32106[(9)]);
var inst_32060 = (state_32106[(11)]);
var inst_32063 = (inst_32061 < inst_32060);
var inst_32064 = inst_32063;
var state_32106__$1 = state_32106;
if(cljs.core.truth_(inst_32064)){
var statearr_32167_33460 = state_32106__$1;
(statearr_32167_33460[(1)] = (10));

} else {
var statearr_32168_33461 = state_32106__$1;
(statearr_32168_33461[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29193__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29193__auto____0 = (function (){
var statearr_32169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32169[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29193__auto__);

(statearr_32169[(1)] = (1));

return statearr_32169;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29193__auto____1 = (function (state_32106){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_32106);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e32176){var ex__29196__auto__ = e32176;
var statearr_32177_33462 = state_32106;
(statearr_32177_33462[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_32106[(4)]))){
var statearr_32178_33463 = state_32106;
(statearr_32178_33463[(1)] = cljs.core.first((state_32106[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33464 = state_32106;
state_32106 = G__33464;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29193__auto__ = function(state_32106){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29193__auto____1.call(this,state_32106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29193__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29193__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_32179 = f__29406__auto__();
(statearr_32179[(6)] = c__29405__auto__);

return statearr_32179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));

return c__29405__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32181 = arguments.length;
switch (G__32181) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32226 = arguments.length;
switch (G__32226) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32258 = arguments.length;
switch (G__32258) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29405__auto___33469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_32297){
var state_val_32298 = (state_32297[(1)]);
if((state_val_32298 === (7))){
var inst_32290 = (state_32297[(2)]);
var state_32297__$1 = state_32297;
var statearr_32299_33470 = state_32297__$1;
(statearr_32299_33470[(2)] = inst_32290);

(statearr_32299_33470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (1))){
var inst_32265 = null;
var state_32297__$1 = (function (){var statearr_32303 = state_32297;
(statearr_32303[(7)] = inst_32265);

return statearr_32303;
})();
var statearr_32304_33471 = state_32297__$1;
(statearr_32304_33471[(2)] = null);

(statearr_32304_33471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (4))){
var inst_32275 = (state_32297[(8)]);
var inst_32275__$1 = (state_32297[(2)]);
var inst_32276 = (inst_32275__$1 == null);
var inst_32277 = cljs.core.not(inst_32276);
var state_32297__$1 = (function (){var statearr_32306 = state_32297;
(statearr_32306[(8)] = inst_32275__$1);

return statearr_32306;
})();
if(inst_32277){
var statearr_32309_33476 = state_32297__$1;
(statearr_32309_33476[(1)] = (5));

} else {
var statearr_32310_33477 = state_32297__$1;
(statearr_32310_33477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (6))){
var state_32297__$1 = state_32297;
var statearr_32311_33478 = state_32297__$1;
(statearr_32311_33478[(2)] = null);

(statearr_32311_33478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (3))){
var inst_32292 = (state_32297[(2)]);
var inst_32293 = cljs.core.async.close_BANG_(out);
var state_32297__$1 = (function (){var statearr_32312 = state_32297;
(statearr_32312[(9)] = inst_32292);

return statearr_32312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32297__$1,inst_32293);
} else {
if((state_val_32298 === (2))){
var state_32297__$1 = state_32297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32297__$1,(4),ch);
} else {
if((state_val_32298 === (11))){
var inst_32275 = (state_32297[(8)]);
var inst_32284 = (state_32297[(2)]);
var inst_32265 = inst_32275;
var state_32297__$1 = (function (){var statearr_32316 = state_32297;
(statearr_32316[(10)] = inst_32284);

(statearr_32316[(7)] = inst_32265);

return statearr_32316;
})();
var statearr_32317_33479 = state_32297__$1;
(statearr_32317_33479[(2)] = null);

(statearr_32317_33479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (9))){
var inst_32275 = (state_32297[(8)]);
var state_32297__$1 = state_32297;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32297__$1,(11),out,inst_32275);
} else {
if((state_val_32298 === (5))){
var inst_32265 = (state_32297[(7)]);
var inst_32275 = (state_32297[(8)]);
var inst_32279 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32275,inst_32265);
var state_32297__$1 = state_32297;
if(inst_32279){
var statearr_32320_33480 = state_32297__$1;
(statearr_32320_33480[(1)] = (8));

} else {
var statearr_32321_33481 = state_32297__$1;
(statearr_32321_33481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (10))){
var inst_32287 = (state_32297[(2)]);
var state_32297__$1 = state_32297;
var statearr_32322_33482 = state_32297__$1;
(statearr_32322_33482[(2)] = inst_32287);

(statearr_32322_33482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32298 === (8))){
var inst_32265 = (state_32297[(7)]);
var tmp32318 = inst_32265;
var inst_32265__$1 = tmp32318;
var state_32297__$1 = (function (){var statearr_32327 = state_32297;
(statearr_32327[(7)] = inst_32265__$1);

return statearr_32327;
})();
var statearr_32328_33483 = state_32297__$1;
(statearr_32328_33483[(2)] = null);

(statearr_32328_33483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29193__auto__ = null;
var cljs$core$async$state_machine__29193__auto____0 = (function (){
var statearr_32333 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32333[(0)] = cljs$core$async$state_machine__29193__auto__);

(statearr_32333[(1)] = (1));

return statearr_32333;
});
var cljs$core$async$state_machine__29193__auto____1 = (function (state_32297){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_32297);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e32334){var ex__29196__auto__ = e32334;
var statearr_32335_33484 = state_32297;
(statearr_32335_33484[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_32297[(4)]))){
var statearr_32336_33485 = state_32297;
(statearr_32336_33485[(1)] = cljs.core.first((state_32297[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33486 = state_32297;
state_32297 = G__33486;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$state_machine__29193__auto__ = function(state_32297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29193__auto____1.call(this,state_32297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29193__auto____0;
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29193__auto____1;
return cljs$core$async$state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_32337 = f__29406__auto__();
(statearr_32337[(6)] = c__29405__auto___33469);

return statearr_32337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32339 = arguments.length;
switch (G__32339) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29405__auto___33488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_32378){
var state_val_32379 = (state_32378[(1)]);
if((state_val_32379 === (7))){
var inst_32374 = (state_32378[(2)]);
var state_32378__$1 = state_32378;
var statearr_32381_33489 = state_32378__$1;
(statearr_32381_33489[(2)] = inst_32374);

(statearr_32381_33489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (1))){
var inst_32341 = (new Array(n));
var inst_32342 = inst_32341;
var inst_32343 = (0);
var state_32378__$1 = (function (){var statearr_32382 = state_32378;
(statearr_32382[(7)] = inst_32343);

(statearr_32382[(8)] = inst_32342);

return statearr_32382;
})();
var statearr_32383_33494 = state_32378__$1;
(statearr_32383_33494[(2)] = null);

(statearr_32383_33494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (4))){
var inst_32346 = (state_32378[(9)]);
var inst_32346__$1 = (state_32378[(2)]);
var inst_32347 = (inst_32346__$1 == null);
var inst_32348 = cljs.core.not(inst_32347);
var state_32378__$1 = (function (){var statearr_32384 = state_32378;
(statearr_32384[(9)] = inst_32346__$1);

return statearr_32384;
})();
if(inst_32348){
var statearr_32385_33498 = state_32378__$1;
(statearr_32385_33498[(1)] = (5));

} else {
var statearr_32386_33499 = state_32378__$1;
(statearr_32386_33499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (15))){
var inst_32368 = (state_32378[(2)]);
var state_32378__$1 = state_32378;
var statearr_32387_33500 = state_32378__$1;
(statearr_32387_33500[(2)] = inst_32368);

(statearr_32387_33500[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (13))){
var state_32378__$1 = state_32378;
var statearr_32389_33501 = state_32378__$1;
(statearr_32389_33501[(2)] = null);

(statearr_32389_33501[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (6))){
var inst_32343 = (state_32378[(7)]);
var inst_32364 = (inst_32343 > (0));
var state_32378__$1 = state_32378;
if(cljs.core.truth_(inst_32364)){
var statearr_32394_33502 = state_32378__$1;
(statearr_32394_33502[(1)] = (12));

} else {
var statearr_32395_33503 = state_32378__$1;
(statearr_32395_33503[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (3))){
var inst_32376 = (state_32378[(2)]);
var state_32378__$1 = state_32378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32378__$1,inst_32376);
} else {
if((state_val_32379 === (12))){
var inst_32342 = (state_32378[(8)]);
var inst_32366 = cljs.core.vec(inst_32342);
var state_32378__$1 = state_32378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32378__$1,(15),out,inst_32366);
} else {
if((state_val_32379 === (2))){
var state_32378__$1 = state_32378;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32378__$1,(4),ch);
} else {
if((state_val_32379 === (11))){
var inst_32358 = (state_32378[(2)]);
var inst_32359 = (new Array(n));
var inst_32342 = inst_32359;
var inst_32343 = (0);
var state_32378__$1 = (function (){var statearr_32401 = state_32378;
(statearr_32401[(10)] = inst_32358);

(statearr_32401[(7)] = inst_32343);

(statearr_32401[(8)] = inst_32342);

return statearr_32401;
})();
var statearr_32402_33507 = state_32378__$1;
(statearr_32402_33507[(2)] = null);

(statearr_32402_33507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (9))){
var inst_32342 = (state_32378[(8)]);
var inst_32356 = cljs.core.vec(inst_32342);
var state_32378__$1 = state_32378;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32378__$1,(11),out,inst_32356);
} else {
if((state_val_32379 === (5))){
var inst_32351 = (state_32378[(11)]);
var inst_32343 = (state_32378[(7)]);
var inst_32346 = (state_32378[(9)]);
var inst_32342 = (state_32378[(8)]);
var inst_32350 = (inst_32342[inst_32343] = inst_32346);
var inst_32351__$1 = (inst_32343 + (1));
var inst_32352 = (inst_32351__$1 < n);
var state_32378__$1 = (function (){var statearr_32408 = state_32378;
(statearr_32408[(12)] = inst_32350);

(statearr_32408[(11)] = inst_32351__$1);

return statearr_32408;
})();
if(cljs.core.truth_(inst_32352)){
var statearr_32409_33511 = state_32378__$1;
(statearr_32409_33511[(1)] = (8));

} else {
var statearr_32410_33512 = state_32378__$1;
(statearr_32410_33512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (14))){
var inst_32371 = (state_32378[(2)]);
var inst_32372 = cljs.core.async.close_BANG_(out);
var state_32378__$1 = (function (){var statearr_32412 = state_32378;
(statearr_32412[(13)] = inst_32371);

return statearr_32412;
})();
var statearr_32413_33513 = state_32378__$1;
(statearr_32413_33513[(2)] = inst_32372);

(statearr_32413_33513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (10))){
var inst_32362 = (state_32378[(2)]);
var state_32378__$1 = state_32378;
var statearr_32414_33514 = state_32378__$1;
(statearr_32414_33514[(2)] = inst_32362);

(statearr_32414_33514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32379 === (8))){
var inst_32351 = (state_32378[(11)]);
var inst_32342 = (state_32378[(8)]);
var tmp32411 = inst_32342;
var inst_32342__$1 = tmp32411;
var inst_32343 = inst_32351;
var state_32378__$1 = (function (){var statearr_32415 = state_32378;
(statearr_32415[(7)] = inst_32343);

(statearr_32415[(8)] = inst_32342__$1);

return statearr_32415;
})();
var statearr_32416_33518 = state_32378__$1;
(statearr_32416_33518[(2)] = null);

(statearr_32416_33518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29193__auto__ = null;
var cljs$core$async$state_machine__29193__auto____0 = (function (){
var statearr_32418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32418[(0)] = cljs$core$async$state_machine__29193__auto__);

(statearr_32418[(1)] = (1));

return statearr_32418;
});
var cljs$core$async$state_machine__29193__auto____1 = (function (state_32378){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_32378);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e32419){var ex__29196__auto__ = e32419;
var statearr_32420_33519 = state_32378;
(statearr_32420_33519[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_32378[(4)]))){
var statearr_32421_33520 = state_32378;
(statearr_32421_33520[(1)] = cljs.core.first((state_32378[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33522 = state_32378;
state_32378 = G__33522;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$state_machine__29193__auto__ = function(state_32378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29193__auto____1.call(this,state_32378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29193__auto____0;
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29193__auto____1;
return cljs$core$async$state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_32422 = f__29406__auto__();
(statearr_32422[(6)] = c__29405__auto___33488);

return statearr_32422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32424 = arguments.length;
switch (G__32424) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29405__auto___33527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29406__auto__ = (function (){var switch__29192__auto__ = (function (state_32474){
var state_val_32475 = (state_32474[(1)]);
if((state_val_32475 === (7))){
var inst_32469 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32483_33528 = state_32474__$1;
(statearr_32483_33528[(2)] = inst_32469);

(statearr_32483_33528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (1))){
var inst_32426 = [];
var inst_32427 = inst_32426;
var inst_32428 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32474__$1 = (function (){var statearr_32484 = state_32474;
(statearr_32484[(7)] = inst_32428);

(statearr_32484[(8)] = inst_32427);

return statearr_32484;
})();
var statearr_32485_33530 = state_32474__$1;
(statearr_32485_33530[(2)] = null);

(statearr_32485_33530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (4))){
var inst_32431 = (state_32474[(9)]);
var inst_32431__$1 = (state_32474[(2)]);
var inst_32432 = (inst_32431__$1 == null);
var inst_32433 = cljs.core.not(inst_32432);
var state_32474__$1 = (function (){var statearr_32486 = state_32474;
(statearr_32486[(9)] = inst_32431__$1);

return statearr_32486;
})();
if(inst_32433){
var statearr_32488_33532 = state_32474__$1;
(statearr_32488_33532[(1)] = (5));

} else {
var statearr_32489_33533 = state_32474__$1;
(statearr_32489_33533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (15))){
var inst_32427 = (state_32474[(8)]);
var inst_32459 = cljs.core.vec(inst_32427);
var state_32474__$1 = state_32474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32474__$1,(18),out,inst_32459);
} else {
if((state_val_32475 === (13))){
var inst_32453 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32490_33534 = state_32474__$1;
(statearr_32490_33534[(2)] = inst_32453);

(statearr_32490_33534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (6))){
var inst_32427 = (state_32474[(8)]);
var inst_32455 = inst_32427.length;
var inst_32456 = (inst_32455 > (0));
var state_32474__$1 = state_32474;
if(cljs.core.truth_(inst_32456)){
var statearr_32491_33535 = state_32474__$1;
(statearr_32491_33535[(1)] = (15));

} else {
var statearr_32492_33536 = state_32474__$1;
(statearr_32492_33536[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (17))){
var inst_32465 = (state_32474[(2)]);
var inst_32466 = cljs.core.async.close_BANG_(out);
var state_32474__$1 = (function (){var statearr_32493 = state_32474;
(statearr_32493[(10)] = inst_32465);

return statearr_32493;
})();
var statearr_32494_33537 = state_32474__$1;
(statearr_32494_33537[(2)] = inst_32466);

(statearr_32494_33537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (3))){
var inst_32471 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32474__$1,inst_32471);
} else {
if((state_val_32475 === (12))){
var inst_32427 = (state_32474[(8)]);
var inst_32446 = cljs.core.vec(inst_32427);
var state_32474__$1 = state_32474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32474__$1,(14),out,inst_32446);
} else {
if((state_val_32475 === (2))){
var state_32474__$1 = state_32474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32474__$1,(4),ch);
} else {
if((state_val_32475 === (11))){
var inst_32427 = (state_32474[(8)]);
var inst_32431 = (state_32474[(9)]);
var inst_32435 = (state_32474[(11)]);
var inst_32443 = inst_32427.push(inst_32431);
var tmp32495 = inst_32427;
var inst_32427__$1 = tmp32495;
var inst_32428 = inst_32435;
var state_32474__$1 = (function (){var statearr_32497 = state_32474;
(statearr_32497[(7)] = inst_32428);

(statearr_32497[(12)] = inst_32443);

(statearr_32497[(8)] = inst_32427__$1);

return statearr_32497;
})();
var statearr_32498_33538 = state_32474__$1;
(statearr_32498_33538[(2)] = null);

(statearr_32498_33538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (9))){
var inst_32428 = (state_32474[(7)]);
var inst_32439 = cljs.core.keyword_identical_QMARK_(inst_32428,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32474__$1 = state_32474;
var statearr_32499_33540 = state_32474__$1;
(statearr_32499_33540[(2)] = inst_32439);

(statearr_32499_33540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (5))){
var inst_32436 = (state_32474[(13)]);
var inst_32428 = (state_32474[(7)]);
var inst_32431 = (state_32474[(9)]);
var inst_32435 = (state_32474[(11)]);
var inst_32435__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32431) : f.call(null,inst_32431));
var inst_32436__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32435__$1,inst_32428);
var state_32474__$1 = (function (){var statearr_32500 = state_32474;
(statearr_32500[(13)] = inst_32436__$1);

(statearr_32500[(11)] = inst_32435__$1);

return statearr_32500;
})();
if(inst_32436__$1){
var statearr_32501_33542 = state_32474__$1;
(statearr_32501_33542[(1)] = (8));

} else {
var statearr_32502_33543 = state_32474__$1;
(statearr_32502_33543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (14))){
var inst_32431 = (state_32474[(9)]);
var inst_32435 = (state_32474[(11)]);
var inst_32448 = (state_32474[(2)]);
var inst_32449 = [];
var inst_32450 = inst_32449.push(inst_32431);
var inst_32427 = inst_32449;
var inst_32428 = inst_32435;
var state_32474__$1 = (function (){var statearr_32504 = state_32474;
(statearr_32504[(7)] = inst_32428);

(statearr_32504[(14)] = inst_32448);

(statearr_32504[(8)] = inst_32427);

(statearr_32504[(15)] = inst_32450);

return statearr_32504;
})();
var statearr_32505_33544 = state_32474__$1;
(statearr_32505_33544[(2)] = null);

(statearr_32505_33544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (16))){
var state_32474__$1 = state_32474;
var statearr_32506_33545 = state_32474__$1;
(statearr_32506_33545[(2)] = null);

(statearr_32506_33545[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (10))){
var inst_32441 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
if(cljs.core.truth_(inst_32441)){
var statearr_32507_33546 = state_32474__$1;
(statearr_32507_33546[(1)] = (11));

} else {
var statearr_32508_33547 = state_32474__$1;
(statearr_32508_33547[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (18))){
var inst_32462 = (state_32474[(2)]);
var state_32474__$1 = state_32474;
var statearr_32509_33548 = state_32474__$1;
(statearr_32509_33548[(2)] = inst_32462);

(statearr_32509_33548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32475 === (8))){
var inst_32436 = (state_32474[(13)]);
var state_32474__$1 = state_32474;
var statearr_32510_33549 = state_32474__$1;
(statearr_32510_33549[(2)] = inst_32436);

(statearr_32510_33549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29193__auto__ = null;
var cljs$core$async$state_machine__29193__auto____0 = (function (){
var statearr_32511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32511[(0)] = cljs$core$async$state_machine__29193__auto__);

(statearr_32511[(1)] = (1));

return statearr_32511;
});
var cljs$core$async$state_machine__29193__auto____1 = (function (state_32474){
while(true){
var ret_value__29194__auto__ = (function (){try{while(true){
var result__29195__auto__ = switch__29192__auto__(state_32474);
if(cljs.core.keyword_identical_QMARK_(result__29195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29195__auto__;
}
break;
}
}catch (e32512){var ex__29196__auto__ = e32512;
var statearr_32513_33550 = state_32474;
(statearr_32513_33550[(2)] = ex__29196__auto__);


if(cljs.core.seq((state_32474[(4)]))){
var statearr_32514_33551 = state_32474;
(statearr_32514_33551[(1)] = cljs.core.first((state_32474[(4)])));

} else {
throw ex__29196__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29194__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33552 = state_32474;
state_32474 = G__33552;
continue;
} else {
return ret_value__29194__auto__;
}
break;
}
});
cljs$core$async$state_machine__29193__auto__ = function(state_32474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29193__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29193__auto____1.call(this,state_32474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29193__auto____0;
cljs$core$async$state_machine__29193__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29193__auto____1;
return cljs$core$async$state_machine__29193__auto__;
})()
})();
var state__29407__auto__ = (function (){var statearr_32515 = f__29406__auto__();
(statearr_32515[(6)] = c__29405__auto___33527);

return statearr_32515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29407__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
