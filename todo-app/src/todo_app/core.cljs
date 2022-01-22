(ns todo-app.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]))

;; -------------------------
;; Views

(def todos (r/atom
            [{:description "First item" :completed false}]))

(defn home-page []
  (let [value (r/atom "")]
  (fn []
  [:div
    [:h2 "Todo App"]
    [:form {:on-submit (fn [e]
                        (.preventDefault e)
                        (swap! todos conj {:completed false :description @value})
                        (reset! value ""))}
      [:input {:type "text"
             :value @value
             :placeholder "Add new item"
             :on-change (fn [e]
                          (reset! value (.-value (.-target e))))}]
    [:ul
      (for [todo @todos]
        ^{:key todo}[:li (:description todo)])]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
