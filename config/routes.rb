Rails.application.routes.draw do

  get '/serieses', to: 'serieses#index'
  get '/competitors', to: 'competitors#index'
  get '/nationalities', to: 'nationalities#index'
  get '/manufacturers', to: 'manufacturers#index'
  get '/teams', to: 'teams#index'
  get '/tracks', to: 'tracks#index'

end
