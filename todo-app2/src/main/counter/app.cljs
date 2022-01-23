(ns counter.app
  (:require [reagent.core :as r])
  (:require [reagent.dom :as dom]))

(println "app reloaded")

(defn init []
  (println "The app has started!"))

(defonce current-count (r/atom 0))
(defonce counters (r/atom []))
(defn vec-delete [v i]
  (into (subvec v 0 i) (subvec v (inc i))))

(defn Counter [i counter]
 [:li
  counter
  " "
  [:button {:onClick (fn [] (swap! counters update i inc))} "+1"]
  [:button {:onClick (fn [] (swap! counters update i dec))} "-1"]
  [:button {:onClick (fn [] (swap! counters vec-delete i))} "X"]])

(defn app []
 [:div "App counter"
  [:ul 
   [:li "Counter number :" (count @counters)]]
  [:button {:onClick (fn [] (swap! counters conj 0))} "Add a counter"]
  [:ul 
   (doall
    (for [[i counter] (map vector (range) @counters)]
     ^{:key (str i)}[Counter i counter]))]])
  

   



(dom/render [app] (js/document.getElementById "app"))
