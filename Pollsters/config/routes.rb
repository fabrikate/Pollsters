Rails.application.routes.draw do
  root to: 'statics#index'

  resources :polls do
    resources :options
  end
  resources :users, only: [:index, :show, :create, :update, :destroy]
end
