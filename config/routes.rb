Rails.application.routes.draw do

  namespace :api do 
    # resources :serieses, only: [:index, :show]
    # resources :seasons, only: [:show]
    # resources :championships, only: [:show]
    # resources :events, only: [:index, :show]
    # resources :competitors, only: [:index, :show, :create, :update, :destroy]
    # resources :nationalities
    # resources :manufacturers
    # resources :teams
    # resources :tracks
    # resources :db_summary, only: [:index]

    namespace :v1 do 
      resources :users, only: [:create]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      resources :serieses, only: [:index, :show]
      resources :seasons, only: [:show]
      resources :championships, only: [:show]
      resources :events, only: [:index, :show]
      resources :competitors, only: [:index, :show, :create, :update, :destroy]
      resources :nationalities
      resources :manufacturers
      resources :teams
      resources :tracks
      resources :db_summary, only: [:index]
    end
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
