Rails.application.routes.draw do

  # get '/series', to: 'serieses#index'
  # get '/series/:id', to: 'serieses#show'

  # get '/competitors', to: 'competitors#index'
  # get '/competitors/:id', to: 'competitors#show'

  # get '/nationalities', to: 'nationalities#index'
  # get '/nationalities/:id', to: 'nationalities#show'

  # get '/manufacturers', to: 'manufacturers#index'
  # get '/manufacturers/:id', to: 'manufacturers#show'

  # get '/teams', to: 'teams#index'
  # get '/teams/:id', to: 'teams#show'

  # get '/tracks', to: 'tracks#index'
  # get '/tracks/:id', to: 'tracks#show'

  resources :serieses, only: [:index, :show]
  resources :competitors, only: [:index, :show, :create, :update, :destroy]
  resources :nationalities, only: [:index, :show]
  resources :manufacturers, only: [:index, :show]
  resources :teams, only: [:index, :show]
  resources :tracks, only: [:index, :show]

end
