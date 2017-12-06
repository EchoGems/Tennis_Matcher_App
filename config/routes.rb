Rails.application.routes.draw do
  get 'publics/home'
  get 'publics/profile'

  get 'publics/about'

  resources :matches
  root 'publics#home'
end
