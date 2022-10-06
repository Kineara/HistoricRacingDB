Rails.application.routes.draw do

  resources :serieses, only: [:index, :show]
  resources :seasons, only: [:show]
  resources :championships, only: [:show]

  resources :events, only: [:index, :show]

  #resources :subevents, only: [:show]

  resources :competitors, only: [:index, :show, :create, :update, :destroy]
  resources :nationalities
  resources :manufacturers
  resources :teams
  resources :tracks
  #resources :team_entries 

  resources :db_summary, only: [:index]
  post "/login", to: "sessions#create"
  post "/createAccount", to: "users#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

end
