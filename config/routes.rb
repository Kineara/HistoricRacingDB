Rails.application.routes.draw do

  resources :serieses do
    resources :seasons
  end

  resources :seasons do 
    resources :championships 
  end
  
  resources :championships
  resources :events 
  resources :subevents 
  resources :competitors, only: [:index, :show, :create, :update, :destroy]
  resources :nationalities
  resources :manufacturers
  resources :teams
  resources :tracks

end
