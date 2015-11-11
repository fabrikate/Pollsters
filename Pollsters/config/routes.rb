Rails.application.routes.draw do
  
  root to: 'statics#index'

   resources :users, only: [:index, :show, :create, :update, :destroy] 
   resources :polls, only: [:index, :show, :create, :update, :destroy] 

end
