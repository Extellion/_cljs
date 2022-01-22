(ns todo-app.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]))

;; -------------------------
;; Views

(def log (.-log js/console))

(def todos (r/atom
            [{:description "First item" :completed false :id 0}]))

(defn todo-item [todo]
  (let [item-id (r/atom (:id todo))]
    (log item-id)
    [:li {:style {:color (if (:completed todo) "green" "red")}} (:description todo) (:id todo)
    [:input {:type "checkbox" :value (:completed todo)
            :on-change (fn [e]
                          (swap! todos[item-id] {:completed (.-value (.-target e)) :description (:description todo)}))}]]))

(defn form [value]
  [:form {:on-submit (fn [e]
                      (.preventDefault e)
                      (swap! todos conj {:completed false :description @value :id (count @todos)})
                      (reset! value ""))}
  [:input {:type "text"
           :value @value
           :placeholder "Add new item"
           :on-change (fn [e]
                        (reset! value (.-value (.-target e))))}]])

(defn home-page []
  ;; value variable which will be able to be "mutated" 
  ;; default state is empty string
  (let [value (r/atom "")]
  (fn []
  [:div
    [:h2 "Todo App"]
    [form value]
    [:ul
      (for [todo @todos]
        ^{:key todo}[todo-item todo])]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
