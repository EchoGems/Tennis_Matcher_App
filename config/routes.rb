Rails.application.routes.draw do
  devise_for :users
  get 'publics/home'
  get 'publics/profile'

  get 'publics/about'

  resources :matches
  root 'publics#home'
  get '/matches' => 'matches#index'
end
