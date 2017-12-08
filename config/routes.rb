Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations'}
  get 'publics/home'
  get 'publics/profile'
  get 'publics/about'

  resources :matches
  root 'publics#home'
  get '/matches' => 'matches#index'
  get '/map' => 'matches#map'
  post 'update' => 'publics#update'
end
