(ns todo-app.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]))

;; -------------------------
;; Views

(def todos (r/atom
            [{:description "First item" :completed false}]))

(defn home-page []
  ;; value variable which will be able to be "mutated" 
  ;; default state is empty string
  (let [value (r/atom "")]
  (fn []
  [:div
    [:h2 "Todo App"]
    [:form {:on-submit (fn [e]
                        ;; usual prevent default
                        (.preventDefault e)
                        ;; create a new todos array with new populated item and change todos with new array values
                        (swap! todos conj {:completed false :description @value})
                        ;; reset the value of the input to empty string
                        (reset! value ""))}
      [:input {:type "text"
             :value @value
             :placeholder "Add new item"
             :on-change (fn [e]
                          ;; get the value of the targeted element `e`
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
