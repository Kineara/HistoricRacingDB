Rails.application.routes.draw do

  resources :serieses, only: [:index, :show]
  resources :seasons, only: [:show]
  resources :championships, only: [:show]

  resources :events, only: [:show]

  #resources :subevents, only: [:show]

  resources :competitors, only: [:index, :show, :create, :update, :destroy]
  resources :nationalities
  resources :manufacturers
  resources :teams
  resources :tracks
  #resources :team_entries 

end
