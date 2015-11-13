Rails.application.routes.draw do
  root to: 'statics#index'

scope '/api' do
  resources :polls do
    resources :options
  end
end

scope '/api' do
  resources :users, only: [:index, :show, :create, :update, :destroy]
  end
end

