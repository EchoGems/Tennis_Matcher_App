Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations'}
  get 'publics/home'
  get 'publics/profile' => 'publics/update'
  get 'publics/about'

  resources :matches
  root 'publics#home'
  get '/matches' => 'matches#index'
  post 'update' => 'publics#update'
  get 'join' => 'matches#join'
  get 'leave' => 'matches#leave'
  post '/update_skill' => 'publics#update_skill'
  post '/update_image' => 'publics#update_image'
end
