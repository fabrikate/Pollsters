Rails.application.routes.draw do
  root to: 'statics#index'

  scope '/api' do
    resources :polls
  end

  scope '/api' do
    resources :users, only: [:show, :create, :update, :destroy]
  end

  post '/api/login', to: "sessions#attempt_login"
  delete '/api/logout', to: "sessions#logout", as: "logout"

end

