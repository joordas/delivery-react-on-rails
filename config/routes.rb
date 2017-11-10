Rails.application.routes.draw do
  get 'pages/help'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # root to: 'pages#home'
  
  namespace :api, defaults: { format: :json } do
    resources :restaurants, only: [ :index, :show ]
    resources :users, only: [ :show ]
  end
  
  scope :/ do
    devise_for :users
    get "/", to: "pages#home", format: false, as: 'root'
    
    get "/*path", to: "pages#home", format: false
  end
end
