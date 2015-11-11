Rails.application.routes.draw do
  
  root to: 'statics#index'
  scope '/api' do
    resources :polls, only: [:index, :show, :create, :update, :destroy]
  end

end
