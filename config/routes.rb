Rails.application.routes.draw do

  get '/series', to: 'serieses#index'
  get '/series/:id', to: 'serieses#show'

  get '/competitors', to: 'competitors#index'
  get '/competitors/:id', to: 'competitors#show'

  get '/nationalities', to: 'nationalities#index'
  get '/nationalities/:id', to: 'nationalities#show'

  get '/manufacturers', to: 'manufacturers#index'
  get '/manufacturers/:id', to: 'manufacturers#show'

  get '/teams', to: 'teams#index'
  get '/teams/:id', to 'teams#show'

  get '/tracks', to: 'tracks#index'
  get '/tracks/:id', to: 'tracks#show'

end
