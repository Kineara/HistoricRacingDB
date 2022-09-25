Rails.application.routes.draw do

  resources :serieses, only: [:index, :show]

  resources :seasons

  resources :championships
  resources :events 
  resources :subevents 
  resources :competitors, only: [:index, :show, :create, :update, :destroy]
  resources :nationalities
  resources :manufacturers
  resources :teams
  resources :tracks

end
