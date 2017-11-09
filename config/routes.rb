Rails.application.routes.draw do
  get 'pages/help'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # root to: 'pages#home'

  namespace :api, defaults: { format: :json } do
    resources :restaurants, only: [ :index, :show ]
  end

  scope :/ do
    get "/", to: "pages#home", format: false, as: 'root'
    
    get "/*path", to: "pages#home", format: false
  end
end
