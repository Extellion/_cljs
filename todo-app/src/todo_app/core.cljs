(ns todo-app.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]))

;; -------------------------
;; Views

(def todos (r/atom
            [{:description "First item" :completed false}]))

(defn home-page []
  [:div
    [:h2 "Todo App"]
    [:ul
      (for [todo @todos]
        [:li (:description todo)])]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
